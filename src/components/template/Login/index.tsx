import { LoginCard } from '@/components/organisms/LoginCard';
import StoreProvider from '@/store/provider';

export const LoginTemplate = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center">
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
            Bienvenido a la App
          </h1>
        </div>
        <StoreProvider>
          <LoginCard />
        </StoreProvider>
      </div>
    </div>
  );
};