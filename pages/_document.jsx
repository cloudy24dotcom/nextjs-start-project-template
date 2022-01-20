import Document, { Html, Head, Main, NextScript } from "next/document";
 

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
            content="d3RYjZIbSzxskPr_6EWgrCuqufuYhTvIwn-vFsEi2ok"
          />
          {/* <!-- Start :: Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-113875666-4"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `  window.dataLayer = window.dataLayer || [];  gtag('js', new Date()); gtag('config', 'UA-113875666-4', { page_path: window.location.pathname });  `,
            }}
          />
          {/* <!-- Start :: Global site tag (gtag.js) - Google Analytics --> */}

          {/*  <!--Start of Tawk.to Script--> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); (function(){ var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];    s1.async=true;    s1.src='https://embed.tawk.to/5ea091c335bcbb0c9ab3b70c/default'; s1.charset='UTF-8'; s1.setAttribute('crossorigin','*'); s0.parentNode.insertBefore(s1,s0);  })(); `,
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
