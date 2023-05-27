import "./globals.css";
import { Playfair_Display } from "next/font/google";
import Map from "@/components/Map";

const inter = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "City weather forecast",
  description: "Consult the following days forecast aound the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  popover: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <main className="Layout">
          <header className="Layout-header">
            <h1 className="Layout-headerTitle">City weather Forecast</h1>
          </header>
          <div className="Layout-content">
            <Map />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
