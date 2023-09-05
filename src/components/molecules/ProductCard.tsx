import ProductCardDescription from "@/components/atoms/ProductCardDescription";
import ProductCardImage from "@/components/atoms/ProductCardImage";
import { type Product } from "@/types";

type ProductCardProps = {
	product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
	return (
		<li className="m-4 transform overflow-hidden rounded shadow-lg transition-transform hover:scale-105">
			<ProductCardImage src={product.coverImage.src} alt={product.coverImage.alt} />
			<ProductCardDescription product={product} />
		</li>
	);
}
