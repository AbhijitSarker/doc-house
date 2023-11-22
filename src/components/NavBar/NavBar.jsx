import { useState } from 'react';
import logo from '../../assets/logo.png';
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-[#07332F] h-16 p-2">
            <div className='flex justify-between items-center container mx-auto'>
                <img className='h-10' src={logo} alt="" />

                {/*for small device */}
                <ul className={`fixed w-full h-screen flex flex-col gap-10 justify-center items-center bg-[#F7A582] transform duration-700 ease-in-out ${open ? 'left-0 top-0' : '-top-[1000px] left-0'} `}>
                    <Link className='text-3xl font-bold font-serif hover:bg-[#07332F] rounded-md p-1 hover:text-white'>Home</Link>
                    <Link className='text-3xl font-bold font-serif hover:bg-[#07332F] rounded-md p-1 hover:text-white'>about</Link>
                    <Link className='text-3xl font-bold font-serif hover:bg-[#07332F] rounded-md p-1 hover:text-white'>Home</Link>
                    <Link className='text-3xl font-bold font-serif hover:bg-[#07332F] rounded-md p-1 hover:text-white'>about</Link>
                    <button className='flex bg-[#07332F] w-36 h-12 items-center justify-center rounded-lg font-bold text-3xl font-serif text-white'>Login</button>
                </ul>

                {/* for medium and large device */}
                <ul className='md:flex hidden  space-x-5'>
                    <Link className='text-lg font-lg font-sans text-white hover:text-[#F7A582] rounded-md px-1'>Homes</Link>
                    <Link className='text-lg font-lg font-sans text-white hover:text-[#F7A582] rounded-md px-1'>abouts</Link>
                    <Link className='text-lg font-lg font-sans text-white hover:text-[#F7A582] rounded-md px-1'>Homes</Link>
                    <Link className='text-lg font-lg font-sans text-white hover:text-[#F7A582] rounded-md px-1'>abouts</Link>
                </ul>

                <button className='hidden md:flex hover:text-[#F7A582] font-serif w-36 h-12 items-center justify-center rounded-lg font-bold text-xl text-white transition ease-in-out duration-200'>Login / Register</button>
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