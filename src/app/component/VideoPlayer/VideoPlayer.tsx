import React from "react";
import { Play } from "lucide-react";
import { useRouter } from "next/router";

const VideoPlayer: React.FC<{ src: string; poster: string; id: string }> = ({
  src,
  poster,
  id,
}) => {
  const router = useRouter();

  const handlePlay = () => {
    // Redirect to the video page
    router.push(`/video/${id}`);
  };

  return (
    <div className="relative w-full h-full">
      {/* Video Thumbnail */}
      <img src={poster} alt="Poster" className="w-full h-full object-cover" />

      {/* Play Button */}
      <button
        onClick={handlePlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white text-black rounded-full"
      >
        <Play className="w-12 h-12" />
      </button>
    </div>
  );
};

export default VideoPlayer;

// "use client";
// import React, { useRef, useState } from "react";
// import {
//   Play,
//   Pause,
//   VolumeX,
//   Volume2,
//   Maximize,
//   Minimize,
// } from "lucide-react";

// const VideoPlayer: React.FC<{ src: string; poster: string }> = ({
//   src,
//   poster,
// }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);
//   const [progress, setProgress] = useState(0);

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   const handleProgress = () => {
//     if (videoRef.current) {
//       const percentage =
//         (videoRef.current.currentTime / videoRef.current.duration) * 100;
//       setProgress(percentage);
//     }
//   };

//   const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (videoRef.current) {
//       const newTime =
//         (Number(e.target.value) / 100) * videoRef.current.duration;
//       videoRef.current.currentTime = newTime;
//       setProgress(Number(e.target.value));
//     }
//   };

//   return (
//     <div className="relative w-full h-full">
//       {/* Video Element */}
//       <video
//         ref={videoRef}
//         src={src}
//         poster={poster}
//         className="w-full h-full object-cover"
//         onTimeUpdate={handleProgress}
//         muted={isMuted}
//       ></video>

//       {/* Controls */}
//       <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 backdrop-blur-sm flex flex-col space-y-3">
//         {/* Progress Bar */}
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={progress}
//           onChange={handleSeek}
//           className="w-full accent-red-500"
//         />

//         {/* Control Buttons */}
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             {/* Play/Pause Button */}
//             <button
//               onClick={togglePlay}
//               className="p-2 bg-black rounded-full hover:bg-white/20 transition"
//             >
//               {isPlaying ? (
//                 <Pause className="text-white w-6 h-6" />
//               ) : (
//                 <Play className="text-white w-6 h-6" />
//               )}
//             </button>

//             {/* Mute/Unmute Button */}
//             <button
//               onClick={toggleMute}
//               className="p-2 bg-black rounded-full hover:bg-white/20 transition"
//             >
//               {isMuted ? (
//                 <VolumeX className="text-white w-6 h-6" />
//               ) : (
//                 <Volume2 className="text-white w-6 h-6" />
//               )}
//             </button>
//           </div>

//           {/* Fullscreen Button */}
//           <button className="p-2 bg-black rounded-full hover:bg-white/20 transition">
//             <Maximize className="text-white w-6 h-6" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;

// "use client";
// import React from "react";
// import { Play } from "lucide-react";
// import { useRouter } from "next/navigation"; // Correct import for App Router

// const Row: React.FC<{ src: string; poster: string; id: string }> = ({
//   src,
//   poster,
//   id,
// }) => {
//   const router = useRouter();

//   const handlePlay = () => {
//     // Redirect to the video page
//     router.push(`/video/${id}`);
//   };

//   return (
//     <div className="relative w-full h-full">
//       {/* Video Thumbnail */}
//       <img src={poster} alt="Poster" className="w-full h-full object-cover" />

//       {/* Play Button */}
//       <button
//         onClick={handlePlay}
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white text-black rounded-full"
//       >
//         <Play className="w-12 h-12" />
//       </button>
//     </div>
//   );
// };

// export default Row;

// components/VideoPlayer.tsx
