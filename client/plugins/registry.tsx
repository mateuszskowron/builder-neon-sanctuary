import type { Plugin } from "./types";
import {
  Home,
  FileText,
  Receipt,
  Calendar as CalendarIcon,
  ShoppingCart,
  CreditCard,
  BarChart3,
  MessageCircle,
  Shield,
  Settings,
  User,
  HelpCircle,
} from "lucide-react";

import Dashboard from "@/pages/Dashboard";
import Cases from "@/pages/Cases";
import Invoices from "@/pages/Invoices";
import CalendarPage from "@/pages/CalendarPage";
import Orders from "@/pages/Orders";
import Payments from "@/pages/Payments";
import Analytics from "@/pages/Analytics";
import Messages from "@/pages/Messages";
import Security from "@/pages/Security";
import SettingsPage from "@/pages/Settings";
import Profile from "@/pages/Profile";
import Support from "@/pages/Support";

export const plugins: Plugin[] = [
  {
    id: "dashboard",
    title: "Panel główny",
    path: "/",
    icon: Home,
    Component: Dashboard,
    section: "main",
    order: 0,
  },
  {
    id: "cases",
    title: "Moje sprawy",
    path: "/cases",
    icon: FileText,
    Component: Cases,
    section: "main",
    order: 1,
    badge: 3,
  },
  {
    id: "invoices",
    title: "Moje faktury",
    path: "/invoices",
    icon: Receipt,
    Component: Invoices,
    section: "main",
    order: 2,
  },
  {
    id: "calendar",
    title: "Kalendarz",
    path: "/calendar",
    icon: CalendarIcon,
    Component: CalendarPage,
    section: "main",
    order: 3,
  },
  {
    id: "orders",
    title: "Zamówienia",
    path: "/orders",
    icon: ShoppingCart,
    Component: Orders,
    section: "main",
    order: 4,
    badge: 2,
  },

  {
    id: "payments",
    title: "Centrum płatności",
    path: "/payments",
    icon: CreditCard,
    Component: Payments,
    section: "extra",
    order: 10,
  },
  {
    id: "analytics",
    title: "Raporty i analityka",
    path: "/analytics",
    icon: BarChart3,
    Component: Analytics,
    section: "extra",
    order: 11,
  },
  {
    id: "messages",
    title: "Komunikacja",
    path: "/messages",
    icon: MessageCircle,
    Component: Messages,
    section: "extra",
    order: 12,
    badge: 5,
  },
  {
    id: "security",
    title: "Bezpieczeństwo",
    path: "/security",
    icon: Shield,
    Component: Security,
    section: "extra",
    order: 13,
  },

  {
    id: "settings",
    title: "Ustawienia",
    path: "/settings",
    icon: Settings,
    Component: SettingsPage,
    section: "account",
    order: 20,
  },
  {
    id: "profile",
    title: "Profil klienta",
    path: "/profile",
    icon: User,
    Component: Profile,
    section: "account",
    order: 21,
  },
  {
    id: "support",
    title: "Pomoc i wsparcie",
    path: "/support",
    icon: HelpCircle,
    Component: Support,
    section: "account",
    order: 22,
  },
].map((p) => ({ showInSidebar: true, enabled: true, ...p }));

export const sectionsOrder: Array<{ key: Plugin["section"]; label: string }> = [
  { key: "main", label: "Menu główne" },
  { key: "extra", label: "Usługi dodatkowe" },
  { key: "account", label: "Konto" },
];

export function getEnabledPlugins() {
  return plugins.filter((p) => p.enabled);
}

export function getPluginsBySection(section: Plugin["section"]) {
  return getEnabledPlugins()
    .filter((p) => p.section === section)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
