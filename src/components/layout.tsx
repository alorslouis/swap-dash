import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import LoginComponent from "./loginButton";

export default function Layout({ children, pageTitle }: any) {
  return (
    <>
      <Head>
        <title>{pageTitle ?? "ShopSwap"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="ShopSwap" key="ogtitle" />
        <meta
          property="og:description"
          content="custom couture, hecho en barcelona"
          key="ogdesc"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="container flex flex-col mx-auto ">
        <nav className="text-center py-4 flex flex-row items-center flex-wrap">
          <div className="flex flex-row flex-grow mx-6 items-center justify-center">
            <div className="m-4 hover:rotate-90 transition ease-linear duration-300">
              <Image
                src="/image05.png"
                alt="swapshop logo"
                width={60}
                height={60}
                layout="fixed"
              />
            </div>
            <Link href="/">
              <h1 className="text-bold font-black text-4xl text-center cursor-pointer">
                ShopSwap
              </h1>
            </Link>
          </div>
          <div className="mx-auto px-4">
            <LoginComponent />
          </div>
        </nav>
        <main className="text-center mb-12">{children}</main>

        {/* <footer className="text-center">
          <p>footer</p>
        </footer> */}
      </div>
    </>
  );
}
