import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "./Button";
import { MovingParticleCanvas } from "@/hooks/MovingEffects";
import Link from "next/link";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section
      className="min-h-screen relative overflow-hidden bg-black"
      id="about"
    >
      <MovingParticleCanvas />
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group lg:w-2/3"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-800 via-purple-500 to-red-300 bg-clip-text text-transparent">
                Full Stack
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="bg-gradient-to-r from-blue-800 via-purple-500 to-red-300 bg-clip-text text-transparent"
              >
                Web Developer
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl text-white/75 mb-6 mt-2 leading-relaxed"
            >
              <span className="text-white font-semibold">
                Full Stack Developer
              </span>
              <span className="text-white/60"> & </span>
              <span className="text-white font-semibold">
                Electrical Engineer
              </span>
              <span className="text-white/60">
                {" "}
                creating powerful, scalable solutions.
              </span>
              <br />
              <span className="text-white/60">My toolkits: </span>
              <span className="text-teal-400 font-medium">MERN</span>
              <span className="text-white/60"> (</span>
              <span className="text-white/40 text-sm">
                MongoDB, Express, React, Node
              </span>
              <span className="text-white/60">), </span>
              <span className="text-teal-400 font-medium">PERN</span>
              <span className="text-white/60"> (</span>
              <span className="text-white/40 text-sm">
                PostgreSQL, Express, React, Node
              </span>
              <span className="text-white/60">), </span>
              <span className="text-teal-400 font-medium">Python/FastAPI</span>
              <span className="text-white/60">, </span>
              <span className="text-teal-400 font-medium">Ruby on Rails</span>
              <span className="text-white/60">, and </span>
              <span className="text-teal-400 font-medium">Microservices</span>
              <span className="text-white/60">.</span>
            </motion.p>

            <div className="flex gap-2 md:gap-6 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
                className="relative overflow-hidden rounded-lg bg-blue-500/40 border border-white/20 hover:bg-blue-500 transition-all"
              >
                <Link
                  href="#main-works"
                  className="block px-2 py-1 md:px-6 md:py-4 text-white/80 hover:text-white font-bold"
                >
                  Explore My Works
                </Link>
              </motion.div>
              <Link href="#main_contact">
                <Button>Contact Me</Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: "easeOut" }}
            style={{ y }}
            className="lg:w-1/3 relative"
          >
            <div className="relative w-full aspect-square">
              {/* Pulsing background effect */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1.05 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-800/40 via-purple-500/40 to-red-300/40 opacity-50 blur-xl"
              />

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full aspect-square rounded-3xl overflow-hidden border-2 border-white/20 bg-linear-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm shadow-2xl"
              >
                <Image
                  src="/haftamu.jpg"
                  alt="Haftamu - Full Stack Developer & Electrical Engineer"
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={95}
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="text-white">
                    <p className="text-sm text-white/70">Based in</p>
                    <motion.span
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        backgroundSize: "200% 200%",
                      }}
                      className="text-2xl md:text-3xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    >
                      Ethiopia
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
