
import React from 'react'
import { motion } from 'framer-motion'
import { Compass, TrendingUp, Users } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const featureContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function About() {
  return (
    <section className="w-full bg-[#f8f7f4] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

      {/* Heading and introduction */}
      <motion.div
        variants={featureContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto flex max-w-7xl flex-col items-center text-center"
      >
        <motion.p
          variants={fadeUp}
          className="mb-6 flex h-6 w-30 items-center justify-center gap-2 rounded-md bg-white text-center text-[12px] font-bold uppercase tracking-[0.15em] text-black"
        >
          <span className="text-sm text-[#20231f]">●</span>
          ABOUT US
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#20231f] sm:text-4xl"
        >
          A global consulting partner dedicated to <br />
          building smarter solutions. We help startups <br />
          make smarter decisions and grow with clarity.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-xs leading-6 text-[#686b63] sm:text-lg"
        >
          We are a trusted business consulting firm dedicated to helping <br />
          organizations unlock their full potential.
        </motion.p>

        <motion.a
          variants={fadeUp}
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 hidden items-center justify-center rounded-lg border border-[#20231f] bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-black/75 focus:outline-none md:inline-flex"
        >
          Learn More
        </motion.a>
      </motion.div>

      {/* Image cards */}
      <div className="grid grid-cols-1 items-stretch gap-5 pt-15 md:grid-cols-2">

        {/* TrustPilot card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex min-h-[320px] flex-col justify-end rounded-2xl bg-cover bg-center p-8 sm:p-10 lg:p-12"
          style={{
            backgroundImage:
              "url('https://framerusercontent.com/images/kbDbKuAG2zzC47fb54QIbzSuc4.jpg?width=2000&height=1186')",
          }}
        >
          <div>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              96%
            </h1>

            <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              Positive rating on TrustPilot
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/80 sm:text-base">
              A clear view of how structured execution translates into sustainable,
              measurable growth across revenue, teams, and markets.
            </p>
          </div>
        </motion.div>

        {/* Experience image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-2xl"
        >
          <motion.img
            src="https://framerusercontent.com/images/Pf8hRhIi67b2lk55dDn5RwnIJI.png?scale-down-to=1024&width=1845&height=1482"
            alt="Business consulting and teamwork"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="h-full min-h-[320px] w-full rounded-2xl object-cover"
          />

          <div className="absolute bottom-4 right-4 rounded-lg bg-white px-5 py-3">
            <h1 className="text-2xl font-semibold text-[#20231f]">
              12+
            </h1>
            <p className="text-sm text-[#686b63]">
              Years of Experience
            </p>
          </div>
        </motion.div>
      </div>

      {/* Features */}
      <motion.div
        variants={featureContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-30 px-15 pt-15 sm:flex-row sm:gap-40"
      >
        {/* Strategic Clarity */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="flex max-w-[280px] items-start gap-4"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-200 text-black shadow-sm">
            <Compass className="h-6 w-6 stroke-[1.5]" />
          </div>

          <div>
            <h3 className="mb-1 text-lg font-bold text-neutral-900">
              Strategic Clarity
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              Turning complex challenges into <br />
              actionable roadmaps
            </p>
          </div>
        </motion.div>

        {/* Adaptive Growth */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="flex max-w-[280px] items-start gap-4"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-200 text-black shadow-sm">
            <TrendingUp className="h-6 w-6 stroke-[1.5]" />
          </div>

          <div>
            <h3 className="mb-1 text-lg font-bold text-neutral-900">
              Adaptive Growth
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              Embracing change as a catalyst for <br />
              progress, unlocking
            </p>
          </div>
        </motion.div>

        {/* Unified Purpose */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="flex max-w-[280px] items-start gap-4"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-black shadow-sm">
            <Users className="h-6 w-6 stroke-[1.5]" />
          </div>

          <div>
            <h3 className="mb-1 text-lg font-bold text-neutral-900">
              Unified Purpose
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              Bringing diverse perspectives <br />
              together to build solutions
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
