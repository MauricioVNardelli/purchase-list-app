import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import "@/app/ui/globals.scss";
import { GlobalProvider } from "./contexts/GlobalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Purchase List",
  description: "Your shopping list app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body className={inter.className}>
        <MantineProvider>
          <GlobalProvider>
            {children}
          </GlobalProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
