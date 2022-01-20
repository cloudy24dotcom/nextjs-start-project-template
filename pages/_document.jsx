import Document, { Html, Head, Main, NextScript } from "next/document";
import {
  GOOGLE_SITE_VERIFICATION,
  GOOGLE_ANALYTICS,
  TAWK_TO_URL,
} from "../components/Constants";

const BaseCSS = ({ css }) => (
  <style
    dangerouslySetInnerHTML={{
      __html: css,
    }}
  />
);

BaseCSS.defaultProps = {
  css: "*{box-sizing:border-box}body{margin:0}",
};

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="google-site-verification"
            content={GOOGLE_SITE_VERIFICATION}
          />
          {/* <!-- Start :: Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS}`}
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];  gtag('js', new Date()); gtag('config', '${GOOGLE_ANALYTICS}', { page_path: window.location.pathname });`,
            }}
          />
          {/* <!-- Start :: Global site tag (gtag.js) - Google Analytics --> */}

          {/*  <!--Start of Tawk.to Script--> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); (function(){ var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];    s1.async=true;    s1.src='${TAWK_TO_URL}'; s1.charset='UTF-8'; s1.setAttribute('crossorigin','*'); s0.parentNode.insertBefore(s1,s0);  })(); `,
            }}
          />
          {/*<!--End of Tawk.to Script--> */}

          <BaseCSS />
        </Head>
        <body className="try">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
