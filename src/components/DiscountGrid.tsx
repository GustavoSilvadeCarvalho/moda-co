import { DiscountCard } from "./DiscountCard"

export function DiscountGrid() {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            <DiscountCard text="peça" peca="1" porcentagem="10" />
            <DiscountCard text="peças" peca="2" porcentagem="20" />
            <DiscountCard text="peças" peca="3" porcentagem="30" />
            <DiscountCard text="peças" peca="4" porcentagem="40" />
        </div>
    );
}