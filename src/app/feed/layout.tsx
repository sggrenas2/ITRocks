import { FeedLayout as Layout } from "@/components/layouts/Feed";

export const FeedLayout = (
    {
        children
    }: Readonly<{
  children: React.ReactNode;
}>
) => { 
    return (
        <Layout>
            {children}
        </Layout>
    )
}

export default FeedLayout;