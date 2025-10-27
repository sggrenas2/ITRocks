"use client";
import { getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/atoms/Button";
import AuthProvider from '@/lib/nextauth/Wrapper'

export const SocialSignIn = () => {
  const [providers, setProviders] = useState<string[]>([]);

  useEffect(() => {
    getProviders().then((data) => {
      const valores = data && Object.keys(data);
      setProviders(valores?.filter((value) => value !== "credentials") ?? []);
    });
  }, []);

  return (
    <AuthProvider>
      <div className="mt-6 flex gap-1 justify-center">
        {providers.map((provider) => (
          <Button
            key={provider}
            variant="icon"
            size="small"
            type="button"
            authBehavior={{
              type: 'login',
              provider,
              options: {
                redirectTo: "/feed"
              }
            }}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M13.9048 10.4699L21.3509 2H19.5864L13.1187 9.35213L7.95564 2H2L9.80822 13.1194L2 22H3.76451L10.591 14.234L16.0444 22H22L13.9048 10.4699ZM11.4879 13.2172L10.6954 12.1092L4.40052 3.30031H7.11089L12.1924 10.4113L12.9817 11.5193L19.5864 20.7616H16.8761L11.4879 13.2172Z"
                fill="currentColor"
              ></path>
            </svg>
          </Button>
        ))}
      </div>
    </AuthProvider>
  );
};
