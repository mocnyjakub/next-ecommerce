import { type Product } from "@/types";
import { formatMoney } from "@/utils";

type ProductCardDescriptionProps = {
	product: Product;
};

export default function ProductCardDescription({
	product: { name, category, price },
}: ProductCardDescriptionProps) {
	const formattedPrice = formatMoney(price);
	return (
		<div className="px-6 py-4">
			<div className="mb-2 text-xl font-bold">{name}</div>
			<p className="text-base text-gray-700">
				Category: <span className="font-bold">{category}</span>
			</p>
			<p className="text-base text-gray-700">
				Price: <span className="font-bold">{formattedPrice}</span>
			</p>
		</div>
	);
}
