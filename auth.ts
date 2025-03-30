import NextAuth, { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import { Session, User, Profile, Account } from "next-auth";

// Use env variable for GitHub ID
const ALLOWED_GITHUB_ID = process.env.ALLOWED_GITHUB_ID;

export const authConfig: NextAuthConfig = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/big-boss-man/signin",
  },
  callbacks: {
    async signIn({
      user,
      account,
      profile,
    }: {
      user: User;
      account: Account | null;
      profile?: Profile;
    }) {
      if (!ALLOWED_GITHUB_ID) {
        throw new Error(
          "ALLOWED_GITHUB_ID is not set in environment variables"
        );
      }
      if (
        account?.provider === "github" &&
        profile?.id?.toString() === ALLOWED_GITHUB_ID
      ) {
        return true;
      }
      return false;
    },
    async session({ session, token }: { session: Session; token: any }) {
      if (token.sub) {
        session.user.id = token.sub;
        session.isAdmin = token.sub === ALLOWED_GITHUB_ID;
      }
      return session;
    },
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // Always redirect to /big-boss-man after sign in
      return `${baseUrl}/big-boss-man`;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
