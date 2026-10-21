
import React from 'react'
import {
  ArrowUpRight,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react'

export default function OurImpact() {
  return (
    <section
      id="impact"
      className="w-full overflow-hidden bg-black px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Main Impact Section */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">

          {/* Left Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://framerusercontent.com/images/FLVEoQzVr0xmUZnURS0VvSmy0g.png?height=1360&width=1120"
                alt="Business consulting and strategy"
                className="h-[380px] w-full object-cover sm:h-[490px] lg:h-[660px]"
              />
            </div>

            {/* Image Statistic */}
            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/15 bg-black/90 p-4 shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-auto sm:min-w-[220px]">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                Our Results
              </p>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight text-white">
                  0+
                </span>

                <span className="text-sm text-gray-300">
                  Campaigns shipped
                </span>
              </div>

              <p className="mt-1 text-sm text-gray-400">
                with strategy
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-start">
            <p className="mb-5 flex h-6 w-fit items-center gap-2 rounded-md px-3 text-xs font-bold uppercase tracking-[0.15em] bg-[#f1f980] text-black">
              <span className="text-sm">●</span>
              OUR IMPACT
            </p>

            <h2 className="mb-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Expert consulting tailored to your business success
            </h2>

            <p className="mb-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
              We bring clarity to complexity—offering hands-on strategic
              guidance, actionable frameworks, and measurable results
              that drive real business growth.
            </p>

            {/* Button */}
            <a
              href="https://nexor.framer.wiki/contact"
              target="_blank"
              rel="noreferrer"
              className="group mb-7 inline-flex items-center gap-3 rounded-lg bg-[#f1f980] px-6 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-[#e4ed70]"
            >
              Book Free Meeting

              <ArrowUpRight
                className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>

            {/* Two Feature Cards */}
            <div className="grid w-full grid-cols-2 gap-3">

              {/* Creative Synergy */}
              <div className="rounded-xl border border-white/10 bg-[#273632] p-4 transition-colors duration-300 hover:border-white/25 sm:p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                  <Lightbulb
                    className="h-5 w-5"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-white">
                  Creative Synergy
                </h3>

                <p className="text-sm leading-6 text-gray-300">
                  Blending diverse perspectives to spark breakthrough solutions.
                </p>
              </div>

              {/* Resilient Systems */}
              <div className="rounded-xl border border-white/10 bg-[#273632] p-4 transition-colors duration-300 hover:border-white/25 sm:p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                  <ShieldCheck
                    className="h-5 w-5"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-white">
                  Resilient Systems
                </h3>

                <p className="text-sm leading-6 text-gray-300">
                  Building frameworks that adapt to shifting conditions.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}