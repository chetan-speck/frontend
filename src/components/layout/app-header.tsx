// ------------------------------------------------------------------------------------------

'use client';

// ------------------------------------------------------------------------------------------

import type { FC } from 'react';
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { useSidebar } from './sidebar-context';

// ------------------------------------------------------------------------------------------

interface AppHeaderProps {
    title?: string;
}

export const AppHeader: FC<AppHeaderProps> = ({ title = 'Dashboard' }) => {
    const { isOpen, toggle } = useSidebar();

    return (
        <header className='absolute top-0 left-0 h-[56px] w-full flex justify-between items-center pl-2.5 pr-4 lg:pl-4 backdrop-blur-sm bg-gray-50/50'>
            <div className='flex items-center gap-3'>
                <Button
                    variant='ghost'
                    size='icon'
                    className='lg:hidden'
                    onClick={toggle}
                >
                    {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
                </Button>
                {title && <h1 className='text-xl font-semibold tracking-tight'>{title}</h1>}
            </div>
            <div></div>
        </header>
    );
};

// ------------------------------------------------------------------------------------------
