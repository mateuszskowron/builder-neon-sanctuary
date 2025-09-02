import { HelpCircle } from "lucide-react";
import PlaceholderPage from "./PlaceholderPage";

export default function Support() {
  return (
    <PlaceholderPage
      title="Pomoc i wsparcie"
      description="Znajdź odpowiedzi na najczęściej zadawane pytania, skontaktuj się z obsługą klienta i uzyskaj pomoc techniczną."
      icon={HelpCircle}
      features={[
        "Baza wiedzy i FAQ",
        "Chat na żywo z obsługą klienta",
        "System zgłoszeń i śledzenia problemów",
        "Przewodniki krok po kroku",
        "Webinary i materiały edukacyjne",
        "Wsparcie techniczne 24/7",
        "Community forum użytkowników",
        "Zdalny dostęp dla rozwiązywania problemów"
      ]}
    />
  );
}
