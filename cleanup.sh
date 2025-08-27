#!/bin/bash
mkdir -p /home/sdusk/dev/repositories/client-projects/theboisegunclub/data/csv \
/home/sdusk/dev/repositories/client-projects/theboisegunclub/data/json \
/home/sdusk/dev/repositories/client-projects/theboisegunclub/data/sql \
/home/sdusk/dev/repositories/client-projects/theboisegunclub/scripts/crawler \
/home/sdusk/dev/repositories/client-projects/theboisegunclub/scripts/data-processing \
/home/sdusk/dev/repositories/client-projects/theboisegunclub/scripts/import \
/home/sdusk/dev/repositories/client-projects/theboisegunclub/scripts/pipeline \
/home/sdusk/dev/repositories/client-projects/theboisegunclub/backups

# Move CSV files to data/csv
find /home/sdusk/dev/repositories/client-projects/theboisegunclub -maxdepth 1 -type f -name "*.csv" -exec mv {} /home/sdusk/dev/repositories/client-projects/theboisegunclub/data/csv/ \;

# Move JSON files to data/json
find /home/sdusk/dev/repositories/client-projects/theboisegunclub -maxdepth 1 -type f -name "*.json" -exec mv {} /home/sdusk/dev/repositories/client-projects/theboisegunclub/data/json/ \;

# Move SQL files to data/sql
find /home/sdusk/dev/repositories/client-projects/theboisegunclub -maxdepth 1 -type f -name "*.sql" -exec mv {} /home/sdusk/dev/repositories/client-projects/theboisegunclub/data/sql/ \;

# Remove .Zone.Identifier files
find /home/sdusk/dev/repositories/client-projects/theboisegunclub -type f -name "*.Zone.Identifier" -delete

# Move scripts to appropriate folders
mv /home/sdusk/dev/repositories/client-projects/theboisegunclub/scripts/crawler/* /home/sdusk/dev/repositories/client-projects/theboisegunclub/scripts/crawler/
mv /home/sdusk/dev/repositories/client-projects/theboisegunclub/scripts/pipeline/* /home/sdusk/dev/repositories/client-projects/theboisegunclub/scripts/pipeline/

# Move backup files to backups
mkdir -p /home/sdusk/dev/repositories/client-projects/theboisegunclub/backups/ai-cache
mv /home/sdusk/dev/repositories/client-projects/theboisegunclub/scripts/pipeline/backups/* /home/sdusk/dev/repositories/client-projects/theboisegunclub/backups/ai-cache/