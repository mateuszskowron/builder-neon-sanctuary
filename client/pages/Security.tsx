import { Shield } from "lucide-react";
import PlaceholderPage from "./PlaceholderPage";

export default function Security() {
  return (
    <PlaceholderPage
      title="Bezpieczeństwo"
      description="Zarządzaj ustawieniami bezpieczeństwa konta, autoryzacją dwuskładnikową i aktywnymi sesjami."
      icon={Shield}
      features={[
        "Autoryzacja dwuskładnikowa (2FA)",
        "Zarządzanie aktywnymi sesjami",
        "Historia logowań i aktywności",
        "Powiadomienia o podejrzanej aktywności",
        "Backup codes dla 2FA",
        "Przegląd uprawnień aplikacji",
        "Szyfrowanie danych osobowych",
        "Bezpieczne udostępnianie dokumentów"
      ]}
    />
  );
}
