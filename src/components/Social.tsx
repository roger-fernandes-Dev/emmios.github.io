import Link from 'next/link'
import { BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs'
export default function Social(){
    const itemSocial = (url: string, item: any) =>{
        return <span><Link href={url} target="_blank">{item}</Link></span>
    }
    return(
        <section className="w-72 flex justify-evenly mt-10">
            {itemSocial("https://github.com/emmios",  <BsGithub className="w-8 h-8  text-white  transition-all duration-300 hover:opacity-50" />)}
            {itemSocial("https://twitter.com/emmi_os?lang=en",  <BsTwitter className="w-8 h-8 text-white  transition-all duration-300 hover:opacity-50" />)}
            {itemSocial("https://www.instagram.com/emmi_os/?hl=en", <BsInstagram className="w-8 h-8 text-white  transition-all duration-300 hover:opacity-50" />)}
        </section>
    )
}