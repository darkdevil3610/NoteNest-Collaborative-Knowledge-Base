"use client";

import { motion } from "framer-motion";
import { Users, Sparkles, Zap } from "lucide-react";
import { Section, Container } from "@/components/ui";


// SocialProof Component — Production Layout (locked from 1440px tuning session)

const LOGOS = [
  { name: "Acme Corp", width: 120 },
  { name: "GlobalTech", width: 140 },
  { name: "Nebula", width: 110 },
  { name: "Trio", width: 90 },
  { name: "FoxHub", width: 130 },
  { name: "Circle", width: 100 },
  { name: "Aven", width: 110 },
  { name: "Treva", width: 100 },
];

const STATS = [
  { value: "4,000+", label: "Teams", icon: Users },
  { value: "2M+", label: "Notes Created", icon: Sparkles },
  { value: "99.9%", label: "Uptime", icon: Zap },
];

const SocialProof = () => {
  return (
    <Section
      spacing="medium"
      fullWidth
      className="border-y border-black/5 bg-[#F9F9F9]"
    >
      <Container>
        {/* Header — headerY: -25px, headerScale: 1.12 */}
        <div
          className="text-center mb-10"
          style={{ transform: 'translateY(-25px) scale(1.12)', transformOrigin: 'center center' }}
        >
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
            Trusted by innovative teams worldwide
          </p>
        </div>

        {/* Logo Ticker — tickerGap: 96px */}
        <div className="relative w-full overflow-hidden mask-linear-fade">
          <div
            className="flex items-center w-max animate-scroll"
            style={{ gap: '96px' }}
          >
            {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
              <div key={i} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <span className="text-xl md:text-2xl font-black text-gray-800 font-serif">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid — statsGap: 32px */}
        <div
          className="grid md:grid-cols-3 mt-20 border-t border-black/5 pt-12"
          style={{ gap: '32px' }}
        >
          {STATS.map((stat, i) => (
            <div key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-2 p-6 rounded-2xl bg-white border border-black/5 shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-beige mb-2 text-brand-dark">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-brand-dark">{stat.value}</h3>
                <p className="text-base font-medium text-gray-500">{stat.label}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default SocialProof;
