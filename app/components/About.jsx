'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets, infoList, toolsData } from '../assets/assets';

const About = ({ isDarkMode }) => {
  return (
    <motion.section
      id="about"
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
        Introduction
      </motion.h4>

      {/* 2. Main Heading */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center text-5xl font-ovo text-gray-900 dark:text-white font-normal"
      >
        About Me
      </motion.h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-20 my-16">
        
        {/* 3. User Portrait: Reveal & Scaling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none shadow-xl border border-gray-200 dark:border-white/10 overflow-hidden"
        >
          {assets?.user_image ? (
            <Image
              src={assets.user_image}
              alt="User"
              width={320}
              height={400}
              priority
              className="w-full h-auto rounded-3xl object-cover hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-80 bg-gray-200 dark:bg-darkHover flex items-center justify-center text-4xl">
              👨‍💻
            </div>
          )}
        </motion.div>

        {/* 4. Biography Content & Cards */}
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, amount: 0.2 }}
            className="mb-10 max-w-2xl font-ovo text-gray-700 dark:text-white/80 text-sm sm:text-base leading-relaxed"
          >
            I am a passionate developer with experience in creating dynamic web applications. I specialize in React, Next.js, and TypeScript, focusing on intuitive UX and scalable design.
          </motion.p>

          {/* Staggered Info Cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ y: -6 }}
                className="border-[0.5px] border-gray-400 dark:border-white/20 rounded-xl p-6 cursor-pointer bg-white dark:bg-transparent hover:bg-lightHover dark:hover:bg-darkHover hover:shadow-black dark:hover:shadow-white transition-all duration-300"
              >
                <Image
                  src={isDarkMode && iconDark ? iconDark : icon}
                  alt={title}
                  width={28}
                  height={28}
                  className="w-7 mt-2 object-contain"
                />
                <h3 className="my-4 font-semibold text-gray-800 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-white/70 text-sm leading-6">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* 5. Tools Grid */}
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            className="my-6 text-gray-800 dark:text-white font-ovo text-lg"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex items-center gap-3 sm:gap-5 flex-wrap max-w-2xl"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-white/20 bg-white dark:bg-transparent rounded-lg cursor-pointer hover:shadow-sm transition-all duration-200"
              >
                <Image
                  src={tool}
                  alt="Tool"
                  width={28}
                  height={28}
                  className="w-5 sm:w-7 object-contain"
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
};

export default About;