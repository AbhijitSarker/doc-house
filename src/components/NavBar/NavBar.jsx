import { useState } from 'react';
import logo from '../../assets/logo.png';
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-[#07332F] h-16 p-2">
            <div className='flex justify-between items-center container mx-auto'>
                <img className='h-10' src={logo} alt="" />
                {
                    open ?
                        <ul className={`fixed w-full h-screen flex flex-col gap-10 justify-center items-center bg-[#F7A582] left-0 top-0`}>
                            <li className='text-3xl font-bold font-serif '>Home</li>
                            <li className='text-3xl font-bold font-serif '>about</li>
                            <li className='text-3xl font-bold font-serif '>Home</li>
                            <li className='text-3xl font-bold font-serif '>about</li>
                        </ul>
                        : <ul className='md:flex hidden  space-x-5'>
                            <li>Homes</li>
                            <li>abouts</li>
                            <li>Homes</li>
                            <li>abouts</li>
                        </ul>
                }
                <button className='hidden md:flex bg-blue-400 p-3'>Login</button>
                <div className='md:hidden z-20' onClick={() => setOpen(!open)}>
                    {
                        open ? <GiCrossedBones className='text-4xl text-[#07332F]' /> : <FaBarsStaggered className='text-4xl text-[#F7A582]' />
                    }
                </div>



            </div>
        </nav>
    );
};

export default NavBar;