// ------------------------------------------------------------------------------------------

'use client';

// ------------------------------------------------------------------------------------------

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useSidebar } from '@/components/layout/sidebar-context';
import { Button } from '@/components/ui/button';

import type { FC } from 'react';

import type { NavigationSection as NavigationSectionType } from './navigation-menu-items';
// ------------------------------------------------------------------------------------------

interface NavigationSectionProps {
    section: NavigationSectionType;
}

export const NavigationSection: FC<NavigationSectionProps> = ({ section }) => {
    const { setIsOpen } = useSidebar();
    const pathname = usePathname();

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className='flex flex-col gap-2'>
            <p className='text-muted-foreground text-sm'>{section.title}</p>
            <div className='flex flex-col gap-1'>
                {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Button
                            key={item.label}
                            className='w-full flex justify-start gap-2'
                            variant={isActive ? 'default' : 'ghost'}
                            asChild
                        >
                            <Link
                                href={item.href || '#'}
                                onClick={handleLinkClick}
                            >
                                <Icon />
                                {item.label}
                            </Link>
                        </Button>
                    );
                })}
            </div>
        </div>
    );
};

// ------------------------------------------------------------------------------------------
