// import Header from "../components/Header";

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      id="about"
      style={{ backgroundImage: "url('/game-3.jpg')" }}
    >
      {/* <Header /> */}
      <div className="text-black text-center pt-20 px-4">
        <h1 className="text-4xl font-bold">
          About Captain Jack's Gaming Channel
        </h1>
        <p className="mt-4 max-w-2xl mx-auto">
          Welcome aboard! We are passionate gamers who love adventure, strategy,
          and a bit of chaos. Follow us to embark on epic gaming journeys.
        </p>
        <img
          src="/jack-game.jpg"
          alt="Captain Jack"
          className="mt-8 mx-auto rounded-lg shadow-md w-64 h-64 object-cover"
        />
      </div>
    </div>
  );
};

export default About;

// const About = () => {
//   return (
//     <div
//       className="bg-cover bg-center min-h-screen"
//       style={{ backgroundImage: "url('/jack-game.jpg')" }}
//     >
//       <div className="text-black text-center pt-20">
//         <h1 className="text-4xl font-bold">
//           About Captain Jack's Gaming Channel
//         </h1>
//         <p className="mt-4 max-w-2xl mx-auto">
//           Welcome aboard! We are passionate gamers who love adventure, strategy,
//           and a bit of chaos. Follow us to embark on epic gaming journeys.
//         </p>
//         <img
//           src="/jack-game.jpg"
//           alt="Captain Jack"
//           className="mt-8 mx-auto rounded-lg shadow-md w-64 h-64 object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default About;
