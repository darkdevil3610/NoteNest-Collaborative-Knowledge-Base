"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon, Folder } from "lucide-react";
import { Section, Container, FloatingCard } from "@/components/ui";
import { COLORS, TYPOGRAPHY } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <Section
      spacing="large"
      fullWidth
      className="relative overflow-hidden"
      style={{ backgroundColor: COLORS.brand.beige }}
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Warm yellow glow top right */}
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-brand-yellow/20 blur-[120px]" />
        {/* Soft orange glow bottom left */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-brand-accent/10 blur-[100px]" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[500px] lg:min-h-[600px]">

          {/* Left: Text Content */}
          <div className="text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full shadow-sm mb-8 border border-black/5"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-sm font-bold tracking-wide uppercase text-brand-dark">MIT License • Open Source</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
              className={cn(TYPOGRAPHY.heading.h1, "leading-[1.1] mb-8 tracking-tight")}
              style={{ color: COLORS.text.primary }}
            >
              Collaborative <br />
              Knowledge Base <br />
              <span className="relative inline-block z-10">
                for Teams.
                <svg className="absolute w-[110%] h-4 -bottom-1 -left-2 text-brand-yellow -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="12" fill="none" opacity="0.8" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-brand-dark/80 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              NoteNest is an open-source, team-based knowledge base that allows users to create, organize, and collaborate on notes and documentation in real time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/dashboard"
                className="group inline-flex items-center justify-center pl-8 pr-2 py-3 text-xl font-bold text-white bg-brand-dark rounded-full hover:bg-black hover:scale-105 transition-all duration-300 shadow-xl z-20"
              >
                Start Writing
                <div className="ml-6 w-14 h-14 bg-white text-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </Link>
            </motion.div>

            <div className="mt-16 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-beige bg-gray-200 flex items-center justify-center text-xs font-bold bg-white text-black shadow-md relative z-0 hover:z-10 hover:scale-110 transition-transform">
                    <ImageIcon className="w-5 h-5 opacity-50" />
                  </div>
                ))}
              </div>
              <p className="text-base font-bold text-brand-dark">
                Trusted by 4,000+ teams
              </p>
            </div>
          </div>

          {/* Right: Visual Reference Implementation */}
          <div className="relative h-full min-h-[500px] w-full hidden md:block perspective-1000">

            {/* Tablet & Desktop Grid Layout */}
            <div className="absolute inset-0 grid grid-rows-3 grid-cols-2 gap-4 p-4 lg:p-8">

              {/* Card 1: Shared to (Top Right) - Desktop Only */}
              <div className="row-start-1 col-start-2 place-self-center hidden lg:block z-20">
                <FloatingCard
                  className="w-[18rem] bg-[#FDFBF7] p-6 text-brand-dark"
                  rotate={-2}
                  yOffset={-10}
                >
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center bg-white">←</div>
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white" />
                      <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-4 leading-none">Real-time<br />Collab</h3>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">+</button>
                    <button className="w-10 h-10 rounded-full bg-[#EAE8DD] flex items-center justify-center"><ImageIcon className="w-4 h-4 opacity-50" /></button>
                  </div>
                </FloatingCard>
              </div>

              {/* Card 2: Status (Center/Right) - Tablet & Desktop */}
              <div className="row-start-2 col-span-2 place-self-center z-30">
                <FloatingCard
                  className="p-0 border-none bg-transparent shadow-none"
                  rotate={0}
                >
                  <div className="inline-block px-8 py-4 border-4 border-brand-dark rounded-[2rem_1rem_2rem_0.5rem] text-2xl font-handwritten font-bold transform -rotate-1 hover:rotate-0 transition-transform cursor-cell bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    Syncing...
                  </div>
                </FloatingCard>
              </div>

              {/* Card 3: Dark Mode / Mobile (Bottom Left) - Tablet & Desktop */}
              <div className="row-start-3 col-start-1 place-self-center lg:place-self-start z-20">
                <FloatingCard
                  className="w-64 bg-[#0F0F0F] text-white p-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border-none"
                  rotate={6}
                  delay={0.2}
                  xOffset={20}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-serif mb-1 tracking-tight">My Notes</h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">::</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-brand-accent text-brand-dark p-3 rounded-[1rem] h-32 flex flex-col justify-between">
                      <div className="font-bold text-sm leading-tight">Plan for<br />The Day</div>
                      <div className="flex items-center gap-1 text-[10px] font-bold"><div className="w-3 h-3 rounded-full bg-brand-dark/20 flex items-center justify-center">✓</div> Gym</div>
                    </div>
                    <div className="bg-brand-yellow text-brand-dark p-3 rounded-[1rem] h-32 relative overflow-hidden">
                      <div className="font-bold text-sm mb-1">Ideas</div>
                      <div className="absolute bottom-0 right-0 w-12 h-12 bg-brand-dark rounded-tl-[1rem] flex items-center justify-center">
                        <ImageIcon className="w-5 h-5 text-white/50" />
                      </div>
                    </div>
                  </div>
                </FloatingCard>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
