import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Button } from 'react-scroll'; // Changed Link to Button
import { HeroImage } from '../assets/images';

const Home = () => {
    return (
        <div id="/" className="min-h-screen mt-0 ">
            <div className="flex flex-col md:flex-row justify-between ">
                <div className='px-8 flex flex-col pt-16'>
                    <p className='uppercase font-bold text-red text-4xl leading-snug'>Legacies Systems <span className='text-blue'>& Software Solutions for All</span> Business Sectors.</p>
                    <p className='text-black text-base py-4'>Embark on a transformative journey with our comprehensive system consultancy and implementation services. From envisioning the design to seamless deployment, we cater to your business needs. Join us to create tailored solutions for lasting success. Your success story begins with us!</p>

                    {/* Changed Link to Button */}
                     <Button className="group flex justify-center w-[40%] px-4 bg-red hover:bg-transparent hover:text-red hover:border-blue-500 border-2 shadow-md border-red text-white font-bold py-3 rounded-full transition-all duration-300">
                        Discover More 
                        <MdKeyboardDoubleArrowRight size={25} className='-rotate-90 duration-100  ease-in group-hover:rotate-0' />
                    </Button>
                </div>
                <div className='px-16 md:pl-8 overflow-hidden'>
                    <img src={HeroImage} alt='heroSection'/>
                </div>
            </div>
        </div>
    )
}

export default Home;
