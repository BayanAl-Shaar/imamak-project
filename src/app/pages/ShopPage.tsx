import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FilterSidebar } from '../components/FilterSidebar';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Button';
import { Grid, List, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';

export function ShopPage() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort products
  const filteredProducts = products; // TODO: Implement filtering logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={3} />

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">
              Home
            </a>
            <span className="mx-2">/</span>
            <span className="text-foreground">Products</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              All Products
            </h1>
            <p className="text-muted-foreground">
              Showing {products.length} results
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="featured">Featured</option>
              <option value="price-low">
                Price: Low to High
              </option>
              <option value="price-high">
                Price: High to Low
              </option>
              <option value="newest">Newest</option>
              <option value="popular">Most Popular</option>
            </select>

            {/* View Toggle */}
            {/*<div className="hidden md:flex border border-border rounded-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-background'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-background'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>*/}

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border rounded-md bg-background"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div
              className="lg:hidden fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowFilters(false)}
            >
              <div
                className="absolute right-0 top-0 bottom-0 w-80 bg-background overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Filters</h3>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="text-muted-foreground"
                    >
                      ✕
                    </button>
                  </div>
                  <FilterSidebar />
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div
              className={`grid ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-6`}
            >
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                1
              </button>
              <button className="px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors">
                2
              </button>
              <button className="px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors">
                3
              </button>
              <button className="px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
