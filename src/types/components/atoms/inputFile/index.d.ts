interface InputFileProps {
    action?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errorAction?: (event: React.SyntheticEvent<HTMLInputElement, Event>) => void;
    errorMessage?: string;
    initialValue: string | null;
}
