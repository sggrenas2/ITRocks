
export const CarouselIndicator = ({ isActive, onClick, slideNumber }: CarouselIndicatorProps) => {
  return (
    <button
      type="button"
      className={`w-3 h-3 rounded-full ${isActive ? 'bg-white' : 'bg-white/50'}`}
      aria-current={isActive}
      aria-label={`Slide ${slideNumber + 1}`}
      onClick={onClick}
    />
  );
};