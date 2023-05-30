import Layout from "@/components/Layout";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

/* Next.js font module : https://nextjs.org/docs/pages/api-reference/components/font */
const inter = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "City weather forecast",
  description: "Check the weather forecast around the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
