import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "@/components/header.js";
import Footer from "@/components/footer.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "nexttemplate",
  description: "nexttemplate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
