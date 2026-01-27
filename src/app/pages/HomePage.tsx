import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';
import { CategoryCard } from '../components/CategoryCard';
import { Button } from '../components/Button';
import { Shield, Truck, Headphones, Award, Clock, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

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
      name: 'Horizontal Split Case Centrifugal Pump',
      image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769409774/WhatsApp_Image_2026-01-14_at_13.07.20_1_mkbepr.jpg',
      price: 185.00,
      category: 'Industrial Machinery',
      specs: 'A heavy-duty pumping system consisting of a large AC electric motor coupled to a centrifugal pump',
      inStock: true,
    },
    {
      id: '3',
      name: 'Two-Stage Liquid Ring Vacuum Pump',
      image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769410113/Gemini_Generated_Image_yhoh69yhoh69yhoh_utfdes.png',
      price: 425.00,
      category: 'Industrial Vacuum Equipment',
      specs: 'This is a robust, two-stage liquid ring vacuum pump used for extracting gases or creating a vacuum in industrial processes.',
      inStock: true,
    },
    {
      id: '4',
      name: 'Horizontal Split Case Centrifugal Pump',
      image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769409781/WhatsApp_Image_2026-01-14_at_13.07.21_1_binkss.jpg',
      price: 89.99,
      category: 'Power Transmission',
      specs: 'It consists of a centrifugal pump coupled to a large AC electric motor',
      inStock: true,
    },
    {
      id: '5',
      name: 'Rotary Screw Compressor (K-MAX) and Reciprocating Piston Compressor',
      image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769410452/Gemini_Generated_Image_7uk5a7uk5a7uk5a7_nnqqqi.png',
      price: 145.50,
      category: 'Industrial Air Compression Systems',
      specs: 'A high-efficiency unit designed for continuous 24/7 industrial use; it features a variable speed permanent magnet motor and an integrated electronic controller.',
      inStock: true,
    },
    {
      id: '6',
      name: 'Rotary Airlock Valve (also known as a Rotary Feeder or Star Feeder)',
      image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769409784/WhatsApp_Image_2026-01-14_at_13.07.22_cgjczi.jpg',
      price: 320.00,
      category: 'Pneumatic Conveying Equipment',
      specs: 'This is a Makilus M Series Rotary Airlock used for the controlled discharge of bulk solids like flour, grain, or powders from a hopper or silo.',
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

  // Compressor brands data - using actual brand logo URLs for proper display
  const compressorBrands = [
    {
      name: 'Atlas Copco',
      logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769411994/atlascopco_ceih4b.svg ',
    },
    {
      name: 'Kaeser Kompressoren',
      logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769416680/Kaeser_Kompressoren_pk7uui.webp',
    },
    {
      name: 'Chicago Pneumatic',
      logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769417889/Chicago_Pneumatic_plwlug.png',
    },
    {
      name: 'Ingersoll Rand',
      logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769417996/Ingersoll_Rand_dkcut5.webp',
    },
    {
      name: 'ABAC',
      logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769418212/Gemini_Generated_Image_u24jtxu24jtxu24j_aolfms.png',
    },
    {
      name: 'Ozen Kompresör',
      logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769418299/ozen-logo_zui52h.png',
    },
  ];

  // Elevator brands data - using placeholder logos for display
  const elevatorBrands = [
    { name: 'Eker Asansör', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769420478/erek1_ajs1yg.png' },
    { name: 'Zorlu', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769420604/Zorlu-Asansor-Logo_slatfp.png' },
    { name: 'Artı + Kasnak', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769420670/Art%C4%B1_Kasnak_zijedd.avif' },
    { name: 'EMA', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769420749/eren-makina-asansor_hceboy.png' },
    { name: 'Centa Elevator', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769420832/Logo-CENTA-web_mxmcs3.png' },
    { name: 'Butkon', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769421073/logo_1_dyv7j5.png' },
    { name: 'Forti', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769421158/forti-logo_ykmlbk.png' },
    { name: 'Arkel', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769421225/logotype-dark_mzzypd.png' },
  ];

  // Reducer brands data - using placeholder logos for display
  const reducerBrands = [
    { name: 'Yilmaz Redüktör', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769422001/yilmazredactor_hek4ww.png' },
    { name: 'Volt Redüktör', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769421995/volt-redactor-tr_otqz0c.png' },
    { name: 'SITI', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769421963/SITI_logo-PANTONE-293-C_logopayoff-2048x1155_jwpe5h.webp' },
    { name: 'Zet Gearboxes', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769421969/zet-gearboxes_k1zkma.png' },
    { name: 'PGR', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769421961/PGR-logo_nm7fzf.png' },
    { name: 'I.Mak', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769421960/logo_hj6wcw.png' },
  ];

  // Electric motor brands data - using placeholder logos for display
  const motorBrands = [
    { name: 'ABB', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769422548/abb-logo-33px_q7zo2j.svg' },
    { name: 'WEG', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769422568/Gemini_Generated_Image_bffcilbffcilbffc_mrqe12.png' },
    { name: 'Elk Motors', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769422564/images_rkzpzd.png' },
    { name: 'Rexroth (a Bosch Company)', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769422563/images_nmstav.jpg' },
    { name: 'Emtas', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769422559/images_1_btfjhf.jpg' },
    { name: 'Siemens', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769422562/images_1_s8996i.png' },
    { name: 'Volt Redüktör', logo: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1769421995/volt-redactor-tr_otqz0c.png' },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <Header cartCount={3} />

      {/* Global Shipping Info Strip */}
      <section className="py-3 bg-yellow-100/80 border-b border-yellow-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 text-center md:justify-start md:text-left">
            <Truck className="w-6 h-6 text-yellow-700 flex-shrink-0" />
            <p className="text-base md:text-lg text-yellow-900 font-semibold">
              We ship our products worldwide, ensuring reliable delivery wherever your business operates.
            </p>
          </div>
        </div>
      </section>

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

      {/* Compressor Brands Section - Added to display compressor brand logos in a responsive grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Compressor Brands
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted compressor brands for industrial applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {compressorBrands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elevator Brands Section - Added to display elevator brand logos in a responsive grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Elevators
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leading elevator brands for vertical transportation solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {elevatorBrands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reducer Brands Section - Added to display reducer brand logos in a responsive grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Reducers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium reducer brands for power transmission and speed control
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {reducerBrands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electric Motors Brands Section - Added to display electric motor brand logos in a responsive grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Electric Motors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              High-performance electric motor brands for industrial applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {motorBrands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Brands Section with Tabs */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Brands
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted brands across different categories for your industrial needs
            </p>
          </div>

          <Tabs defaultValue="elevator" className="w-full">
            <TabsList className="relative z-10 grid w-full grid-cols-2 gap-4 md:grid-cols-4 md:gap-2 mb-12 bg-white shadow-sm border border-border rounded-xl p-2">

              <TabsTrigger
                value="elevator"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-pointer font-medium text-sm px-4 py-2 rounded-lg"
              >
                Elevator Brands
              </TabsTrigger>
              <TabsTrigger
                value="reducer"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-pointer font-medium text-sm px-4 py-2 rounded-lg"
              >
                Reducer Brands
              </TabsTrigger>
              <TabsTrigger
                value="motor"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-pointer font-medium text-sm px-4 py-2 rounded-lg"
              >
                Electric Motor Brands
              </TabsTrigger>
              <TabsTrigger
                value="compressor"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-pointer font-medium text-sm px-4 py-2 rounded-lg"
              >
                Compressor Brands
              </TabsTrigger>
            </TabsList>

            <TabsContent value="elevator">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                {elevatorBrands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-full object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reducer">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                {reducerBrands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-full object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="motor">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                {motorBrands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-full object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="compressor">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                {compressorBrands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-full object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
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
      {/*<section className="py-12 bg-muted/30">
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
      </section>*/}

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
