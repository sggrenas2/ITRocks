import Image from 'next/image'

export const CarouselSlide = ({ imageUrl, isActive, alt = "" }: CarouselSlideProps) => {
  return (
    <div className={`${isActive ? '' : 'hidden'} duration-700 ease-in-out`}>
      <Image
        src={imageUrl}
        alt={alt}
        fill
      />
    </div>
  );
};