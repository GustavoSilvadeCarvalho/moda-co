import { Newspaper, LaptopMinimalCheck, TicketPercent, Package } from "lucide-react"
import { BenefitsCard } from './BenefitsCard'

export function BenefitsGrid() {
    return (
        <div className="flex flex-wrap justify-center gap-10 mt-10">
            <BenefitsCard icon={Newspaper} text="Fique por dentro de todas as novidades" />
            <BenefitsCard icon={LaptopMinimalCheck} text="Compre online. Rápido, fácil e seguro" />
            <BenefitsCard icon={TicketPercent} text="Confira todos os cupons ativos" />
            <BenefitsCard icon={Package} text="Entrega rápida e segura" />
        </div>
    )
}