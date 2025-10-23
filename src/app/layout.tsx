import type {Metadata} from "next";
import './globals.scss';


export const metadata: Metadata = {
    title: 'Phone Dewlight',
    description: 'Яркость, которую вы не видели',
};

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        {/*<link*/}
        {/*    rel="stylesheet"*/}
        {/*    href="/phone_dewlight/globals.css"*/}
        {/*    type="text/css"*/}
        {/*/>*/}
        <body>{children}</body>
        </html>
    )
}

