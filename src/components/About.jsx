import React from 'react'
import { ImTarget } from "react-icons/im";
import { FaRegLightbulb, FaRegHandshake } from "react-icons/fa";
import { Improvement, customerFocus, solo, teamwork } from '../assets/images';

const About = () => {
    return (
        <section id='/about-us' className=''>
            <div className=' mx-auto text-center bg-slate-200'>
                <div className="py-4 max-w-5xl mx-auto tracking-normal">
                    <p className="text-4xl px-3 md:px-0 pt-3 capitalize font-extrabold leading-tight
                     text-red text-wrap">
                        Delivering Excellence <span className='text-blue'>as Your Premium Business</span> Solutions Partner.
                    </p>
                </div>
                <div className="py-4 px-4 md:px-4 leading-relaxed">
                    <p className="max-w-4xl mx-auto">
                        Legacies Systems Solutions (LSS) is a distinguished integrated Enterprise Solution provider, offering comprehensive solutions designed to enhance the functions and processes of organizations across various sectors. Our solutions are crafted to boost efficiency and service delivery by automating processes and enhancing accountability.
                    </p>
                    <p className="py-4 max-w-4xl mx-auto">
                        At Legacies Systems, our commitment revolves around delivering specialized software development, customization, IT consultancy services, and training. We are devoted to constructing bespoke systems that precisely align with the unique size, budget, and requirements of our clients. Our pride lies in the technical expertise that ensures the timely delivery of customized solutions, empowering our clients.
                    </p>
                </div>
            </div>
            <div className="max-w-screen-xl my-4 px-4 md:px-0 mx-auto py-8 ">
                <div className="max-w-screen-3xl mx-auto text py-4 my-3">
                    <p className='text-2xl text-center capitalize font-bold md:text-4xl text-blue'>Mission, Vission<span className='text-red'> & Commitment.</span></p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                    <div className="card">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden mx-auto">
                                <ImTarget size={36}  className='text-blue' />
                            </div>
                            <h5 className='text-2xl md:text-medium text-center font-medium mt-3'>Our Mission</h5>
                            <p className='text-slate-500 text-normal pt-3 leading-relaxed'>LSS is an IT company with a vision to create an impact through our dedicated team of professionals who prioritize customer value, fulfill our commitments, and ensure client satisfaction.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden mx-auto">
                                <FaRegLightbulb size={36} className='text-blue' />
                            </div>
                            <h5 className='text-2xl md:text-medium  text-center font-medium mt-3'>Our Vission</h5>
                            <p className='text-slate-500 text-normal pt-3 leading-relaxed'>Our aim is to emerge as a regional leader in innovating and developing top-tier enterprise software solutions.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden mx-auto">
                                <FaRegHandshake size={36} className='text-blue'  />
                            </div>
                            <h5 className='text-2xl md:text-medium text-center font-medium mt-3'>Our Commitment</h5>
                            <p className='text-slate-500 text-normal pt-3 leading-relaxed'>We are committed to ensuring the successful implementation of quality projects, providing essential support to our clients, and upholding the highest standards in all aspects of our work.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl px-4 md:px-0 mx-auto py-8 ">
                <div className="max-w-screen-3xl mx-auto text py-4 my-3">
                    <p className='text-2xl text-center capitalize font-bold md:text-4xl text-blue'>legacies systems solution's <span className='text-red'>core values.</span></p>
                    <p className='text-slate-500 font-normal text-center mt-3'>Here at Legacies we think big and have hands in all leading technology platforms to provide you with a wide range of services.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-8 ">
                <div className="card border-b-4 border-blue p-5 flex  gap-5 cursor-pointer">
                <div className="md:w-1/2 ">
                            <h5 className='text-2xl md:text-lg font-semibold underline text-blue py-3'>TeamWork </h5>
                            <p className='text-slate-500 py-3 leading-relaxed'>We encourage collaboration and the sharing of best ideas while also upholding individual accountability within our organization.</p>
                        </div>
                        <div className="md:w-1/2 overflow-hidden">
                            <img src={teamwork} alt='teamwork'className='w-[230px] md:max-w-[230px]' />
                        </div>
                    </div>
                    <div className="card border-b-4 border-blue p-5 flex  gap-5 cursor-pointer">
                        <div className="md:w-1/2 ">
                            <h5 className='text-2xl md:text-lg font-semibold underline text-blue py-3'>Skill Enhancement</h5>
                            <p className='text-slate-500 py-3 leading-relaxed '>We consistently seek innovative solutions and strive for improvement, viewing change as a chance for growth and advancement.</p>
                        </div>
                        <div className="md:w-1/2 overflow-hidden">
                            <img src={solo} alt='skills' className='w-[200px] md:max-w-[200px]' />
                        </div>
                    </div>
                    <div className="card border-b-4 border-blue p-5 flex  gap-5 cursor-pointer">
                        <div className="md:w-1/2 ">
                            <h5 className='text-2xl md:text-lg font-semibold underline text-blue py-3'>Customer Satisfaction</h5>
                            <p className='text-slate-500 py-3 leading-relaxed '>Our customers hold the utmost significance in our business and are the driving force behind our success.</p>
                        </div>
                        <div className="md:w-1/2 overflow-hidden">
                            <img src={customerFocus} alt='customer' className='w-[200px] md:max-w-[200px]' />
                        </div>
                    </div>
                    <div className="card border-b-4 border-blue p-5 flex  gap-5 cursor-pointer">
                        <div className="md:w-1/2 ">
                            <h5 className='text-2xl md:text-lg font-semibold underline text-blue py-3'>Work Ethic</h5>
                            <p className='text-slate-500 py-3 leading-relaxed'>We uphold honesty in every interaction, building our reputation through a commitment to the highest ethical standards.</p>
                        </div>
                        <div className="md:w-1/2 overflow-hidden">
                            <img src={Improvement} alt='self-Improvement' className='w-[200px] md:max-w-[200px]' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About