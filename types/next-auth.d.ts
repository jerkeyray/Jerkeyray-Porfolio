// Removed unused import of NextAuth

declare module "next-auth" {
  interface Session {
    isAdmin: boolean;
  }
}
