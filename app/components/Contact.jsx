'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { assets } from '../assets/assets';

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState('');
  
  // Controlled form state for clear/cut icons
  const [formDataState, setFormDataState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataState((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearField = (fieldName) => {
    setFormDataState((prev) => ({ ...prev, [fieldName]: '' }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '46b8c4d2-95bf-4f38-884f-e603a5330b98');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        setFormDataState({ name: '', email: '', message: '' });
        event.target.reset();
      } else {
        console.log('Error', data);
        setResult(data.message);
      }
    } catch (error) {
      console.log('Error', error);
      setResult('Something went wrong. Please try again.');
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none relative z-10'
    >
      {/* 1. Subheading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center mb-2 text-lg font-ovo text-gray-700 dark:text-white/80"
      >
        Connect With me
      </motion.h4>

      {/* 2. Main Title */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center text-5xl font-ovo text-gray-900 dark:text-white font-normal"
      >
        Get In touch
      </motion.h2>

      {/* 3. Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-600 dark:text-white/70 text-sm sm:text-base leading-relaxed"
      >
        I&apos;d love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </motion.p>

      {/* 4. Contact Form */}
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        {/* Name and Email Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          
          {/* Name Field with Cut/Clear Icon */}
          <motion.div
            initial={{ x: -25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="relative flex items-center"
          >
            <input
              type="text"
              placeholder="Enter your name"
              required
              name="name"
              value={formDataState.name}
              onChange={handleInputChange}
              className="w-full p-3.5 pr-10 outline-none border-[0.5px] border-gray-400 dark:border-white/30 rounded-lg bg-white dark:bg-darkHover/30 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/50 focus:border-black dark:focus:border-white transition-colors"
            />
            <AnimatePresence>
              {formDataState.name.length > 0 && (
                <motion.button
                  type="button"
                  onClick={() => handleClearField('name')}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-3 p-1 rounded-full bg-gray-200/80 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20 text-gray-500 dark:text-white/70 transition-colors"
                >
                  <X size={14} />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>

          
          <motion.div
            initial={{ x: 25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="relative flex items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              name="email"
              value={formDataState.email}
              onChange={handleInputChange}
              className="w-full p-3.5 pr-10 outline-none border-[0.5px] border-gray-400 dark:border-white/30 rounded-lg bg-white dark:bg-darkHover/30 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/50 focus:border-black dark:focus:border-white transition-colors"
            />
            <AnimatePresence>
              {formDataState.email.length > 0 && (
                <motion.button
                  type="button"
                  onClick={() => handleClearField('email')}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-3 p-1 rounded-full bg-gray-200/80 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20 text-gray-500 dark:text-white/70 transition-colors"
                >
                  <X size={14} />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Message Textarea with Cut/Clear Icon */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="relative mb-6"
        >
          <textarea
            rows="6"
            placeholder="Enter your message"
            required
            name="message"
            value={formDataState.message}
            onChange={handleInputChange}
            className="w-full p-4 pr-10 outline-none border-[0.5px] border-gray-400 dark:border-white/30 rounded-lg bg-white dark:bg-darkHover/30 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/50 focus:border-black dark:focus:border-white transition-colors resize-none"
          />
          <AnimatePresence>
            {formDataState.message.length > 0 && (
              <motion.button
                type="button"
                onClick={() => handleClearField('message')}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                className="absolute top-4 right-3.5 p-1 rounded-full bg-gray-200/80 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20 text-gray-500 dark:text-white/70 transition-colors"
              >
                <X size={14} />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/90 text-white rounded-full mx-auto hover:bg-black dark:bg-transparent dark:border dark:border-white/40 dark:hover:bg-darkHover font-ovo text-sm font-medium shadow-md transition-colors duration-300"
        >
          Submit Now
          {assets?.right_arrow_white && (
            <Image
              src={assets.right_arrow_white}
              alt="Submit"
              className="w-4 h-4 object-contain"
            />
          )}
        </motion.button>

        {/* Submission Feedback Message */}
        {result && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center text-sm font-medium text-gray-800 dark:text-gray-200"
          >
            {result}
          </motion.p>
        )}
      </motion.form>
    </motion.section>
  );
};

export default Contact;