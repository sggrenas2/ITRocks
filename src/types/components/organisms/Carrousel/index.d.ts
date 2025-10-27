interface CarouselProps {
  images: Array<CarouselImage>;
  autoplay?: boolean;
  interval?: number;
  threshold?: number; // umbral para considerar un swipe válido
  className?: string;
}

interface CarouselImage {
    url: string;
    alt?: string;
  }