import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1>Public</h1>
      <Link href="/secure">Secure</Link>
    </main>
  );
}
