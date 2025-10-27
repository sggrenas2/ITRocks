import { HTMLAttributes } from 'react';

export interface LoginCardProps extends HTMLAttributes<HTMLDivElement> {
  onLogin: (email: string, password: string) => void;
  onSocialLogin: (provider: string) => void;
  loading?: boolean;
  error?: string;
}
