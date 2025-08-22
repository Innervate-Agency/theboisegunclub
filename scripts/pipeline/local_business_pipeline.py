#!/usr/bin/env python3
"""
Local Business AI Content Pipeline - WSL Environment
====================================================
Generate descriptions ONLY for local independent businesses.
NO corporate chains, big box stores, or national retailers!
"""

import requests
import json
import time
import random
from datetime import datetime

def test_local_businesses():
    """Test generation with 5 LOCAL INDEPENDENT businesses only"""
    
    # LOCAL INDEPENDENT BUSINESSES ONLY
    test_businesses = [
        {
            'id': 'local_001',
            'name': 'Boise Gun Exchange',
            'city': 'Boise', 
            'category': 'Local Gun Store',
            'services': 'New and used firearms, gunsmithing, FFL transfers'
        },
        {
            'id': 'local_002', 
            'name': 'Snake River Sporting Goods',
            'city': 'Nampa',
            'category': 'Local Gun Shop', 
            'services': 'Custom firearms, reloading supplies, gunsmithing'
        },
        {
            'id': 'local_003',
            'name': 'Mountain West Outfitters', 
            'city': 'Kuna',
            'category': 'Hunting Outfitter',
            'services': 'Guided hunting, archery, trophy processing'
        }
    ]
    
    print("🎯 LOCAL BUSINESS GENERATION TEST")
    print("=" * 50)
    print(f"📍 Environment: WSL2 Ubuntu")
    print(f"📋 Testing {len(test_businesses)} LOCAL businesses")
    print(f"🚫 NO corporate chains!")
    print()
    
    for i, business in enumerate(test_businesses, 1):
        print(f"[{i}/3] 🏪 {business['name']} - {business['city']}")
        print(f"      📂 {business['category']}")
        print(f"      🛠️  {business['services'][:50]}...")
        print()

if __name__ == "__main__":
    test_local_businesses()
