import { useState } from 'react'
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll'


export default function Navbar() {

    const links = [
        { name: "¿Quiénes somos?", id: "quienes-somos" },
        { name: "¿Qué hacemos?", id: "que-hacemos" },
        { name: "Contacto", id: "contacto" },
    ]

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (

        <nav className="shadow-md w-full top-0 left-0" id='navbar'>
            <div className='md:flex bg-white py-4 md:px-10 px-7 items-center justify-between'>
                <div className='w-64 cursor-pointer flex items-center'>
                    <Link href="/">
                        <img src="/PAGINA WEB LOGO.png" alt="Graficas Genil" />
                    </Link>
                </div>
                <div onClick={toggle}>
                    <button className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                        <ion-icon name={isOpen ? "close" : "menu"}></ion-icon>
                    </button>
                </div>
                <ul className={`md:flex md:items-center absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? "top-20 opacity-100" : "top-[-490px]"} md:opacity-100`}>
                    {links.map((link, index) => (
                        <li key={index} className='md:ml-8 text-xl md:my-0 my-7'>
                            <AnchorLink href={`#${link.id}`} className='text-cyan-500 hover:text-cyan-200 duration-500'>{link.name}</AnchorLink>
                        </li>
                    ))}
                </ul>
            </div>

        </nav>
    )
}
