import { MessageCircle } from "lucide-react";
import PlaceholderPage from "./PlaceholderPage";

export default function Messages() {
  return (
    <PlaceholderPage
      title="Komunikacja"
      description="Centrum komunikacji z zespołem, powiadomienia systemowe i historia korespondencji."
      icon={MessageCircle}
      features={[
        "Chat na żywo z zespołem obsługi",
        "Wiadomości systemowe i powiadomienia",
        "Historia całej korespondencji",
        "Załączniki i dokumenty w wiadomościach",
        "Powiadomienia push i e-mail",
        "Kategoryzacja wiadomości",
        "Wyszukiwanie w historii",
        "Grupowe konwersacje projektowe"
      ]}
    />
  );
}
