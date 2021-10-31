import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Error 420</title>
        <meta property="og:title" content="Error 420" />
        <meta property="og:description" content="No website was found here." />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta property="og:image" content="" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:text:title" content="Error 420" />
      </Head>
      <h1>
        <a href="#">420 error</a>: Website not found
      </h1>
      <p>
        No website was found here. Maybe you should explore other parts of the
        World Wide Web instead?
      </p>
    </div>
  );
}
