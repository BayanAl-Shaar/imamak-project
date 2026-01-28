import { ShoppingCart, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
  specs?: string;
  inStock?: boolean;
}

export function ProductCard({ id, name, image, price, category, specs, inStock = true }: ProductCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-white overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        {/*!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-destructive text-destructive-foreground px-4 py-2 rounded-md font-medium">
              Out of Stock
            </span>
          </div>
        )*/}
        {/* Quick Actions */}
        {/*<div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white p-2 rounded-md shadow-md hover:bg-primary hover:text-white transition-colors">
            <Eye className="w-4 h-4" />
          </button>
        </div>*/}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{category}</p>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 min-h-[3rem]">
          {name}
        </h3>
        {specs && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-1">{specs}</p>
        )}
        <div className="flex items-center justify-between mt-4">
          {/*<div>
            <p className="text-2xl font-bold text-primary">${price.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground">Ex. VAT</p>
          </div>*/}
          {/*<button
            disabled={!inStock}
            className="bg-primary text-primary-foreground p-2.5 rounded-md hover:bg-primary/90 transition-colors disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>*/}
        </div>
        <button
          onClick={() => navigate(`/product/${id}`)}
          className="w-full mt-3 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
