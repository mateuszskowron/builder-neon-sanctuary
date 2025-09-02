import { Calendar, Clock, Plus, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Kalendarz</h1>
          <p className="text-muted-foreground">
            Zarządzaj terminami i spotkaniami
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nowy termin
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Kalendarz</CardTitle>
              <CardDescription>
                Widok kalendarza będzie dostępny wkrótce
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 border-2 border-dashed border-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interfejs kalendarza w przygotowaniu</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Nadchodzące spotkania</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "Konsultacja prawna", time: "Jutro 10:00", type: "meeting" },
                { title: "Termin płatności", time: "26 stycznia", type: "deadline" },
                { title: "Przegląd dokumentów", time: "28 stycznia 14:00", type: "review" },
              ].map((event, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                  </div>
                  <Badge variant="outline">{event.type}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Planowane funkcje</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Pełny kalendarz z widokami miesięcznymi/tygodniowymi</li>
                <li>Tworzenie i edycja wydarzeń</li>
                <li>Powiadomienia e-mail i SMS</li>
                <li>Synchronizacja z Google Calendar</li>
                <li>Udostępnianie terminów zespołowi</li>
                <li>Zarządzanie dostępnością</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
