@echo off
echo 🚀 Setting up Treasure Valley Website Discovery System
echo =====================================================

echo.
echo 📦 Installing Python dependencies...
pip install aiohttp pandas

echo.
echo 🧪 Running system tests...
python scripts/crawler/test_setup.py

echo.
echo 🎯 Setup complete! 
echo.
echo To run website discovery:
echo   python scripts/crawler/smart_website_discovery.py
echo.
pause
