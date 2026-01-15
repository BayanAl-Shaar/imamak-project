# Imamak.com - Industrial E-Commerce Website

## Project Overview
A modern, premium B2B e-commerce website for Imamak, an industrial spare parts and machinery company based in Turkey.

## Design System

### Color Palette
- **Primary (Dark Blue)**: `#1e3a5f` - Main brand color, headers, buttons
- **Secondary (Steel Gray)**: `#64748b` - Secondary elements
- **Accent (Industrial Orange)**: `#f59e0b` - CTAs, highlights, important actions
- **Background**: `#ffffff` - Clean white background
- **Muted**: `#f1f5f9` - Subtle backgrounds and dividers

### Typography
- Clean, technical, easy-to-read fonts
- Proper hierarchy with H1-H4 elements
- Consistent spacing system

## Project Structure

```
/src
├── /app
│   ├── App.tsx                    # Homepage (Default)
│   ├── /components                # Reusable Components
│   │   ├── Header.tsx            # Top navigation with cart
│   │   ├── Footer.tsx            # Footer with links and info
│   │   ├── ProductCard.tsx       # Product display card
│   │   ├── CategoryCard.tsx      # Category showcase card
│   │   ├── FilterSidebar.tsx     # Product filtering sidebar
│   │   ├── Button.tsx            # Reusable button component
│   │   └── ContactForm.tsx       # Contact/Quote form
│   └── /pages                     # Page Components
│       ├── ShopPage.tsx          # Products listing page
│       ├── ProductDetailPage.tsx # Individual product page
│       ├── AboutPage.tsx         # Company information
│       └── ContactPage.tsx       # Contact & Quote forms
└── /styles
    ├── theme.css                  # Design system tokens
    └── tailwind.css              # Tailwind configuration
```

## Pages

### 1. Homepage (App.tsx)
**Current Display**
- Hero section with industrial imagery
- Product categories grid (6 categories)
- Featured products showcase (8 products)
- Company strengths section
- Trust badges with partner brands
- CTA sections

### 2. Shop/Products Page (ShopPage.tsx)
- Category sidebar with filters
  - Category filter
  - Price range filter
  - Brand filter
  - Availability filter
- Product grid layout (responsive)
- Sorting options
- Pagination
- List/Grid view toggle

### 3. Product Detail Page (ProductDetailPage.tsx)
- Image gallery with thumbnails
- Product information (price, SKU, stock)
- Technical specifications table
- Compatibility information
- Key features list
- Quantity selector
- Add to cart button
- Request quote button
- Related products section

### 4. About Us Page (AboutPage.tsx)
- Company introduction
- Mission & Vision cards
- Core values section
- Turkey location highlight
- Company timeline (2010-2026)
- Team information
- Career CTA

### 5. Contact & Quote Page (ContactPage.tsx)
- Contact information cards
- Contact form
- Quote request form
- Department contacts
- Map placeholder
- FAQ section
- Emergency hotline

## Components

### Header
- Logo and branding
- Top bar with contact info
- Search functionality
- Navigation menu
- Shopping cart icon with count
- Mobile responsive menu

### Footer
- Company information
- Quick links
- Product categories
- Contact details
- Social media links
- Legal links

### Product Card
- Product image
- Category badge
- Product name
- Specifications
- Price display
- Stock status
- Quick view button
- Add to cart button

### Category Card
- Category image with overlay
- Category name
- Product count
- Hover effects

### Filter Sidebar
- Collapsible sections
- Category checkboxes
- Price range radio buttons
- Brand filters
- Availability toggles

### Button Component
- Multiple variants (primary, secondary, outline, accent)
- Size options (sm, md, lg)
- Full width option
- Disabled state

### Contact Form
- Two types: contact and quote
- Form validation ready
- Multiple input fields
- Company information fields
- Message/description area

## Features

### B2B Focus
- Professional design language
- Technical specifications emphasis
- Bulk order support
- Quote request functionality
- Business contact forms

### User Experience
- Clean visual hierarchy
- Consistent spacing system
- Responsive design ready
- Intuitive navigation
- Fast loading with optimized images

### Product Management
- 8 product categories
- Technical specifications
- Compatibility information
- Stock status tracking
- Multiple product images

## Technical Implementation

### Styling
- Tailwind CSS v4
- Custom design tokens in theme.css
- Responsive utilities
- Hover and transition effects

### Icons
- Lucide React icon library
- Consistent icon usage
- Proper sizing and spacing

### Images
- Unsplash integration for industrial imagery
- High-quality product photos
- Optimized loading

## How to View Different Pages

Currently, the app displays the Homepage by default. To view other pages:

1. **Option A**: Import and render a different page in `App.tsx`
```tsx
import { ShopPage } from './pages/ShopPage';

function App() {
  return <ShopPage />;
}
```

2. **Option B**: For a complete multi-page experience, install and configure React Router
```bash
npm install react-router-dom
```

## Design Philosophy

1. **Industrial Aesthetic**: Professional, clean, trustworthy
2. **B2B Focused**: Technical details, specifications, bulk ordering
3. **Premium Quality**: High-quality imagery, polished UI
4. **User-Centric**: Easy navigation, clear CTAs, accessible design
5. **Local Pride**: Turkey location highlighted, Turkish market focus

## Brand Elements

- **Company Name**: Imamak
- **Tagline**: "Industrial Solutions"
- **Established**: 2010
- **Location**: Istanbul, Turkey
- **Product Range**: 5000+ products
- **Client Base**: 2500+ clients
- **Experience**: 15+ years

## Call-to-Actions

Primary actions throughout the site:
- Shop Now
- Request Quote
- Contact Us
- View Details
- Add to Cart
- Request Technical Support

## Trust Elements

- Partner brand logos (SKF, FAG, Bosch, Siemens, Festo, Parker)
- Quality certifications
- Years of experience
- Client count
- Product range statistics
- Fast delivery promises
- Expert support availability

---

**Ready for Developer Handoff**: Component-based architecture, consistent design system, and clear documentation make this project ready for development implementation.
