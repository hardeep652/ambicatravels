"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface PackageImageCarouselProps {
  images: string[];
  fallback: string;
  alt: string;
}

export default function PackageImageCarousel({
  images,
  fallback,
  alt,
}: PackageImageCarouselProps) {
  const validImages = images.length > 0 ? images : [fallback];
  const [current, setCurrent] = useState(0);

  const previous = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrent((prev) =>
      prev === 0 ? validImages.length - 1 : prev - 1
    );
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrent((prev) =>
      prev === validImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative h-full w-full">
      <Image
        src={validImages[current]}
        alt={`${alt} - image ${current + 1}`}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500"
      />

      {validImages.length > 1 && (
        <>
          <button
            type="button"
            onClick={previous}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-md backdrop-blur transition hover:bg-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-md backdrop-blur transition hover:bg-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/25 px-2 py-1 backdrop-blur-sm">
            {validImages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrent(index);
                }}
                aria-label={`Go to image ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  index === current ? "w-5 bg-white" : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}