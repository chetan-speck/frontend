// ------------------------------------------------------------------------------------------

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { FC } from 'react';

// ------------------------------------------------------------------------------------------

interface UpgradeCardProps {
    daysRemaining?: number;
}

export const UpgradeCard: FC<UpgradeCardProps> = ({ daysRemaining = 14 }) => {
    return (
        <Card
            className='p-6 mx-4 border-none shadow-lg rounded-lg bg-primary flex flex-col gap-4'
            style={{
                backgroundImage: `
                    repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0, rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 20px),
                    repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 0, rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 20px)
                `,
                backgroundSize: '40px 40px',
            }}
        >
            <div className='leading-7 font-medium text-white'>
                Your trial account will expire in {daysRemaining} days
            </div>
            <Button variant='secondary'>Upgrade Now</Button>
        </Card>
    );
};

// ------------------------------------------------------------------------------------------
