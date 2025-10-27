import { HTMLAttributes } from 'react';

export interface LoginProps extends HTMLAttributes<HTMLDivElement> {
  onSubmit: (email: string, password: string) => void;
  loading?: boolean;
  error?: string;
}
