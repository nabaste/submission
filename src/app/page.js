'use client';

import {Inter} from 'next/font/google'
import './globals.css'
import SiteNavbar from "@/app/navbar";
import SceneCanvas from "@/components/scene";

const inter = Inter({subsets: ['latin']})


export default function RootLayout() {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SiteNavbar> </SiteNavbar>
                <div className="justify-center bg-gray-200 h-screen z-10 w-full items-center max-w-8xl flex">
                    <SceneCanvas></SceneCanvas>
                </div>
            </body>
        </html>
    )
}
