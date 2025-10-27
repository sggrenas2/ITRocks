import { Button } from "@/components/atoms/Button";
import ProfileContent from "@/components/atoms/ProfileContent";
import { ProfileImage } from "@/components/atoms/ProfileImage";
import StoreProvider from "@/store/provider";

export const FeedLayout = ({
    children
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
        <>
            <header className="w-full z-10 mb-4 flex items-center justify-between bg-oxford-blue/80 backdrop-blur-md sticky top-0 left-0 p-4">
                <div className="flex items-center gap-2">
                    <StoreProvider>
                        <ProfileImage
                            size="md"
                            alt="Profile Image"
                            />
                        <ProfileContent 
                            className="hidden md:block"
                        />
                    </StoreProvider>
                </div>
                <h1 className="text-platinum font-bold text-lg">Feed</h1>
                <Button
                    variant="secondary"
                    size="small"
                    className="border-platinum text-platinum w-min hidden md:inline-block"
                    authBehavior={{
                        type: 'logout',
                        options: {
                            redirectTo: '/auth/sign_in',
                        },
                    }}
                >Cerrar Session</Button>
                <Button
                    variant="icon"
                    size="small"
                    className="border-platinum text-platinum w-min md:hidden"
                    authBehavior={{
                        type: 'logout',
                        options: {
                            redirectTo: '/auth/sign_in',
                        },
                    }}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                </Button>
                
            </header>
            <main className="px-6 md:px-4 sm:px-2">
                {children}
            </main>
        </>
    );
}