
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

// Load Poppins font with CSS variable
const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["400", "500", "600"], // Add more weights as needed
});

// Default metadata
export const metadata: Metadata = {
    title: "Kurt Oswill McCarver",
    description: "A Next.js application.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={poppins.variable}>
        <body className="antialiased">
        <div className="relative min-h-screen overflow-hidden">
            <Background position="top" />
            <main className="relative z-10 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-[200px]">
                {children}
            </main>
        </div>

        </body>
        </html>
    );
}