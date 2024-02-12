import React from 'react';
import { FaHospital, FaTruck, FaUniversity, FaHandsHelping, FaUserTie, FaIndustry, FaUtensils, FaLandmark, FaFileContract  } from 'react-icons/fa';

const Solutions = () => {
    const solutionsData = [
        { name: 'Hospital Management', icon: <FaHospital className='text-[2em]' /> },
        { name: 'Fleet Management', icon: <FaTruck className='text-[2em]' /> },
        { name: "Saccos' Solution", icon: <FaUniversity className='text-[2em]' /> },
        { name: "Education Sector Solution", icon: <FaUniversity className='text-[2em]' /> },
        { name: "NGO's Solution", icon: <FaHandsHelping className='text-[2em]' /> },
        { name: "HR & Payroll Management", icon: <FaUserTie className='text-[2em]' /> },
        { name: "Manufacturing Solution", icon: <FaIndustry className='text-[2em]' /> },
        { name: "Catering Solution", icon: <FaUtensils className='text-[2em]' /> },
        { name: "Public Sector Solution", icon: <FaLandmark className='text-[2em]' /> },
        { name: "Contracts & Project Management", icon: <FaFileContract  className='text-[2em]' /> },
    ];

    return (
        <section className=" flex flex-col md:flex-row p-8  bg-slate-100 mx-auto">
            <div className="w-full md:w-1/3 text-center md:text-start justify-center items-center md:my-12 px-3">
                <h5 className="text-3xl font-bold text-blue my-4">INDUSTRIES & SOLUTIONS</h5>
                <p className="text-slate-500 text-normal pt-3 leading-relaxed">We are a leading provider of premium business solutions. Our ethos revolves around meeting our clients' requirements through the delivery of tailored solutions that align with cutting-edge technology and adhere to the highest IT standards.</p>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-5 gap-2">
                {solutionsData.map((solution, index) => (
                    <div key={index} className="work-card">
                        <div className="icon-bg">
                            {solution.icon}
                        </div>
                        <div className="pb-3">
                            <p>{solution.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Solutions;
