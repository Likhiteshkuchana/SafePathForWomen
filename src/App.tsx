
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Emergency from "./pages/Emergency";
import HowItWorks from "./pages/HowItWorks";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Simple logout handler component
const Logout = () => {
  // Clear user session and update stored users
  const clearUserSession = () => {
    const currentUser = JSON.parse(localStorage.getItem('safepath_user') || '{}');
    if (currentUser.email) {
      // Update user login status in the users array
      const users = JSON.parse(localStorage.getItem('safepath_users') || '[]');
      const updatedUsers = users.map((user: any) => {
        if (user.email === currentUser.email) {
          return { ...user, isLoggedIn: false };
        }
        return user;
      });
      localStorage.setItem('safepath_users', JSON.stringify(updatedUsers));
    }
    // Remove current user session
    localStorage.removeItem('safepath_user');
  };
  
  // Clear session and redirect to home
  clearUserSession();
  return <Navigate to="/" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/support" element={<Support />} />
          <Route path="/logout" element={<Logout />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
