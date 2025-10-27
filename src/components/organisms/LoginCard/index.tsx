'use client';
import { LoginForm } from '@/components/molecules/Login';
import { SocialSignIn } from '@/components/molecules/SocialSignIn';
import {useEffect, useState } from 'react';

export const LoginCard = () => {

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const errorParam = queryParams.get('error');
    if (errorParam) {
      setError(decodeURIComponent(errorParam));
    }
  }, []);

  return (
    <div className="rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Iniciar sesión
      </h2>
      <LoginForm />
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">
              O continúa con
            </span>
          </div>
        </div>
        <SocialSignIn />
      </div>
      {
        error && (
          <div className="mt-4 rounded-md bg-red-50 p-4">
            <p className="text-sm text-red-custom">Ocurrio un error, por favor revisa tus datos e intentalo de nuevo</p>
          </div>)
      }
    </div>
  );
};