import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { LazyMotion, domAnimation } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Blog from "@/pages/blog";
import Pricing from "@/pages/pricing";
import Support from "@/pages/support";
import FAQs from "@/pages/faqs";
import Integrations from "@/pages/integrations";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/blog" component={Blog} />
      <Route path="/support" component={Support} />
      <Route path="/faq" component={FAQs} />
      <Route path="/integrations" component={Integrations} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LazyMotion features={domAnimation}>
        <TooltipProvider>
          <Router />
          <Toaster />
        </TooltipProvider>
      </LazyMotion>
    </QueryClientProvider>
  );
}

export default App;
