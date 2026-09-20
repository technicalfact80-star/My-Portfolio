'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="relative z-10 w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-28 pb-12">
      
      {/* 1. Profile Avatar: Pop scale on scroll + Continuous Floating */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {assets?.profile_img ? (
            <Image
              src={assets.profile_img}
              alt="Profile"
              width={128}
              height={128}
              priority
              className="rounded-full w-32 h-32 aspect-square object-cover shadow-lg border-1 border-white dark:border-white/20 mx-auto"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-purple-600 text-white flex items-center justify-center text-4xl shadow-lg mx-auto">
              👨‍💻
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* 2. Subtitle with waving hand */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex items-center justify-center gap-2 font-ovo text-xl md:text-2xl mb-1 mt-2 text-gray-800 dark:text-gray-200"
      >
        Hi, I&apos;m Sangam
        {assets?.hand_icon && (
          <motion.span
            className="inline-block origin-[70%_70%]"
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            <Image
              src={assets.hand_icon}
              alt="Hand Icon"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
          </motion.span>
        )}
      </motion.h3>

      {/* 3. Hero Headline */}
      <motion.h1
        initial={{ y: -25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        viewport={{ once: false, amount: 0.2 }}
        className="font-ovo text-3xl sm:text-6xl lg:text-[66px] leading-tight text-gray-900 dark:text-white font-normal"
      >
        Application developer Based in Lucknow
      </motion.h1>

      {/* 4. Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-2xl mx-auto font-ovo text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed"
      >
        I am a passionate Software & web developer with a strong focus on creating visually appealing and user-friendly websites and application. With expertise in Python, Django, Nodejs, Flutter, Kotlin, CSS, JavaScript, Nextjs, and modern frameworks, I strive to deliver seamless user experiences and innovative designs.
      </motion.p>

      {/* 5. Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
      >
        {/* Contact Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-3 border border-transparent rounded-full bg-black text-white flex items-center gap-2 dark:bg-white dark:text-black font-medium shadow-md transition"
        >
          Contact me
          {assets?.right_arrow_white && (
            <Image
              src={assets.right_arrow_white}
              alt="Arrow"
              width={16}
              height={16}
              className="w-4 h-4 object-contain dark:invert"
            />
          )}
        </motion.a>

        {/* Resume Button */}
        <motion.a
          href="/sample-resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-3 border border-gray-500 dark:border-white/30 rounded-full flex items-center gap-2 bg-white dark:bg-transparent text-gray-900 dark:text-white font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-white/10 transition"
        >
          My Resume
          {assets?.download_icon && (
            <Image
              src={assets.download_icon}
              alt="Download"
              width={16}
              height={16}
              className="w-4 h-4 object-contain dark:invert"
            />
          )}
        </motion.a>
      </motion.div>

    </div>
  );
};

export default Header;