import Image from 'next/image';
export default function Title(props){
    return(
        <header className="w-full h-56 flex flex-col justify-center items-center">
            <section className="flex items-center">
                <Image
                src="/logoemmi.png"
                alt="logo emmios"
                width={90}
                height={90}
                priority />
                <h1 className="font-semibold text-5xl lg:text-9xl text-white m-4 animate-bounce">{props.title}</h1>
            </section>
            <h2 className="font-medium text-md lg:text-xl text-white text-center m-6" >{props.subtitle}</h2>
        </header>
    )
}