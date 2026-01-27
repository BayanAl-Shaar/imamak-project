import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { TermsPage } from "./pages/TermsPage";
import { BlogListingPage } from "./pages/BlogListingPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { Watermark } from "./components/Watermark";

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
      <Watermark />
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