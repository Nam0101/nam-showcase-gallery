import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const queryClient = new QueryClient();

const PageTransitionWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.98, filter: 'blur(12px)' }}
    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
    exit={{ opacity: 0, y: -30, scale: 0.98, filter: 'blur(12px)' }}
    transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
    style={{ minHeight: '100vh' }}
  >
    {children}
  </motion.div>
);

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransitionWrapper><Index /></PageTransitionWrapper>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageTransitionWrapper><NotFound /></PageTransitionWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className={`global-fadein${fadeIn ? " fadein-active" : ""}`}>
          <BrowserRouter>
            <Navbar />
            <AppRoutes />
          </BrowserRouter>
        </div>
        <style>{`
          .global-fadein {
            opacity: 0;
            transition: opacity 1.2s cubic-bezier(0.77,0,0.175,1);
          }
          .global-fadein.fadein-active {
            opacity: 1;
          }
        `}</style>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
