import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { styles } from "../styles";

import { slideIn } from "../utils/motion";
import Model from "../models/connect2.png";
import Star from "./Star";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const templateParams = {
    from_name: formData.name,
    to_email: formData.email,
    message: formData.message
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send("service_spcrhun","template_q272dhp",templateParams,"5HSWhsKogghByMYov");
      Swal.fire({
        title: "Thanks for connecting with us!",
        text: "Please Check your inbox for further details.",
        icon: "success"
      });
      // Reset formData state to clear the form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData);
  };

  return (
    <div
      id={'contact'} className={`xl:mt-20 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden items-center justify-center px-40`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-transparent py-10 rounded-2xl pl-5 items-center justify-center '
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <form
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white dark:text-black-500 font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              required
                onChange={handleChange}
                value={formData.name}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white dark:text-black-500 font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              required
                onChange={handleChange}
                value={formData.email}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white dark:text-black-500 font-medium mb-4'>Your Message</span>
            <input 
            type="text"
              name='message'
              required
                onChange={handleChange}
                value={formData.message}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 h-36 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl bg-green dark:bg-gray-200 outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            Send
          </button>
        </form>
      </motion.div>
      {/* <Star/> */}
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] md:flex justify-center items-center pl-40 hidden '>
        <img src="/contact.png" alt='Connect Image' className='w-fit h-fit' />
      </div>
      
    </div>
  );
};

export default Contact;