import { HTMLAttributes } from 'react';

export interface SocialSignInProps extends HTMLAttributes<HTMLDivElement> {
  providers: Array<{
    name: string;
    icon?: string;
  }>;
  onSignIn: (provider: string) => void;
}
