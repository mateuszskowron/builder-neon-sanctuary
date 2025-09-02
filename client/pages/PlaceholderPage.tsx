import { Construction, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  features?: string[];
}

export default function PlaceholderPage({ 
  title, 
  description, 
  icon: Icon = Construction,
  features = []
}: PlaceholderPageProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Powrót do panelu
          </Link>
        </Button>
      </div>

      <div className="text-center py-12">
        <Icon className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
        <h1 className="text-3xl font-bold tracking-tight mb-2">{title}</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          {description}
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Strona w przygotowaniu</CardTitle>
            <CardDescription>
              Ta funkcjonalność jest obecnie rozwijana. Sprawdź ponownie wkrótce!
            </CardDescription>
          </CardHeader>
          <CardContent>
            {features.length > 0 && (
              <div>
                <h4 className="font-medium mb-3">Planowane funkcje:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Potrzebujesz pomocy z tą funkcją już teraz?
              </p>
              <Button asChild>
                <Link to="/support">Skontaktuj się z nami</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
