import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Button';
import { ShoppingCart, Heart, Share2, Check, Truck, Shield, ArrowLeft } from 'lucide-react';

import { products } from '../data/products';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!id) {
    return (
      <div className="min-h-screen bg-background">
        <Header cartCount={3} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Invalid Product ID</h1>
          <p className="text-muted-foreground mb-8">The product ID is missing or invalid.</p>
          <Button onClick={() => navigate('/shop')} variant="primary">
            Back to Shop
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header cartCount={3} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/shop')} variant="primary">
            Back to Products
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={3} />

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">Home</a>
            <span>/</span>
            <a href="/products" className="hover:text-primary">Products</a>
            <span>/</span>
            <a href="#" className="hover:text-primary">{product.category}</a>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <a href="/products" className="inline-flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </a>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
              <img
                src={(product.images || [product.image])[selectedImage]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {(product.images || [product.image]).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-muted rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-2">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                {product.brand}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
            <p className="text-muted-foreground mb-4">SKU: {product.sku}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-xl ${i < Math.floor(product.rating || 0) ? 'text-accent' : 'text-muted'}`}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating || 0} ({product.reviews || 0} reviews)
              </span>
            </div>

            {/* Price */}
            {/*<div className="mb-6">
              <p className="text-4xl font-bold text-primary mb-1">${product.price.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground">Ex. VAT</p>
            </div>*/}

            {/* Stock Status */}
            <div className="flex items-center gap-2 mb-6">
              {product.inStock ? (
                <>
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-green-600 font-medium">In Stock ({product.stockCount || 0} units available)</span>
                </>
              ) : (
                <span className="text-destructive font-medium">Out of Stock</span>
              )}
            </div>

            {/* Description */}
            <p className="text-foreground mb-6 leading-relaxed">{product.description}</p>

            {/* Quantity & Add to Cart */}
            {/*<div className="flex gap-4 mb-6">
              <div className="flex items-center border border-border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-muted transition-colors"
                >
                  -
                </button>
                <span className="px-6 py-2 border-x border-border">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-muted transition-colors"
                >
                  +
                </button>
              </div>
              <Button variant="primary" size="lg" fullWidth>
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>*/}

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <Button variant="accent" size="lg" fullWidth>
                Request Quote
              </Button>
              <button className="px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Shipping & Guarantee */}
            <div className="space-y-3 border-t border-border pt-6">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">Fast Shipping</p>
                  <p className="text-sm text-muted-foreground">Ships within 1-2 business days</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">Quality Guarantee</p>
                  <p className="text-sm text-muted-foreground">100% authentic products, 30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-16">
          <div className="border-b border-border mb-6">
            <nav className="flex gap-8">
              <button className="pb-4 border-b-2 border-primary text-primary font-medium">
                Specifications
              </button>
              {/*<button className="pb-4 text-muted-foreground hover:text-foreground">
                Compatibility
              </button>
              <button className="pb-4 text-muted-foreground hover:text-foreground">
                Features
              </button>*/}
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Specifications Table */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {(product.specifications || []).map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-muted/30' : ''}>
                        <td className="px-4 py-3 font-medium text-foreground">{spec.label}</td>
                        <td className="px-4 py-3 text-muted-foreground">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Compatibility & Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Compatible Applications</h3>
              <ul className="space-y-2 mb-8">
                {product.compatibility && product.compatibility.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {(product.features || []).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                category={product.category}
                specs={product.specs}
                inStock={product.inStock}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
