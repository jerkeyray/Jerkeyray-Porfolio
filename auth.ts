import NextAuth, { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import { User } from "next-auth";

export const authConfig: NextAuthConfig = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({ user }: { user: User }) {
      const allowedEmail = process.env.ALLOWED_EMAIL;

      console.log("Sign-in attempt:", {
        userEmail: user.email,
        allowedEmail,
      });

      if (!allowedEmail) {
        console.error("ALLOWED_EMAIL is not set");
        return false;
      }

      const isAllowed = user.email === allowedEmail;
      console.log("Email auth comparison:", {
        userEmail: user.email,
        allowedEmail,
        isAllowed,
      });

      return isAllowed;
    },

    async session({ session }) {
      if (!session.user) return session;

      const allowedEmail = process.env.ALLOWED_EMAIL;
      session.isAdmin = session.user.email === allowedEmail;

      return session;
    },

    async redirect({ baseUrl }: { baseUrl: string }) {
      return `${baseUrl}/big-boss-man`;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);