import { Feed as FeedTemplate} from "@/components/template/Feed"
import StoreProvider from "@/store/provider";
import { redirect } from 'next/navigation'
import { auth } from "@/lib/nextauth/auth";

export default async function Feed() {
    const session = await auth()
    
    if(!session || !session.user) redirect('/auth/sign_in')
    
    return <>
        <StoreProvider>
            <FeedTemplate />
        </StoreProvider>
    </>
}