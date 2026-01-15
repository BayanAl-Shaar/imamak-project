import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';
import { CategoryCard } from '../components/CategoryCard';
import { Button } from '../components/Button';
import { Shield, Truck, Headphones, Award, Clock, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  // Sample product data
  const featuredProducts = [
    {
      id: '1',
      name: 'Electric Motors with Brakes',
      image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1768371398/%D9%85%D8%AD%D8%B1%D9%83%D8%A7%D8%AA_%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A%D8%A9_%D9%82%D9%8A%D8%A7%D8%B3%D9%8A%D8%A9_jgditw.webp',
      price: 24.50,
      category: 'Bearings',
      specs: 'Durable motors for general industrial use.',
      inStock: true,
    },
    {
      id: '2',
      name: 'Standard Electric Motors',
      image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1768371398/%D9%85%D8%AD%D8%B1%D9%83%D8%A7%D8%AA_%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A%D8%A9_%D9%82%D9%8A%D8%A7%D8%B3%D9%8A%D8%A93_gnzczw.webp',
      price: 185.00,
      category: 'Hydraulic Components',
      specs: 'Integrated braking for safe, precise control.',
      inStock: true,
    },
    {
      id: '3',
      name: 'Single-Phase Electric Motors',
      image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1768371398/%D9%85%D8%AD%D8%B1%D9%83%D8%A7%D8%AA_%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A%D8%A9_%D9%82%D9%8A%D8%A7%D8%B3%D9%8A%D8%A92_iul2pg.webp',
      price: 425.00,
      category: 'Electric Motors',
      specs: 'Ideal for light-duty and single-phase systems.',
      inStock: true,
    },
    {
      id: '4',
      name: 'Two-Phase Electric Motors',
      image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1768371397/%D9%85%D8%AD%D8%B1%D9%83%D8%A7%D8%AA_%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A%D8%A9_%D8%A8%D9%85%D9%83%D8%A7%D8%A8%D8%AD2_u94toi.webp',
      price: 89.99,
      category: 'Power Transmission',
      specs: 'Smooth performance for specialized applications.',
      inStock: true,
    },
    {
      id: '5',
      name: 'Bevel Gear Reducers',
      image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1768371822/%D9%85%D8%AE%D9%81%D8%B6%D8%A7%D8%AA_u8h3ip.webp',
      price: 145.50,
      category: 'Pneumatic Systems',
      specs: 'Efficient power transmission at right angles.',
      inStock: true,
    },
    {
      id: '6',
      name: 'Planetary Gear Reducers',
      image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1768371823/%D9%85%D8%AE%D9%81%D8%B6%D8%A7%D8%AA3_xnjw4w.webp',
      price: 320.00,
      category: 'Industrial Tools',
      specs: 'Precision reducers for high torque applications.',
      inStock: false,
    },
    {
      id: '7',
      name: 'Helical Gear Reducers',
      image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1768371824/%D9%85%D8%AE%D9%81%D8%B6%D8%A7%D8%AA17_z1foi3.webp',
      price: 890.00,
      category: 'Material Handling',
      specs: 'High efficiency and quiet operation.',
      inStock: true,
    },
    {
      id: '8',
      name: 'Worm Gear Reducers',
      image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1768371824/%D9%85%D8%AE%D9%81%D8%B6%D8%A7%D8%AA7_quzqdq.webp',
      price: 156.00,
      category: 'Mechanical Parts',
      specs: 'Compact design with high reduction ratios.',
      inStock: true,
    },
  ];

  const categories = [
    {
      name: 'Production lines',
      image: 'https://images.unsplash.com/photo-1621954938124-02e637ba3584?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdGlvbiUyMGxpbmVzfGVufDB8fDB8fHwy',
      productCount: 1245,
    },
    {
      name: 'Hydraulic machines',
      image: 'https://images.unsplash.com/photo-1667233169941-7b31a54ec223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      productCount: 856,
    },
    {
      name: 'Vibrators',
      image: 'https://images.unsplash.com/photo-1753756965032-706cd3b99c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      productCount: 654,
    },
    {
      name: 'Reductor (gearboxes)',
      image: 'https://images.unsplash.com/photo-1640556795357-71d4078d6228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      productCount: 432,
    },
    {
      name: 'Electric motors',
      image: 'https://images.unsplash.com/photo-1563456019498-843e11bdaae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      productCount: 987,
    },
    {
      name: 'Electrical parts',
      image: 'https://images.unsplash.com/photo-1615746363486-92cd8c5e0a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      productCount: 523,
    },
  ];

  const strengths = [
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'Certified products from leading global manufacturers',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick shipping across Turkey and international delivery',
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: '24/7 technical assistance from our engineering team',
    },
    {
      icon: Award,
      title: 'Trusted Partner',
      description: '15+ years serving industrial sector in Turkey',
    },
    {
      icon: Clock,
      title: 'Always Available',
      description: 'Large inventory with immediate availability',
    },
    {
      icon: Package,
      title: 'Complete Solutions',
      description: 'One-stop shop for all industrial needs',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={3} />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1733683296842-c5c32fe36a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeXxlbnwxfHx8fDE3NjgxODU0NjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Industrial Machinery"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            {/*<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Industrial Spare Parts & Machinery Solutions
            </h1>*/}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Leading company in trading motors & industrial parts
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
              Your trusted partner for premium industrial components. Serving Turkey's manufacturing sector with quality, reliability, and expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop">
                <Button variant="accent" size="lg">
                  Shop Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Request a Quote
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-primary-foreground/20">
              <div>
                <p className="text-3xl font-bold text-accent">5000+</p>
                <p className="text-sm text-primary-foreground/80">Products</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">2500+</p>
                <p className="text-sm text-primary-foreground/80">Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">15+</p>
                <p className="text-sm text-primary-foreground/80">Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of industrial components and machinery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                name={category.name}
                image={category.image}
                productCount={category.productCount}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Products
              </h2>
              <p className="text-lg text-muted-foreground">
                Top quality components from leading manufacturers
              </p>
            </div>
            <Link to="/shop">
              <Button variant="outline">
                View All Products
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Strengths */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Imamak?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Your reliable partner for industrial solutions with proven excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
                  <p className="text-primary-foreground/80">{strength.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Badges / Client Logos */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground mb-8 font-medium">
            TRUSTED BY LEADING COMPANIES ACROSS TURKEY
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {['Eker Asansör', 'Artı Kasnak', 'Zorlu', 'Arkel', 'Butkon', 'Forti'].map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 text-2xl font-bold text-muted-foreground"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Finding the Right Part?
          </h2>
          <p className="text-lg mb-8 text-secondary-foreground/90">
            Our expert team is ready to assist you with technical specifications and product recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="accent" size="lg">
                Contact Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="customOutline" size="lg">
                Request Technical Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
