import AppWrapper from '@/layouts/app/wrapper';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, ...props }: AppLayoutProps) => {
    return <AppWrapper {...props}>{children}</AppWrapper>;
};
