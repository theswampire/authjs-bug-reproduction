import Link from "next/link";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function Secure() {
  const session = await auth();
  if (!session) redirect("/signin");

  return (
    <main>
      <h1>Secure</h1>
      <Link href="/">Home</Link>
      <form
        className="mt-2"
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="bg-neutral-300">SignOut</button>
      </form>
    </main>
  );
}
