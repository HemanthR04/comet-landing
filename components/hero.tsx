"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion"; // Import Framer Motion
import Waitlist from "./waitlist";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { InView } from "react-intersection-observer";

export default function Hero() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1.8, 1.2]);
  const y = useTransform(scrollY, [0, 500], [300, 200]);
  const x = useTransform(scrollY, [0, 500], [0, 100]);
  const x2 = useTransform(scrollY, [0, 500], [0, -100]);
  const x3 = useTransform(scrollY, [0, 500], [0, -500]);
  const x4 = useTransform(scrollY, [0, 500], [0, 500]);
  const transition = { type: "spring", stiffness: 300, damping: 30 };

  return (
    <>
      <div className="relative max-w-7xl mx-auto py-6 my-2 flex flex-col h-[160vh]">
        <div className="z-10 flex min-h-12 items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Introducing Comet</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-semibold text-center text-3xl md:text-4xl lg:text-5xl mt-20"
        >
          Savings using the power of Social Media
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-base md:text-lg lg:text-xl text-gray-600 mt-4"
        >
          Comet is a platform that allows you to save money by using the power
          of social media.
        </motion.p>
        <Waitlist mode="light" />

        <div className="flex flex-col md:flex-row items-center justify-center mt-8">
          <motion.div style={{ scale, y }} transition={transition} className="mb-4 md:mb-0">
            <Image
              src="/assets/Device.png"
              alt="Hero"
              width={300}
              height={300}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ x }}
            className="absolute top-20 right-0 rotate-12 hidden md:block"
          >
            <Image
              src="/assets/shoes.png"
              alt="shoes"
              width={100}
              height={100}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ x: x2 }}
            className="absolute top-20 -left-12 -rotate-12 hidden md:block"
          >
            <Image
              src="/assets/coffee.png"
              alt="Coffee"
              width={200}
              height={200}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ x: x3 }}
            className="absolute top-[400px] left-0 rotate-12 hidden md:block"
          >
            <Image
              src="/assets/shoppingbag.png"
              alt="shoppingbag"
              width={200}
              height={200}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ x: x4 }}
            className="absolute top-[400px] right-20 -rotate-12 hidden md:block"
          >
            <Image
              src="/assets/monalisa.png"
              alt="monalisa"
              width={130}
              height={130}
            />
          </motion.div>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:block relative md:absolute md:bottom-[300px] lg:bottom-[300px] left-0 text-center text-black text-3xl font-bold max-w-sm"
              >
                We make shopping and dining better.
              </motion.div>
            )}
          </InView>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:block relative md:absolute lg:bottom-[300px] right-0 text-center text-black text-3xl font-bold max-w-sm"
              >
                We analyze your social media to give you the credit you deserve.
              </motion.div>
            )}
          </InView>
        </div>
      </div>
    </>
  );
}
