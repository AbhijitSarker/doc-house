import { useState } from 'react';
import logo from '../../assets/logo.png';
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";

const SignUp = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-slate-400 h-16 overflow-x-hidden p-2">
            <div className='flex justify-between items-center'>
                <img className='h-10' src={logo} alt="" />
                {
                    open ?
                        <ul className={`absolute flex flex-col space-x-5 bg-slate-300`}>
                            <li>Home</li>
                            <li>about</li>
                            <li>Home</li>
                            <li>about</li>
                        </ul>
                        : <ul className='md:flex hidden  space-x-5'>
                            <li>Homes</li>
                            <li>abouts</li>
                            <li>Homes</li>
                            <li>abouts</li>
                        </ul>
                }
                <button className='hidden md:flex bg-blue-400 p-3'>Login</button>
                <div className='md:hidden' onClick={() => setOpen(!open)}>
                    {
                        open ? <GiCrossedBones className='text-4xl' /> : <FaBarsStaggered className='text-4xl' />
                    }
                </div>



            </div>
        </nav>
    );
};

export default SignUp;