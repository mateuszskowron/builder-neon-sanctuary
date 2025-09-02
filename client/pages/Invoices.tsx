import { Receipt, Download, Eye, CreditCard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Invoices() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Moje faktury</h1>
          <p className="text-muted-foreground">
            Przegląd i zarządzanie fakturami
          </p>
        </div>
        <Button>
          <CreditCard className="mr-2 h-4 w-4" />
          Dodaj metodę płatności
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Do zapłaty</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">2,450 PLN</div>
            <p className="text-xs text-muted-foreground">3 nieopłacone faktury</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ten miesiąc</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,340 PLN</div>
            <p className="text-xs text-muted-foreground">12 faktur wystawionych</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Łącznie w roku</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94,580 PLN</div>
            <p className="text-xs text-muted-foreground">128 faktur</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ostatnie faktury</CardTitle>
          <CardDescription>
            Przegląd najnowszych faktur i ich statusów
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Numer faktury</TableHead>
                <TableHead>Data wystawienia</TableHead>
                <TableHead>Kwota</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Akcje</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { id: "2024-001", date: "2024-01-20", amount: "2,500.00 PLN", status: "paid" },
                { id: "2024-002", date: "2024-01-15", amount: "1,200.00 PLN", status: "overdue" },
                { id: "2024-003", date: "2024-01-10", amount: "850.00 PLN", status: "pending" },
                { id: "2024-004", date: "2024-01-05", amount: "3,200.00 PLN", status: "paid" },
              ].map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">#{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        invoice.status === "paid" ? "default" :
                        invoice.status === "overdue" ? "destructive" : "secondary"
                      }
                    >
                      {invoice.status === "paid" ? "Opłacona" :
                       invoice.status === "overdue" ? "Przeterminowana" : "Oczekująca"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Planowane funkcje</CardTitle>
          <CardDescription>
            Funkcje, które będą dostępne w pełnej wersji:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Automatyczne płatności cykliczne</li>
            <li>Eksport faktur do różnych formatów</li>
            <li>Historia płatności i zwrotów</li>
            <li>Powiadomienia o terminach płatności</li>
            <li>Analityka wydatków i raportowanie</li>
            <li>Integracja z systemami księgowymi</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
