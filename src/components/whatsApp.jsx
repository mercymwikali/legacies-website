import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = '254729958021'; // WhatsApp number with country code
  const message = 'Hello! I have a question.'; // Initial message
  
  const handleClick = () => {
    // Create WhatsApp URL with phone number and message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Open WhatsApp chat in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button onClick={handleClick} className="flex items-center bg-blue hover:bg-green-600 text-white font-bold py-4 px-4 rounded-full">
      <FaWhatsapp className="text-2xl mr-2" /> {/* Adjust text size using text-2xl */}
      <span className="whitespace-nowrap capitalize">Talk to an expert!</span> {/* Ensure text is on one line */}
    </button>
  );
};

export default WhatsAppButton;
