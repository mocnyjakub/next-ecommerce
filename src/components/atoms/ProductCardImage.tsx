/* eslint-disable @next/next/no-img-element */
import React from "react";

type ProductCardImageProps = {
	alt: string;
	src: string;
};

export default function ProductCardImage({ src, alt }: ProductCardImageProps) {
	return <img src={src} alt={alt} className="h-auto w-full" />;
}
