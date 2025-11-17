export default function Footer() {
  return (
    <footer className="w-full bg-[#1b1d2a] text-gray-300 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-sm">All Rights Reserved © 2023</p>

        <div className="flex items-center gap-2 text-white font-semibold h-2 w-40">
          <img src="/logo.svg" />
        </div>

        <div className="flex gap-4 text-white">
          
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <img src="/Group-1.svg" className="w-4 h-4" />
          </div>

          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <img src="/Group.svg" className="w-4 h-4" />
          </div>

          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <img src="/Frame.svg" className="w-4 h-4" />
          </div>

          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <img src="/Linkedin.svg" className="w-4 h-4" />
          </div>

        </div>

      </div>
    </footer>
  );
}
