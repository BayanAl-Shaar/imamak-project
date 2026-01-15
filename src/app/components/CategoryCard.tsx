import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  image: string;
  productCount: number;
  href?: string;
}

export function CategoryCard({ name, image, productCount, href = '#' }: CategoryCardProps) {
  return (
    <a
      href={href}
      className="group relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 block"
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-bold text-lg mb-1">{name}</h3>
          <p className="text-sm text-white/90 mb-3">{productCount} Products</p>
          
          <div className="flex items-center gap-2 text-sm group-hover:gap-3 transition-all">
            <span>Explore</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </a>
  );
}
