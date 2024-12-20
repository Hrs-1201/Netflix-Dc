"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface RowProps {
  title: string;
  datas: string; // Query keyword for the API
}

interface Movie {
  id: string;
  i: { imageUrl: string };
  l: string; // Movie title
}

const Row: React.FC<RowProps> = ({ title, datas }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  // Fetch movies from API
  const handleApi = async () => {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/auto-complete",
      params: { q: `${datas}` },
      headers: {
        "x-rapidapi-key": "e296ab53cbmsh16d082048d83971p1774fajsnc11650bb3c88",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    };

    try {
      const response = await axios(options);
      const top10Movies = response.data.d.slice(0, 10); // Limit to top 10 movies
      setMovies(top10Movies);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    handleApi();
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {movies.map((movie, index) => (
          // <div
          //   key={movie.id}
          //   className="relative min-w-[150px] md:min-w-[200px] h-[200px] md:h-[300px] bg-gray-800 rounded-lg cursor-pointer hover:scale-105 transform transition duration-300"
          // >
          //   {/* Movie Poster */}
          //   <div
          //     className="w-full h-full rounded-lg"
          //     style={{
          //       backgroundImage: `url(${
          //         movie.i?.imageUrl || "default-image.jpg"
          //       })`,
          //       backgroundSize: "cover",
          //       backgroundPosition: "center",
          //     }}
          //   ></div>
          //   {/* Rank Badge */}
          //   <div className="absolute top-2 left-2 bg-red-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
          //     {index + 1}
          //   </div>
          //   {/* Movie Title
          //   <p className="absolute bottom-2 left-2 text-white text-xs md:text-sm font-semibold bg-black/70 p-1 rounded-md">
          //     {movie.l}
          //   </p> */}
          // </div>
          <div
            key={movie.id}
            className="group relative min-w-[150px] md:min-w-[200px] h-[200px] md:h-[300px] bg-gray-800 rounded-lg cursor-pointer transform transition duration-300 ease-in-out"
          >
            {/* Movie Poster */}
            <div
              className="w-full h-full rounded-lg bg-cover bg-center transition-transform group-hover:scale-110"
              style={{
                backgroundImage: `url(${
                  movie.i?.imageUrl || "default-image.jpg"
                })`,
              }}
            ></div>

            {/* Overlay for hover effect */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Rank Badge */}
            <div className="absolute top-2 left-2 bg-red-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
              {index + 1}
            </div>

            {/* Movie Title */}
            <p className="absolute bottom-2 left-2 text-white text-xs md:text-sm font-semibold bg-black/70 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              {movie.l}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;

// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface RowProps {
//   title: string;
//   datas: string;
//   fetchUrl: string; // API endpoint for the row
// }

// interface Movie {
//   id: string;
//   i: any;
//   imageUrl: any;
//   l: string;
// }

// const Row: React.FC<RowProps> = ({ title, fetchUrl, datas }) => {
//   const [movies, setMovies] = useState<Movie[]>([]);

//   const handleApi = async () => {
//     // setLoading(true); //
//     const options = {
//       method: "GET",
//       url: "https://imdb8.p.rapidapi.com/auto-complete",
//       params: { q: `${datas}` },
//       headers: {
//         "x-rapidapi-key": "e296ab53cbmsh16d082048d83971p1774fajsnc11650bb3c88",
//         "x-rapidapi-host": "imdb8.p.rapidapi.com",
//       },
//     };
//     try {
//       const response = await axios(options);
//       setMovies(response.data.d);
//       console.log(response.data.d);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   useEffect(() => {
//     handleApi();
//   }, []);

//   return (
//     <div className="space-y-2">
//       <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
//       <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
//         {movies.map((movie) => (
//           <div
//             key={movie.id}
//             className="min-w-[150px] md:min-w-[200px] h-[200px] md:h-[300px] bg-gray-800 rounded-lg cursor-pointer hover:scale-105 transform transition duration-300"
//             style={{
//               backgroundImage: `url(${
//                 movie.i?.imageUrl || "default-image.jpg"
//               })`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Row;

// import React from "react";

// interface RowProps {
//   title: string;
//   items: number[]; // Array of items (can be adjusted based on actual data structure)
// }

// const Row: React.FC<RowProps> = ({ title, items }) => {
//   return (
//     <div className="space-y-2">
//       <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
//       <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
//         {items.map((_, i) => (
//           <div
//             key={i}
//             className="min-w-[150px] md:min-w-[200px] h-[200px] md:h-[300px] bg-gray-800 rounded-lg cursor-pointer hover:scale-105 transform transition duration-300"
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Row;
