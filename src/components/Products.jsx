import React from 'react';
import { Businesscentral, CRM, POS, azure, eMoney, ecommerce, mobileapps, nav, odoo, powerBI, sharepoint, webportals } from '../assets/images';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import Stats from './Stats';
const productData = [
    { image: nav, title: 'Microsoft Dynamics Nav', text: 'Experience streamlined business operations with Microsoft Dynamics Nav, providing comprehensive navigation and project management solutions.' },
    { image: sharepoint, title: 'Microsoft SharePoint', text: 'Boost collaboration and document management within your organization using Microsoft SharePoint, the ultimate platform for seamless teamwork and productivity.' },
    { image: Businesscentral, title: 'Microsoft Business Central', text: 'Optimize your business processes with Microsoft Business Central, a comprehensive solution for finance, sales, service, and operations management.' },
    { image: powerBI, title: 'Microsoft PowerBI', text: 'Gain valuable insights and drive informed decision-making with Microsoft PowerBI, a powerful business analytics tool that transforms raw data into actionable intelligence.' },
    { image: CRM, title: 'Microsoft Dynamics CRM', text: 'Deliver exceptional customer experiences and accelerate sales growth with Microsoft Dynamics CRM, a flexible and scalable customer relationship management solution.' },
    { image: azure, title: 'Microsoft Azure', text: 'Leverage the power of cloud computing with Microsoft Azure, a flexible and scalable platform for building, deploying, and managing applications and services.' },
    { image: odoo, title: 'Odoo ERP', text: 'Streamline your business processes and enhance efficiency with Odoo ERP, an all-in-one management software that integrates various functions such as CRM, sales, inventory, and accounting.' },
    { image: POS, title: 'Point of Sale Systems', text: 'Simplify retail operations and elevate customer service with Point of Sale Systems, offering fast and efficient transactions, inventory management, and reporting capabilities.' },
    { image: mobileapps, title: 'Mobile Apps', text: 'Engage your customers and stay connected on the go with Mobile Apps, providing seamless access to your products and services from anywhere, anytime.' },
    { image: webportals, title: 'Customized Web Portals', text: 'Create personalized web portals tailored to your business needs, offering a user-friendly interface and seamless integration with your existing systems.' },
    { image: eMoney, title: 'Bank & Mobile Money Integration', text: 'Facilitate secure transactions and financial management with Bank & Mobile Money Integration services, enabling seamless integration with banking systems and mobile payment platforms.' },
    { image: ecommerce, title: 'Website Design and Ecommerce Development', text: 'Expand your online presence and reach new customers with Website Design and Ecommerce Development services, offering attractive designs and robust ecommerce solutions.' },

];


const Products = () => {
    return (
        <section id='/products' className="max-w-screen-3xl px-4 md:px-8 mb-4 mx-auto">
                <div className=" mx-auto py-4 my-3">
                    <p className='text-lg font-light text-red text-center  md:text-start pb-2'>Products & Systems</p>
                    <p className='text-3xl text-center  md:text-start capitalize font-bold md:text-4xl text-blue'>Our Business <span className='text-red'>Products</span></p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {productData.map((product, index) => (
                        <div key={index} className="card">
                            <div className="p-5 flex flex-col">
                                <div className="rounded-xl overflow-hidden mx-auto">
                                    <img src={product.image} alt={`product-${index}`} className='max-w-[150px]' />
                                </div>
                                <div className="pb-3">
                                    <h6 className='text-lg text-center font-semibold text-blue pt-2'>{product.title}</h6>
                                    <p className='text-slate-500 text-normal pt-3 leading-relaxed'>{product.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="max-w-screen-3xl text-center py-4 my-3">
                    <h2 className='captalize text-blue leading-normal text-4xl text-center py-4 font-bold '>Let us take care <span className='text-red'> of all Your Software</span>  Business needs
                    </h2>
                    <Link to="/contacts" smooth duration={500} className="btn-outline hover:cursor-pointer duration-150 ease-linear hover:bg-red">
                        <p className='px-2 tracking-wide'>Contact Us </p>
                    </Link>
                </div>
                <div className=" my-12 md:pl-36 text-center">
                        <Stats className='py-16'/>
                </div>
        </section>
    );
}

export default Products;
