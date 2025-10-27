import NextAuth, { Session } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Twitter from "next-auth/providers/twitter";
import { validateUser } from "@/utils/validators"
import { JWT } from "@auth/core/jwt";
import { User } from "@auth/core/types";

export const authOptions = {
  pages:{
    signIn: '/auth/sign_in',
    signOut: '/auth/sign_in',
    error: '/auth/sign_in',
  },
  providers: [
    Credentials({
      name: "Credentials",
      authorize: async (credentials) => {

        const user = await validateUser(credentials.email as string, credentials.password as string)
        
        if (user) {
          return {...user, ...credentials};
        } else {
          return null;
        }
      },
    }),
    Twitter({
      profile: async(profile)=>{
        return {
          name: profile.data.username,
          image: profile.data.profile_image_url,
          id: profile.data.id,
        }
      }
    }),
  ],
  callbacks:{
    jwt: ({ token, user }: { token: JWT; user: User }) => {
      if(user){
        token.id = user.id
      }
      return token;
    },
    session: ({session, token}:{session: Session; token: JWT}) => {
      if(session.user)
        session.user.id = token.id as string
      return session
    }
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
