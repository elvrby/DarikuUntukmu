import Link from "next/link";
const Gameboy: React.FC = () => {
  return (
    <div className="text-pink-500 h-screen  text-xs">
      <div className="flex items-center justify-center w-full h-screen p-4 md:px-96">
        {/* Gameboy Layout */}
        <div className="w-full h-10/12 md:h-11/12 border-2 border-zinc-400 bg-white p-3 rounded-2xl">
          <div className="w-full h-60 border border-zinc-400 rounded-2xl p-4 text-xs">
            <h1>Welcome Zhanna</h1>
          </div>

          {/* Button Section */}
          <div className="mt-4 grid grid-cols-2 gap-3 p-2">
            <Link
              href="/messages"
              passHref
              className="w-full py-3 rounded-lg bg-blue-500 text-white text-center font-semibold shadow-[4px_4px_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.5)] active:shadow-none transition duration-150 ease-in-out"
            >
              <p>Messages</p>
            </Link>
            <button className="w-full py-3 rounded-lg bg-yellow-500 text-white font-semibold shadow-[4px_4px_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.5)] active:shadow-none transition duration-150 ease-in-out">
              Gallery
            </button>
            <button className="w-full py-3 rounded-lg bg-purple-500 text-white font-semibold shadow-[4px_4px_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.5)] active:shadow-none transition duration-150 ease-in-out">
              Music
            </button>
            <button className="w-full py-3 rounded-lg bg-green-500 text-white font-semibold shadow-[4px_4px_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.5)] active:shadow-none transition duration-150 ease-in-out">
              Tetris
            </button>
          </div>

          {/*     Pad     */}
          <div className="flex justify-center items-center gap-8 mt-6 w-full px-4">
            {/* D-Pad */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
              {/* Cross */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-[30%] h-full bg-gray-700 rounded-sm shadow-md z-10" />
                <div className="absolute w-full h-[30%] bg-gray-700 rounded-sm shadow-md z-10" />
              </div>

              {/* Arrow Images */}
              <img src="/arrow-btn.png" alt="Up" className="absolute top-1 left-1/2 w-4 sm:w-5 md:w-6 transform -translate-x-1/2 z-10" />
              <img src="/arrow-btn.png" alt="Down" className="absolute bottom-1 left-1/2 w-4 sm:w-5 md:w-6 transform -translate-x-1/2 rotate-180 z-10" />
              <img src="/arrow-btn.png" alt="Left" className="absolute left-1 top-1/2 w-4 sm:w-5 md:w-6 transform -translate-y-1/2 -rotate-90 z-10" />
              <img src="/arrow-btn.png" alt="Right" className="absolute right-1 top-1/2 w-4 sm:w-5 md:w-6 transform -translate-y-1/2 rotate-90 z-10" />
            </div>

            {/* Tombol A & B */}
            <div className="flex gap-4 sm:gap-6 justify-center items-center">
              <button className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-red-600 text-white font-bold shadow-md">A</button>
              <button className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-blue-600 text-white font-bold shadow-md">B</button>
            </div>
          </div>

          <div className="text-center justify-between flex px-10 gap-2 mt-6 text-white">
            <button className="w-full py-1 border-2 border-zinc-500 bg-zinc-400 rounded-full">Select</button>
            <button className="w-full py-1 border-2 border-zinc-500 bg-zinc-400 rounded-full">Start</button>
          </div>

          {/* End */}
        </div>
      </div>
    </div>
  );
};

export default Gameboy;
