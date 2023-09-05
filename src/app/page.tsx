import ProductList from "@/components/organisms/ProductList";
import { type Product } from "@/types";

const products: Product[] = [
	{
		id: 1,
		name: "Product 1",
		category: "Category 1",
		price: 100,
		coverImage: {
			alt: "Product 1",
			src: "https://picsum.photos/200/300?random=1",
		},
	},
	{
		id: 2,
		name: "Product 2",
		category: "Category 2",
		price: 100,
		coverImage: {
			alt: "Product 2",
			src: "https://picsum.photos/200/300?random=2",
		},
	},
	{
		id: 3,
		name: "Product 3",
		category: "Category 3",
		price: 100,
		coverImage: {
			alt: "Product 3",
			src: "https://picsum.photos/200/300?random=3",
		},
	},
	{
		id: 4,
		name: "Product 4",
		category: "Category 4",
		price: 100,
		coverImage: {
			alt: "Product 4",
			src: "https://picsum.photos/200/300?random=4",
		},
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen items-center justify-center bg-gray-200 p-8">
			<ProductList products={products} />
		</main>
	);
}
