import { type Product } from "@/types";
import ProductCard from "@/components/molecules/ProductCard";

type ProductListProps = {
	products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
	return (
		<ul className="flex flex-wrap justify-center">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</ul>
	);
}
