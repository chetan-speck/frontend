// ------------------------------------------------------------------------------------------

'use client';

// ------------------------------------------------------------------------------------------

import type { FC } from 'react';
import { UpgradeCard } from '@/components/cards/upgrade-card';
import { getNavigationSections } from '@/components/navigation/navigation-menu-items';
import { NavigationSection } from '@/components/navigation/navigation-section';
import { UserProfile } from '@/components/user/user-profile';

import { AppLogo } from './app-logo';
import { useSidebar } from './sidebar-context';

// ------------------------------------------------------------------------------------------

export const Sidebar: FC = () => {
    const { isOpen, setIsOpen } = useSidebar();
    const navigationSections = getNavigationSections('customer');

    return (
        <>
            {isOpen && (
                <div
                    className='fixed inset-0 bg-black/50 z-40 lg:hidden'
                    onClick={() => setIsOpen(false)}
                />
            )}
            <nav
                className={`fixed lg:static h-[100dvh] w-[256px] bg-white flex flex-col pb-4 gap-4 overflow-hidden z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
            >
                <div className='h-[56px] px-4 flex items-center'>
                    <AppLogo />
                </div>
                <div className='flex-1 overflow-auto px-4 flex flex-col gap-6'>
                    {navigationSections.map((section) => (
                        <NavigationSection
                            key={section.title}
                            section={section}
                        />
                    ))}
                </div>
                <UpgradeCard />
                <UserProfile />
            </nav>
        </>
    );
};

// ------------------------------------------------------------------------------------------
