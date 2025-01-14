import { Card, CardContent } from "@/components/ui/card";

interface DiscountCardProps {
  peca: string;
  porcentagem: string;
  text: string;
}

export function DiscountCard({ peca, porcentagem, text }: DiscountCardProps) {
  return (
    <Card className="rounded-full flex justify-center items-center w-40 h-40 p-0">
      <CardContent className="p-0">
        <div className="flex flex-col items-center justify-center">
          <h3>{peca} {text}</h3>
          <h1 className="text-xl text-center"><strong className="text-3xl">{porcentagem}%</strong>  de DESCONTO</h1>
        </div>
      </CardContent>
    </Card>
  );
}
