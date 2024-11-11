import "./globals.css";
import { Providers } from "./providers";
import Footer from "@/templates/footer";
import dynamic from "next/dynamic";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UGM eSports",
  description: "A website from gamers for gamers.",
};

const Navbar = dynamic(() => import("@/templates/navbar"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
