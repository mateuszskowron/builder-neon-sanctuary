import { User, Mail, Phone, MapPin, Building, Edit, Shield, Key } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Profile() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profil klienta</h1>
          <p className="text-muted-foreground">
            Zarządzaj informacjami o swoim koncie
          </p>
        </div>
        <Button>
          <Edit className="mr-2 h-4 w-4" />
          Edytuj profil
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Informacje osobiste</CardTitle>
            <CardDescription>
              Twoje dane kontaktowe i informacje o koncie
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg" alt="Jan Kowalski" />
                <AvatarFallback className="text-lg">JK</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">Jan Kowalski</h3>
                <p className="text-muted-foreground">Klient Premium</p>
                <Badge variant="secondary">Aktywny od 2022</Badge>
              </div>
            </div>

            <Separator />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">jan.kowalski@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Telefon</p>
                    <p className="text-sm text-muted-foreground">+48 123 456 789</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Adres</p>
                    <p className="text-sm text-muted-foreground">ul. Przykładowa 123<br />00-001 Warszawa</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Firma</p>
                    <p className="text-sm text-muted-foreground">Example Sp. z o.o.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Status konta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Plan</span>
                <Badge>Premium</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Ważny do</span>
                <span className="text-sm text-muted-foreground">31.12.2024</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Wykorzystanie</span>
                <span className="text-sm text-muted-foreground">75%</span>
              </div>
              <Button className="w-full" variant="outline">
                Zarządzaj planem
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bezpieczeństwo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Key className="mr-2 h-4 w-4" />
                Zmień hasło
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Shield className="mr-2 h-4 w-4" />
                Autoryzacja dwuskładnikowa
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Sesje aktywne
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Statystyki konta</CardTitle>
          <CardDescription>
            Podsumowanie Twojej aktywności
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <p className="text-2xl font-bold">47</p>
              <p className="text-sm text-muted-foreground">Zrealizowanych spraw</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">124</p>
              <p className="text-sm text-muted-foreground">Dokumentów</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">2.5 lat</p>
              <p className="text-sm text-muted-foreground">Czas współpracy</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">98%</p>
              <p className="text-sm text-muted-foreground">Zadowolenie</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Funkcje w przygotowaniu</CardTitle>
          <CardDescription>
            Planowane udoskonalenia profilu:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Edycja danych osobowych online</li>
            <li>Upload zdjęcia profilowego</li>
            <li>Preferencje powiadomień</li>
            <li>Historia logowań</li>
            <li>Eksport danych RODO</li>
            <li>Integracja z mediami społecznościowymi</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
