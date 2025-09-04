import type React from "react";

export type PluginSection = "main" | "extra" | "account";

export interface Plugin {
  id: string;
  title: string;
  path: string; // absolute route path e.g. "/cases"
  icon: React.ComponentType<{ className?: string }>;
  Component: React.ComponentType;
  section: PluginSection;
  order?: number;
  badge?: string | number;
  showInSidebar?: boolean;
  enabled?: boolean;
}
