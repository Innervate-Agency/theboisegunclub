import json

# Edit the MAX_SEARCHES to 100
with open('scripts/crawler/smart_website_discovery.py', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('MAX_SEARCHES = 50  # Start with 50 to test', 'MAX_SEARCHES = 100  # Full batch run')

with open('scripts/crawler/smart_website_discovery.py', 'w', encoding='utf-8') as f:
    f.write(content)

print('✅ Updated MAX_SEARCHES to 100')
print('🚀 Ready for full batch run!')
