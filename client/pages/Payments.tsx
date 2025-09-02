import { CreditCard } from "lucide-react";
import PlaceholderPage from "./PlaceholderPage";

export default function Payments() {
  return (
    <PlaceholderPage
      title="Centrum płatności"
      description="Zarządzaj metodami płatności, przeglądaj historię transakcji i konfiguruj automatyczne płatności."
      icon={CreditCard}
      features={[
        "Dodawanie i zarządzanie kartami płatniczymi",
        "Historia wszystkich transakcji",
        "Automatyczne płatności cykliczne", 
        "Faktury i paragony elektroniczne",
        "Zwroty i reklamacje płatności",
        "Powiadomienia o płatnościach",
        "Analityka wydatków miesięcznych",
        "Eksport raportów finansowych"
      ]}
    />
  );
}
