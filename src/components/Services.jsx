import React from 'react'
import { computer, infrastructure,  support } from '../assets/images';

const Services = () => {
    return (
        <section id='/services' className=' mx-auto  text-center bg-slate-100 p-8'>
            <div className="py-4 max-w-3xl mx-auto tracking-normal">
                <p className="text-2xl px-3 md:px-0 pt-3 capitalize font-extrabold text-red text-wrap">
                    ICT Consultancy Services <span className='text-blue'>that we Offer</span>
                </p>
                <p className='text-slate-500 text-normal py-3 leading-relaxed'>We provide advisory services for the seamless integration of advanced technologies at clients' locations. This includes implementing new technologies based on clients' specifications, upgrading and enhancing existing facilities by seamlessly integrating cutting-edge technology with the current systems. Our comprehensive consulting services encompass:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="card border-x-2 border-blue cursor-pointer">
                    <div className="p-2 flex flex-col">
                        <div className="rounded-xl overflow-hidden mx-auto">
                            <img src={computer} alt='software development' className='max-w-[150px]' />
                        </div>
                        <h5 className='text-2xl md:text-medium  text-center font-medium'>Software Development</h5>
                        <p className='text-slate-500 text-normal py-3 leading-relaxed'>Legacies Systems & Solutions offers comprehensive solutions for application development and management, covering requirement analysis to deployment. Our expertise includes software development in areas such as pension administration, manufacturing, Sacco solutions, education/school management, investment, enterprise resource planning, public sector, document management, and mobile applications.</p>
                    </div>
                </div>

                <div className="card border-x-2 border-blue cursor-pointer">
                    <div className="p-2 flex flex-col">
                        <div className="rounded-xl overflow-hidden mx-auto">
                            <img src={infrastructure} alt='infrastructure' className='max-w-[150px]' />
                        </div>
                        <h5 className='text-2xl md:text-medium  text-center font-medium'>Network & Infrastructure</h5>
                        <p className='text-slate-500 text-normal pt-2 leading-relaxed'>Legacies Systems & Solutions Ltd empowers clients to discover, develop, and deploy tailored solutions that effectively address their evolving business needs.</p>
                    </div>
                </div>
                <div className="card border-x-2 border-blue cursor-pointer">
                    <div className="p-2 flex flex-col">
                        <div className="rounded-xl overflow-hidden mx-auto">
                            <img src={support} alt='support' className='max-w-[150px]' />
                        </div>
                        <h5 className='text-2xl md:text-medium  text-center font-medium '>Client Support</h5>
                        <p className='text-slate-500 text-normal pt-2 leading-relaxed'>With our expertise and experience, we excel in managing essential infrastructure and applications for various industries. Our Managed Services cover all IT operations, offering clients control and flexibility while reducing costs and complexities.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Services