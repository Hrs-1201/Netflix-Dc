// import Header from "../components/Header";

const Hero = () => {
  return (
    <div
      className="min-h-screen w-full h-full object-cover"
      id="hero"
      style={{ backgroundImage: "url('/game-1.jpg')" }}
    >
      {/* <Header /> */}
      <div className="flex flex-col items-center justify-center text-center text-black pt-32 px-4">
        <h1 className="text-5xl font-bold">
          Welcome to Captain Jack's Gaming World
        </h1>
        <p className="text-lg mt-4 max-w-lg">
          Set sail for an adventure across the seven seas of gaming! From epic
          battles to thrilling quests, dive in with us.
        </p>
        <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded shadow-lg">
          Join the Crew
        </button>
      </div>
    </div>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//     <div
//       className="bg-cover bg-center min-h-screen"
//       style={{ backgroundImage: "url('/jack-sparrow.jpg')" }}
//     >
//       <div className="flex flex-col items-center justify-center text-center text-black pt-32">
//         <h1 className="text-5xl font-bold">
//           Welcome to Captain Jack's Gaming World
//         </h1>
//         <p className="text-lg mt-4 max-w-lg">
//           Set sail for an adventure across the seven seas of gaming! From epic
//           battles to thrilling quests, dive in with us.
//         </p>
//         <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
//           Join the Crew
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;
