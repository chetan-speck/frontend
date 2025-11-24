// ------------------------------------------------------------------------------------------

import { Sidebar } from '@/components/layout/sidebar';
import { SidebarProvider } from '@/components/layout/sidebar-context';

import type { FC, ReactNode } from 'react';

// ------------------------------------------------------------------------------------------

interface Props {
    readonly children: ReactNode;
}

const AdminLayout: FC<Props> = ({ children }) => {
    return (
        <SidebarProvider>
            <div className='h-[100dvh] flex bg-gray-50'>
                <Sidebar />
                <main className='h-[100dvh] flex-1 flex flex-col relative w-full lg:w-auto overflow-auto pt-[56px] lg:pt-0'>
                    {children}
                </main>
            </div>
        </SidebarProvider>
    );
};

export default AdminLayout;

// ------------------------------------------------------------------------------------------
