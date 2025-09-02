import { BarChart3 } from "lucide-react";
import PlaceholderPage from "./PlaceholderPage";

export default function Analytics() {
  return (
    <PlaceholderPage
      title="Raporty i analityka"
      description="Szczegółowe analizy i raporty dotyczące Twojej aktywności, wydatków i efektywności."
      icon={BarChart3}
      features={[
        "Interaktywne dashboardy z wykresami",
        "Analiza kosztów i ROI projektów",
        "Raporty czasowe i trendy",
        "Porównanie okresów i wskaźników",
        "Predykcje i prognozy",
        "Eksport do Excel i PDF",
        "Personalizowane KPI",
        "Automatyczne raporty e-mail"
      ]}
    />
  );
}
