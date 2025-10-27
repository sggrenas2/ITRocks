interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  sizeInput?: "full" | "medium" | "small";
  className?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InputStyleProps extends Partial<InputProps> {
  isValid?: boolean;
}