import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/app/pages/HomePage";
import { ShopPage } from "@/app/pages/ShopPage";
import { ProductDetailPage } from "@/app/pages/ProductDetailPage";
import { AboutPage } from "@/app/pages/AboutPage";
import { ContactPage } from "@/app/pages/ContactPage";
import { TermsPage } from "@/app/pages/TermsPage";
import { BlogListingPage } from "@/app/pages/BlogListingPage";
import { BlogPostPage } from "@/app/pages/BlogPostPage";

/**
 * IMAMAK E-COMMERCE WEBSITE
 *
 * Main App component with React Router for navigation
 * Pages:
 * - / - Homepage with hero and featured products
 * - /shop - Products listing with filters
 * - /product/:id - Individual product details
 * - /about - Company information and history
 * - /contact - Contact forms and quote requests
 * - /terms - Terms of Use and Privacy Policy
 * - /blog - Blog listing with industry insights
 * - /blog/:slug - Individual blog post details
 */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/products" element={<ShopPage />} />
        <Route
          path="/product/:id"
          element={<ProductDetailPage />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/blog" element={<BlogListingPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;