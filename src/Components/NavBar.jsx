import { useState } from "react";
import { Link } from "react-scroll";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";


const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () =>  setClick(!click);
  
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-emerald-700 transition">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="Home">
                    <li className="my-4 py-4 border-b border-bg-emerald-700 hover:bg-bg-emerald-700 hover:rounded">Inicio</li>
                </Link>
                <Link spy={true} smooth={true} to="Productos">
                    <li className="my-4 py-4 border-b border-bg-emerald-700 hover:bg-bg-emerald-700 hover:rounded">Productos</li>
                </Link>
                <Link spy={true} smooth={true} to="Contacto">
                    <li className="my-4 py-4 border-b border-bg-emerald-700 hover:bg-bg-emerald-700 hover:rounded">Contacto</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-bg-emerald-700">
                <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold">Bienvenido</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                <Link spy={true} smooth={true} to="Home">
                    <li className="hover:text-teal-950 transition border-b-2 border-withe hover:border-teal-950 cursor-pointer">Inicio</li>
                </Link>
                <Link spy={true} smooth={true} to="Productos">
                    <li className="hover:text-teal-950 transition border-b-2 border-withe hover:border-teal-950 cursor-pointer">Productos</li>
                </Link>
                <Link spy={true} smooth={true} to="Contacto">
                    <li className="hover:text-teal-950 transition border-b-2 border-withe hover:border-teal-950 cursor-pointer">Contacto</li>
                </Link>
            </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>

                <button className="block sm:hidden transtion" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/>}
                </button>

            </div>
        </nav>
    );
};

export default NavBar;