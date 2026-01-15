import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Target, Eye, Award, Users, MapPin, TrendingUp } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We source only premium products from certified manufacturers, ensuring reliability and performance.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our clients\' success is our priority. We provide personalized service and technical expertise.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'We stay ahead of industry trends, offering the latest solutions and technologies.',
    },
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Deep understanding of Turkish industrial sector with global standards and reach.',
    },
  ];

  const milestones = [
    { year: '2010', title: 'Company Founded', description: 'Started as a small parts supplier in Istanbul' },
    { year: '2013', title: 'Expanded Catalog', description: 'Grew to 1000+ products and major brand partnerships' },
    { year: '2017', title: 'National Reach', description: 'Serving clients across all regions of Turkey' },
    { year: '2021', title: 'Digital Transformation', description: 'Launched e-commerce platform for easier ordering' },
    { year: '2026', title: 'Industry Leader', description: '5000+ products, 2500+ satisfied clients' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={3} />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1733683296842-c5c32fe36a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeXxlbnwxfHx8fDE3NjgxODU0NjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Industrial background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About imamak</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Your Trusted Partner in Industrial Motors and Machinery Trade & Maintenance in Turkey
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Comprehensive Solutions for Motors and Industrial Equipment
              </h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  imamak is one of the leading companies in Turkey specializing in the trade and maintenance of industrial motors and machinery. We provide our services to businesses in both local and international markets, relying on a team of seasoned experts in supplying and maintaining industrial equipment across various sectors.
                </p>
                <p>
                  Thanks to years of experience and strategic planning, we deliver optimal solutions tailored to your industrial needs—from selecting the right machines to routine maintenance and after-sales support.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1684695749267-233af13276d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBpbmR1c3RyaWFsJTIwc3RvcmFnZXxlbnwxfHx8fDE3NjgxODg3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Warehouse"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Partners */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">imamak's Global Partners in Success</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We proudly collaborate with a select group of leading global manufacturers
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
              {['ABB', 'SIEMENS', 'SCHNEIDER ELECTRIC', 'VOLT', 'SKF', 'ATLAS COPCO'].map((brand, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-muted/50 rounded-lg w-full h-20">
                  <span className="font-bold text-foreground text-sm text-center">{brand}</span>
                </div>
              ))}
              <div className="flex items-center justify-center p-4 bg-muted/50 rounded-lg w-full h-20">
                <span className="font-bold text-muted-foreground text-sm">+ More</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-foreground leading-relaxed">
                To empower Turkish industries with world-class spare parts and machinery solutions, delivering exceptional value through quality products, expert technical support, and reliable service. We are committed to building long-term partnerships that drive our clients' operational excellence and business growth.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-foreground leading-relaxed">
                To be Turkey's most trusted and comprehensive industrial parts supplier, recognized for our expertise, innovation, and customer-first approach. We envision a future where every manufacturer has seamless access to premium components and the technical knowledge to maximize their operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Turkey Location Highlight */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1615123110432-4f26910e4a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc3RhbmJ1bCUyMHR1cmtleSUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NjgxNjA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Istanbul, Turkey"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Exporting Excellence to Global Markets</h2>
              <div className="space-y-4 text-primary-foreground/90">
                <p>
                  Our headquarters is located in Istanbul, Turkey, and we serve clients both locally and internationally by exporting industrial motors and machinery to Europe, Arab countries, and Africa.
                </p>
                <p>
                  Our strategic location in Istanbul positions us at the crossroads of Europe and Asia, enabling us to efficiently serve clients throughout Turkey and beyond. As a hub of industrial activity, Istanbul provides us with unique insights into the evolving needs of modern manufacturing.
                </p>
                <p>
                  We maintain a large warehouse facility ensuring immediate availability of critical parts, while our logistics network guarantees fast delivery to any location in Turkey and our international markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">15+ years of growth and excellence</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-card border border-border rounded-lg p-6">
                      <div className="text-2xl font-bold text-accent mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Expert Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { role: 'Engineers & Technical Specialists', count: '25+' },
              { role: 'Sales & Customer Service', count: '15+' },
              { role: 'Logistics & Warehouse', count: '20+' },
            ].map((dept, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{dept.count}</div>
                <p className="text-foreground font-medium">{dept.role}</p>
              </div>
            ))}
          </div>

          {/*<div className="mt-12 bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for excellence and customer service.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors font-medium"
            >
              View Career Opportunities
            </a>
          </div>*/}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4 text-secondary-foreground/90">
            Looking for high-quality industrial machinery or reliable motors to power your industrial project?
          </p>
          <p className="text-lg mb-8 text-secondary-foreground/90">
            📞 Don't hesitate to contact us for a quote or a free consultation with our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors font-medium"
            >
              Contact Us
            </a>
            {/*<a
              href="/products"
              className="inline-block px-8 py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-secondary transition-colors font-medium"
            >
              Browse Products
            </a>*/}
            <a
            href="/products"
            className="inline-block bg-white text-secondary border-2 border-transparent hover:bg-transparent hover:border-white hover:text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Browse Products
            </a>


          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}