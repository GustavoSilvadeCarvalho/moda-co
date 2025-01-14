import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react" // Importa o tipo para ícones
import { ReactNode } from "react"

interface BenefitCardProps {
    icon: LucideIcon; // Ícone dinâmico
    text: ReactNode;  // Texto dinâmico
}

export function BenefitsCard({ icon: Icon, text }: BenefitCardProps) {
    return (
        <Card className="flex items-center justify-center min-w-[372px]">
            <CardContent className="flex items-center justify-center gap-2 p-5">
                <Icon className="h-6 w-6" />
                <p>{text}</p>
            </CardContent>
        </Card>
    )
}