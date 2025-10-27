import { LoginTemplate } from "@/components/template/Login";
import { redirect } from 'next/navigation'
import { auth } from "@/lib/nextauth/auth";

export default async function Home() {
  const session = await auth();
  
  if(!session || !session.user){
    redirect('/auth/sign_in')
  }

  redirect('/feed')

  return (
    <>
      <LoginTemplate />
    </>
  );
}
