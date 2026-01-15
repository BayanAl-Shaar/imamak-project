import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BlogCard } from '../components/BlogCard';
import { Button } from '../components/Button';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogs';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header cartCount={3} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/blog">
            <Button variant="primary">
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get related posts
  const relatedPosts = post.relatedPosts
    ? blogPosts.filter(p => post.relatedPosts!.includes(p.id))
    : [];

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={3} />

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-primary">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative">
        <div className="aspect-[21/9] bg-muted overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Back Button */}
        <div className="absolute top-6 left-6">
          <Link to="/blog">
            <Button variant="customOutline" size="sm">
              <ArrowLeft className="w-10 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="max-w-4xl">
            {/*<div className="mb-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>*/}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishDate)}</span>
              </div>
              {post.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                </div>
              )}
              {/*{post.author && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              )}*/}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div
              className="text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">Share this article:</span>
                <button className="text-primary hover:text-primary/80 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} {...relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {/*<section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Industrial Parts or Technical Support?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Our expert team is ready to help you find the right components and provide technical guidance for your projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
            href="/products"
            className="inline-block bg-white text-secondary border-2 border-transparent hover:bg-transparent hover:border-white hover:text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Browse Products
            </a>
            <Link to="/contact">
              <Button variant="customOutline" size="lg">
                Contact Technical Support
              </Button>
            </Link>
          </div>
        </div>
      </section>*/}


    {/* CTA Section */}
        <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Industrial Parts or Technical Support?</h2>
            <p className="text-lg mb-8 text-secondary-foreground/90">
            Our expert team is ready to help you find the right components and provide technical guidance for your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
                href="/shop"
                className="inline-block px-8 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors font-medium"
            >
                Browse Products
            </a>
            <a
            href="/contact"
            className="inline-block bg-white text-secondary border-2 border-transparent hover:bg-transparent hover:border-white hover:text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
                Contact Technical Support
            </a>
            </div>
        </div>
        </section>

      <Footer />
    </div>
  );
}
