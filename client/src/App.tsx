import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { LazyMotion, domAnimation } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import React, { Suspense } from "react";

// Lazy load pages to reduce initial bundle size
import Home from "@/pages/home";
const Blog = React.lazy(() => import("@/pages/blog"));
const Pricing = React.lazy(() => import("@/pages/pricing"));
const Support = React.lazy(() => import("@/pages/support"));
const FAQs = React.lazy(() => import("@/pages/faqs"));
const Integrations = React.lazy(() => import("@/pages/integrations"));
const NotFound = React.lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/blog" component={Blog} />
        <Route path="/support" component={Support} />
        <Route path="/faq" component={FAQs} />
        <Route path="/integrations" component={Integrations} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LazyMotion features={domAnimation} strict>
        <TooltipProvider>
          <Router />
          <Toaster />
        </TooltipProvider>
      </LazyMotion>
    </QueryClientProvider>
  );
}

export default App;
