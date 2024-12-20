"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { NextPage } from "next";
import { Volume2, VolumeX, Play } from "lucide-react";
import Row from "../TrendingNow"; // Update path if necessary
import Footer from "../Footer/Footer";

const HomePage: NextPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex items-center justify-between p-4 z-50">
        <div className="flex items-center space-x-4">
          <Image
            src="/ben-ve.png"
            alt="Netflix Logo"
            width={100}
            height={50}
            className="cursor-pointer"
          />
          <ul className="hidden md:flex space-x-4">
            <li className="cursor-pointer hover:text-gray-400">Home</li>
            <li className="cursor-pointer hover:text-gray-400">TV Shows</li>
            <li className="cursor-pointer hover:text-gray-400">Movies</li>
            <li className="cursor-pointer hover:text-gray-400">
              New & Popular
            </li>
            <li className="cursor-pointer hover:text-gray-400">My List</li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <span className="cursor-pointer hover:text-gray-400">Search</span>
          <Image
            src="/user.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full cursor-pointer bg-white"
          />
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden pt-16">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/game-2.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        >
          <source src="/kgf.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-20"></div>
        <button
          onClick={toggleMute}
          className="absolute top-5 right-5 md:top-[420px] sm:top-[420px] md:right-32 z-30 p-2 bg-black bg-opacity-70 rounded-full hover:bg-opacity-90 transition"
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-white" />
          ) : (
            <Volume2 className="w-6 h-6 text-white" />
          )}
        </button>
        <div className="absolute bottom-24 left-10 md:left-20 z-30 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">KGF 2</h1>
          <p className="text-gray-300 text-sm md:text-lg max-w-lg">
            Witness the epic sequel that takes action and storytelling to the
            next level. Power, revenge, and legacy collide in KGF 2.
          </p>
          <div className="flex space-x-4">
            <button className="flex items-center bg-white text-black px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-300 transition">
              <Play />
              Play
            </button>
            <button className="bg-gray-700 bg-opacity-60 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-600 transition">
              More Info
            </button>
          </div>
        </div>
      </header>

      {/* Rows */}
      <section className="mt-10 space-y-10 px-6 md:px-12">
        <Row title="Trending Now" datas="trending" />
        <Row title="Top Picks for You" datas="superhero" />
        <Row title="Action Movies" datas="action" />
        <Row title="Romantic Movies" datas="romantic" />
      </section>

      {/* Footer */}
      <Footer />
      {/* <footer className="mt-20 p-6 text-gray-400 text-sm text-center">
        <p>&copy; 2024 Ben Ve şeytan. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default HomePage;

// "use client";
// import React, { useRef, useState } from "react";
// import Image from "next/image";
// import { NextPage } from "next";
// import { Volume2, VolumeX, Play } from "lucide-react";
// import Row from "../TrendingNow"; // Update path if necessary

// const HomePage: NextPage = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isMuted, setIsMuted] = useState(true);

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full flex items-center justify-between p-4 z-50">
//         <div className="flex items-center space-x-4">
//           <Image
//             src="/ben-ve.png"
//             alt="Netflix Logo"
//             width={100}
//             height={50}
//             className="cursor-pointer"
//           />
//           <ul className="hidden md:flex space-x-4">
//             <li className="cursor-pointer hover:text-gray-400">Home</li>
//             <li className="cursor-pointer hover:text-gray-400">TV Shows</li>
//             <li className="cursor-pointer hover:text-gray-400">Movies</li>
//             <li className="cursor-pointer hover:text-gray-400">
//               New & Popular
//             </li>
//             <li className="cursor-pointer hover:text-gray-400">My List</li>
//           </ul>
//         </div>
//         <div className="flex items-center space-x-4">
//           <span className="cursor-pointer hover:text-gray-400">Search</span>
//           <Image
//             src="/user.png"
//             alt="User Avatar"
//             width={40}
//             height={40}
//             className="rounded-full cursor-pointer bg-white"
//           />
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden pt-16">
//         <video
//           ref={videoRef}
//           autoPlay
//           loop
//           muted={isMuted}
//           playsInline
//           poster="/game-2.jpg"
//           className="absolute top-0 left-0 w-full h-full object-cover z-10"
//         >
//           <source src="/kgf.mp4" type="video/mp4" />
//         </video>
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-20"></div>
//         <button
//           onClick={toggleMute}
//           className="absolute top-5 right-5 md:top-[420px] sm:top-[420px] md:right-32 z-30 p-2 bg-black bg-opacity-70 rounded-full hover:bg-opacity-90 transition"
//         >
//           {isMuted ? (
//             <VolumeX className="w-6 h-6 text-white" />
//           ) : (
//             <Volume2 className="w-6 h-6 text-white" />
//           )}
//         </button>
//         <div className="absolute bottom-24 left-10 md:left-20 z-30 space-y-6">
//           <h1 className="text-4xl md:text-6xl font-bold">KGF 2</h1>
//           <p className="text-gray-300 text-sm md:text-lg max-w-lg">
//             Witness the epic sequel that takes action and storytelling to the
//             next level. Power, revenge, and legacy collide in KGF 2.
//           </p>
//           <div className="flex space-x-4">
//             <button className="flex items-center bg-white text-black px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-300 transition">
//               <Play />
//               Play
//             </button>
//             <button className="bg-gray-700 bg-opacity-60 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-600 transition">
//               More Info
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Rows */}
//       <section className="mt-10 space-y-10 px-6 md:px-12">
//         <Row
//           title="Trending Now"
//           datas="comedy"
//           fetchUrl="https://omdb-api4.p.rapidapi.com/?s=batman"
//         />
//         <Row
//           title="Top Picks for You"
//           datas="romantic"
//           fetchUrl="https://omdb-api4.p.rapidapi.com/?s=superman"
//         />
//         <Row
//           title="Top Picks for You"
//           datas="hindi"
//           fetchUrl="https://omdb-api4.p.rapidapi.com/?s=superman"
//         />
//         <Row
//           title="Based On Real Life"
//           datas="stockmarket"
//           fetchUrl="https://omdb-api4.p.rapidapi.com/?s=superman"
//         />
//       </section>

//       {/* Footer */}
//       <footer className="mt-20 p-6 text-gray-400 text-sm text-center">
//         <p>&copy; 2024 Netflix Clone. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
