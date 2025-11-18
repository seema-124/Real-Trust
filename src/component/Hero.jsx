import React from "react";

const Hero = () => (
  <div className="relative w-full h-[90vh]">
    <img
      src="/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg"
      alt="Hero"
      className="absolute w-full h-full object-cover brightness-70 inset-0"
    />

    <div className="relative flex items-center justify-between h-full px-16 my-20">
      <div className="max-w-lg text-white z-10">
        <h1 className="text-6xl font-bold drop-shadow-xl">
          Consultation,<br /> Design,<br /> & Marketing
        </h1>
      </div>
      <div className="bg-[#0a3d77] bg-opacity-140 text-white shadow-xl p-8 z-10 w-96">
        <h2 className="font-bold text-3xl text-center text-white-900 mb-6">
          Get a Free 
          <br/>Consultation
        </h2>
        <form className="space-y-5">
          <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border rounded-lg" />
          <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border rounded-lg" />
          <input type="text" placeholder="Mobile Number" className="w-full px-4 py-3 border rounded-lg" />
          <input type="text" placeholder="Area, City" className="w-full px-4 py-3 border rounded-lg" />
          <button type="submit" className="w-full py-3 rounded-lg bg-orange-500 text-white font-bold">Get Quick Quote</button>
        </form>
      </div>
    </div>
  </div>
);

export default Hero;
