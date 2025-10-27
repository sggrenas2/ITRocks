'use client'

import { signIn, signOut } from 'next-auth/react'
import { ButtonProps } from '@/types/components/atoms/button';
import getClasses from './style';

export const Button = ({ 
  children, 
  variant = 'primary',
  authBehavior = null,
  label = 'click here',
  size = 'full',
  action,
  isLoading = false,
  ...props 
}: ButtonProps) => {

  const classes = getClasses({variant, size, isLoading});

  const handleClick = () => {
    if(authBehavior){
      switch(authBehavior.type){
        case 'login':
          signIn(authBehavior.provider, authBehavior.options);
          break;
        case 'logout':
          signOut(authBehavior.options);
          break;
      }
    }
  }
  
  return (
    <button
      {...props}
      className={`${props.className || ''} ${classes} cursor-pointer`}
      disabled={isLoading}
      onClick={authBehavior ? () => handleClick() : action ? action : props.onClick}
    >
      {
        children ? children : 
        label
      }
    </button>
  );
};