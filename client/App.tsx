import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Layout
import { CustomerLayout } from "@/components/CustomerLayout";

// Plugin system
import { plugins } from "@/plugins/registry";
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
            element={
              <CustomerLayout>
                <Outlet />
              </CustomerLayout>
            }
          >
            {plugins.map((p) => {
              const Element = p.Component;
              if (p.path === "/") {
                return <Route index element={<Element />} key={p.id} />;
              }
              const childPath = p.path.replace(/^\//, "");
              return (
                <Route path={childPath} element={<Element />} key={p.id} />
              );
            })}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
