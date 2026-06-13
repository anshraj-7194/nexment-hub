import type { Metadata } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Nexment",
    template: "%s | Nexment",
  },

  description:
    "Nexment is an open-source ecosystem of developer tools, APIs, CLIs, and web applications built with a focus on simplicity, privacy, and modern development workflows.",

  keywords: [
    "Nexment",
    "Developer Tools",
    "Open Source",
    "CLI Tools",
    "Developer APIs",
    "Web Development",
    "Software Development",
    "Next.js",
    "Node.js",
    "Python",
    "TypeScript",
    "Programming",
    "Developer Platform",
    "Self Hosted",
    "Productivity",
    "Utilities",
  ],

  authors: [
    {
      name: "Ansh Raj",
      url: "https://nexment.in",
    },
  ],

  creator: "Ansh Raj",
  publisher: "Nexment",

  metadataBase: new URL("https://nexment.in"),

  applicationName: "Nexment",

  category: "Technology",

  alternates: {
    canonical: "https://nexment.in",
  },

  openGraph: {
    title: "Nexment",
    description:
      "Open-source developer tools, APIs, CLIs, and web applications designed for modern developers.",

    url: "https://nexment.in",

    siteName: "Nexment",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexment",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Nexment",

    description:
      "An open-source ecosystem of developer tools, APIs, CLIs, and web applications.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/favicon.ico",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    apple: "/logo.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`lght ${geist.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const theme = localStorage.getItem('theme');
              if (theme === 'light') {
                document.documentElement.classList.add('light');
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
