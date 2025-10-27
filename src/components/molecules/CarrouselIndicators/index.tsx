import { CarouselIndicator } from '@/components/atoms/CarrouselIndicator';

export const CarouselIndicators = ({ totalSlides, currentSlide, onSelect }: CarouselIndicatorsProps) => {
  return (
    <div className="absolute z-1 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <CarouselIndicator
          key={index}
          isActive={currentSlide === index}
          onClick={() => onSelect(index)}
          slideNumber={index}
        />
      ))}
    </div>
  );
};