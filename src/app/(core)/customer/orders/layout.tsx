// ------------------------------------------------------------------------------------------

import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';

// ------------------------------------------------------------------------------------------

export const metadata: Metadata = {
    title: 'Orders',
    description: '',
};

// ------------------------------------------------------------------------------------------

interface Props {
    readonly children: ReactNode;
}

const layout: FC<Props> = ({ children }) => {
    return <>{children}</>;
};

export default layout;

// ------------------------------------------------------------------------------------------
