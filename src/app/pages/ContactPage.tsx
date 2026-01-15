import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Istanbul Industrial Zone', 'District, Turkey', 'Postal Code: 34XXX'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+90 XXX XXX XX XX', '+90 XXX XXX XX XX', 'Fax: +90 XXX XXX XX XX'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@imamak.com', 'sales@imamak.com', 'support@imamak.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 - 18:00', 'Saturday: 9:00 - 14:00', 'Sunday: Closed'],
    },
  ];

  const departments = [
    {
      name: 'Sales Department',
      description: 'For product inquiries and orders',
      email: 'sales@imamak.com',
      phone: '+90 XXX XXX XX XX',
    },
    {
      name: 'Technical Support',
      description: 'For technical specifications and product assistance',
      email: 'support@imamak.com',
      phone: '+90 XXX XXX XX XX',
    },
    {
      name: 'Customer Service',
      description: 'For general inquiries and feedback',
      email: 'info@imamak.com',
      phone: '+90 XXX XXX XX XX',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={3} />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Have a question or need assistance? Our expert team is here to help you find the right industrial solutions.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible. For urgent matters, please call us directly.
                </p>
              </div>
              <ContactForm type="contact" />
            </div>

            {/* Departments & Map */}
            <div className="space-y-8">
              {/* Departments */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Our Departments</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-1">{dept.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{dept.description}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                        <a href={`mailto:${dept.email}`} className="text-primary hover:underline">
                          {dept.email}
                        </a>
                        <span className="hidden sm:inline text-muted-foreground">|</span>
                        <a href={`tel:${dept.phone}`} className="text-primary hover:underline">
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Location</h3>
                <div className="aspect-video bg-muted rounded-lg border border-border flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Istanbul Industrial Zone</p>
                    <p className="text-sm text-muted-foreground">Interactive map location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Quote Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quote Info */}
            <div>
              <div className="mb-8">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Request a Quote</h2>
                <p className="text-foreground mb-6">
                  Need pricing for specific products or bulk orders? Fill out our quote request form and our sales team will provide you with a detailed quotation within 24 hours.
                </p>
                
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <h3 className="font-semibold text-foreground">What You'll Get:</h3>
                  <ul className="space-y-2">
                    {[
                      'Competitive pricing for your specific needs',
                      'Technical specifications and compatibility check',
                      'Delivery timeline and logistics options',
                      'Volume discounts for bulk orders',
                      'Alternative product recommendations',
                      'Dedicated account manager support',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-1">✓</span>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    <strong>Bulk Order Discounts:</strong> For orders over 10 units or total value exceeding $1000, special pricing is available. Our team will work with you to find the best solution.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Quote Request Form</h3>
                <ContactForm type="quote" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                question: 'What is your typical delivery time?',
                answer: 'For in-stock items, we typically ship within 1-2 business days. Delivery times vary based on location, but most orders within Turkey arrive within 3-5 business days.',
              },
              {
                question: 'Do you offer technical support?',
                answer: 'Yes! Our team of engineers and technical specialists is available to help you select the right parts and provide technical guidance. Contact us at support@imamak.com or call our technical support line.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept bank transfer, credit cards, and offer payment terms for established corporate clients. Please contact our sales team to discuss payment options.',
              },
              {
                question: 'Can I return or exchange products?',
                answer: 'Yes, we have a 30-day return policy for unused products in original packaging. Please contact our customer service team to initiate a return or exchange.',
              },
              {
                question: 'Do you ship internationally?',
                answer: 'While we primarily serve the Turkish market, we do offer international shipping to select countries. Contact us with your location for more information.',
              },
            ].map((faq, index) => (
              <details key={index} className="bg-card border border-border rounded-lg p-6 group">
                <summary className="font-semibold text-foreground cursor-pointer list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4 text-secondary-foreground/90">
            Looking for high-quality industrial machinery or reliable motors to power your industrial project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors font-medium"
            >
              Contact Us
            </a>
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
