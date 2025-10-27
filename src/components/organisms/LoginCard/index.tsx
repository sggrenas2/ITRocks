import { LoginForm } from '@/components/molecules/Login';
import { SocialSignIn } from '@/components/molecules/SocialSignIn';

export const LoginCard = () => {

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
    </div>
  );
};