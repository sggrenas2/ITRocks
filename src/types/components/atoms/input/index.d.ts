interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  sizeInput?: "full" | "medium" | "small";
}

interface InputStyleProps extends Partial<InputProps> {
  isValid?: boolean;
}