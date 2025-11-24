// ------------------------------------------------------------------------------------------

'use client';

// ------------------------------------------------------------------------------------------

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CustomerRoutes } from '@/constants/appRoutes';

// ------------------------------------------------------------------------------------------

const Page = () => {
    const router = useRouter();

    return (
        <div className='flex flex-col gap-1flex flex-col gap-4'>
            <div className='grid w-full max-w-sm items-center gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                    type='email'
                    id='email'
                    placeholder='Email'
                />
            </div>
            <div className='grid w-full max-w-sm items-center gap-2'>
                <Label htmlFor='password'>Password</Label>
                <Input
                    type='password'
                    id='password'
                    placeholder='Password'
                />
            </div>
            <Button
                onClick={() => {
                    router.push(CustomerRoutes.DASHBOARD());
                }}
            >
                Sign in
            </Button>
        </div>
    );
};

export default Page;

// ------------------------------------------------------------------------------------------
