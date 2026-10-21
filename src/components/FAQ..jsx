import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'What does a typical business consultation involve?',
        answer: 'Every engagement begins with a thorough assessment of your current operations, market position, and growth objectives. From there, we develop a tailored strategy that addresses your most pressing challenges whether that` s streamlining workflows, entering new markets, or improving profitability. You`ll receive a milestones.'
    },
    {
        question: 'How long does an engagement usually last?',
        answer: 'Every engagement starts with a detailed assessment of your operations, market position, and growth goals. We create a customized strategy to solve key challenges, optimize performance, and deliver results.'
    },
    {
        question: 'What is the average duration of a consulting project?',
        answer: 'We evaluate your business, identify opportunities, and design a strategy tailored to your goals. Whether improving efficiency, expanding into new markets, or increasing profitability, every step is backed  milestones.'
    },
    {
        question: 'What are some popular engagement ring styles?',
        answer: 'Our process begins with understanding your business inside and out. We develop practical solutions to streamline workflows, drive growth, and improve profitability through a structured action plan.'
    },
    {
        question: 'How much should I budget for an engagement ring?',
        answer: 'We start with a thorough business review, then craft a strategy that aligns with your objectives. Youll receive a clear, actionable plan with defined milestones to improve efficiency, expand opportunities, and maximize itability'
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(1);

    return (
        <section className="w-full bg-[#f7f5f0] px-5 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-28 font-sans text-[#202622]">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="text-center mb-12 lg:mb-14"
            >
                <span className="inline-flex items-center gap-2 rounded-full border border-[#e7e4dd] px-4 py-2 text-xs font-medium mb-5">
                    <span className="text-xs">•</span>
                    FAQ'S
                </span>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight">
                    Questions? Answer
                </h2>
            </motion.div>

            {/* FAQ Accordion */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.12
                        }
                    }
                }}
                className="w-full max-w-4xl mx-auto space-y-3"
            >
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <motion.div
                            key={faq.question}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className={`rounded-xl border transition-colors duration-200 ${
                                isOpen
                                    ? 'bg-white border-white'
                                    : 'bg-transparent border-[#e6e3dc]'
                            }`}
                        >
                            <button
                                type="button"
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                aria-expanded={isOpen}
                                className="w-full flex items-center justify-between gap-5 px-5 py-5 sm:px-6 text-left"
                            >
                                <span className="text-sm sm:text-base font-medium">
                                    {faq.question}
                                </span>

                                <motion.span
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="text-2xl font-light leading-none shrink-0"
                                >
                                    {isOpen ? '−' : '+'}
                                </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 sm:px-6 pb-6">
                                            <p className="text-sm sm:text-base leading-7 text-[#777b77]">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}

                {/* Contact Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-8 !mb-0 rounded-xl bg-[#f0ede5] px-5 py-5 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                    <p className="text-sm sm:text-base">
                        Still have questions? Contact us directly.
                    </p>

                    <motion.a
                        href="/contact"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center justify-center rounded-xl bg-[#171f1b] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#303b35]"
                    >
                        Contact Us
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
}