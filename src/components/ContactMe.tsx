"use client";

import { motion } from 'framer-motion';
import { useState } from "react";

import { MdOutlineMailLock } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import Input from './Input';
import TextArea from './TextArea';
import { sendEmail } from "@/actions/sendEmail";

const ContactMe = () => {
  const [state, setState] = useState<{ success?: boolean; error?: string }>({});

  async function handleSubmit(formData: FormData) {
    
    const result = await sendEmail(formData);
    if (result?.error) {
      setState({ error: result.error });
    } else {
      setState({ success: true });
    }
  }
  return (
    <motion.main 
    initial={{opacity:0,x:100}}
    whileInView={{opacity:1,x:0}}
    transition={{
      duration:2.8,
      delay:0.4
    }}
    className="bg-linear-45 from-blue-950 to-blue-800" id="main_contact"> 
    <h1 className="text-center text-2xl text-white font-bold underline mb-4">Contact Me</h1>
    <div className='flex flex-col items-center justify-center text-white md:flex-row md:justify-between md:items-baseline md:ml-4 md:gap:4 xl:gap-12 lg:justify-center'>
    
      <div className='flex flex-col gap-4'>
      <article
           className="flex flex-col w-[320px] border-1 border-teal-700 p-2">
           <div className="flex gap-2 items-center">
            <MdOutlineMailLock className='flex justify-center items-center text-center mb-2' />
           <h4>Email</h4>
           </div>
            <h5>desta451616@hotmail.com</h5>
            <a href="mailto:desta451616@hotmail.com" target="_blank">Send Message</a>
          </article>
          <article 
          className="flex flex-col w-[320px] border-1 border-teal-700 p-2">
            <div className="flex gap-2 items-center">
            <FaFacebookMessenger className='text-center mb-2'/>
            <h4>Facebook Messanger</h4>
            </div>
            <h5>haftamudesta</h5>
            <a href="http://m.me/haftamudesta" target="_blank">Send Message</a>
          </article>
          <article 
          className="flex w-[320px] flex-col border-1 border-teal-700 p-2">
            <div className="flex gap-2 items-center">
              <BsWhatsapp className='text-center mb-2'/>
              <h4>whatsapp</h4>
            </div>
            <h5>Haftamu Desta</h5>
            <a href="https://api.whatsapp.com/send?phone+2510915574522" target="_blank">Send Message</a>
          </article>
      </div>
      <div className="flex  mb-12">
        <form action={handleSubmit} className="flex flex-col lg:justify-center lg:items-center gap-4">
          <Input 
          typeAttr={'text'}
          nameAttr={'name'}
          placeholderAttr={'Enter Your Name'}
          labelAttr={'Name:'}
          requiredAttr={true}
          />
          <Input 
          typeAttr={'email'}
          nameAttr={'email'}
          placeholderAttr={'Enter Your Email'}
          labelAttr={'Email Adress:'}
          requiredAttr={true}
          />
          <TextArea 

          placeholderAttr={"Enter Your Message Here"}
          nameAttr={"message"}
          requiredAttr={true}
          colsAttr={30}
          rowsAttr={5}
          />
          <button type="submit" className="submit-btn text-center self-center ml-4">
          <span>Submit Message</span>
        </button>
        {state.error && (
          <p className="text-red-500 mt-2">{state.error}</p>
        )}
        {state.success && (
          <p className="text-green-500 mt-2">Email sent successfully!</p>
        )}
        </form>
      </div>
    </div>
    </motion.main>
  )
}

export default ContactMe