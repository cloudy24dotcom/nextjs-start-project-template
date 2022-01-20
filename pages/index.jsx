import HomeBanner from "../components/HomeBanner";
import Head from "next/head";
import Schemas from "../components/Schema";

export default function Home() {
  return (
    <>
      <Head>
        <title>index Title</title>
        <meta name="description" content="description content" />
        <Schemas
          PageNameForSchema="Web Hosting"
          lowpriceForSchema="89"
          highpriceForSchema="799"
          offerCountForSchema="5"
          reviewDateForSchema="2021-11-05"
        />
        <meta name="keywords" content="key1, key2, key3" />
      </Head>
      <div>
        <div className="main class">
          <HomeBanner />
          <h1>Index page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            augue vestibulum, auctor odio ultricies, accumsan magna. Nulla
            consectetur dolor euismod, congue tellus in, mollis dolor. In ut
            orci mollis, varius nisi eu, vestibulum ligula.
            <br />
            <br />
            In ac enim commodo, posuere odio ac, facilisis dui. Nulla rhoncus
            libero eget luctus auctor.
            <br />
            <br />
            Sed egestas dui ac metus tincidunt condimentum. Nullam eu nunc eget
            orci laoreet efficitur. Fusce ut eros nec leo ullamcorper
            scelerisque id eget ligula. Suspendisse iaculis eros nec dapibus
            semper. Praesent at tellus eget sapien auctor vulputate.
            <br />
            <br />
            Quisque sollicitudin elit id lectus convallis feugiat. Aenean at
            metus a dui maximus tincidunt.
            <br />
            <br />
            Aenean eu mi vulputate, aliquam ligula ac, fringilla nibh. Ut eu
            libero vel purus eleifend lacinia vitae et tortor. Sed ac tellus sit
            amet dolor ornare condimentum.
          </p>
        </div>
      </div>
    </>
  );
}
