import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FilterSidebar() {
  const [openSections, setOpenSections] = useState<string[]>(['category', 'price', 'brand']);

  const toggleSection = (section: string) => {
    setOpenSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const categories = [
    { name: 'Bearings & Power Transmission', count: 1245 },
    { name: 'Hydraulic Components', count: 856 },
    { name: 'Pneumatic Systems', count: 654 },
    { name: 'Electric Motors', count: 432 },
    { name: 'Industrial Tools', count: 987 },
    { name: 'Material Handling', count: 523 },
    { name: 'Seals & Gaskets', count: 345 },
    { name: 'Valves & Fittings', count: 678 },
  ];

  const brands = [
    'SKF', 'FAG', 'Bosch', 'Siemens', 'Festo', 'Parker', 'NSK', 'Timken'
  ];

  const priceRanges = [
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100 - $250', value: '100-250' },
    { label: '$250 - $500', value: '250-500' },
    { label: '$500 - $1000', value: '500-1000' },
    { label: 'Over $1000', value: '1000+' },
  ];

  return (
    <aside className="w-full lg:w-64 bg-card border border-border rounded-lg p-4 sticky top-24 h-fit">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Filters</h3>
        <button className="text-sm text-primary hover:underline">Clear All</button>
      </div>

      {/* Category Filter */}
      <div className="border-b border-border pb-4 mb-4">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="font-medium text-foreground">Category</span>
          {openSections.includes('category') ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        
        {openSections.includes('category') && (
          <div className="space-y-2">
            {categories.map((category, index) => (
              <label key={index} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-input text-primary focus:ring-primary"
                />
                <span className="text-sm text-foreground group-hover:text-primary flex-1">
                  {category.name}
                </span>
                <span className="text-xs text-muted-foreground">({category.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      {/*<div className="border-b border-border pb-4 mb-4">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="font-medium text-foreground">Price Range</span>
          {openSections.includes('price') ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        
        {openSections.includes('price') && (
          <div className="space-y-2">
            {priceRanges.map((range, index) => (
              <label key={index} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="price"
                  className="w-4 h-4 text-primary focus:ring-primary"
                />
                <span className="text-sm text-foreground group-hover:text-primary">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>*/}

      {/* Brand Filter */}
      {/*<div className="border-b border-border pb-4 mb-4">
        <button
          onClick={() => toggleSection('brand')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="font-medium text-foreground">Brand</span>
          {openSections.includes('brand') ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        
        {openSections.includes('brand') && (
          <div className="space-y-2">
            {brands.map((brand, index) => (
              <label key={index} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-input text-primary focus:ring-primary"
                />
                <span className="text-sm text-foreground group-hover:text-primary">
                  {brand}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>*/}

      {/* Availability Filter */}
      {/*<div className="pb-4">
        <button
          onClick={() => toggleSection('availability')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="font-medium text-foreground">Availability</span>
          {openSections.includes('availability') ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        
        {openSections.includes('availability') && (
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-input text-primary focus:ring-primary"
              />
              <span className="text-sm text-foreground group-hover:text-primary">
                In Stock Only
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-input text-primary focus:ring-primary"
              />
              <span className="text-sm text-foreground group-hover:text-primary">
                On Sale
              </span>
            </label>
          </div>
        )}
      </div>*/}
    </aside>
  );
}
