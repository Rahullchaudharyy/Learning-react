// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
    return (
        <div
            data-scroll
            data-scroll-speed="-.3"
            className="w-full h-screen bg-zinc-900 pt-1"
        >
            {/* Text Structure */}
            <div className="text-structure mt-20 md:mt-52">
                {["We Create", "Eye Opening", "Presentations"].map(
                    (item, index) => {
                        return (
                            <div key={index} className="Masker px-6 md:px-20">
                                <div className="w-fit flex overflow-hidden items-center">
                                    {index === 1 ? (
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "10.6vmin" }}
                                            transition={{
                                                ease: [0.76, 0, 0.24, 1],
                                                duration: 1,
                                                delay: 0.5,
                                            }}
                                            className="w-[10.6vmin] h-[18vw] md:h-[3.9vw] rounded mr-4 bg-cover bg-center bg-[url(&quot;https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg&quot;)]"
                                        ></motion.div>
                                    ) : (
                                        ""
                                    )}

                                    <h1 className="uppercase text-[10vw] md:text-[10vmin] font-['Founders_Grotesk_X-Condensed'] leading-none tracking-tighter font-semibold">
                                        {item}
                                    </h1>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>

            {/* Bottom Section */}
            <div className="border-zinc-600 mt-20 md:mt-40 border-t-[1px] flex flex-col md:flex-row justify-between items-center">
                {[
                    "For public and private companies",
                    "From the first pitch to IPO",
                    "Start the project",
                ].map((item, index) => {
                    return (
                        <p
                            key={index}
                            className={`mt-6 md:mt-10 ${
                                index === 0 ? "ml-[3vmin]" : ""
                            } ${
                                index === 2
                                    ? "p-2 rounded-full border-zinc-500 border-[1px] mt-6 md:-mr-[35vmin]"
                                    : ""
                            }`}
                        >
                            {item}
                        </p>
                    );
                })}

                <div className="mr-6 mt-4 md:mt-0 h-[8vw] w-[8vw] md:h-[4vmin] md:w-[4vmin] flex justify-center items-center rounded-full border-[1px] border-zinc-500">
                    <GoArrowUpRight />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
