import Link from 'next/link'
import { BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs'
export default function Social(){
    const itemSocial = (url, alt, item) =>{
        return <span><Link href={url} target="_blank" alt={alt}>{item}</Link></span>
    }
    return(
        <section className="w-72 flex justify-evenly mt-10">
            {itemSocial("https://github.com/emmios", "link_github", <BsGithub className="w-8 h-8  text-white  transition-all duration-300 hover:scale-125" />)}
            {itemSocial("https://twitter.com/emmi_os?lang=en", "link_twitter", <BsTwitter className="w-8 h-8 text-white  transition-all duration-300 hover:scale-125" />)}
            {itemSocial("https://www.instagram.com/emmi_os/?hl=en", "link_instagram", <BsInstagram className="w-8 h-8 text-white  transition-all duration-300 hover:scale-125" />)}
        </section>
    )
}