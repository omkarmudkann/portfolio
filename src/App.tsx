import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "@/components/Navigation";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* ✅ Navigation always visible */}
        <Navigation />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />

          {/* About */}
          <Route path="/about" element={<AboutPage />} />

          {/* Work listing */}
          <Route path="/work" element={<Work />} />

          {/* ✅ Project detail page */}
          <Route path="/work/:slug" element={<ProjectDetail />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
