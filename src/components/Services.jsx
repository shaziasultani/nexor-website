import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      number: '01',
      category: 'STRATEGY',
      title: 'Financial Consulting',
      description:
        'Personalized strategies to grow, protect, and transfer your wealth across generations.',
      image:
        'https://framerusercontent.com/images/za9UrvHCUpGl48R7PopKukBgEOg.png?height=2160&width=3672',
      link: 'https://nexor.framer.wiki/service/financial-consulting',
    },
    {
      number: '02',
      category: 'SOLUTIONS',
      title: 'Advanced Tech Advisory',
      description:
        'We assess, streamline, and guide your technology choices, ensuring your systems scale with your ambition.',
      image:
        'https://framerusercontent.com/images/LHwMtI0ejkxPFAvTV4ckZEEmV4.png?height=800&width=1164',
      link: 'https://nexor.framer.wiki/service/advanced-tech-advisory',
    },
    {
      number: '03',
      category: 'DEVELOPMENT',
      title: 'Retirement Planning',
      description:
        'Build a secure future with tailored retirement roadmaps designed around your goals.',
      image:
        'https://framerusercontent.com/images/tRkeO78eHGi00fQNGOl7XhyZxM.png?height=1200&width=1746',
      link: 'https://nexor.framer.wiki/service/retirement-planning',
    },
    {
      number: '04',
      category: 'TESTING',
      title: 'Investment Strategy',
      description:
        'Data-driven portfolio allocation and market insights to help you capitalize on opportunities.',
      image:
        'https://framerusercontent.com/images/FLVEoQzVr0xmUZnURS0VvSmy0g.png?height=1360&width=1120',
      link: 'https://nexor.framer.wiki/service/investment-strategy',
    },
  ]

  return (
    <section
      id="services"
      className="w-full bg-[#f8f7f4] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="mb-6 flex h-6 w-fit items-center justify-center gap-2 rounded-md bg-white px-3 text-[12px] font-bold uppercase tracking-[0.15em] text-black">
            <span className="text-sm text-[#20231f]">●</span>
            SERVICES
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#20231f] sm:text-5xl lg:text-6xl">
            Expert consultation to help your business grow and achieve goals.
          </h2>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.a
              key={service.number}
              href={service.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              whileHover={{ y: -5 }}
              className="group overflow-hidden rounded-2xl bg-white transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Image with number and category */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-96 lg:h-[450px]"
                />

                <div className="absolute left-5 top-5 flex items-center gap-3 rounded-md border border-[#e8e6e1] bg-[#f8f7f4] px-4 py-2 text-xs font-semibold tracking-[0.15em] text-[#20231f] sm:left-6 sm:top-6">
                  <span>{service.number}</span>
                  <span className="h-3 w-px bg-[#d6d3cc]" />
                  <span>{service.category}</span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 sm:p-8">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold tracking-[0.15em] text-[#686b63]">
                    {service.number} / {service.category}
                  </p>

                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-[#20231f] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="mb-3 text-2xl font-semibold tracking-tight text-[#20231f] sm:text-3xl">
                  {service.title}
                </h3>

                <p className="mb-6 max-w-lg text-sm leading-7 text-[#686b63] sm:text-base">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 border-t border-[#e8e6e1] pt-5 text-sm font-semibold text-[#20231f]">
                  View Details
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}