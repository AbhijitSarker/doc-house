import { Link } from 'react-router-dom';
import hero from '../../../assets/hero.png';
import hero1 from '../../../assets/hero1.png';
import hero2 from '../../../assets/hero2.png';
import hero3 from '../../../assets/hero3.png';
import doc from '../../../assets/maledoc.png';

const Hero = () => {
    return (
        <div className="relative h-screen -z-10 bg-[#07332F]">

            <div className='text-[#F3F3F3] container mx-auto flex flex-col items-center md:flex-row '>
                <div className='my-20 md:mt-32 md:w-1/2 flex flex-col items-center text-center'>
                    <h1 className='text-4xl lg:text-7xl font-semibold mb-4'>Your Best Medical Help Center</h1>
                    <p className='text-lg md:text-xl font-normal mb-8 '>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry's stardard.</p>

                    <Link><button className='flex bg-[#F7A582] w-36 h-12 items-center justify-center rounded-lg font-bold text-xl font-sans text-white'>All Services</button></Link>
                </div>

                <div className='md:w-1/2'>
                    <img className='hidden mt-16 md:block float-right' src={doc} alt="" />
                    <div className='relative md:hidden w-[350px] md:w-auto'>
                        <img className='absolute h-36 md:h-72  left-5 top-10 md:-top-14' src={hero3} alt="" />
                        <img className='absolute h-36 md:h-72  left-1/3 top-20 md:top-0' src={hero2} alt="" />
                        <img className='absolute h-36 md:h-72  right-5 top-5 md:-top-28 ' src={hero1} alt="" />
                    </div>
                </div>
            </div>

            {/* <div className='bg-slate-500 absolute top-20 md:top-24 text-[#F3F3F3] flex flex-col md:flex-row justify-between md:justify-center items-center md:items-center md:container md:mx-auto '>
                <div className='flex flex-col items-center text-center mx-6'>
                    <h1 className='text-3xl font-semibold mb-4'>Your Best Medical Help Center</h1>
                    <p className='text-sm font-normal mb-8 md:px-20'>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry's stardard.</p>

                    <Link><button className='flex bg-[#F7A582] w-36 h-12 items-center justify-center rounded-lg font-bold text-xl font-sans text-white'>All Services</button></Link>
                </div>

                <div className='bg-black'>
                     <div className='relative w-[350px] md:w-auto'>
                        <img className='absolute h-36 md:h-72  left-5 top-10 md:-top-14' src={hero3} alt="" />
                        <img className='absolute h-36 md:h-72  left-1/3 top-20 md:top-0' src={hero2} alt="" />
                        <img className='absolute h-36 md:h-72  right-5 top-5 md:-top-28 ' src={hero1} alt="" />
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Hero;