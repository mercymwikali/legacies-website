import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { HeroImage } from '../assets/images';

const Home = () => {
    return (
        <div id="/" className="md:h-screen mt-0 pt-8 md:pt-0">
            <div className="flex flex-col md:flex-row ">
                <div className='px-4 md:pr-0 md:pl-16  md:pt-14'>
                    <p className='uppercase font-bold text-red text-center  md:text-start text-4xl leading-snug'>Legacies Systems <span className='text-blue'>& Software Solutions for All</span> Business Sectors.</p>
                    <p className='text-slate-700 leading-8 py-4 text-center  md:text-start font-medium text-lg'>Embark on a transformative journey with our comprehensive system consultancy and implementation services. From envisioning the design to seamless deployment, we cater to your business needs. Join us to create tailored solutions for lasting success. Your success story begins with us!</p>

                    {/* Use Link instead of Button */}
                    <Link to="/about-us" smooth duration={500} className="group flex justify-center cursor-pointer w-full md:w-[40%] px-2 bg-red hover:bg-transparent hover:text-red hover:border-blue-500 border-2 shadow-md border-red text-white font-bold py-3 rounded-full transition-all duration-300 mt-4">
                       <p className='px-2'>Discover More</p> 
                        <MdKeyboardDoubleArrowRight size={25} className='-rotate-90 duration-100 ease-in group-hover:rotate-0' />
                    </Link>
                </div>
                <div className=''>
                    <img src={HeroImage} alt='heroSection' className='max-w-full md:max-w-[700px] overflow-hidden' />
                </div>
            </div>
        </div>
    )
}

export default Home;
