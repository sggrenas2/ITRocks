import clsx from "clsx";

const getClasses = ({sizeInput, isValid}:Partial<InputStyleProps>) => {
    return clsx(
        'rounded-md border border-oxford-blue bg-platinum/80 p-2 outline-none transition-colors',
        {
            'w-full': sizeInput === 'full',
            'min-w-3xs w-1/2': sizeInput === 'medium',
            'min-w-[8rem] w-1/4': sizeInput === 'small',
            'bg-red-custom/20 border-[2px] border-red-custom': !isValid
        }
    );
}

export default getClasses;