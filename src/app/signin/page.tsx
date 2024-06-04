import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      className="flex flex-col max-w-sm gap-2"
      action={async (formData) => {
        "use server";
        await signIn("credentials", formData);
      }}
    >
      <label>
        Password
        <input name="password" type="password" className="border" />
        <input name="redirectTo" type="hidden" value="/secure" />
      </label>
      <span>Password is &quot;password&quot;</span>
      <button className="bg-neutral-300">Sign In</button>
    </form>
  );
}
