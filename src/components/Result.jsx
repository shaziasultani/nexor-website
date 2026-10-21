

import React, { useEffect, useState } from "react";



function AnimatedNumber({ target, duration = 2200 }) {

  const [value, setValue] = useState(0);



  useEffect(() => {

    let frame;

    const startTime = performance.now();



    const update = (now) => {

      const progress = Math.min((now - startTime) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);



      setValue(Math.round(target * eased));



      if (progress < 1) {

        frame = requestAnimationFrame(update);

      }

    };



    frame = requestAnimationFrame(update);



    return () => cancelAnimationFrame(frame);

  }, [target, duration]);



  return value;

}



export default function Result() {

  const authorImages = [

    "https://framerusercontent.com/images/8c2lLQwz7lq2l6op0pHUFYW9MM.png?width=900&height=897",

    "https://framerusercontent.com/images/WxXlmmjG5EMIpQHueje4fVz0Xhw.png?width=902&height=904",

    "https://framerusercontent.com/images/1hYIRap9H5H1tA4FnVg5hT6Cc.png?width=967&height=1200",

    "https://framerusercontent.com/images/2hBFpM0grZqDd6icBnEmGyOQfxg.png?width=900&height=887",

    "https://framerusercontent.com/images/uMQGphPXh3seZJcTNYDAMtYQTxQ.png?width=1500&height=1499",

  ];



  return (

    <section className="bg-[#f7f5f0] px-5 py-20 sm:px-8 lg:px-16 lg:py-28">

      <div className="mx-auto max-w-7xl">

        {/* Section label */}

        <div className="mb-6">

          <p className="inline-flex h-7 items-center gap-2 rounded-md bg-white px-3 text-xs font-bold uppercase tracking-[0.15em] text-[#20231f]">

            <span className="text-sm">●</span>

            RESULT

          </p>

        </div>



        {/* Heading */}

        <h2 className="text-left text-3xl font-medium leading-tight tracking-tight text-[#20231f] sm:text-4xl lg:text-5xl">

          Measurable product impact driven by better

          <br className="hidden lg:block" /> decision-making and streamlined workflows

        </h2>



        {/* Description */}

        <p className="mt-6 max-w-3xl text-left text-base leading-7 text-[#686b63] sm:text-lg">

          We embed with your team to diagnose what&apos;s slowing you down, build

          the systems that unlock momentum, and stay until the work is done.

          From strategy sprints to operational redesigns, we bring clarity to

          complex problems and deliver outcomes you can measure.

        </p>



        {/* Profile images and rating */}

        <div className="mt-10 flex flex-nowrap items-center justify-start gap-3 sm:gap-6">

          <div className="flex shrink-0 -space-x-3 sm:-space-x-4">

            {authorImages.map((image, index) => (

              <img

                key={image}

                src={image}

                alt={`Team member ${index + 1}`}

                loading="lazy"

                className="h-8 w-8 rounded-full border-2 border-[#f7f5f0] object-cover sm:h-12 sm:w-12"

              />

            ))}

          </div>



          <div className="flex shrink-0 items-center gap-2 sm:gap-3">

            <div className="flex items-center gap-0.5 text-[#20231f]">

              {[1, 2, 3, 4, 5].map((star) => (

                <span key={star} className="text-sm sm:text-base">

                  ★

                </span>

              ))}

            </div>



            <p className="whitespace-nowrap text-xs font-medium text-[#686b63] sm:text-sm">

              Rated{" "}

              <span className="font-bold text-[#20231f]">4.8/5</span>

            </p>

          </div>

        </div>



        {/* Three result cards */}

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {/* CARD 1: Average Improvements */}

          <article className="result-card flex min-h-[420px] flex-col overflow-hidden rounded-xl bg-white p-7 sm:min-h-[456px] sm:p-[30px]">

            <h3 className="text-base font-medium text-[#20231f]">

              Average Improvements

            </h3>



            {/* Animated percentage */}

            <div className="mt-4 flex items-baseline">

              <span className="text-5xl font-normal tracking-[-0.055em] text-[#20231f] sm:text-5xl lg:text-[48px]">

                <AnimatedNumber target={121} /> %

              </span>

            </div>



            {/* Animated vertical purple bars */}

            <div

              className="improvement-bars mt-auto mb-16 flex h-[50px] items-stretch gap-[5px] overflow-hidden sm:mb-[78px]"

              aria-label="Improvement chart"

              role="img"

            >

              {Array.from({ length: 25 }, (_, index) => (

                <span

                  key={index}

                  className={`improvement-bar ${index < 6 ? "improvement-bar-strong" : ""

                    }`}

                  style={{

                    animationDelay: `${index * 100}ms`,

                  }}

                />

              ))}

            </div>



            <p className="mt-auto text-base leading-[1.65] text-[#62665f] sm:text-[16px]">

              Users can evaluate campaign results more quickly thanks to

              clearer analytics and structured reporting

            </p>

          </article>



          {/* CARD 2: Growth Increase */}

          <article className="result-card flex min-h-[420px] flex-col overflow-hidden rounded-xl bg-white p-7 sm:min-h-[456px] sm:p-[30px]">

            <h3 className="text-base font-medium text-[#20231f]">

              Growth Increase

            </h3>



            {/* Percentage and black growth badge */}

            <div className="mt-4 flex flex-wrap items-center gap-3">

              <span className="text-5xl font-normal tracking-[-0.055em] text-[#20231f] sm:text-5xl lg:text-[48px]">

                <AnimatedNumber target={99} />%

              </span>



              <p className="rounded-full bg-[#171b17] px-3 py-1.5 text-sm font-semibold leading-none text-[#e1f77c]">

                +42%

              </p>

            </div>



            {/* Growth chart */}

            <div className="relative mt-auto pt-12">

              <span className="absolute left-[43%] top-0 text-sm text-[#686b63]">

                Yearly

              </span>



              <svg

                viewBox="0 0 360 135"

                preserveAspectRatio="none"

                className="growth-chart h-[135px] w-full overflow-visible"

                fill="none"

                role="img"

                aria-label="Animated yearly growth chart"

              >

                <defs>

                  <linearGradient

                    id="growthArea"

                    x1="0"

                    y1="0"

                    x2="0"

                    y2="135"

                    gradientUnits="userSpaceOnUse"

                  >

                    <stop offset="0%" stopColor="#d6f29b" stopOpacity=".25" />

                    <stop offset="100%" stopColor="#d6f29b" stopOpacity="0" />

                  </linearGradient>

                </defs>



                <path

                  className="growth-area"

                  d="M0 102 C24 96 37 100 53 112 C72 127 91 126 103 113 C116 99 111 69 134 47 C149 32 167 31 180 44 C197 60 195 89 215 94 C235 100 248 83 261 47 C273 14 291 9 307 20 C321 30 322 54 339 54 C354 54 352 20 360 14 L360 135 L0 135 Z"

                  fill="url(#growthArea)"

                />



                <path

                  className="growth-line"

                  d="M0 102 C24 96 37 100 53 112 C72 127 91 126 103 113 C116 99 111 69 134 47 C149 32 167 31 180 44 C197 60 195 89 215 94 C235 100 248 83 261 47 C273 14 291 9 307 20 C321 30 322 54 339 54 C354 54 352 20 360 14"

                  pathLength="1"

                  stroke="#c8eb70"

                  strokeWidth="2.5"

                  strokeLinecap="round"

                />



                <circle

                  cx="154"

                  cy="36"

                  r="4.5"

                  fill="white"

                  stroke="#c8eb70"

                  strokeWidth="2.5"

                  className="growth-point"

                />

              </svg>

            </div>



            <p className="mt-3 text-base leading-[1.65] text-[#62665f]">

              A unified workspace consolidates analytics, offers, and

              performance tasks

            </p>

          </article>



          {/* CARD 3: Testimonial */}

          <article className="result-card group relative min-h-[420px] overflow-hidden rounded-xl bg-[#178500] p-6 sm:min-h-[456px] sm:p-[30px]">

            {/* Animated background image */}

            <div

              className="testimonial-photo absolute inset-0 bg-cover bg-center"

              style={{

                backgroundImage:

                  "url('https://framerusercontent.com/images/kbDbKuAG2zzC47fb54QIbzSuc4.jpg?width=2000&height=1186')",

              }}

            />



            {/* Subtle green overlay */}

            <div className="absolute inset-0 bg-green-700/10" />



            {/* Inset testimonial panel */}

            <div className="testimonial-panel absolute inset-x-6 bottom-6 top-[60px] z-10 flex flex-col rounded-xl bg-[#f5f5ed] p-5 sm:inset-x-[44px] sm:bottom-[60px] sm:top-[60px] sm:p-6">

              {/* Five stars */}

              <div className="flex items-center gap-[3px] text-[#20231f]">

                {[1, 2, 3, 4, 5].map((star) => (

                  <span key={star} className="text-sm leading-none">

                    ★

                  </span>

                ))}

              </div>



              {/* Testimonial quote */}

              <p className="mt-5 text-[15px] leading-[1.5] text-[#20231f] sm:text-base">

                “Nexor replaced three tools and finally gave our teams a shared

                understanding of what’s happening.”

              </p>



              {/* Author details */}

              <div className="mt-auto pt-5">

                <div className="flex items-center gap-1.5">

                  <h4 className="text-sm font-medium text-[#20231f] sm:text-base">

                    Emma Clark

                  </h4>



                  {/* Verification mark */}

                  <svg

                    viewBox="0 0 16 16"

                    className="h-3.5 w-3.5 shrink-0"

                    aria-label="Verified"

                    role="img"

                  >

                    <circle cx="8" cy="8" r="7" fill="#20231f" />

                    <path

                      d="M4.5 8.1 7 10.4 11.5 5.8"

                      fill="none"

                      stroke="#ffffff"

                      strokeWidth="1.5"

                      strokeLinecap="round"

                      strokeLinejoin="round"

                    />

                  </svg>

                </div>



                <p className="mt-2 whitespace-nowrap text-xs text-[#62665f] sm:text-sm">

                  Head of Operations, Klea

                </p>

              </div>

            </div>

          </article>

        </div>

      </div>



      {/* Card and chart animations */}

      <style>{`

        .result-card {

          animation: resultFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;

        }



        .result-card:nth-child(2) {

          animation-delay: 120ms;

        }



        .result-card:nth-child(3) {

          animation-delay: 240ms;

        }



        @keyframes resultFadeUp {

          from {

            opacity: 0;

            transform: translateY(18px);

          }

          to {

            opacity: 1;

            transform: translateY(0);

          }

        }



        .improvement-bars {

          display: flex;

          align-items: stretch;

          gap: 5px;

        }



        .improvement-bar {

          display: block;

          flex: 1 1 0;

          width: 0;

          min-width: 0;

          height: 100%;

          flex-shrink: 1;

          border-radius: 1px;

          transform: scaleY(0.08);

          transform-origin: bottom;

          background: #d7d0ff;

          opacity: 0.45;

          animation: chargeBar 2.5s ease-in-out infinite;

        }



        .improvement-bar-strong {

          background: #b9aaff;

        }



        @keyframes chargeBar {

          0% {

            transform: scaleY(0.08);

            opacity: 0.35;

          }

          8% {

            transform: scaleY(1);

            opacity: 1;

          }

          72% {

            transform: scaleY(1);

            opacity: 1;

          }

          84%,

          100% {

            transform: scaleY(0.08);

            opacity: 0.35;

          }

        }



        /* Growth chart animations */

        .growth-line {

          stroke-dasharray: 1;

          stroke-dashoffset: 1;

          animation: drawGrowthLine 2.4s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;

        }



        .growth-area {

          opacity: 0;

          animation: revealGrowthArea 1.8s ease-out 0.4s forwards;

        }



        .growth-point {

          opacity: 0;

          animation: revealGrowthPoint 0.35s ease-out 1.5s forwards;

        }



        @keyframes drawGrowthLine {

          to {

            stroke-dashoffset: 0;

          }

        }



        @keyframes revealGrowthArea {

          to {

            opacity: 1;

          }

        }



        @keyframes revealGrowthPoint {

          to {

            opacity: 1;

          }

        }



        /* THIRD CARD COLORFUL BACKGROUND ANIMATION */
        .testimonial-photo {
          background-size: 200% 200%;
          background-position: 0% 50%;
          animation: colorFlow 8s ease-in-out infinite;
          transition: filter 0.5s ease;
          will-change: background-position, transform;
        }

        .group:hover .testimonial-photo {
          filter: brightness(1.15);
        }

        @keyframes colorFlow {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

@media (prefers-reduced-motion: reduce) {

          .result-card,

          .improvement-bar,

          .growth-line,

          .growth-area,

          .growth-point,

          .testimonial-photo {

            animation: none !important;

          }



          .improvement-bar {

            transform: scaleY(1);

            opacity: 1;

          }



          .growth-line {

            stroke-dashoffset: 0;

          }



          .growth-area,

          .growth-point {

            opacity: 1;

          }



          .testimonial-photo {

            transform: scale(1.05);

          }

        }

      `}</style>

    </section>

  );

}
