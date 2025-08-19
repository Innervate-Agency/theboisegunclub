# Let's create a final summary and display key information about our comprehensive events list
import pandas as pd
from datetime import datetime

# Read the final comprehensive CSV
df = pd.read_csv('idaho_firearms_events_comprehensive_2025_2026.csv')

# Create summary statistics
print("=== IDAHO FIREARMS EVENTS CALENDAR ===")
print("September 2025 - September 2026")
print("=" * 50)

print(f"\nTOTAL EVENTS: {len(df)}")
print(f"DATE RANGE: {df['start_date'].min()} to {df['start_date'].max()}")

print(f"\nEVENT TYPES:")
event_types = df['event_type'].value_counts()
for event_type, count in event_types.items():
    print(f"  {event_type}: {count}")

print(f"\nTOP VENUES:")
venues = df['venue'].value_counts().head(10)
for venue, count in venues.items():
    print(f"  {venue}: {count} events")

print(f"\nMONTHLY DISTRIBUTION:")
df['month'] = pd.to_datetime(df['start_date']).dt.strftime('%Y-%m')
monthly = df.groupby('month').size().sort_index()
for month, count in monthly.items():
    month_name = datetime.strptime(month, '%Y-%m').strftime('%B %Y')
    print(f"  {month_name}: {count} events")

print(f"\nFREQUENCY PATTERNS:")
frequency = df['frequency'].value_counts()
for freq, count in frequency.items():
    print(f"  {freq}: {count} events")

print(f"\nMAJOR CHAMPIONSHIPS & SPECIAL EVENTS:")
championships = df[df['event_type'].isin(['Championship', 'Fundraising'])][['event_name', 'start_date', 'venue']].sort_values('start_date')
for _, event in championships.iterrows():
    print(f"  {event['start_date']}: {event['event_name']} at {event['venue']}")

print(f"\nUPCOMING EVENTS (Next 10):")
df_sorted = df.sort_values('start_date')
upcoming = df_sorted[pd.to_datetime(df_sorted['start_date']) >= datetime.now()].head(10)
for _, event in upcoming.iterrows():
    print(f"  {event['start_date']}: {event['event_name']} - {event['venue']}")

# Create a summary dataframe for the final CSV
summary_info = {
    'total_events': len(df),
    'date_range_start': df['start_date'].min(),
    'date_range_end': df['start_date'].max(),
    'gun_shows': len(df[df['event_type'] == 'Gun Show']),
    'competitions': len(df[df['event_type'] == 'Competition']),
    'championships': len(df[df['event_type'] == 'Championship']),
    'training_events': len(df[df['event_type'] == 'Training']),
    'major_venues': venues.head(5).to_dict(),
    'generated_date': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
}

print(f"\n=== SUMMARY COMPLETE ===")
print("File: idaho_firearms_events_comprehensive_2025_2026.csv")
print("All events are extrapolated based on 2025 patterns and historical data")