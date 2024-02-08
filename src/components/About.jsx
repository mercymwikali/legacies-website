import React from 'react'
import { ImTarget } from "react-icons/im";
import { FaRegLightbulb,FaRegHandshake  } from "react-icons/fa";

const About = () => {
    return (
        <div id='/about-us'>
            <div className='max-w-screen-xl mx-auto py-8 text-center shadow-slate-300 rounded-2xl bg-red  text-white '>
                <div className="text-wrap">
                    <p className="text-5xl py-3 capitalize font-extrabold underline text-wrap">
                        about us.
                    </p>
                </div>
                <div className="font-normal ">
                    <p className="py-4 max-w-3xl mx-auto tracking-normal">
                        At Legacies Systems, we are dedicated to providing specialized software development, customization, IT consultancy services, and training. Our commitment is rooted in building tailored systems that perfectly align with the unique size, budget, and needs of our clients. We take pride in our technical expertise, ensuring the timely delivery of customized solutions that empower our clients.                    </p>
                    <p className="py-4 max-w-3xl mx-auto tracking-normal">
                        Moreover, here at Legacies Systems, we recognize that success is achieved through continuous investment in cutting-edge technology and an unwavering commitment to core values and best practices. Our growth, scope, and influence are driven by a singular purpose: delivering dynamic IT solutions to our esteemed customers. We collaborate closely with you to understand your distinctive vision and translate that vision into action through an exceptional customer experience.                    </p>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto py-8 ">
                <div className="grid grid-cols-1 md:grid-cols-3 ">
                    <div className="card">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden mx-auto">
                                <ImTarget size={36} />
                            </div>
                            <h5 className='text-2xl md:text-medium text-center font-medium mt-3'>Our Mission</h5>
                            <p className='text-slate-500 text-lg mt-3'>LSS is an IT company
                                with the vision statement
                                to make a difference
                                through our people, a
                                team of dedicated
                                professionals, who value
                                our customers, deliver
                                on our promises and
                                ensure the client is
                                satisfied.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden mx-auto">
                                <FaRegLightbulb size={36} />
                            </div>
                            <h5 className='text-2xl md:text-3xl text-center font-medium mt-3'>Our Vission</h5>
                            <p className='text-slate-500 text-lg mt-3'>To become regional
                                leader in the innovation
                                and development of
                                world-class enterprise
                                software solutions.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden mx-auto">
                                <FaRegHandshake size={36} />
                            </div>
                            <h5 className='text-2xl md:text-3xl text-center font-medium mt-3'>Our Values</h5>
                            <p className='text-slate-500 text-lg text-justify mt-3'>Quality projects
                                implementation
                                Support to our clients is
                                key
                                Having High Standards.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About