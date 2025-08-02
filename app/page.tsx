import Head from "next/head";
import Home from "./home/page";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/Portfolio.png" />
      </Head>
      <Home />
    </>
  );
}
