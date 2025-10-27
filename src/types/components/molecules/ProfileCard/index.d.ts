import { HTMLAttributes } from 'react';

export interface ProfileCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  bio?: string;
  avatar?: string;
  followers?: number;
  following?: number;
}
