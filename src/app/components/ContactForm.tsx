import { useState } from 'react';
import { Button } from './Button';

interface ContactFormProps {
  type?: 'contact' | 'quote';
}

export function ContactForm({ type = 'contact' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    productName: '',
    quantity: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm mb-1.5 text-foreground">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-1.5 text-foreground">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm mb-1.5 text-foreground">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
            placeholder="+90 XXX XXX XX XX"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm mb-1.5 text-foreground">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
            placeholder="Your Company Ltd."
          />
        </div>
      </div>

      {type === 'quote' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="productName" className="block text-sm mb-1.5 text-foreground">
              Product Name/Code
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
              placeholder="SKF 6205-2RS"
            />
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm mb-1.5 text-foreground">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
              placeholder="10"
              min="1"
            />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm mb-1.5 text-foreground">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2.5 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input-background resize-none"
          placeholder={type === 'quote' ? 'Please provide details about your requirements...' : 'How can we help you?'}
        />
      </div>

      <Button type="submit" variant="accent" size="lg" fullWidth>
        {type === 'quote' ? 'Submit Quote Request' : 'Send Message'}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  );
}
