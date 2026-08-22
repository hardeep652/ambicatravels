"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function RotatingPackageImage({
  images,
  alt,
  sizes,
  className,
}: {
  images: string[];
  alt: string;
  sizes: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const id = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(id);
    }
  }, [images.length]);

  return (
    <Image
      src={images[index]}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
    />
  );
}
