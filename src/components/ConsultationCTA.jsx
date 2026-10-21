import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ConsultationCTA() {
  return (
    <section className="w-full bg-[#F7F5F0] px-0 py-6 sm:py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex min-h-[420px] w-full items-center justify-center overflow-hidden sm:min-h-[480px] lg:min-h-[530px]"
      >
        {/* Background Image */}
        <motion.img
          src="https://framerusercontent.com/images/Pf8hRhIi67b2lk55dDn5RwnIJI.png?scale-down-to=1024&width=1845&height=1482"
          alt="Consultants discussing business strategies"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center text-white"
        >
          <p className="text-[11px] font-medium uppercase tracking-wide sm:text-xs">
            NEXOR® IS A BEST AGENCY BASED IN UK
          </p>

          <h2 className="mt-6 max-w-2xl font-serif text-3xl font-normal leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Ready to take a
            <br className="hidden sm:block" /> consultancy with us!
          </h2>

          <motion.a
            href="/contact"
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#F0FF70] px-5 py-3.5 text-sm font-medium text-black no-underline transition-all duration-300 hover:bg-[#E5F45E] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Book Free Meeting
            <ArrowRight size={16} strokeWidth={1.7} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}