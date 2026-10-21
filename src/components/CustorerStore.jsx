import React from 'react'
import { motion } from 'framer-motion'

export default function CustorerStore() {
    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-10 xl:px-12 text-white font-sans">

            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="mb-14"
            >
                <p className="mb-5 mx-auto flex h-7 w-fit items-center justify-center gap-2 rounded-2xl bg-white px-4 text-center text-sm font-bold uppercase tracking-[0.15em] text-black">
                    <span className="text-sm">●</span>
                    OUR IMPACT
                </p>

                <h1 className="text-center font-semibold text-4xl sm:text-5xl lg:text-6xl text-black tracking-tight leading-tight">
                    Trusted by brands <br /> across industries
                </h1>
            </motion.div>

            {/* Testimonial Section Container */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full max-w-[1600px] mx-auto bg-[#141c1a] border border-zinc-900 rounded-3xl p-6 sm:p-10 lg:p-14 xl:p-16 flex flex-col md:flex-row gap-8 lg:gap-12 xl:gap-16 items-stretch justify-between"
            >

                {/* Left Side: Image container */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="w-full md:w-[45%] flex items-center"
                >
                    <div className="w-full aspect-[4/3.4] rounded-2xl overflow-hidden">
                        <motion.img
                            src="https://framerusercontent.com/images/8gUueMaijyWFcJUGpwJAp7uviY.png?scale-down-to=512&width=1536&height=1024"
                            alt="Team meeting"
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Right Side: Content Box */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="w-full md:w-[55%] flex flex-col justify-between space-y-8"
                >

                    {/* Quotation text */}
                    <div className="space-y-5">
                        <span className="text-[#f1f980] font-serif text-6xl block h-5 select-none">“</span>

                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal text-zinc-100 leading-snug">
                            Working with them felt like being understood, then thoughtfully guided toward clarity.
                        </h2>

                        <div className="pt-2">
                            <p className="font-medium text-lg text-white">Emma Clark</p>
                            <p className="text-base text-zinc-400 font-light">Head of Operations, Klea</p>
                        </div>
                    </div>

                    {/* Impact Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">

                        {/* Box 1 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.25 }}
                            className="bg-[#273632] border border-zinc-800/40 rounded-xl p-6 flex flex-col justify-between min-h-[140px]"
                        >
                            <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white">+$2.4M</h3>
                            <p className="text-sm text-zinc-400 font-light mt-3 leading-relaxed">
                                Research budgets tracked in real time
                            </p>
                        </motion.div>

                        {/* Box 2 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.25 }}
                            className="bg-[#273632] border border-zinc-800/40 rounded-xl p-6 flex flex-col justify-between min-h-[140px]"
                        >
                            <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white">+45%</h3>
                            <p className="text-sm text-zinc-400 font-light mt-3 leading-relaxed">
                                Research budgets tracked in real time
                            </p>
                        </motion.div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                        <motion.button
                            whileHover={{ y: -3, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                            className="bg-[#f1f980] hover:bg-[#d4e64b] text-black text-sm font-semibold px-7 py-4 rounded-full transition-colors duration-200"
                        >
                            Read Full Story
                        </motion.button>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    )
}