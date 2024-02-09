import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { HeroImage } from '../assets/images';

const Home = () => {
    return (
        <div id="/" className="md:h-screen mt-0">
            <div className="flex flex-col md:flex-row justify-between">
                <div className='px-2 md:pr-0 md:pl-16 flex flex-col pt-16'>
                    <p className='uppercase font-bold text-red text-4xl leading-snug'>Legacies Systems <span className='text-blue'>& Software Solutions for All</span> Business Sectors.</p>
                    <p className='text-slate-700 leading-8 py-4'>Embark on a transformative journey with our comprehensive system consultancy and implementation services. From envisioning the design to seamless deployment, we cater to your business needs. Join us to create tailored solutions for lasting success. Your success story begins with us!</p>

                    {/* Use Link instead of Button */}
                    <Link to="/about-us" smooth duration={500} className="group flex justify-center cursor-pointer w-full md:w-[40%] px-4 bg-red hover:bg-transparent hover:text-red hover:border-blue-500 border-2 shadow-md border-red text-white font-bold py-3 rounded-full transition-all duration-300 mt-4">
                        Discover More
                        <MdKeyboardDoubleArrowRight size={25} className='-rotate-90 duration-100 ease-in group-hover:rotate-0' />
                    </Link>
                </div>
                <div className=''>
                    <img src={HeroImage} alt='heroSection' className='max-w-full overflow-hidden' />
                </div>
            </div>
        </div>
    )
}

export default Home;
