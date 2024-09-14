// // eslint-disable-next-line no-unused-vars
// import { animate, easeIn, motion } from "framer-motion";
// import { Power4 } from "gsap";
// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import { GoDotFill } from "react-icons/go";

// const Features = () => {
//   const [hoverState, setHoverState] = useState([false, false]);

//   const handleMouseEnter = (index) => {
//     const newHoverState = hoverState.map((state, i) => i === index);
//     setHoverState(newHoverState);
//   };

//   const handleMouseLeave = () => {
//     setHoverState([false, false]);
//   };

//   return (
//     <div className="h-auto w-[100vw] bg-zinc-950">
//       <h1 className="text-[7vmin] p-6 border-b-2 border-zinc-700">
//         Featured projects
//       </h1>

//       <div className="h-auto flex gap-7 bg-red-40000 p-14">
//         <div className="h-[70%] w-1/2">
//           <h4 className="flex items-center gap-3">
//             <GoDotFill />
//             FYDE
//           </h4>
//           <div
//             onMouseEnter={() => handleMouseEnter(0)}
//             onMouseLeave={handleMouseLeave}
//             className="Card-1 relative p-11 h-[65vmin] w-full bg-cover bg-center rounded-xl bg-[url(https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png)]"
//           >
//             <h1 className="absolute text-[#CDEA68] font-bold flex top-1/2 left-full z-[9] -translate-x-1/2 overflow-hidden -translate-y-1/2 text-[10vmin]">
//               {"FYDE".split("").map((item, index) => (
//                 <motion.span
//                   key={index}
//                   className="inline-block"
//                   initial={{ y: "100%" }}
//                   animate={hoverState[0] ? { y: "0" } : { y: "100%" }}
//                   transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
//                 >
//                   {item}
//                 </motion.span>
//               ))}
//             </h1>
//           </div>

//           <div className="h-auto p-2 flex gap-6 items-center ">
//             {["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"].map(
//               (item, index) => (
//                 <p
//                   key={index}
//                   className="p-4 py-2 bg-zinc-900 border-zinc-600 border rounded-full"
//                 >
//                   {item}
//                 </p>
//               )
//             )}
//           </div>
//         </div>
//         <div className="h-[70%] w-1/2">
//           <h4 className="flex items-center gap-3">
//             <GoDotFill />
//             VISE
//           </h4>
//           <div
//             onMouseEnter={() => handleMouseEnter(1)}
//             onMouseLeave={handleMouseLeave}
//             className="relative p-11 h-[65vmin] w-full bg-cover bg-center rounded-xl bg-[url(https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg)]"
//           >
//             <h1 className="absolute flex text-[#CDEA68] font-bold  overflow-hidden top-1/2 right-full z-[9] translate-x-1/2 -translate-y-1/2 text-[10vmin]">
//               {"VISE".split("").map((item, index) => (
//                 <motion.span
//                   key={index}
//                   className="inline-block"
//                   initial={{ y: "100%" }}
//                   animate={hoverState[1] ? { y: "0" } : { y: "100%" }}
//                   transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
//                 >
//                   {item}
//                 </motion.span>
//               ))}
//             </h1>
//           </div>

//           <div className="h-auto p-2 flex gap-6 items-center ">
//             {["AGENCY", "COMPANY PRESENTATION"].map((item, index) => (
//               <p
//                 key={index}
//                 className="p-4 py-2 bg-zinc-900 border-zinc-600 border rounded-full"
//               >
//                 {item}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;



// eslint-disable-next-line no-unused-vars
import { animate, easeIn, motion } from "framer-motion";
import { Power4 } from "gsap";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";

const Features = () => {
  const [hoverState, setHoverState] = useState([false, false]);

  const handleMouseEnter = (index) => {
    const newHoverState = hoverState.map((state, i) => i === index);
    setHoverState(newHoverState);
  };

  const handleMouseLeave = () => {
    setHoverState([false, false]);
  };

  return (
    <div className="h-auto w-full bg-zinc-950">
      <h1 className="text-[8vw] md:text-[7vmin] p-4 md:p-6 border-b-2 border-zinc-700">
        Featured projects
      </h1>

      <div className="flex flex-col md:flex-row gap-7 p-6 md:p-14">
      <div className="h-[70%] w-full  md:w-1/2">
          <h4 className="flex items-center gap-3">
            <GoDotFill />
            FYDE
          </h4>
          <div
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            className="Card-1 relative p-11 h-[65vmin] w-full bg-cover bg-center rounded-xl bg-[url(https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png)]"
          >
            <h1 className="absolute text-[#CDEA68] font-bold flex top-1/2 left-full z-[9] -translate-x-1/2 overflow-hidden -translate-y-1/2 text-[10vmin]">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={hoverState[0] ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
          </div>

          <div className="h-auto p-2 flex gap-6 items-center ">
            {["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"].map(
              (item, index) => (
                <p
                  key={index}
                  className="p-4 py-2 bg-zinc-900 border-zinc-600 border rounded-full"
                >
                  {item}
                </p>
              )
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h4 className="flex items-center gap-2 md:gap-3 text-[5vw] md:text-[2.5vmin] mb-4">
            <GoDotFill />
            VISE
          </h4>
          <div
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            className="relative p-6 md:p-11 h-[50vw] md:h-[65vmin] w-full bg-cover bg-center rounded-xl bg-[url(https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg)]"
          >
            <h1 className="absolute flex text-[#CDEA68] font-bold overflow-hidden top-1/2 right-full z-[9] translate-x-1/2 -translate-y-1/2 text-[10vw] md:text-[10vmin]">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={hoverState[1] ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6 items-center mt-4">
            {["AGENCY", "COMPANY PRESENTATION"].map((item, index) => (
              <p
                key={index}
                className="p-2 md:p-4 py-1 md:py-2 bg-zinc-900 border-zinc-600 border rounded-full text-[3vw] md:text-base"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
