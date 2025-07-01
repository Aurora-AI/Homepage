import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalFeedbackProvider from '@/components/GlobalFeedbackProvider';
import { LoadingErrorProvider } from '@/context/LoadingErrorContext';

export const metadata: Metadata = {
  title: "Aurora",
  description: "Aurora Institutional Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LoadingErrorProvider>
          <GlobalFeedbackProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </GlobalFeedbackProvider>
        </LoadingErrorProvider>
      </body>
    </html>
  );
}