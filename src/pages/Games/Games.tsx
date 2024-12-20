// import Header from "../components/Header";

const Games = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      id="game"
      style={{ backgroundImage: "url('/game-2.jpg')" }}
    >
      {/* <Header /> */}
      <div className="text-white text-center pt-20 px-4">
        <h1 className="text-4xl font-bold">Explore Our Games</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          Discover thrilling games handpicked by Captain Jack. Battle, loot, and
          conquer your way to glory.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6">
          {["Sea Battle", "Treasure Hunt", "Pirate's Quest"].map((game) => (
            <div
              key={game}
              className="bg-black bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition cursor-pointer border-2 border-yellow-500"
            >
              <h2 className="text-xl font-bold">{game}</h2>
              <p className="mt-2">A thrilling adventure awaits. Join now!</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;

// const Games = () => {
//   return (
//     <div
//       className="bg-cover bg-center min-h-screen"
//       style={{ backgroundImage: "url('/jack-game2.jpg')" }}
//     >
//       <div className="text-white text-center pt-20">
//         <h1 className="text-4xl font-bold">Explore Our Games</h1>
//         <p className="mt-4 max-w-2xl mx-auto">
//           Discover thrilling games handpicked by Captain Jack. Battle, loot, and
//           conquer your way to glory.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6 cursor-pointer">
//           {["Sea Battle", "Treasure Hunt", "Pirate's Quest"].map((game) => (
//             <div
//               key={game}
//               className="bg-black bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition"
//             >
//               <h2 className="text-xl font-bold">{game}</h2>
//               <p className="mt-2">A thrilling adventure awaits. Join now!</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Games;
