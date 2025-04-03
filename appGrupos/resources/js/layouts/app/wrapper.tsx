import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { Link } from '@inertiajs/react';
// import { type BreadcrumbItem } from '@/types';
import type { PropsWithChildren } from 'react';
import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

export default function AppHeaderLayout({ children }: PropsWithChildren<object>) {

    const { auth } = usePage<SharedData>().props;
    console.log(auth)
    return (
        <AppShell>
            <header>
                <div></div>
                <div>
                    <img src="/logobanda.png" width={90} alt="" />
                </div>
                {auth.user ? (
                    <>
                        <div>{auth.user.name}</div>
                        <a href="/logout">X</a>
                    </>
                ) : (
                    <>
                        <div className='loginGoogle'>
                            <a
                                href={route('login_google')}
                                className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                            >
                                <img src="https://static.vecteezy.com/system/resources/previews/022/613/027/non_2x/google-icon-logo-symbol-free-png.png" alt="" width={20} />Login
                            </a>
                        </div>
                    </>
                )}
                {/* <div>Usuario</div> */}
            </header>
            <AppContent>
                <div className='wrapperApp'>
                    {children}
                </div>
            </AppContent>
            <footer>
                <div>
                    <Link href={route('home')} className="flex items-center gap-2 self-center font-medium">
                        <button>Inicio</button>
                    </Link>
                </div>
                <div>
                    <Link href={route('listaPlanes')} className="flex items-center gap-2 self-center font-medium">
                        <button>Planes</button>
                    </Link>
                </div>
                <div>
                    <Link href={route('listaPlanes')} className="flex items-center gap-2 self-center font-medium">
                        <button></button>
                    </Link>
                </div>
                <div>
                    <Link href={route('listaPlanes')} className="flex items-center gap-2 self-center font-medium">
                        <button></button>
                    </Link>
                </div>
                <div>
                    <Link href={route('listaPlanes')} className="flex items-center gap-2 self-center font-medium">
                        <button></button>
                    </Link>
                </div>
            </footer>
        </AppShell>
    );
}
