import { HTMLAttributes } from 'react';

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right';
  children: React.ReactNode;
}
