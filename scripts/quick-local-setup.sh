#!/bin/bash

# =======================================================
# Quick Local PostgreSQL Setup for The Boise Gun Club
# Gets data flowing ASAP for design work
# =======================================================

echo "🔫 Quick Local Setup - The Boise Gun Club"
echo "========================================"
echo ""

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL not found!"
    echo "💡 Install quickly:"
    echo "   Ubuntu/WSL: sudo apt update && sudo apt install postgresql postgresql-contrib"
    echo "   macOS: brew install postgresql && brew services start postgresql"
    exit 1
fi

echo "✅ PostgreSQL found"

# Start PostgreSQL if not running
if ! pg_isready -q 2>/dev/null; then
    echo "🔄 Starting PostgreSQL..."
    if command -v systemctl &> /dev/null; then
        sudo systemctl start postgresql
    elif command -v brew &> /dev/null; then
        brew services start postgresql
    fi
    sleep 2
fi

# Database config
DB_NAME="boise_gun_club_dev"
DB_USER="bgc_dev"
DB_PASSWORD="dev123"
DATABASE_URL="postgresql://$DB_USER:$DB_PASSWORD@localhost/$DB_NAME"

echo "📊 Setting up database..."

# Create database (suppress errors if exists)
sudo -u postgres psql -c "DROP DATABASE IF EXISTS $DB_NAME;" 2>/dev/null
sudo -u postgres psql -c "DROP USER IF EXISTS $DB_USER;" 2>/dev/null
sudo -u postgres psql -c "CREATE USER $DB_USER WITH ENCRYPTED PASSWORD '$DB_PASSWORD';" 
sudo -u postgres psql -c "CREATE DATABASE $DB_NAME OWNER $DB_USER;"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;"

# Enable extensions
sudo -u postgres psql $DB_NAME -c "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";"
sudo -u postgres psql $DB_NAME -c "CREATE EXTENSION IF NOT EXISTS \"pg_trgm\";"
sudo -u postgres psql $DB_NAME -c "CREATE EXTENSION IF NOT EXISTS \"unaccent\";"

echo "✅ Database created"

# Install pg dependency if missing
if [ ! -d "node_modules/pg" ]; then
    echo "📦 Installing PostgreSQL Node.js driver..."
    npm install pg @types/pg
fi

echo "🏗️  Creating schema..."
psql $DATABASE_URL -f docs/postgresql-schema-design.sql

echo "📥 Importing CSV data..."
export DATABASE_URL=$DATABASE_URL
node scripts/import-csv-to-postgres.js

# Create .env.local
echo "📄 Creating .env.local..."
cat > .env.local << EOF
DATABASE_URL=$DATABASE_URL
SERPAPI_KEY=your_serpapi_key_here
OPENWEATHER_API_KEY=your_openweather_key_here
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EOF

echo ""
echo "🎉 Setup complete!"
echo "🔗 Database: $DATABASE_URL" 
echo "📊 Check data: psql $DATABASE_URL -c \"SELECT COUNT(*) FROM businesses;\""
echo ""
echo "🚀 Start development:"
echo "   npm run dev"
echo ""