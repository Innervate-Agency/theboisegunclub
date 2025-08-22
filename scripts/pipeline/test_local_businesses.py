#!/usr/bin/env python3
"""
Test Advanced Idaho Community Steward with LOCAL BUSINESSES ONLY
================================================================
Run focused test of 5 LOCAL INDEPENDENT businesses - NO corporate chains!
"""

import requests
import json
import time
import random
from datetime import datetime

def test_local_businesses_batch():
    """Test the Idaho Community Steward model with LOCAL INDEPENDENT businesses ONLY"""
    
    # LOCAL INDEPENDENT BUSINESSES ONLY - NO corporate chains!
    # These represent authentic Treasure Valley businesses that would pass our commercial filters
    test_businesses = [
        {
            'id': 'local_test_001',
            'name': 'Boise Gun Exchange',
            'city': 'Boise',
            'category': 'Local Gun Store',
            'website': 'http://boisegunexchange.com',
            'services': 'New and used firearms, gunsmithing, FFL transfers, accessories'
        },
        {
            'id': 'local_test_002',
            'name': 'Meridian Gun Range',
            'city': 'Meridian',
            'category': 'Indoor Shooting Range',
            'website': 'https://meridiangunrange.com',
            'services': 'Indoor shooting range, firearm rentals, safety training, concealed carry classes'
        },
        {
            'id': 'local_test_003',
            'name': 'Snake River Sporting Goods',
            'city': 'Nampa',
            'category': 'Local Gun Shop',
            'website': 'https://snakeriverarms.com',
            'services': 'Custom firearms, reloading supplies, gunsmithing, hunting licenses'
        },
        {
            'id': 'local_test_004',
            'name': 'Treasure Valley Tactical',
            'city': 'Eagle',
            'category': 'Tactical Training',
            'website': 'https://tvtactical.com',
            'services': 'Tactical training, law enforcement courses, defensive shooting instruction'
        },
        {
            'id': 'local_test_005',
            'name': 'Mountain West Outfitters',
            'city': 'Kuna',
            'category': 'Hunting Outfitter',
            'website': 'https://mwoutfitters.com',
            'services': 'Guided hunting, archery equipment, trophy processing, outdoor gear'
        }
    ]
    
    print("🎯 LOCAL INDEPENDENT BUSINESS TEST")
    print("=" * 60)
    print(f"📋 Testing {len(test_businesses)} LOCAL businesses")
    print(f"🤖 Using: idaho-business-writer model")
    print(f"📊 Expected: 150-200 words each, authentic Idaho voice")
    print(f"🚫 NO corporate chains or big box stores!")
    print()

if __name__ == "__main__":
    test_local_businesses_batch()
