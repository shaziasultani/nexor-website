import React from "react";

export default function Insights() {
  const articles = [
    {
      image:
        "https://framerusercontent.com/images/2nRuRC2DGHbxshFr0NqJL6y3c0.png?scale-down-to=512&width=1580&height=1236",
      alt: "Professional working in a modern office",
      date: "Aug 9, 2026",
      category: "PRODUCT & UPDATES",
      title:
        "Five signs your business is ready to scale and how to prepare",
    },
    {
      image:
        "https://framerusercontent.com/images/4LvBiuXWF4RDCE4jrAzVZimVXUA.png?scale-down-to=512&width=1580&height=1240",
      alt: "Minimal interior with plant and framed artwork",
      date: "Aug 9, 2026",
      category: "OPS & STRATEGY",
      title:
        "How to build a growth strategy that survives market uncertainty",
    },
    {
      image:
        "https://framerusercontent.com/images/Lyb3jyUXunar3UnZc1dgS8UYlss.png?scale-down-to=512&width=1580&height=1240",
      alt: "Business strategy books on a desk",
      date: "Aug 9, 2026",
      category: "New Product Launches",
      title:
        "Top 10 Business strategy books every consultant should read",
    },
  ];

  return (
    <div className="w-full bg-[#F7F5F0] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
      {/* Section Heading */}
      <div className="mx-auto mb-14 max-w-7xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium tracking-wide text-[#202824]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#202824]"></span>
          INSIGHTS
        </span>

        <h2 className="mt-5 font-serif text-4xl font-normal tracking-tight text-[#202824] sm:text-5xl lg:text-[44px]">
          Insights from the Nexor
        </h2>
      </div>

      {/* Articles Grid */}
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[18px]">
        {articles.map((article) => (
          <article
            key={article.title}
            className="group min-w-0 cursor-pointer"
          >
            {/* Article Image */}
            <div className="aspect-[1.2/1] w-full overflow-hidden rounded-xl bg-[#E6E2D9]">
              <img
                src={article.image}
                alt={article.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            {/* Article Details */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[#626762]">
              <span>{article.date}</span>

              <span className="rounded-md bg-[#EEECE5] px-2.5 py-1.5 font-medium text-[#303630]">
                {article.category}
              </span>
            </div>

            {/* Article Title */}
            <h3 className="mt-3 text-base font-medium leading-6 tracking-tight text-[#202824] transition-colors duration-300 group-hover:text-[#777D70]">
              {article.title}
            </h3>
          </article>
        ))}
      </div>
    </div>
  );
}