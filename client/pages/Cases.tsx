import { FileText, Plus, Search, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Cases() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Moje sprawy</h1>
          <p className="text-muted-foreground">
            Zarządzaj swoimi sprawami prawnymi i dokumentami
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nowa sprawa
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Szukaj spraw..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filtry
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            id: "CASE-2024-042",
            title: "Umowa najmu lokalu",
            status: "active",
            priority: "high",
            lastUpdate: "2 dni temu",
          },
          {
            id: "CASE-2024-041",
            title: "Spór z kontrahent",
            status: "pending",
            priority: "medium",
            lastUpdate: "1 tydzień temu",
          },
          {
            id: "CASE-2024-040",
            title: "Rejestracja spółki",
            status: "completed",
            priority: "low",
            lastUpdate: "2 tygodnie temu",
          },
        ].map((caseItem) => (
          <Card key={caseItem.id} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{caseItem.title}</CardTitle>
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>#{caseItem.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge 
                    variant={
                      caseItem.status === "completed" ? "default" :
                      caseItem.status === "active" ? "secondary" : "outline"
                    }
                  >
                    {caseItem.status === "completed" ? "Zakończona" :
                     caseItem.status === "active" ? "Aktywna" : "Oczekująca"}
                  </Badge>
                  <Badge 
                    variant={
                      caseItem.priority === "high" ? "destructive" :
                      caseItem.priority === "medium" ? "secondary" : "outline"
                    }
                  >
                    {caseItem.priority === "high" ? "Wysoki" :
                     caseItem.priority === "medium" ? "Średni" : "Niski"}
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground">
                  {caseItem.lastUpdate}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Potrzebujesz więcej funkcji?</CardTitle>
          <CardDescription>
            Ta strona jest w trakcie rozwoju. Funkcje, które będą dostępne wkrótce:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Szczegółowe widoki spraw z historią zmian</li>
            <li>Upload i zarządzanie dokumentami</li>
            <li>System komentarzy i notatek</li>
            <li>Powiadomienia o terminach i statusach</li>
            <li>Eksport raportów do PDF</li>
            <li>Integracja z kalendarzem</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
