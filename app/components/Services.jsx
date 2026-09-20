'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets, serviceData } from '../assets/assets';

const Services = ({ isDarkMode }) => {
  return (
    <motion.section
      id="services"
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
        What I Offer
      </motion.h4>

      {/* 2. Main Title */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center text-5xl font-ovo text-gray-900 dark:text-white font-normal"
      >
        My Services
      </motion.h2>

      {/* 3. Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-600 dark:text-white/70 text-sm sm:text-base leading-relaxed"
      >
        Here are some of the services I offer to help you achieve your goals.
      </motion.p>

      {/* 4. Services Grid with Staggered Motion */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -6 }}
            className="border-[0.5px] border-gray-400 dark:border-white/20 rounded-xl p-6 cursor-pointer bg-white dark:bg-transparent hover:bg-lightHover dark:hover:bg-darkHover hover:shadow-black dark:hover:shadow-white transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <Image
                src={icon}
                alt={title}
                width={60}
                height={60}
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-xl font-ovo mt-4 mb-2 text-gray-800 dark:text-white font-medium">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-white/70 text-sm leading-6">
                {description}
              </p>
            </div>

            {/* Read More Link */}
            <motion.a
              href={link}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 mt-5 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-ovo text-sm font-medium w-max transition-colors"
            >
              Read More
              {assets?.right_arrow && (
                <Image
                  src={
                    isDarkMode && assets.right_arrow_bold_dark
                      ? assets.right_arrow_bold_dark
                      : assets.right_arrow
                  }
                  alt="Arrow Icon"
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 object-contain dark:invert"
                />
              )}
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;