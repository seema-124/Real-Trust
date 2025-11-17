import React from "react";

export default function RealtorSection() {
  return (
    <>
    <section className="w-full flex items-center justify-center bg-white py-20 px-10">
      <div className="mt-24 text-center max-w-3xl mx-auto">
        <h2 className="text-6xl font-bold text-blue-600 mb-20">About Us</h2>
        <p className="text-gray-600 leading-relaxed text-sm">
          With years of experience in real estate, we are committed to customer service and a
          streamlined work flow that delivers results. We provide quality insights and help
          build relationships with clients so that important decisions become easier to make
          by planning strategies effectively.
        </p>
        <button type="submit" className="bg-white wx-[10px] py-3 px-16 rounded-lg text-blue-600 font-bold mt-10 border-b border-b-blue-600 border-2">LEARN MORE</button>
      </div>
    </section>   

</>

  );
}
