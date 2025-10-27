'use client'

import Image from "next/image";
import { useState } from "react";

export const InputFile = ({
    action,
    errorAction,
    errorMessage,
    initialValue=null
}: InputFileProps) => {
    const [loadedImage, setLoadedImage] = useState<string | null>(initialValue);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(action) action(event);
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLoadedImage(reader.result as string);
            }
            reader.readAsDataURL(file);
        }
    }

    const handleError = (event: React.SyntheticEvent<HTMLInputElement, Event>) => {
        if(errorAction) errorAction(event);
        setError(errorMessage || "Failed to load image");
        setTimeout(() => {
            setError(null);
        }, 3000);
    }

    return (
        <>
            <label className={"border-dashed border-2 border-platinum/50 rounded-md p-4 cursor-pointer flex flex-col justify-center items-center max-w-30 max-h-30 w-full h-full overflow-hidden"}>
                {
                    loadedImage ? (
                        <div className="relative w-full aspect-square">
                            <Image
                                src={loadedImage}
                                alt=""
                                fill
                                objectFit="cover"
                            />
                        </div>
                    ) : (
                        <>
                            <svg className="w-8 h-8 text-platinum/50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <span className="text-xs text-platinum/50">Pick an image</span>
                        </>
                    )
                }
                <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleChange}
                    onError={handleError}
                    className="hidden"
                />
            </label>
            {
                error && <p className="text-xs text-red-400 tracking-wide font-bold">{error}</p>
            }
        </>
    )

}