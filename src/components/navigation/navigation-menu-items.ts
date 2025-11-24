// ------------------------------------------------------------------------------------------

import {
    BarChart3,
    Briefcase,
    Building2,
    CreditCard,
    FileText,
    LayoutGrid,
    Package,
    Receipt,
    Repeat,
    Settings,
    ShoppingCart,
    Ticket,
    UserCog,
    Users,
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

// ------------------------------------------------------------------------------------------

export type PanelType = 'admin' | 'customer' | 'tenant';

export interface NavigationItem {
    icon: LucideIcon;
    label: string;
    href: string;
}

export interface NavigationSection {
    title: string;
    items: NavigationItem[];
}

// ------------------------------------------------------------------------------------------

export const getNavigationSections = (panel: PanelType): NavigationSection[] => {
    const basePath = `/${panel}`;

    switch (panel) {
        case 'admin':
            return [
                {
                    title: 'Overview',
                    items: [
                        {
                            icon: LayoutGrid,
                            label: 'Dashboard',
                            href: `${basePath}/dashboard`,
                        },
                        {
                            icon: BarChart3,
                            label: 'Analytics',
                            href: `${basePath}/analytics`,
                        },
                    ],
                },
                {
                    title: 'Management',
                    items: [
                        {
                            icon: Users,
                            label: 'Users',
                            href: `${basePath}/users`,
                        },
                        {
                            icon: Building2,
                            label: 'Tenants',
                            href: `${basePath}/tenants`,
                        },
                        {
                            icon: Package,
                            label: 'Services',
                            href: `${basePath}/services`,
                        },
                    ],
                },
                {
                    title: 'Settings',
                    items: [
                        {
                            icon: Settings,
                            label: 'System Settings',
                            href: `${basePath}/settings`,
                        },
                        {
                            icon: UserCog,
                            label: 'Roles & Permissions',
                            href: `${basePath}/roles`,
                        },
                    ],
                },
            ];

        case 'customer':
            return [
                {
                    title: 'Activity',
                    items: [
                        {
                            icon: LayoutGrid,
                            label: 'Dashboard',
                            href: `${basePath}/dashboard`,
                        },
                        {
                            icon: ShoppingCart,
                            label: 'Orders',
                            href: `${basePath}/orders`,
                        },
                        {
                            icon: Ticket,
                            label: 'Tickets',
                            href: `${basePath}/tickets`,
                        },
                    ],
                },
                {
                    title: 'Billing',
                    items: [
                        {
                            icon: CreditCard,
                            label: 'Billing',
                            href: `${basePath}/billing`,
                        },
                        {
                            icon: FileText,
                            label: 'Invoices',
                            href: `${basePath}/invoices`,
                        },
                        {
                            icon: Repeat,
                            label: 'Subscription',
                            href: `${basePath}/subscription`,
                        },
                    ],
                },
                {
                    title: 'Account',
                    items: [
                        {
                            icon: Settings,
                            label: 'Settings',
                            href: `${basePath}/settings`,
                        },
                    ],
                },
            ];

        case 'tenant':
            return [
                {
                    title: 'Overview',
                    items: [
                        {
                            icon: LayoutGrid,
                            label: 'Dashboard',
                            href: `${basePath}/dashboard`,
                        },
                        {
                            icon: BarChart3,
                            label: 'Reports',
                            href: `${basePath}/reports`,
                        },
                    ],
                },
                {
                    title: 'Operations',
                    items: [
                        {
                            icon: Users,
                            label: 'Customers',
                            href: `${basePath}/customers`,
                        },
                        {
                            icon: Receipt,
                            label: 'Orders',
                            href: `${basePath}/orders`,
                        },
                        {
                            icon: Ticket,
                            label: 'Tickets',
                            href: `${basePath}/tickets`,
                        },
                    ],
                },
                {
                    title: 'Setup',
                    items: [
                        {
                            icon: Briefcase,
                            label: 'Services',
                            href: `${basePath}/services`,
                        },
                        {
                            icon: Settings,
                            label: 'Settings',
                            href: `${basePath}/settings`,
                        },
                    ],
                },
            ];

        default:
            return [];
    }
};

// ------------------------------------------------------------------------------------------
