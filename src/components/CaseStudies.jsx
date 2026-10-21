import React from "react";
import { motion } from "framer-motion";

export default function CaseStudies() {
    const caseStudies = [
        {
            image:
                "https://framerusercontent.com/images/mwOhzjlCvNdQyzrfH0ARYF3rhHo.png?width=1536&height=950",
            title: (
                <>
                    How we increased Meridian
                    <br />
                    revenue by $1.2M in 6 months
                </>
            ),
            height: "h-[280px] sm:h-[450px]",
        },
        {
            image:
                "https://framerusercontent.com/images/kDFcYwpqnoDaZrZGWaZpJu4.png?width=1743&height=1500",
            title: (
                <>
                    They didn’t just consult —
                    they co- <br /> created. Every meeting left us lighter.
                </>
            ),
            height: "h-[280px] sm:h-[450px]",
        },
        {
            image:
                "https://framerusercontent.com/images/Qy5LHdmfEkngOJ9tD4WNHCxnWs.png?width=1743&height=1500",
            title: (
                <>
                    Every step felt understood, supported, and confidently directed.
                </>
            ),
            height: "h-[280px] sm:h-[450px]",
        },
        {
            image:
                "https://framerusercontent.com/images/65gZia4eaNo50LWRcnyy5dkUnz4.png?width=1162&height=1000",
            title: (
                <>
                    Working with them felt like <br />
                    being heard, then gently <br />
                    guided toward clarity.
                </>
            ),
            height: "h-[280px] sm:h-[450px]",
        },
    ];

    return (
        <section
            id="case-studies"
            className="bg-[#f2efe6] px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mx-auto mb-10 flex flex-col items-center text-center sm:mb-14"
                >
                    <p className="mb-6 flex h-6 w-fit items-center justify-center gap-2 rounded-md bg-white px-3 text-[12px] font-bold uppercase tracking-[0.15em] text-black">
                        <span className="text-sm text-[#20231f]">●</span>
                        CASE STUDIES
                    </p>

                    <h2 className="text-3xl font-medium leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        We help companies <br />
                        just outcomes
                    </h2>
                </motion.div>

                {/* Case studies grid */}
                <div className="grid grid-cols-1 items-start gap-x-[20px] gap-y-4 sm:grid-cols-2 lg:gap-y-4">
                    {caseStudies.map((study, index) => (
                        <motion.article
                            key={study.image}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                                ease: "easeOut",
                            }}
                            whileHover={{ y: -4 }}
                            className="group min-w-0"
                        >
                            {/* Image with text and button inside */}
                            <div
                                className={`relative w-full overflow-hidden rounded-2xl bg-gray-100 ${study.height}`}
                            >
                                <img
                                    src={study.image}
                                    alt={`Case study ${index + 1}`}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                                />

                                {/* Text overlay */}
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-16 sm:p-7 sm:pt-20">
                                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70">
                                        {index === 0 ? "Results" : "Client Story"}
                                    </p>

                                    <div className="flex items-end justify-between gap-4">
                                        <h3 className="max-w-lg text-lg font-medium leading-snug text-white sm:text-xl">
                                            {study.title}
                                        </h3>

                                        <a
                                            href="#contact"
                                            className="group relative z-10 mt-4 inline-block w-40 overflow-hidden rounded-sm bg-[#f1f980] px-2 py-2 text-center text-sm font-medium text-black transition-colors"
                                        >
                                            <span className="absolute inset-0 -translate-x-full bg-amber-50 transition-transform duration-700 ease-in-out group-hover:translate-x-0"></span>

                                            <span className="relative z-10">
                                                Read Full Story
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}