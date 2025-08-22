import json
import pandas as pd

# Check what we already discovered
with open('scripts/crawler/discovered_websites.json', 'r') as f:
    discovered = json.load(f)

discovered_ids = set([d['business_id'] for d in discovered])
print(f'🔍 Already discovered websites for {len(discovered_ids)} businesses')

# Load all businesses missing websites  
df = pd.read_csv('docs/final-commercial-directory-2025-08-20.csv')
missing = df[df['website'].isna() | (df['website'] == '') | (df['website'] == 'nan')]

print(f'📊 Total businesses missing websites: {len(missing)}')
print(f'✅ Already processed: {len(discovered_ids)}')
print(f'🎯 Remaining to process: {len(missing) - len(discovered_ids)}')

# Show next 10 businesses that would be processed
remaining = []
for _, row in missing.iterrows():
    if str(row['id']) not in discovered_ids:
        remaining.append({
            'name': row['name'],
            'city': row['city'],
            'id': str(row['id'])
        })

print(f'\n🔜 Next 10 businesses to process:')
for i, business in enumerate(remaining[:10], 1):
    print(f'  {i:2d}. {business["name"][:30]:<30} ({business["city"]})')

print(f'\n💡 Need to update script to skip already processed businesses!')
