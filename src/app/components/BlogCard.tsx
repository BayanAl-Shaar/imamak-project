import { Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

interface BlogCardProps {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  publishDate: string;
  category: string;
  author?: string;
  readTime?: number;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  featuredImage,
  publishDate,
  category,
  author,
  readTime
}: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
      {/* Featured Image */}
      <div className="relative aspect-video bg-muted overflow-hidden">
        <img
          src={featuredImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Category Badge */}
        {/*<div className="absolute top-3 left-3">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>*/}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-semibold text-foreground mb-3 line-clamp-2 min-h-[3.5rem] text-lg leading-tight">
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
          {excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(publishDate)}</span>
          </div>
          {readTime && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime} min read</span>
            </div>
          )}
          {author && (
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
          )}
        </div>

        {/* Read More Button */}
        <Link to={`/blog/${slug}`}>
          <Button variant="outline" size="sm" fullWidth>
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
}
