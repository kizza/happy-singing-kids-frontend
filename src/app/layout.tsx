import Layout from "@/components/Layout";
import "@/styles/global.scss";
import "@/styles/typography.scss";
import { GoogleTagManager } from "@next/third-parties/google";
import "animate.css/animate.min.css";
import classnames from "classnames";
import { Metadata, Viewport } from "next";
import { Chelsea_Market, Preahvihear } from "next/font/google";
import React from "react";

export const viewport: Viewport = {
  themeColor: "#9D62A1",
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://happysingingkids.com'),
}

const font = Preahvihear({
  weight: "400",
  subsets: ["latin"],
});

const titleFont = Chelsea_Market({
  weight: "400",
  subsets: ["latin"],
  variable: "--title-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="G-GMNZ6WPJE1" />

        {/* Font awesome icons */}
        <script src="https://kit.fontawesome.com/42b2b1537e.js" crossOrigin="anonymous"></script>

        {/* Hotjar Tracking Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:5034898,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={classnames(font.className, titleFont.variable)}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
};
