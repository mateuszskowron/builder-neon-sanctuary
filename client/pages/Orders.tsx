import { ShoppingCart, Package, Truck, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Orders() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Zamówienia</h1>
          <p className="text-muted-foreground">
            Status i historia Twoich zamówień
          </p>
        </div>
        <Button>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Nowe zamówienie
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aktywne</CardTitle>
            <Package className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">W realizacji</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">W dostawie</CardTitle>
            <Truck className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">W transporcie</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Zrealizowane</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">Ten rok</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Łączna wartość</CardTitle>
            <ShoppingCart className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34,580 PLN</div>
            <p className="text-xs text-muted-foreground">W tym roku</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Aktywne zamówienia</CardTitle>
            <CardDescription>
              Zamówienia obecnie w realizacji
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { 
                id: "ORD-2024-158", 
                title: "Usługi prawne - pakiet podstawowy", 
                status: "processing", 
                progress: 65,
                date: "15 stycznia 2024"
              },
              { 
                id: "ORD-2024-157", 
                title: "Dokumenty korporacyjne", 
                status: "shipping", 
                progress: 85,
                date: "12 stycznia 2024"
              },
              { 
                id: "ORD-2024-156", 
                title: "Konsultacja biznesowa", 
                status: "processing", 
                progress: 30,
                date: "10 stycznia 2024"
              },
            ].map((order) => (
              <div key={order.id} className="space-y-3 border-b last:border-b-0 pb-4 last:pb-0">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{order.title}</p>
                    <p className="text-sm text-muted-foreground">#{order.id}</p>
                  </div>
                  <Badge 
                    variant={order.status === "shipping" ? "default" : "secondary"}
                  >
                    {order.status === "shipping" ? "W dostawie" : "W realizacji"}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Postęp realizacji</span>
                    <span>{order.progress}%</span>
                  </div>
                  <Progress value={order.progress} className="h-2" />
                </div>
                <p className="text-xs text-muted-foreground">Zamówiono: {order.date}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Historia zamówień</CardTitle>
            <CardDescription>
              Ostatnio zrealizowane zamówienia
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { id: "ORD-2024-155", title: "Rejestracja znaku towarowego", amount: "2,500 PLN", date: "Zrealizowane 8 stycznia" },
              { id: "ORD-2024-154", title: "Umowa o pracę - szablon", amount: "450 PLN", date: "Zrealizowane 5 stycznia" },
              { id: "ORD-2024-153", title: "Analiza prawna dokumentów", amount: "1,200 PLN", date: "Zrealizowane 2 stycznia" },
            ].map((order) => (
              <div key={order.id} className="flex items-center justify-between border-b last:border-b-0 pb-3 last:pb-0">
                <div>
                  <p className="font-medium">{order.title}</p>
                  <p className="text-sm text-muted-foreground">#{order.id}</p>
                  <p className="text-xs text-green-600">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{order.amount}</p>
                  <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Funkcje w przygotowaniu</CardTitle>
          <CardDescription>
            Planowane udoskonalenia systemu zamówień:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Śledzenie przesyłek w czasie rzeczywistym</li>
            <li>Automatyczne ponawianie zamówień</li>
            <li>Szczegółowa historia zmian statusu</li>
            <li>Powiadomienia SMS o zmianie statusu</li>
            <li>Ocena i recenzje zrealizowanych usług</li>
            <li>Eksport raportów zamówień</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
