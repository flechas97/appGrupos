import AppWrapper from '@/layouts/app/wrapper';
import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
interface Plan {
    id: number;
    nombre: string;
    descripcion: string;
}

export default function listaPlanes() {
    // const { auth } = usePage<SharedData>().props;
    const { plans } = usePage<any>().props;
    console.log(plans);
    return (
        <>
            <AppWrapper>
                <div className='cardsPlanes'>
                    {/* Recorremos los planes y mostramos cada uno */}
                    {plans.map(
                        (
                            plan: any, // Usamos 'Plan' para el tipo de 'plan'
                        ) => (
                            <div key={plan.id} className='cardPlan'>
                                <div className="imagenPlan">
                                    <img src={"/"+plan.categoria+".jpg"} alt="" />
                                    <span>{plan.categoria}</span> 
                                    <span className='apuntados'>Apuntados {"->"} 10</span> 
                                </div>
                                <div className='infoPlan'>
                                    <h2>{plan.nombre}</h2>
                                    <p>{plan.descripcion}</p>
                                    <p>{plan.fecha}</p>
                                    <p>{plan.ubicacion}</p>
                                    <button>
                                        Apuntarme
                                    </button>
                                </div>
                                
                            </div>
                        ),
                    )}
                </div>
                <div>
                    <Link href="/addPlan">
                        <button className="botonAddPlan">
                            +
                        </button>
                    </Link>
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
