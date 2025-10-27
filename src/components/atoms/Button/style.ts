import { ButtonProps } from "@/types/components/atoms/button";
import clsx from "clsx";

const getClasses = ({variant, size, isLoading}:Partial<ButtonProps>) => {
    return clsx(
        'overflow-hidden truncate rounded-[1rem] shadow-button backdrop-filter backdrop-blur-lg rounded-md px-4 py-2 transition-colors',
        {
            'bg-oxford-blue/90 border border-oxford-blue text-platinum hover:bg-oxford-blue/75': variant === 'primary',
            'border border-oxford-blue text-oxford-blue hover:bg-oxford-blue/80 hover:text-platinum': variant === 'secondary',
            'rounded-100 border border-oxford-blue p-2 grid place-items-center bg-oxford-blue/80 text-platinum hover:bg-oxford-blue/75 min-w-fit w-fit': variant === 'icon',
            'w-1/1': size === 'full',
            'min-w-3xs w-1/2': size === 'medium',
            'min-w-[8rem] w-1/4': size === 'small',
            'animate-bounce opacity-50 cursor-not-allowed': isLoading
        }
    );
}

export default getClasses;