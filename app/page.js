"use client"

import Image from "next/image";
import computer_border from "@/public/computer_border.png";
import computer_grain from "@/public/computer_grain.png";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Desktop from "@/components/login";

export default function Home() {
  const { scrollY } = useScroll();
  
  // Transform values based on scroll position
  const scale = useTransform(scrollY, [0, 1000], [1, 2.5]);
  const backgroundScale = useTransform(scrollY, [0, 500], [1, 1.2]);
  
  // Login component animations - start directly on top
  const loginYOffset = useTransform(scrollY, [0, 400], [0, -300]); // Start at position 0, move up as scrolling
  
  // Additional content animations with slower scale for parallax
  const contentYOffset = useTransform(scrollY, [500, 900], [0, -300]); // Stay in place until scroll position 500
  const contentScale = useTransform(scrollY, [0, 1000], [1, 0.5]); // Scale slower than the border for parallax
  
  // Black background inside computer
  const blackBackgroundOpacity = useTransform(scrollY, [0, 300, 600], [0, 0.5, 0.95]);
  
  // Grain overlay opacity - fade out as you scroll
  const grainOpacity = useTransform(scrollY, [100, 600], [0.7, 0]); // Start at 0.7 opacity, fade to 0
  
  return (
    <>
      {/* Video background */}
      <motion.div 
        className="fixed top-0 left-0 w-screen h-full z-[-2] overflow-hidden"
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
      
      {/* Fixed black background that fades in as you scroll */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-full bg-black z-[-1]"
        style={{
          opacity: blackBackgroundOpacity
        }}
      ></motion.div>
      
      {/* First section with computer border */}
      <div className="flex flex-col items-center justify-center h-screen w-full sticky top-0 overflow-hidden z-10">
        <motion.div 
          style={{ 
            scale,
            rotateX: useTransform(scrollY, [0, 500], [0, 5]),
            rotateY: useTransform(scrollY, [0, 500], [0, -2]),
            perspective: "1000px",
          }}
          className="origin-center relative"
        >
          <Image src={computer_border} alt="computer_border" className="h-160 w-220 relative z-10" />
          
          {/* Computer screen content container */}
          <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
            <div className="w-[80%] h-[70%] mt-[-5%] bg-white relative">
              
              {/* Additional content title (initially beneath login) */}
              <motion.div 
                className="w-full h-full flex flex-col justify-center items-center text-white"
                style={{
                  y: contentYOffset,
                  scale: contentScale, // Add slower scaling for parallax effect
                }}
              >
                <h2 className="text-3xl font-bold mb-6 text-black">Additional Content</h2>
                <p className="text-gray-700">Scroll to continue...</p>
              </motion.div>
              
              {/* Login component (positioned on top from the start) */}
              <motion.div 
                className="absolute inset-0 w-full h-full"
                style={{
                  y: loginYOffset,
                }}
              >
                <Desktop />
              </motion.div>
              
              {/* Computer grain overlay with yellow tint - positioned above both content layers */}
              <motion.div 
                className="absolute inset-0 pointer-events-none z-20 bg-yellow-100/10 mix-blend-multiply"
                style={{
                  opacity: grainOpacity // Use the motion value for opacity
                }}
              >
                <Image 
                  src={computer_grain} 
                  alt="Computer screen grain" 
                  fill
                  style={{
                    objectFit: "cover",
                    mixBlendMode: "overlay"
                  }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Spacer to control when content appears */}
      <div className="h-[150vh]"></div>
      
      {/* More content section below */}
      <div className="min-h-screen text-white p-10 relative z-0">
        <h2 className="text-3xl font-bold mb-6">More Content</h2>
        <p>This section appears after scrolling past the computer...</p>
      </div>
    </>
  );
}