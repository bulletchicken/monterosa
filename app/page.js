"use client"

import Image from "next/image";
import computer_border from "@/public/computer_border.png";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Transform values based on scroll position
  const scale = useTransform(scrollY, [0, 1000], [1, 2.5]);
  const backgroundScale = useTransform(scrollY, [0, 500], [1, 1.2]);
  
  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 w-screen h-full -z-10 overflow-hidden"
        style={{
          scale: backgroundScale,
        }}
      >
        <video 
          src="/waving_flowers.mp4"
          autoPlay 
          loop 
          muted 
          className="object-cover w-full h-full"
        />
      </motion.div>
      
      {/* First section with computer border */}
      <div className="flex flex-col items-center justify-center h-screen w-full sticky top-0 overflow-hidden">
        <motion.div 
          style={{ 
            scale,
            rotateX: useTransform(scrollY, [0, 500], [0, 5]),
            rotateY: useTransform(scrollY, [0, 500], [0, -2]),
            perspective: "1000px",
          }}
          className="origin-center"
        >
          <Image src={computer_border} alt="computer_border" className="h-160 w-220 relative z-10" />
        </motion.div>
      </div>
      
      {/* Computer content section */}
      <div className="min-h-screen bg-black text-white">
        <div className="h-screen"></div> {/* Spacer to trigger scroll */}
        <motion.div 
          className="max-w-4xl mx-auto p-8 relative z-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-bold mb-6">Inside the Computer</h1>
          <p className="mb-4">This content appears as if you've scrolled into the computer screen.</p>
          <p className="mb-4">Add more content here to make the page scrollable and enhance the effect.</p>
          {/* Add more content as needed */}
          <motion.div 
            className="h-screen flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl">Continue exploring...</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}