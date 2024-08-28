import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export default function DetailCarousel() {
  const images = [
    "/detailcarousel/single-product-1-cover-2.jpg",
    "/detailcarousel/single-product-1-thumb-1.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    api?.scrollTo(index);
  };

  return (
    <div className="mx-10 mt-20 flex w-full max-w-3xl flex-col items-center justify-center">
      <Carousel
        ref={carouselRef}
        setApi={setApi}
        className="w-1/2"
        index={currentIndex}
        setIndex={setCurrentIndex}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-square w-full">
                <img
                  src={src}
                  alt={`Furniture image ${index + 1}`}
                  className="flex h-[277px] w-[348px] object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="absolute left-2 top-1/2 -translate-y-1/2 border-none text-white"
          noBackground="true"
        />
        <CarouselNext
          className="absolute right-10 top-1/2 -translate-y-1/2 border-none text-white"
          noBackground="true"
        />
      </Carousel>

      <div className="mt-4 flex justify-center space-x-2">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={cn(
              "h-16 w-16 overflow-hidden rounded-md border-2",
              currentIndex === index ? "border-gray-400" : "border-transparent",
            )}
          >
            <img src={src} alt={`Thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
