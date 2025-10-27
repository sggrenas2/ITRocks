'use client';
import { useState, useCallback } from 'react';
import { useGesture } from '@use-gesture/react';
import { CarouselButton } from '@/components/atoms/CarrouselButton';
import { CarouselIndicators } from '@/components/molecules/CarrouselIndicators';
import { CarouselSlide } from '@/components/atoms/CarrouselSlide';

export const Carousel = ({ 
  images, 
  threshold = 3, // pixels mínimos para considerar un swipe
  className = ''
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Configuración de los gestos
  const bind = useGesture(
    {
      onDrag: ({ movement: [mx], direction: [xDir], distance, cancel }) => {
        
        setIsDragging(true);
        
        if (distance[0] > threshold) {
          if (xDir < 0) {
            nextSlide();
          } else {
            prevSlide();
          }
          cancel();
        }
      },
      onDragEnd: () => {
        setIsDragging(false);
      },
    },
    {
      drag: {
        bounds: { left: -threshold, right: threshold },
        rubberband: true,
      },
    }
  );

  return (
    <div className="relative w-full" data-carousel="static">
      <div 
        className={`relative h-56 overflow-hidden rounded-lg md:h-96 touch-pan-y ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        } ${className}`}
        {...bind()}
      >
        {images.map((image, index) => (
          <CarouselSlide
            key={index}
            imageUrl={image.url}
            alt={image.alt}
            isActive={currentSlide === index}
          />
        ))}
      </div>
      
      {
        images.length > 1 && (
          <>
            <CarouselIndicators
              totalSlides={images.length}
              currentSlide={currentSlide}
              onSelect={goToSlide}
            />
      
            <CarouselButton direction="prev" onClick={prevSlide} />
            <CarouselButton direction="next" onClick={nextSlide} />
          </>
        )
      }
    </div>
  );
};