'use client';

import Script from 'next/script';

export default function GoogleScripts() {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <>
      {/* Google AdSense Script */}
      {adsenseId && (
        <Script
          id="google-adsense"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      )}

      {/* Google Analytics 4 / Google Ads Global Site Tag */}
      {(gaId || googleAdsId) && (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId || googleAdsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-gtag" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${gaId ? `gtag('config', '${gaId}');` : ''}
              ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ''}
            `}
          </Script>
        </>
      )}
    </>
  );
}
