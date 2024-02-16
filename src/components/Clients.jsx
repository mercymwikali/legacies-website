import { Carousel } from 'flowbite-react';
import { motion } from 'framer-motion';
import { jooust, Lukeshospital, Ampath, amref, amref_uni, NITA, agriculturalfood, PrivateComission, council_legal_edu, cuea_logo, mmu, kabarak_university, Africa_nazarene, Moi_University_logo, KIRDI, fountainHSC } from '../assets/images';

const images = [jooust, Lukeshospital, Ampath, amref, amref_uni, NITA, agriculturalfood, PrivateComission, council_legal_edu, cuea_logo, mmu, kabarak_university, Africa_nazarene, Moi_University_logo, KIRDI, fountainHSC];

const Client = () => {

  return (
    <div className="relative w-50 h-48 md:h-44 my-12 shadow-b-lg ">
      <p className='text-3xl text-center px-4  md:text-start capitalize font-bold  text-blue'>Our Satisfied Clients</p>
      <Carousel
        slide={2}
        indicators={false}
        infiniteLoop
        autoPlay
        slideInterval={1000}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="inline-flex"
            style={{ width: '250px' }} // Adjust the width as needed
          >
            <motion.img
              src={image}
              alt={`image-${index}`}
              className="w-auto h-100 "
            />
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default Client;
