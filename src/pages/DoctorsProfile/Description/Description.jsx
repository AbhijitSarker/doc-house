import { useState } from 'react';


const Description = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="container mx-auto my-20 border bg-slate-50 rounded-lg p-10">
            <div className='tabs'>
                <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "tab active-tab" : "tab"}>Overview</div>
                <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "tab active-tab" : "tab"}>Review</div>
                <div onClick={() => toggleTab(3)} className={toggleState === 3 ? "tab active-tab" : "tab"}>Business Hours</div>
            </div>

            {/* contents */}
            <div className="contents">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <div className='my-10'>
                        <h3 className='text-neutral-700 text-xl font-bold mb-2'>About ME</h3>
                        <p className=" text-neutral-700 text-base font-normal  leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus, nam repudiandae, eius eaque vel molestiae a reprehenderit earum dolores adipisci ad. Ullam, delectus corporis, ab facere odio voluptate harum, cumque obcaecati modi qui magnam excepturi libero exercitationem natus sunt quo saepe veniam! Fugit ut eaque dolorum porro, excepturi perferendis.</p>
                    </div>

                    <div className='flex justify-around flex-col md:flex-row space-y-5 '>
                        <div>
                            <h3 className='text-neutral-700 text-xl font-bold'>Services</h3>
                            <ul className='text-neutral-700 text-base font-normal leading-relaxed'>
                                <li>Tooth cleaning</li>
                                <li>Root Canal Therapy</li>
                                <li>Implants</li>
                                <li>Composite Bonding</li>
                                <li>Fissure Sealants</li>
                                <li>Surgical Extractions</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-neutral-700 text-xl font-bold text-right'>Specializations</h3>
                            <ul className='text-neutral-700 text-base font-normal leading-relaxed text-right'>
                                <li>Children Care</li>
                                <li>Dental Care</li>
                                <li>Oral and Maxillofacial Surgery</li>
                                <li>Orthodontist</li>
                                <li>Periodontist</li>
                                <li>Prosthodontics</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>


                    <h3 className='text-3xl font-bold mt-8 mb-4'>Electro  Gastrology Therapy</h3>
                    <p className=''>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error</p>
                    <button className='border mt-10 border-[#F7A582] rounded-lg w-40 h-14 font-bold text-xl text-[#F7A582]'>More Details</button>

                </div>
                <div className={toggleState === 3 ? "content active-content" : "content"}>


                    <h3 className='text-3xl font-bold mt-8 mb-4'>Electro  Gastrology Therapy</h3>
                    <p className=''>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error</p>
                    <button className='border mt-10 border-[#F7A582] rounded-lg w-40 h-14 font-bold text-xl text-[#F7A582]'>More Details</button>

                </div>
            </div>
        </div>
    );
};

export default Description;