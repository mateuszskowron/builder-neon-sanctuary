import {
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  CreditCard,
  FileText,
  ShoppingCart,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: React.ComponentType<{ className?: string }>;
}

function MetricCard({ title, value, change, changeType, icon: Icon }: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground flex items-center">
          {changeType === "positive" ? (
            <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
          ) : (
            <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
          )}
          <span className={changeType === "positive" ? "text-green-500" : "text-red-500"}>
            {change}
          </span>
          <span className="ml-1">w tym miesiącu</span>
        </p>
      </CardContent>
    </Card>
  );
}

interface RecentActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;
  status: "completed" | "pending" | "warning";
  type: "invoice" | "order" | "case" | "payment";
}

const recentActivities: RecentActivityItem[] = [
  {
    id: "1",
    title: "Faktura #2024-001",
    description: "Opłacona - 2,500.00 PLN",
    time: "2 godziny temu",
    status: "completed",
    type: "invoice",
  },
  {
    id: "2",
    title: "Zamówienie #ORD-2024-158",
    description: "W trakcie realizacji",
    time: "5 godzin temu",
    status: "pending",
    type: "order",
  },
  {
    id: "3",
    title: "Sprawa prawna #CASE-2024-042",
    description: "Wymaga odpowiedzi",
    time: "1 dzień temu",
    status: "warning",
    type: "case",
  },
  {
    id: "4",
    title: "Płatność automatyczna",
    description: "Pomyślnie przetworzona - 890.00 PLN",
    time: "2 dni temu",
    status: "completed",
    type: "payment",
  },
];

function getStatusIcon(status: RecentActivityItem["status"]) {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case "pending":
      return <Clock className="h-4 w-4 text-yellow-500" />;
    case "warning":
      return <AlertCircle className="h-4 w-4 text-red-500" />;
  }
}

function getTypeIcon(type: RecentActivityItem["type"]) {
  switch (type) {
    case "invoice":
      return <FileText className="h-4 w-4 text-blue-500" />;
    case "order":
      return <ShoppingCart className="h-4 w-4 text-purple-500" />;
    case "case":
      return <FileText className="h-4 w-4 text-orange-500" />;
    case "payment":
      return <CreditCard className="h-4 w-4 text-green-500" />;
  }
}

export default function Dashboard() {
  const currentMonth = new Date().toLocaleDateString("pl-PL", { 
    month: "long", 
    year: "numeric" 
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Panel główny</h1>
        <p className="text-muted-foreground">
          Przegląd Twojej aktywności za {currentMonth}
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Aktywne sprawy"
          value="12"
          change="+2"
          changeType="positive"
          icon={FileText}
        />
        <MetricCard
          title="Nowe faktury"
          value="8"
          change="+3"
          changeType="positive"
          icon={CreditCard}
        />
        <MetricCard
          title="Zamówienia"
          value="24"
          change="-1"
          changeType="negative"
          icon={ShoppingCart}
        />
        <MetricCard
          title="Łączne wydatki"
          value="15,840 PLN"
          change="+12%"
          changeType="positive"
          icon={DollarSign}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Activity */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Ostatnia aktywność</CardTitle>
            <CardDescription>
              Przegląd najnowszych wydarzeń na Twoim koncie
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={activity.id}>
                <div className="flex items-start space-x-4">
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(activity.type)}
                    {getStatusIcon(activity.status)}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
                {index < recentActivities.length - 1 && (
                  <Separator className="my-4" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions & Summary */}
        <div className="col-span-3 space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Szybkie akcje</CardTitle>
              <CardDescription>
                Najczęściej używane funkcje
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Dodaj nową sprawę
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Zarezerwuj termin
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <CreditCard className="mr-2 h-4 w-4" />
                Sprawdź faktury
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Nowe zamówienie
              </Button>
            </CardContent>
          </Card>

          {/* Monthly Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Miesięczny postęp</CardTitle>
              <CardDescription>
                Realizacja celów na {currentMonth}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Rozwiązane sprawy</span>
                  <span className="font-medium">8 / 10</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Opłacone faktury</span>
                  <span className="font-medium">12 / 15</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Realizacja budżetu</span>
                  <span className="font-medium">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>

              <div className="pt-2">
                <div className="flex items-center text-sm text-green-600">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  <span>+15% poprawa w stosunku do zeszłego miesiąca</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Nadchodzące wydarzenia</CardTitle>
              <CardDescription>
                Twoje najbliższe terminy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-muted-foreground">STY</span>
                  <span className="text-lg font-bold">24</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Spotkanie prawne</p>
                  <p className="text-xs text-muted-foreground">10:00 - Kancelaria prawna</p>
                </div>
                <Badge variant="outline">Jutro</Badge>
              </div>
              
              <Separator />
              
              <div className="flex items-center space-x-3">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-muted-foreground">STY</span>
                  <span className="text-lg font-bold">26</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Termin płatności</p>
                  <p className="text-xs text-muted-foreground">Faktura #2024-002</p>
                </div>
                <Badge variant="secondary">3 dni</Badge>
              </div>

              <Separator />
              
              <div className="flex items-center space-x-3">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-muted-foreground">LUT</span>
                  <span className="text-lg font-bold">02</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Przegląd kontraktu</p>
                  <p className="text-xs text-muted-foreground">Roczna ocena</p>
                </div>
                <Badge variant="outline">9 dni</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
