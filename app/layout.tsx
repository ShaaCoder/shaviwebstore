import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { COMPANY_NAME } from '@/lib/constants';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shaviwebstore.com"),
  title: {
    default: `${COMPANY_NAME} | Web Development Agency in India`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Shavi Web Store is a top web development agency in India specializing in building SEO-friendly, responsive websites, eCommerce stores, and custom web applications using Next.js, Tailwind CSS, and modern technologies.",
  keywords: [
    "web development agency in India",
    "Next.js development",
    "eCommerce websites",
    "responsive website design",
    "Tailwind CSS websites",
    "custom web applications",
    "SEO-friendly websites",
    "web design agency",
    "Shavi Web Store",
  ],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shaviwebstore.com",
    title: `${COMPANY_NAME} | Web Development Agency in India`,
    description:
      "We build fast, scalable, and SEO-optimized websites and apps that help businesses grow online. Powered by Next.js and Tailwind CSS.",
    siteName: COMPANY_NAME,
    images: [
      {
        url: "https://shaviwebstore.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shavi Web Store - Web Development Agency in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | Web Development Agency in India`,
    description:
      "Build modern, scalable websites and web apps with Shavi Web Store. Experts in Next.js, Tailwind CSS, and SEO.",
    creator: "@shaviwebstore",
    images: [
      {
        url: "https://shaviwebstore.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shavi Web Store - Build Fast, Modern Websites",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ClientLayout>{children}</ClientLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}