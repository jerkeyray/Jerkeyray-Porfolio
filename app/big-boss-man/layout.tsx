import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.isAdmin) {
    return redirect("/signin"); // Updated from "/big-boss-man/signin"
  }

  return <>{children}</>;
}