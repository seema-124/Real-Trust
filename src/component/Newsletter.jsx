export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="w-full h-full bg-cover bg-center flex items-center justify-center bg-black/60"
        style={{
          backgroundImage: "url('/Rectangle.svg')",
        }}
      >
        
        <div className="text-center px-4 py-20">
          <h1 className="text-white text-xl md:text-3xl font-semibold max-w-3xl mx-auto leading-snug">
            Learn more about our listing process, as well as our additional
            staging and design work.
          </h1>

          <button className="mt-8 px-10 py-3 bg-white text-gray-700 font-medium rounded shadow hover:bg-gray-100 transition">
            LEARN MORE
          </button>
        </div>
      </section>

      {/* NAV + SUBSCRIBE BAR */}
      <div className="w-full bg-blue-600 text-white py-5 flex flex-col md:flex-row md:items-center md:justify-between px-10 md:px-20 gap-4">

        {/* NAV LINKS */}
        <div className="flex gap-6 text-sm mx-auto md:mx-0">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact</a>
        </div>

        {/* SUBSCRIBE FORM */}
        <div className="flex items-center gap-2 mx-auto md:mx-0">

          <span className="whitespace-nowrap">Subscribe Us:</span>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-6 py-2 rounded-l text-white bg-blue-500 border border-white placeholder-white focus:outline-none"
            />

            <button className="bg-white text-blue-600 px-6 py-2 rounded-r font-medium border border-white hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
