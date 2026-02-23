import React from "react";

export default function WhatsappFloat() {
  const phoneNumber = "918448909389"; // country code + number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-xl transition duration-300 hover:scale-110"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        className="w-6 h-6"
      />
    </a>
  );
}