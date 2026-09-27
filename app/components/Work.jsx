'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets, workData } from '../assets/assets';

const Work = ({ isDarkMode }) => {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
      className="w-full px-[12%] py-10 scroll-mt-20 relative z-10"
    >
      {/* 1. Subheading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center mb-2 text-lg font-ovo text-gray-700 dark:text-white/80"
      >
        My Portfolio
      </motion.h4>

      {/* 2. Main Title */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center text-5xl font-ovo text-gray-900 dark:text-white font-normal"
      >
        My Latest Work
      </motion.h2>

      {/* 3. Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-600 dark:text-white/70 text-sm sm:text-base leading-relaxed"
      >
        Here are some of the projects I&apos;ve worked on to help you achieve your goals.
      </motion.p>

      {/* 4. Portfolio Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {workData.map((project, index) => {
          const bgUrl =
            typeof project.bgImage === 'string'
              ? project.bgImage
              : project.bgImage?.src;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-xl relative cursor-pointer group overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm"
              style={{ backgroundImage: `url(${bgUrl})` }}
            >
              {/* Bottom Project Info Card */}
              <div className="bg-white dark:bg-darkTheme/90 dark:border dark:border-white/20 w-10/12 rounded-xl absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between transition-all duration-500 group-hover:bottom-7 shadow-lg backdrop-blur-xs">
                <div>
                  <h2 className="font-semibold text-gray-900 dark:text-white font-ovo">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-white/70">
                    {project.description}
                  </p>
                </div>

                {/* Arrow Icon Button */}
                <div className="border rounded-full border-black dark:border-white w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] group-hover:bg-lime-300 dark:group-hover:bg-lime-400 group-hover:text-black transition-colors shrink-0">
                  <Image
                    src={assets.send_icon}
                    alt="Send"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain dark:invert group-hover:invert-0 transition"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* 5. Show More Button */}
      <motion.a
        href="#work"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex w-max items-center justify-center gap-2 text-gray-800 dark:text-white border border-gray-700 dark:border-white/40 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover dark:hover:bg-darkHover transition-colors duration-300 font-ovo shadow-xs"
      >
        Show more
        {assets?.right_arrow_bold && (
          <Image
            src={
              isDarkMode && assets.right_arrow_bold_dark
                ? assets.right_arrow_bold_dark
                : assets.right_arrow_bold
            }
            alt="Arrow"
            className="w-4 h-4 object-contain dark:invert"
          />
        )}
      </motion.a>
    </motion.section>
  );
};

export default Work;