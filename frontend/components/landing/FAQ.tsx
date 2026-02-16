"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Section } from "@/components/ui";
import { cn } from "@/lib/utils";

// ============================================================================
// FAQ Component — Production Layout (locked from 1440px tuning session)
// ============================================================================

const faqs = [
  {
    question: "Is NoteNest completely free?",
    answer: "Yes! NoteNest is open-source and free to self-host. We also offer a managed cloud version for teams who don't want to manage their own infrastructure."
  },
  {
    question: "Can I import from Notion/Obsidian?",
    answer: "Currently we support Markdown import. Direct Notion and Obsidian importers are on our roadmap for Q3 2024."
  },
  {
    question: "How does the real-time collaboration work?",
    answer: "We use a CRDT (Conflict-free Replicated Data Type) based engine (Yjs) to ensure that all changes are merged instantly without conflicts, even if you go offline."
  },
  {
    question: "Is my data encrypted?",
    answer: "Yes. All data is encrypted at rest and in transit. For the self-hosted version, you have full control over your encryption keys."
  },
  {
    question: "Do you offer an API?",
    answer: "Absolutely. NoteNest is API-first. Anything you can do in the UI, you can do via our REST API."
  }
];

const FAQItem = ({ item, isOpen, onClick }: { item: any, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-black/5 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-center py-6 text-left group gap-4"
      >
        <span className={cn(
          "text-lg md:text-xl font-serif font-bold transition-colors flex-grow",
          isOpen ? "text-brand-dark" : "text-brand-dark/70 group-hover:text-brand-dark"
        )}>
          {item.question}
        </span>
        <div className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-brand-dark border-brand-dark text-white rotate-180" : "bg-white border-black/10 text-brand-dark group-hover:border-brand-dark"
        )}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-base md:text-lg text-brand-dark/70 leading-relaxed font-medium">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      spacing="large"
      background="bg-white"
    // Section: default, minHeight 0 - no overrides needed based on defaults
    >
      {/* Grid: gap 100px */}
      <div
        className="grid lg:grid-cols-12 items-start"
        style={{ gap: '100px' }}
      >
        {/* Header — leftX: 20, leftY: 20, leftScale: 1.12 */}
        <div
          className="lg:col-span-4"
          style={{ transform: 'translate(20px, 20px) scale(1.12)', transformOrigin: 'center center' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            {/* Badge — badgeX: 20, badgeY: 0 */}
            <div
              className="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-brand-beige/50 text-sm font-bold uppercase tracking-wider mb-6"
              style={{ transform: 'translateX(20px)' }}
            >
              Support
            </div>
            {/* Heading — headingX: 20, headingY: 0 */}
            <h2
              className="text-4xl md:text-5xl font-serif font-black text-brand-dark mb-6"
              style={{ transform: 'translateX(20px)' }}
            >
              Frequently Asked Questions
            </h2>
            {/* Subtitle — subtitleX: 20, subtitleY: 0 */}
            <p
              className="text-brand-dark/60 text-lg font-medium mb-8"
              style={{ transform: 'translateX(20px)' }}
            >
              Can't find the answer you're looking for? Join our <a href="#" className="text-brand-dark underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity">Discord community</a>.
            </p>
          </motion.div>
        </div>

        {/* List — rightX: 17 */}
        <div
          className="lg:col-span-8"
          style={{ transform: 'translateX(17px)' }}
        >
          {/* FAQ Card — faqCardPadding: 48 */}
          <div
            className="bg-[#F9F9F9] rounded-3xl border border-black/5"
            style={{ padding: '48px' }}
          >
            {faqs.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
