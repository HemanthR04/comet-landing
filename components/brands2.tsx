"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1.8, 1.2]);
  const y = useTransform(scrollY, [0, 500], [300, 200]);
  const x = useTransform(scrollY, [0, 500], [0, 100]);

  const transition = { type: "spring", stiffness: 300, damping: 30 };

  const [isInView, setIsInView] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('bg-white');

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (latest < 250) {
        setBackgroundColor('bg-white');
      } else if (latest < 500) {
        setBackgroundColor('bg-black');
      } else {
        setBackgroundColor('bg-black');
      }
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      <div className={`hidden md:flex relative max-w-7xl mx-auto py-6 my-2  flex-col h-[160vh] `}>
        <div className="z-10 flex min-h-12 items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center mt-8">
            <motion.div style={{ scale, y }} transition={transition} className="mb-4 md:mb-0">
              <Image
                src="/assets/Device.png"
                alt="Hero"
                width={100}
                height={100}
                className="lg:h-[580px] lg:w-[300px] h-full w-full max-w-[300px]"
              />
            </motion.div>

            {[
              { color: 'bg-blue-500', rotate: -45, position: 'right-[380px]' },
              { color: 'bg-red-500', rotate: 0, position: 'top-[400px] right-[300px]' },
              { color: 'bg-orange-500', rotate: 45, position: 'bottom-[500px] right-[380px]' },
              { color: 'bg-blue-500', rotate: 45, position: 'left-[380px]' },
              { color: 'bg-red-500', rotate: 0, position: 'top-[400px] left-[300px]' },
              { color: 'bg-green-500', rotate: -45, position: 'bottom-[500px] left-[380px]' },
            ].map((item, index) => (
              <InView key={index} triggerOnce>
                {({ inView, ref }) => (
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                    animate={{ opacity: inView ? 1 : 0, scale: 1, rotate: item.rotate }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`absolute -z-10 flex flex-col items-center justify-center rounded-lg h-[200px] w-[300px] ${item.color} ${item.position}`}
                  >
                    <Image src="/assets/logo.png" alt="Logo" width={100} height={100} />
                  </motion.div>
                )}
              </InView>
            ))}
          </div>
        </div>
        <div className="absolute bottom-[300px] left-1/2 transform -translate-x-1/2 text-center text-black mt-24 text-3xl font-bold max-w-sm">
          Join the exclusive group of creators
        </div>
      </div>
    </>
  );
}