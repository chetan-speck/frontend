// ------------------------------------------------------------------------------------------

import Image from 'next/image';
import type { FC } from 'react';

// ------------------------------------------------------------------------------------------

export const AppLogo: FC = () => {
    return (
        <div className='flex items-center gap-2'>
            <Image
                src='/assets/logos/logo-symbol.svg'
                alt='Logo symbol'
                height={24}
                width={24}
            />
            <Image
                src='/assets/logos/logo-type.svg'
                alt='Logo type'
                height={16}
                width={100}
            />
        </div>
    );
};

// ------------------------------------------------------------------------------------------
