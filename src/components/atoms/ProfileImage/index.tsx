'use client'
import { FC } from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/store/hooks';

export const ProfileImage: FC<ProfileImageProps> = ({
    src,
    alt,
    size = 'md',
    className = '',
}) => {
    const image = useAppSelector(state => state.auth.image)
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
    };

    return (
        <div className='rounded-full bg-[linear-gradient(145deg,_#001c39,_#002143)] [box-shadow:5px_5px_8px_#00172e69,_-5px_-5px_8px_#00275094] p-2 w-fit h-fit'>
            <div className={`relative rounded-full overflow-hidden ${sizeClasses[size]} ${className}`}>
                <Image
                    src={src ?? (image !== '' ? image : '/vercel.svg')} // Fallback to default avatar
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        </div>
    );
};