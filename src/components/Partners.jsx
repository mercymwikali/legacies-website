import { safaricom, ms, Tritellogo, DSLLogo } from '../assets/images';

const Partners = () => {
    const images = [safaricom, ms, Tritellogo, DSLLogo];

    return (
        <div className="flex justify-center items-center h-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`partner-${index}`}
                        className="w-full h-auto md:w-52 md:h-32 mx-2 md:mx-4 my-4"
                    />
                ))}
            </div>
        </div>
    );
}

export default Partners;
