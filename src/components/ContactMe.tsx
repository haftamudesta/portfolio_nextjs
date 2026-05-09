"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MdOutlineMailLock } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { FaRegSmile } from "react-icons/fa";
import Input from "./Input";
import TextArea from "./TextArea";
import { sendEmail } from "@/actions/sendEmail";

const ContactMe = () => {
  const [state, setState] = useState<{ success?: boolean; error?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    const result = await sendEmail(formData);
    if (result?.error) {
      setState({ error: result.error });
    } else {
      setState({ success: true });
    }
    setIsSubmitting(false);
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: -200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.8, delay: 0.4 }}
      className="bg-linear-to-br from-sky-600 via-sky-700 to-emerald-600 py-16 px-4"
      id="main_contact"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Connect With Me
          </motion.h1>
          <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
          <p className="text-white/80 mt-4 text-lg">
            I'm always excited to hear about new opportunities and
            collaborations
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4 w-full lg:w-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 w-[320px] group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MdOutlineMailLock className="text-white text-xl" />
                </div>
                <h4 className="text-white font-semibold text-lg">Email</h4>
              </div>
              <p className="text-white/80 text-sm mb-3 break-all">
                desta451616@hotmail.com
              </p>
              <a
                href="mailto:desta451616@hotmail.com"
                target="_blank"
                className="text-white/90 text-sm hover:text-white inline-flex items-center gap-2 transition-colors"
              >
                Send Message →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 w-[320px] group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaFacebookMessenger className="text-white text-xl" />
                </div>
                <h4 className="text-white font-semibold text-lg">
                  Facebook Messenger
                </h4>
              </div>
              <p className="text-white/80 text-sm mb-3">@haftamudesta</p>
              <a
                href="http://m.me/haftamudesta"
                target="_blank"
                className="text-white/90 text-sm hover:text-white inline-flex items-center gap-2 transition-colors"
              >
                Send Message →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 w-[320px] group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BsWhatsapp className="text-white text-xl" />
                </div>
                <h4 className="text-white font-semibold text-lg">WhatsApp</h4>
              </div>
              <p className="text-white/80 text-sm mb-3">+251 0915574522</p>
              <a
                href="https://wa.me/251915574522"
                target="_blank"
                className="text-white/90 text-sm hover:text-white inline-flex items-center gap-2 transition-colors"
              >
                Send Message →
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:flex-1"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaRegSmile className="text-white" />
                Send Me a Message
              </h2>

              <form action={handleSubmit} className="flex flex-col gap-5">
                <Input
                  typeAttr={"text"}
                  nameAttr={"name"}
                  placeholderAttr={"Enter Your Name"}
                  labelAttr={"Name:"}
                  requiredAttr={true}
                />
                <Input
                  typeAttr={"email"}
                  nameAttr={"email"}
                  placeholderAttr={"Enter Your Email"}
                  labelAttr={"Email Address:"}
                  requiredAttr={true}
                />
                <TextArea
                  placeholderAttr={"Enter Your Message Here"}
                  nameAttr={"message"}
                  requiredAttr={true}
                  colsAttr={30}
                  rowsAttr={5}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative bg-white text-sky-600 font-semibold py-3 px-6 rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg w-full md:w-auto md:self-center flex items-center justify-center gap-2"
                >
                  <FiSend className="group-hover:translate-x-1 transition-transform" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>

                {state.error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-300 bg-red-900/30 p-3 rounded-lg text-center"
                  >
                    {state.error}
                  </motion.p>
                )}
                {state.success && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-300 bg-green-900/30 p-3 rounded-lg text-center"
                  >
                    ✨ Email sent successfully! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMe;
