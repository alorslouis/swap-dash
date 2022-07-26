import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import LoginButton from "./loginButton";
import { useSession } from "next-auth/react";

// function to compare supabase data with localstorage, return the freshest

export default function Layout({ children, pageTitle }: any) {
  const { data: session, status } = useSession();

  return (
    <>
      <Head>
        <title>{pageTitle ?? "ShopSwap"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="SwapShop" key="ogtitle" />
        <meta
          property="og:description"
          content="custom couture, hecho en barcelona"
          key="ogdesc"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="container flex flex-col mx-auto ">
        <nav className="text-center py-4 items-center flex-wrap">
          <div className="flex flex-row flex-grow mx-6 items-center justify-center">
            <Link href="/">
              <div className="flex items-center">
                <div className="m-4 hover:rotate-90 transition ease-linear duration-300">
                  <Image
                    src="/image05.png"
                    alt="swapshop logo"
                    width={60}
                    height={60}
                    layout="fixed"
                  />
                </div>
                <h1 className="text-bold font-black text-4xl text-center cursor-pointer">
                  ShopSwap
                </h1>
              </div>
            </Link>
          </div>

          <div className="ml-auto flex-0 px-4">
            <LoginButton />
          </div>
        </nav>
        {status === "authenticated" ? (
          <main className="text-center mb-12">{children}</main>
        ) : (
          <main className="text-center mb-12">please sign in</main>
        )}
        {/* <main className="text-center mb-12">{children}</main> */}

        {/* <footer className="text-center">
          <p>footer</p>
        </footer> */}
      </div>
    </>
  );
}
