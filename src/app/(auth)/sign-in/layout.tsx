// ------------------------------------------------------------------------------------------

import Link from 'next/link';

import { AppLogo } from '@/components/layout/app-logo';
import { Card } from '@/components/ui/card';
import { CommonRoutes } from '@/constants/appRoutes';

import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';
// ------------------------------------------------------------------------------------------

export const metadata: Metadata = {
    title: 'Sign in',
    description: '',
};

// ------------------------------------------------------------------------------------------

interface Props {
    readonly children: ReactNode;
}

const layout: FC<Props> = ({ children }) => {
    return (
        <>
            <div className='min-h-[100dvh] bg-white [background-image:linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_50%),url("/assets/backgrounds/bauhaus-sector-light.svg")]'>
                <div className='max-w-sm mx-auto p-4 flex flex-col justify-start gap-4 min-h-[100dvh] sm:justify-center'>
                    <div className='mb-6'>
                        <AppLogo />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-3xl font-semibold tracking-tight'>Sign in</h1>
                        <p className='leading-7'>Welcome back, sign in to continue</p>
                    </div>
                    <Card className='p-6 border-none shadow-md rounded-lg bg-white'>
                        {children}
                    </Card>
                    <div className='mb-6'>
                        <p className='text-sm text-muted-foreground'>
                            By continuing, you agree to our{' '}
                            <Link
                                href={CommonRoutes.TERMS_OF_SERVICE()}
                                className='underline underline-offset-4 hover:text-primary transition'
                            >
                                Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link
                                href={CommonRoutes.PRIVACY_POLICY()}
                                className='underline underline-offset-4 hover:text-primary transition'
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default layout;

// ------------------------------------------------------------------------------------------
