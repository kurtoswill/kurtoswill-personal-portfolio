
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["400", "500", "600"],
});

export const metadata = {
    title: "Kurt Oswill McCarver",
    description: "I'am a web developer based in the Philippines, focused on crafting fast, responsive websites and actively engaging in tech events and competitions to grow and innovate.",
    openGraph: {
        title: "Kurt Oswill McCarver | Web Developer",
        description: "I'am a web developer based in the Philippines, focused on crafting fast, responsive websites and actively engaging in tech events and competitions to grow and innovate.",
        url: "https://kurtoswill.vercel.app/",
        siteName: "Kurt Oswill McCarver",
        images: [
            {
                url: "/image/events/smxpbw.jpeg",
                width: 1200,
                height: 630,
                alt: "Your Website Preview Image",
            },
        ],
        type: "website",
    },
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

            <main className="relative z-10 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-[200px]">
                {children}
            </main>
        </div>

        </body>
        </html>
    );
}