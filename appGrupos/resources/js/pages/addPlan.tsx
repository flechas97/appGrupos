import AppWrapper from '@/layouts/app/wrapper';
import { usePage } from '@inertiajs/react';

interface Plan {
    id: number;
    nombre: string;
    descripcion: string;
}

export default function Welcome() {
    // const { auth } = usePage<SharedData>().props;
    const { plans } = usePage<any>().props;
    console.log(plans);
    return (
        <>
            <AppWrapper>
                <h2>Crea tu plan</h2>
                <hr />
                <div className='formularioStandard'>
                    <input type="text" name="" id=""  placeholder='Titulo'/>
                    <input type="text" name="" id=""  placeholder='Descripción'/>
                    <input type="text" name="" id=""  placeholder='Ubicación'/>
                    <input type="datetime-local" id="datetime" name="datetime" />
                    <input type="text" name="" id=""  placeholder='Precio'/>
                    <select name="" id="">
                        <option value="" disabled selected>Categoria</option>
                        <option value="">Categoria</option>
                        <option value="">Categoria</option>
                        <option value="">Categoria</option>
                    </select>
                    <button>Proponer</button>
                </div>
              
             
            </AppWrapper>

            {/* <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <header className="">
                <nav className="flex items-center justify-end gap-4">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            </header> */}
        </>
    );
}
