"use client";

import { motion } from "framer-motion";
import { 
  Star, 
  Search, 
  Sparkles, 
  Smartphone, 
  ArrowRight,
  CheckCircle2,
  Clock,
  Circle
} from "lucide-react";

// Mock Data
const companies = ["TechFlow", "DevCorp", "Studio 42", "NextLevel", "Vertex", "Acme Inc"];

const testimonials = [
  {
    quote: "NoteNest completely transformed how our engineering team documents APIs. It's fast, beautiful, and the real-time collab is flawless.",
    author: "Sarah Chen",
    role: "CTO, TechFlow",
    avatar: "SC"
  },
  {
    quote: "Finally, a knowledge base that doesn't feel like a chore to use. The rich editor is best-in-class.",
    author: "Marcus Rodriguez",
    role: "Product Lead, Vertex",
    avatar: "MR"
  },
  {
    quote: "The role-based access control is exactly what we needed for our enterprise clients. Secure and simple.",
    author: "Emily Watson",
    role: "Eng Manager, DevCorp",
    avatar: "EW"
  },
  {
    quote: "We moved all our internal wikis to NoteNest. The search speed is incredible.",
    author: "David Kim",
    role: "Founder, Studio 42",
    avatar: "DK"
  }
];

const roadmapItems = [
  {
    title: "Full-text Search",
    description: "Deep content indexing with fuzzy matching.",
    icon: Search,
    status: "In Progress",
    progress: 75
  },
  {
    title: "AI Summaries",
    description: "Auto-generated recaps of long documents.",
    icon: Sparkles,
    status: "In Progress",
    progress: 40
  },
  {
    title: "Mobile App",
    description: "Native iOS and Android experience.",
    icon: Smartphone,
    status: "Coming Soon",
    progress: 10
  }
];

const LogoTicker = () => (
  <div className="w-full overflow-hidden border-y border-black/5 bg-white/50 backdrop-blur-sm py-8 mb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center text-sm font-bold uppercase tracking-widest text-[#1A1A1A]/40 mb-8">
        Trusted by forward-thinking teams
      </p>
      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="flex whitespace-nowrap gap-16"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop" 
          }}
        >
          {[...companies, ...companies, ...companies, ...companies].map((company, i) => (
            <span key={i} className="text-2xl font-serif font-bold text-[#1A1A1A]/20 uppercase tracking-tighter">
              {company}
            </span>
          ))}
        </motion.div>
        
        {/* Gradient Fade */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F3F0E6] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F3F0E6] to-transparent z-10" />
      </div>
    </div>
  </div>
);

const TestimonialCard = ({ data }: { data: typeof testimonials[0] }) => (
  <div className="min-w-[350px] md:min-w-[400px] bg-white p-8 rounded-3xl border border-black/5 shadow-sm mx-4 flex flex-col justify-between h-full hover:scale-[1.02] transition-transform duration-300">
    <div className="mb-6">
      <div className="flex gap-1 mb-4">
        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#FFD93D] text-[#FFD93D]" />)}
      </div>
      <p className="text-lg font-medium text-[#1A1A1A] leading-relaxed">
        "{data.quote}"
      </p>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-sm">
        {data.avatar}
      </div>
      <div>
        <p className="text-sm font-bold text-[#1A1A1A]">{data.author}</p>
        <p className="text-xs font-medium text-[#1A1A1A]/50 uppercase tracking-wide">{data.role}</p>
      </div>
    </div>
  </div>
);

const RoadmapItem = ({ item, index }: { item: any, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="relative pl-12 pb-12 last:pb-0"
  >
    {/* Timeline Line */}
    <div className="absolute left-[19px] top-0 h-full w-[2px] bg-black/5 last:hidden" />
    
    {/* Node */}
    <div className="absolute left-0 top-0 w-10 h-10 rounded-full border-4 border-[#F3F0E6] bg-white flex items-center justify-center text-[#1A1A1A] z-10 shadow-sm">
      <item.icon className="w-4 h-4" />
    </div>

    <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-xl font-serif font-bold text-[#1A1A1A]">{item.title}</h4>
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${item.status === 'In Progress' ? 'bg-[#FFD93D]/20 text-[#1A1A1A]' : 'bg-[#1A1A1A]/5 text-[#1A1A1A]/40'}`}>
          {item.status}
        </span>
      </div>
      <p className="text-[#1A1A1A]/60 text-sm mb-4 font-medium">{item.description}</p>
      
      {/* Progress Bar */}
      <div className="w-full h-2 bg-[#F3F0E6] rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${item.progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 + 0.5 }}
          className="h-full bg-[#1A1A1A] rounded-full relative"
        >
           <div className="absolute right-0 top-0 bottom-0 w-full animate-pulse bg-white/20" />
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const SocialProof = () => {
  return (
    <section className="py-20 bg-[#F3F0E6] overflow-hidden">
      
      <LogoTicker />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Marquee */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-black text-[#1A1A1A] mb-6">
              Loved by knowledge workers.
            </h2>
             <p className="text-lg text-[#1A1A1A]/70 font-medium max-w-2xl mx-auto">
               Join thousands of teams who are documenting faster and collaborating better.
             </p>
          </div>
          
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden mask-linear-fade">
             <div className="flex w-max animate-marquee hover:pause">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <TestimonialCard key={i} data={t} />
                ))}
             </div>
             {/* Gradient Fade for Marquee */}
             <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F3F0E6] to-transparent z-10 pointer-events-none" />
             <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F3F0E6] to-transparent z-10 pointer-events-none" />
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="border-l-2 border-black/5 pl-8 space-y-2">
               {roadmapItems.map((item, index) => (
                 <RoadmapItem key={index} item={item} index={index} />
               ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm text-sm font-bold uppercase tracking-wider mb-6"
            >
              The Future of NoteNest
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-[#1A1A1A] mb-6 leading-tight">
              We're just getting <br/> 
              <span className="relative inline-block text-[#FF6B6B]">
                started.
              </span>
            </h2>
            <p className="text-lg text-[#1A1A1A]/70 font-medium leading-relaxed mb-8">
              NoteNest is open-source and community driven. We're constantly shipping new features to help you write better.
            </p>
            <div className="inline-flex items-center gap-2 text-[#1A1A1A] font-bold border-b-2 border-[#1A1A1A] pb-0.5 cursor-pointer hover:opacity-70 transition-opacity">
              View full roadmap <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SocialProof;
