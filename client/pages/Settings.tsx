import { Settings as SettingsIcon } from "lucide-react";
import PlaceholderPage from "./PlaceholderPage";

export default function Settings() {
  return (
    <PlaceholderPage
      title="Ustawienia"
      description="Personalizuj swoje doświadczenie, zarządzaj preferencjami i konfiguracją konta."
      icon={SettingsIcon}
      features={[
        "Preferencje powiadomień e-mail i SMS",
        "Ustawienia języka i regionu",
        "Personalizacja interfejsu",
        "Konfiguracja automatycznych akcji",
        "Zarządzanie uprawnieniami",
        "Integracje z aplikacjami zewnętrznymi", 
        "Backup i synchronizacja danych",
        "Ustawienia prywatności RODO"
      ]}
    />
  );
}
