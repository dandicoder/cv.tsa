import React from "react";
import { FaLocationDot } from "react-icons/fa6";

function HeroView() {
  return (
    <section className="relative bg-hero-pattern bg-cover bg-no-repeat h-screen">
      {/* Overlay agar hanya background yang memiliki opacity */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Konten tetap jelas di atas overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-size-1 font-bold">
          CV. TATA SURYA ABADI 
        </h1>
        <h3 className="md:text-2xl text-[12px] text-size-2 text-primary">
          Civil Engineering, Supplier, dan General Contractors
        </h3>
        <div className="flex text-white items-center text-size-3">
          <FaLocationDot className="lg:w-8 lg:h-8 w-2 h-2 text-red-500 mr-2" />
          <span>Bukit Pedusunan, Kuantan Mudik - Kuantan Singingi Riau</span>
        </div>
      </div>
    </section>
  );
}

export default HeroView;
