interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    maxLength?: number;
    action?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    errorAction?: (message: string) => void;
    initialValue: string | null;
}