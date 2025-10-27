import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "icon";
  authBehavior?: AuthBehavior | null;
  label?: string;
  size?: "full" | "medium" | "small";
  isLoading?: boolean;
  action?: () => void;
  children?: React.ReactNode;
}

export interface LoginBehavior {
  type: "login";
  provider: string;
  options: SignInOptions;
}

export interface LogoutBehavior {
  type: "logout";
  options: SignOutParams;
}

export type AuthBehavior = LoginBehavior | LogoutBehavior;
