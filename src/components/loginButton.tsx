import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button
          onClick={() => signOut()}
          className="p-4 my-4 text-white bg-slate-700 rounded-md"
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <div>
        {/* Not signed in <br /> */}
        <button
          onClick={() => signIn()}
          className="p-4 my-4 text-white bg-slate-700 rounded-md"
        >
          Sign in
        </button>
      </div>
    </>
  );
}
