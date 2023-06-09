import Title from './Title';
import Social from './Social';
interface titleProps{
    title: string
    subtitle: string
}
export default function Container_1(props: titleProps){
    return(
        <article className="flex flex-col items-center">
            <Title title="Emmi OS " subtitle="Sistema de kernel Linux com a interface Synth UI" />
            <button type="button" className="w-44 mt-10 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-semibold rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2">Download</button>
            <Social />
        </article>
    )
}