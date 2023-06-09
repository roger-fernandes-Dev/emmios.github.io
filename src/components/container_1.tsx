import Image from 'next/image';
import Social from './Social';

export default function Container_1(){
    return(
        <article className="flex flex-col items-center">
            <header className="w-full h-56 flex flex-col justify-center items-center">
            <section className="flex items-center">
                <Image
                src="/logoemmi.png"
                alt="logo emmios"
                width={90}
                height={90}
                priority />
                <h1 className="font-semibold text-5xl lg:text-9xl text-white m-4 animate-bounce">Emmi OS </h1>
            </section>
            <h2 className="font-medium text-md lg:text-xl text-white text-center m-6" >Sistema de kernel Linux com a interface Synth UI</h2>
        </header>
            <button type="button" className="w-44 mt-10 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-semibold rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2">Download 3.0</button>
            <Social />
        </article>
    )
}