import { Roboto } from "next/font/google";
import "./globals.css";
import {AppProvider} from "@/components/AppContext";
import Header from "../components/layout/Header";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Food Ordering App",
  description: "Order what you want",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto  p-4">
          <AppProvider>
            <Toaster />
            <Header />
            {children}
            <footer className="border-t p-8 text-center text-gray-500 mt-16">
              &copy; 2023 All rights reserved
            </footer>
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
