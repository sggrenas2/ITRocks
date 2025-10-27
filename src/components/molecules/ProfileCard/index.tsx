import { ProfileImage } from "@/components/atoms/ProfileImage"
import { ProfileContent } from "@/components/atoms/ProfileContent"
import { Button } from "@/components/atoms/Button"
import StoreProvider from "@/store/provider";

export const ProfileCard = () => {
    return (
        <section className="max-w-150 flex rounded-lg bg-oxford-blue border border-oxford-blue/90">
            <div className="w-1/3 grid place-items-center rounded-l-lg p-5 bg-[linear-gradient(145deg,_#0c3055,_#0a2947)] [box-shadow:7px_7px_21px_#001429]">
                <StoreProvider>
                    <ProfileImage
                        alt='Profile Image'
                        size="lg"
                    />
                </StoreProvider>
            </div>
            <div className="w-2/3 flex flex-col gap-[1rem] rounded-r-lg px-2 py-6 bg-[#0b2d4f] [box-shadow:inset_7px_7px_21px_#001429,_inset_-7px_-7px_21px_#002a55]">
                <StoreProvider>
                    <ProfileContent />
                </StoreProvider>
                <Button
                    className="rounded-md text-platinum w-1/3 bg-platinum/10 self-center border-[2px] border-platinum"
                    authBehavior={
                        {
                            type: 'logout',
                            options: {
                            redirectTo: "/auth/sign_in"
                            }
                        }
                    }
                >
                    <span>Sign Out</span>
                </Button>
            </div>
        </section>
    )
}