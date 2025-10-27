'use client';
import { useState, FC } from "react";

export const TextArea: FC<TextAreaProps> = ({
    maxLength,
    action,
    errorAction,
    initialValue,
    ...props
}) => {

    const [error, setError] = useState<string | null>(initialValue);
    const [charCount, setCharCount] = useState<number>(0);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCharCount(event.target.value.length);
        if(action) action(event);
        if (maxLength) {
            if (event.target.value.length > maxLength) {
                if (errorAction) errorAction(`Maximum length of ${maxLength} characters exceeded.`);
                setError(`Maximum length of ${maxLength} characters exceeded.`);
            } else {
                setError(null);
            }
        }
    }

    return (
        <>
            <textarea 
                {...props}
                onChange={handleChange} 
            ></textarea>
            <div className="flex flex-inverse justify-between px-2 py-1">
                <div>
                    <p className="text-xs text-platinum">{maxLength ? `${charCount}/${maxLength} max` : "No limit"}</p>
                </div>
                {
                    error && (
                        <p className="text-xs text-red-400 tracking-wide font-bold">{error}</p>
                    )
                }
            </div>
        </>
    )
}   