import React from "react";

export default function ChooseUs() {
  return (
    <>
    <section className="w-full flex items-center justify-center bg-white py-20 px-10">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Not Your Average Realtor
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-md">
            Real estate agents are facing significantly increased competition today. Smart marketing can help them win against the odds.
          </p>
        </div>

        {/* Right Images Section */}
        <div className="relative flex justify-center items-center">
          {/* Large Center Image */}
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-gray-100 z-10">
            <img
              src="/Ellipse 11.svg"
              alt="Agent"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Right Small Image */}
          <div className="absolute -top-6 right-6 w-40 h-40 rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
            <img
              src="/Ellipse 12.svg"
              alt="Clients"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Right Small Image */}
          <div className="absolute -bottom-6 right-10 w-40 h-40 rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
            <img
              src="/Ellipse 13.svg"
              alt="House Papers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
    </section>
    


  <section className="w-full bg-white py-20 px-6 md:px-16">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-16">
        Why Choose Us?
      </h2>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <span className="text-blue-600 text-2xl">
                <img src="/home.svg" />
            </span>
          </div>
          <h3 className="text-lg font-bold text-blue-600 mb-2">Potential ROI</h3>
          <p className="text-gray-600 text-sm max-w-xs">
            Real estate agents are facing significantly increased competition. Smart strategies help win clients.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <span className="text-blue-500 text-2xl">
                <img src="/paintbrush-2.svg" />            
            </span>
          </div>
          <h3 className="text-lg font-bold text-blue-600 mb-2">Design</h3>
          <p className="text-gray-600 text-sm max-w-xs">
            Creating high-impact visuals and branding helps agents stand out from the crowd.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <span className="text-blue-600 text-2xl">
                <img src="/circle-dollar-sign.svg" />
            </span>
          </div>
          <h3 className="text-lg font-bold text-blue-600 mb-2">Marketing</h3>
          <p className="text-gray-600 text-sm max-w-xs">
            Smart digital marketing campaigns help maximize property reach and engagement.
          </p>
        </div>
      </div>

      {/* Images Section */}
      <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 relative">
        <div className="relative p-4 ml-24">
          <img src="/pexels-brett-sayles-2881232.svg" alt="House" className="rounded-xl shadow-lg h-[8rem]" />
        </div>

        <div className="relative p-4">
          <div className="absolute -top-3 left-0 w-6 h-6 bg-blue-500"></div>
          <img src="/pexels-andres-ayrton-6578391.svg" alt="Meeting" className="rounded-xl shadow-lg" />
        </div>

        <div className="relative p-4">
          <div className="absolute left-0 -bottom-9 w-6 h-6 bg-orange-500"></div>
          <img src="/pexels-fauxels-3182834.svg" alt="Team" className="absolute bottom-0 -bottom-3 rounded-xl  shadow-lg h-[8rem]" />
        </div>
      </div>

    </section>
 

</>

  );
}
