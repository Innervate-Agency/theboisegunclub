import json

with open('scripts/crawler/discovered_websites.json', 'r') as f:
    data = json.load(f)

print('🎯 DISCOVERY ANALYSIS')
print('='*30)
print(f'Total discoveries: {len(data)}')

# Analyze confidence scores
high_conf = len([d for d in data if d['confidence'] > 0.8])
med_conf = len([d for d in data if 0.6 <= d['confidence'] <= 0.8])
low_conf = len([d for d in data if d['confidence'] < 0.6])

print(f'High confidence (>0.8): {high_conf}')
print(f'Medium confidence (0.6-0.8): {med_conf}') 
print(f'Low confidence (<0.6): {low_conf}')

# Analyze website types
websites = [d['website'] for d in data]
ffls_com = len([w for w in websites if 'ffls.com' in w])
actual_sites = len([w for w in websites if 'ffls.com' not in w and 'mapquest.com' not in w])
mapquest = len([w for w in websites if 'mapquest.com' in w])

print(f'\nWebsite types:')
print(f'FFL Directory pages: {ffls_com}')
print(f'Actual business websites: {actual_sites}')  
print(f'Business listings: {mapquest}')

print(f'\n🔗 Actual business websites found:')
for d in data:
    if 'ffls.com' not in d['website'] and 'mapquest.com' not in d['website']:
        name = d['business_name'][:25]
        print(f'  {name:<25} -> {d["website"]}')
