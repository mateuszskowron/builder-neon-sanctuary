import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import { CustomerLayout } from "@/components/CustomerLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import Cases from "./pages/Cases";
import Invoices from "./pages/Invoices";
import CalendarPage from "./pages/CalendarPage";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Payments from "./pages/Payments";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Security from "./pages/Security";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <CustomerLayout>
                <Dashboard />
              </CustomerLayout>
            } 
          />
          <Route 
            path="/cases" 
            element={
              <CustomerLayout>
                <Cases />
              </CustomerLayout>
            } 
          />
          <Route 
            path="/invoices" 
            element={
              <CustomerLayout>
                <Invoices />
              </CustomerLayout>
            } 
          />
          <Route 
            path="/calendar" 
            element={
              <CustomerLayout>
                <CalendarPage />
              </CustomerLayout>
            } 
          />
          <Route 
            path="/orders" 
            element={
              <CustomerLayout>
                <Orders />
              </CustomerLayout>
            } 
          />
          <Route 
            path="/payments" 
            element={
              <CustomerLayout>
                <Payments />
              </CustomerLayout>
            } 
          />
          <Route 
            path="/analytics" 
            element={
              <CustomerLayout>
                <Analytics />
              </CustomerLayout>
            } 
          />
          <Route 
            path="/messages" 
            element={
              <CustomerLayout>
                <Messages />
              </CustomerLayout>
            } 
          />
          <Route 
            path="/security" 
            element={
              <CustomerLayout>
                <Security />
              </CustomerLayout>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <CustomerLayout>
                <Settings />
              </CustomerLayout>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <CustomerLayout>
                <Profile />
              </CustomerLayout>
            } 
          />
          <Route 
            path="/support" 
            element={
              <CustomerLayout>
                <Support />
              </CustomerLayout>
            } 
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route 
            path="*" 
            element={
              <CustomerLayout>
                <NotFound />
              </CustomerLayout>
            } 
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
