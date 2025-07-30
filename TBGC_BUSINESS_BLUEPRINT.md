# **TBGC BUSINESS BLUEPRINT** 🎯
*Condensed from 1,000+ line North Star - Design System Application Guide*

## **🏹 CORE MISSION**
**Become the undisputed digital authority for Treasure Valley firearms community**
- 117+ vendors, 250,000+ firearm owners
- Regional marketplace/directory platform (NOT single gun club)
- Monetize attention, not users

## **💰 PRICING TIER SYSTEM**
**4-Tier Vendor Subscription Model:**

### **🆓 FREE TIER**
- Basic directory listing
- Contact information
- Basic hours/location

### **🥉 COPPER TIER** - $49/month
- Enhanced listing with photos
- Priority in search results
- Basic analytics

### **🥈 SILVER TIER** - $99/month
- Featured placement
- Event calendar integration
- Customer review system
- Advanced analytics

### **🥇 GOLD TIER** - $199/month
- Premium featured placement
- Sponsored content opportunities
- Priority customer support
- Co-branding opportunities
- Advanced lead tracking

## **🏗️ KEY PLATFORM COMPONENTS NEEDED**

### **VENDOR/BUSINESS COMPONENTS:**
- **VendorCard** - 4 pricing tier variants
- **FFLTransferHub** - Real-time fees/wait times
- **RangeCapacityCard** - Waitlist tracking
- **GunsithProfileCard** - Community ratings

### **COMMUNITY/EVENT COMPONENTS:**
- **EventCalendarCard** - Unified local events
- **ForumPostCard** - Community discussions
- **AmmoScoutCard** - Photo-verified inventory
- **SafetyAlertCard** - Fire restrictions/legal

### **CONTENT/AUTHORITY COMPONENTS:**
- **ArticlePreviewCard** - Flagship content
- **LegalGuideCard** - Constitutional carry info
- **HistoricalArchiveCard** - "Treasure Valley Legends"

## **🎨 DESIGN SYSTEM INTEGRATION**

### **PRICING TIER COLOR MAPPING:**
- **Free**: `text-muted-foreground`, `border-border`
- **Copper**: `copper-orange` colors, `shadow-copper`
- **Silver**: `stainless-steel` colors, `shadow-premium`
- **Gold**: `brass-yellow` colors, `shadow-elite`

### **COMPONENT VARIANT STRUCTURE:**
```typescript
variant: "free" | "copper" | "silver" | "gold" | "premium" | "elite"
```

### **BUSINESS CONTEXT CLASSES:**
- `.vendor-tier-copper` - Copper pricing accent
- `.vendor-tier-silver` - Silver pricing accent  
- `.vendor-tier-gold` - Gold pricing accent
- `.community-highlight` - Forum/event emphasis
- `.authority-content` - Editorial content styling

## **📋 IMPLEMENTATION CHECKLIST**

### **Phase 1: Foundation (Weeks 1-2)**
- [ ] VendorCard with 4 pricing tiers
- [ ] EventCalendarCard for unified events
- [ ] Basic directory with map view

### **Phase 2: Community (Weeks 3-4)**
- [ ] ForumPostCard with discussion threads
- [ ] AmmoScoutCard for inventory tracking
- [ ] Email newsletter signup

### **Phase 3: Monetization (Weeks 5-6)**
- [ ] Vendor subscription tiers
- [ ] Analytics dashboard
- [ ] Payment integration

## **🛡️ DESIGN PRINCIPLES**
1. **Authority First**: Every component reinforces expertise
2. **Value Driven**: Clear benefit in every interaction
3. **Community Focused**: Foster engagement, not just usage
4. **Mobile Optimized**: Treasure Valley is on-the-go
5. **Accessible**: Welcome all skill levels and ages

---
*This blueprint drives all component development decisions*
