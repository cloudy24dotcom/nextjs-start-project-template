import Link from "next/link";
import { SITE_URL } from "./Constants";

export function getCurrentDate(separator = "-") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}

const Schema = ({
  PageNameForSchema,
  highpriceForSchema,
  lowpriceForSchema,
  offerCountForSchema,
  reviewDateForSchema,
}) => {
  return (
    <>
      {/* PRODUCT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org/",
            "@type": "Product",
            name: PageNameForSchema,
            image: "https://cloudy24.com/assets/images/images/logo.png",
            description: `Buy Best ${PageNameForSchema} with ,SSL, cPanel, Unlimited Space and Bandwidth. 24/7 Support, Money Back and 99.95% Uptime Guarantee.`,
            sku: PageNameForSchema,
            mpn: PageNameForSchema,
            brand: { "@type": "Brand", name: "Cloudy24" },
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "4.8",
                bestRating: "5",
              },
              datePublished: getCurrentDate(),
              author: { "@type": "Organization", name: "Cloudy24" },
              publisher: { "@type": "Organization", name: "trustpilot" },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.6",
              reviewCount: "2566",
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "INR",
              lowprice: lowpriceForSchema,
              highprice: highpriceForSchema,
              offercount: offerCountForSchema,
            },
          }),
        }}
      />
      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org/",
            "@type": "FAQPage",
            name: PageNameForSchema + " FAQ",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who is Cloudy24?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Thousands of satisfied customers already trust Cloudy24 - your #1 cheap web hosting provider. With Cloudy24, advanced cloud hosting and 99.99% Up-Time is the new meaning of our cheap web hosting services.",
                },
              },
              {
                "@type": "Question",
                name: "What is cPanel?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Think you’re the pilot of your website. Well, cPanel is your cockpit. It’s where you can control all features of your account, from adding domains to setting up email forwarding.",
                },
              },
              {
                "@type": "Question",
                name: "Can I upgrade and downgrade my plan anytime if needed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No problem! You can yoyo your plan yourself from within your control area. There’s no fine for upgrading or downgrading.",
                },
              },
              {
                "@type": "Question",
                name: "Am I eligible for a free SSL Certificate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Free SSL Certificates are available with our every package. You will receive a free certificate for all domains.",
                },
              },
            ],
          }),
        }}
      />
      {/* LOGO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org/",
            "@type": "Corporation",
            "@id": { SITE_URL },
            name: "Cloudy24",
            legalName: "Cloudy24",
            description:
              "Cloudy24 offers web hosting, reseller hosting, wordpress hosting, business hosting.",
            url: { SITE_URL },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Delhi",
              addressRegion: "DL",
              addressCountry: "IN",
              postalCode: "110084",
              streetAddress:
                "House No B-973, Street No 8, Nathu Colony, Burari",
            },
            logo: "https://cloudy24.com/assets/images/images/logo.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91-9899171735",
                contactType: "customer service",
              },
            ],
            sameAs: [
              "https://www.facebook.com/cloudy24dotcom",
              "https://twitter.com/cloudy24dotcom",
              "https://www.linkedin.com/company/cloudy24",
              "https://www.youtube.com/channel/UCzkke_vCKGHvYbIl5c8BqGQ",
              "https://www.instagram.com/cloudy24dotcom/",
              "https://www.pinterest.com/cloudy24dotcom/",
              "https://cloudy24dotcom.tumblr.com/",
              "https://blog.cloudy24.com/",
              "https://t.me/cloudy24_com",
              "https://wa.me/919899171735",
              "https://play.google.com/store/apps/details?id=com.cloudy24.cloudy24",
            ],
          }),
        }}
      />

      {/* ORGANAIZATION SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org/",
            "@type": "Organization",
            name: "Cloudy24",
            legalName: "Cloudy24",
            url: "https://cloudy24.com",
            logo: "https://cloudy24.com/assets/images/images/logo.png",
          }),
        }}
      />
    </>
  );
};

export default Schema;
