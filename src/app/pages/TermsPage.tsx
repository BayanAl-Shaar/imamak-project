import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Shield, Lock, FileText } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={3} />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use & Privacy Policy</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Your privacy and trust matter to us
          </p>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Lock className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Privacy Policy</h2>
            </div>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p className="text-lg">
                We respect your privacy and do not share your personal information with any third party without your consent. Data is collected solely to enhance your experience on the site with the highest security standards.
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="text-xl font-semibold mb-4">Data Protection</h3>
                <p>
                  All personal information you provide is protected using industry-standard encryption and security measures. We are committed to safeguarding your data and maintaining your trust.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="text-xl font-semibold mb-4">Information We Collect</h3>
                <p>
                  We collect information that you voluntarily provide when requesting quotes, contacting us, or using our services. This may include your name, email, phone number, and business details necessary to serve you better.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="text-xl font-semibold mb-4">How We Use Your Information</h3>
                <p>
                  Your information is used exclusively to process your requests, provide customer support, and improve our services. We never sell or share your data with third parties without your explicit consent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Use Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Terms of Use</h2>
            </div>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p className="text-lg">
                By using this website and our services, you agree to the following terms and conditions. Please read them carefully.
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="text-xl font-semibold mb-4">Acceptance of Terms</h3>
                <p>
                  By accessing and using imamak.com, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="text-xl font-semibold mb-4">Use of Services</h3>
                <p>
                  Our website provides information about industrial motors and machinery, product catalogs, and the ability to request quotes. You agree to use these services only for lawful purposes and in accordance with these terms.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="text-xl font-semibold mb-4">Product Information</h3>
                <p>
                  We strive to provide accurate product information and specifications. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, or error-free. Please contact us to verify specific product details before placing orders.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="text-xl font-semibold mb-4">Intellectual Property</h3>
                <p>
                  All content on this website, including text, graphics, logos, and images, is the property of imamak or its content suppliers and is protected by international copyright and trademark laws.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <Shield className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Your Security is Our Priority</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              We implement robust security measures to protect your personal information and ensure a safe browsing experience. Your data is encrypted and stored securely.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors font-medium"
            >
              Contact Us for Questions
            </a>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
