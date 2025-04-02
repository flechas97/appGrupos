import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { Link } from '@inertiajs/react';
// import { type BreadcrumbItem } from '@/types';
import type { PropsWithChildren } from 'react';

export default function AppHeaderLayout({ children }: PropsWithChildren<object>) {
    return (
        <AppShell>
            <header>
                <div>Empty</div>
                <div>
                    <img src="/logobanda.png" width={90} alt="" />
                </div>
                <div>Usuario Zone</div>
            </header>
            <AppContent>{children}</AppContent>
            <footer>
                <div>
                    <Link href={route('home')} className="flex items-center gap-2 self-center font-medium">
                        <button>boton</button>
                    </Link>
                </div>
                <div>
                    <Link href={route('test')} className="flex items-center gap-2 self-center font-medium">
                        <button>boton</button>
                    </Link>
                </div>
                <div>
                    <button>boton</button>
                </div>
                <div>
                    <button>boton</button>
                </div>
                <div>
                    <button>boton</button>
                </div>
            </footer>
        </AppShell>
    );
}
