import Link from "next/link";
import {
  GOOGLE_SITE_VERIFICATION,
  DCTERMS_SUBJECT,
  SITE_URL,
  SITE_URL_ALTERNATE,
  YANDEX_SITE_VERIFICATION,
  TWITTER_USER_NAME,
  DOMAIN_VERIFY,
  BRAND_NAME_FOR_META_TAGS,
} from "./Constants";

export function getCurrentDate(separator = "-") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}

const MetaInfo = () => {
  return (
    <>
      {/* Meta tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=0"
      />

      <link
        rel="shortcut icon"
        href="/assets/images/favicon/favicon.ico"
        type="image/png"
        sizes="8x8"
      />
      <link
        rel="icon"
        href="/assets/images/favicon/apple-icon-57x57.png"
        type="image/gif"
        sizes="16x16"
      />
      <link rel="icon" type="image/x-icon" href="/assets/images/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/assets/images/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/assets/images/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/assets/images/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/assets/images/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/assets/images/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/assets/images/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/assets/images/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/assets/images/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/images/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/assets/images/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/ˇfavicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/assets/images/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/images/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/assets/images/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#f65935" />
      <meta
        name="msapplication-TileImage"
        content="/assets/images/favicon/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#f65935" />

      <meta name="name" content={BRAND_NAME_FOR_META_TAGS} />
      <meta
        name="image"
        content={`${SITE_URL}/assets/images/images/logo.png`}
      />
      <meta name="theme-color" content="#f65935" />

      <meta name="twitter:card" content={BRAND_NAME_FOR_META_TAGS} />
      <meta name="twitter:title" content={BRAND_NAME_FOR_META_TAGS} />
      <meta
        name="twitter:description"
        content="Follow us on Twitter for more updates"
      />
      <meta name="twitter:site" content={TWITTER_USER_NAME} />
      <meta name="twitter:creator" content={TWITTER_USER_NAME} />
      <meta
        name="twitter:image:src"
        content={`${SITE_URL}/assets/images/images/logo.png`}
      />

      <meta name="og:title" content={BRAND_NAME_FOR_META_TAGS} />
      <meta
        name="og:description"
        content="Hi, Are you looking for cheap web hosting at affordable prices & unlimited features. see our packages starting @ ₹89.00/Mo 🥳"
      />
      <meta
        name="og:image"
        content={`${SITE_URL}/assets/images/images/logo.png`}
      />
      {/*<!-- Clarity tracking code for https://cloudy24.com/ -->*/}
      <script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){ c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window, document, "clarity", "script", "9gzbux8wvd");`,
        }}
      />
      <meta name="og:url" content={SITE_URL} />
      <meta name="og:site_name" content="cloudy24.com" />
      <meta property="article:published_time" content={getCurrentDate()} />
      <meta property="article:modified_time" content={getCurrentDate()} />
      <meta name="og:locale" content="en_US" />
      <meta name="fb:admins" content="426676311506455" />
      <meta name="fb:app_id" content="426676311506455" />
      <meta name="og:type" content="product" />

      <meta name="product:availability" content="instock" />
      <meta name="product:price:currency" content="INR" />
      <meta name="product:price:amount" content="89" />
      <meta name="product:brand" content="Web Hosting" />

      <meta name="robots" content="INDEX,FOLLOW" />

      <meta name="yandex-verification" content={YANDEX_SITE_VERIFICATION} />
      <meta httpEquiv="content-language" content="en-US" />
      <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
      <link rel="alternate" hrefLang="en-us" href={SITE_URL} />
      <link rel="alternate" hrefLang="en" href={SITE_URL} />
      <meta property="og:locale" content="en_US" />

      <link href={SITE_URL_ALTERNATE} rel="canonical" />
      <link rel="alternate" hrefLang="en-in" href={SITE_URL_ALTERNATE} />
      <meta property="og:locale:alternate" content="en-in" />

      <meta name="dcterms.subject" content={DCTERMS_SUBJECT} />
      <meta name="p:domain_verify" content={DOMAIN_VERIFY} />
      <meta
        name="google-site-verification"
        content={GOOGLE_SITE_VERIFICATION}
      />
    </>
  );
};

export default MetaInfo;
