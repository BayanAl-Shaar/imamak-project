import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BlogCard } from '../components/BlogCard';
import { Button } from '../components/Button';
import { blogPosts, blogCategories } from '../data/blogs';

export function BlogListingPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

    return (
    <div className="min-h-screen bg-background">
        <Header cartCount={3} />

      {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-16">
        <div className="absolute inset-0">
            <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
            alt="Industrial Blog"
            className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Industry Insights & Technical Guides
            </h1>
            <p className="text-lg text-primary-foreground/90">
            Stay updated with the latest trends, maintenance tips, and technical knowledge in industrial machinery and spare parts.
            </p>
        </div>
        </section>

      {/* Category Filter */}
        <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
            {blogCategories.map((category) => (
                <Button
                key={category}
                variant={selectedCategory === category ? "primary" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                >
                {category}
                </Button>
            ))}
            </div>
        </div>
        </section>

      {/* Blog Posts Grid */}
        <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
                ))}
            </div>
            ) : (
            <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                No articles found
            </h3>
                <p className="text-muted-foreground mb-8">
                No articles match the selected category. Try selecting a different category.
                </p>
                <Button
                variant="outline"
                onClick={() => setSelectedCategory('All')}
                >
                View All Articles
                </Button>
            </div>
            )}
        </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Technical Support?</h2>
            <p className="text-lg mb-8 text-secondary-foreground/90">
            Our engineering team is ready to help you with product selection, technical specifications, and application guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
                href="/contact"
                className="inline-block px-8 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors font-medium"
            >
                Contact Technical Support
            </a>
            <a
            href="/contact"
            className="inline-block bg-white text-secondary border-2 border-transparent hover:bg-transparent hover:border-white hover:text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
                Request a Quote
            </a>
            </div>
        </div>
        </section>
        <Footer />
    </div>
    );
}
