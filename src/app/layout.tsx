<<<<<<< HEAD
import { Grid } from "@mui/material";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Header } from "@/components/common";

import { AppProvider } from "@/providers";
=======
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
>>>>>>> f7427d8 (Initial commit from Create Next App)
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Summoner Wars Portal",
  description: "Marketplace and coupons for Summonerwars fans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppProvider>
          <Grid
            container
            height="100vh"
            width="100vw"
            direction="column"
            bgcolor="#312014"
            color="#FEF5D5"
          >
            <Header />
            <Grid
              container
              width="100%"
              height={"calc(100vh - 64px)"}
              direction="row"
            >
              <Grid size={3}>Left Col</Grid>
              <Grid size={9} padding={{ xs: 2, lg: 4 }}>
                {children}
              </Grid>
            </Grid>
          </Grid>
        </AppProvider>
      </body>
    </html>
  );
}
