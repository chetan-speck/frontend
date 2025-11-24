// ------------------------------------------------------------------------------------------

import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';
import './globals.css';

import { Inter, Poppins } from 'next/font/google';

// ------------------------------------------------------------------------------------------

const inter = Inter({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
});

// ------------------------------------------------------------------------------------------

export const metadata: Metadata = {
    title: {
        default: 'CRM',
        template: '%s • CRM',
    },
    description: '',
};

// ------------------------------------------------------------------------------------------

interface Props {
    readonly children: ReactNode;
}

const layout: FC<Props> = ({ children }) => {
    return (
        <html
            lang='en'
            className={`${inter.variable} ${poppins.variable}`}
        >
            <body>{children}</body>
        </html>
    );
};

export default layout;

// ------------------------------------------------------------------------------------------
