import { signIn } from "@/auth";
import { FaGithub } from "react-icons/fa";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button
        type="submit"
        className="w-full px-6 py-3 bg-[#FFFFFF] text-[#0F0F0F] text-lg font-bold 
          rounded-md border-4 border-[#FFFFFF] shadow-[4px_4px_0_#FFFFFF] 
          hover:bg-[#0F0F0F] hover:text-[#FFFFFF] hover:shadow-[6px_6px_0_#FFFFFF] 
          transition-all duration-200 flex items-center justify-center gap-2"
      >
        <FaGithub className="text-2xl" />
        Sign in with GitHub
      </button>
    </form>
  );
}
