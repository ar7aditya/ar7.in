import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { backEnd, frontEnd, databases, tools, clouds } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <motion.div variants={textVariant()}>
    {/* <h2 className={`${styles.heroSubText} text-center`}>
      Programming Languages
    </h2> */}
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {backEnd.map((lang) => (
        <div className='w-28 h-28' key={lang.name}>
          <BallCanvas icon={lang.icon} />
        </div>
      ))}
    </div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    {tools.map((tool) => (
        <div className='w-28 h-28' key={tool.name}>
          <BallCanvas icon={tool.icon} />
        </div>
      ))}
      </div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    {frontEnd.map((fe) => (
        <div className='w-28 h-28' key={fe.name}>
          <BallCanvas icon={fe.icon} />
        </div>
      ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Tech, "");
