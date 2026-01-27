import { Truck, Award, DollarSign, Clock, Headphones, Shield } from 'lucide-react';

export function InfoMarquee() {
  const messages = [
    { text: "Shipping Worldwide", icon: Truck },
    { text: "High Quality", icon: Award },
    { text: "Best Prices", icon: DollarSign },
    { text: "Fast & Reliable Delivery", icon: Clock },
    { text: "Expert Support", icon: Headphones },
    { text: "Premium Quality", icon: Shield }
  ];

  return (
    <section className="py-2 bg-yellow-100/80 border-b border-yellow-200/50 overflow-hidden">
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {messages.map((message, index) => {
            const Icon = message.icon;
            return (
              <div key={index} className="flex items-center gap-2 mx-4">
                <Icon className="w-4 h-4 text-yellow-700 flex-shrink-0" />
                <span className="text-sm font-medium text-yellow-900">{message.text}</span>
              </div>
            );
          })}
          {/* Duplicate for seamless loop */}
          {messages.map((message, index) => {
            const Icon = message.icon;
            return (
              <div key={`dup-${index}`} className="flex items-center gap-2 mx-4">
                <Icon className="w-4 h-4 text-yellow-700 flex-shrink-0" />
                <span className="text-sm font-medium text-yellow-900">{message.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
