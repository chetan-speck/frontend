// ------------------------------------------------------------------------------------------

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import type { FC } from 'react';

// ------------------------------------------------------------------------------------------

interface UserProfileProps {
    name?: string;
    email?: string;
    avatarUrl?: string;
    avatarFallback?: string;
}

export const UserProfile: FC<UserProfileProps> = ({
    name = 'Joe Doe',
    email = 'joe.doe@email.com',
    avatarUrl = 'https://github.com/shadcn.png',
    avatarFallback = 'CN',
}) => {
    return (
        <Button
            variant='ghost'
            className='mx-4 h-fit flex gap-4 items-center rounded-lg p-2 flex justify-start'
        >
            <Avatar>
                <AvatarImage src={avatarUrl} />
                <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
            <div className='flex flex-col gap-1 items-start'>
                <small className='text-sm leading-none font-medium'>{name}</small>
                <small className='text-xs leading-none'>{email}</small>
            </div>
        </Button>
    );
};

// ------------------------------------------------------------------------------------------
