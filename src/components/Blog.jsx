
import { motion } from 'framer-motion'

const articles = [
  {
    category: 'Digital Strategy',
    date: 'October 15, 2026',
    title: 'How to Build a Digital Strategy That Drives Growth',
    description:
      'Discover how a clear digital strategy helps businesses reach the right audience and achieve meaningful results.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Technology',
    date: 'October 10, 2026',
    title: 'The Role of Technology in Modern Business',
    description:
      'Explore the technologies and digital tools helping businesses work smarter and adapt to a changing world.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Growth',
    date: 'October 5, 2026',
    title: 'Turning Customer Insights Into Better Results',
    description:
      'Learn how understanding customer needs can improve experiences, strengthen relationships, and support growth.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
  },
]

export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="min-h-screen bg-[#f7f5f0] text-[#20231f]"
    >
      {/* Blog hero */}
      <section className="px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto max-w-7xl"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#77786f]">
            Nexor Insights
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Ideas that move
            <br />
            business forward.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#66675f] sm:text-lg">
            Explore insights, strategies, and ideas to help your business
            navigate the digital world and achieve meaningful growth.
          </p>
        </motion.div>
      </section>

      {/* Article cards */}
      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between border-b border-black/10 pb-5">
            <h2 className="text-2xl font-semibold">Latest articles</h2>

            <span className="text-sm text-[#77786f]">
              {articles.length} Articles
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.15,
                  ease: 'easeOut',
                }}
                className="group"
              >
                <div className="mb-5 aspect-[4/3] overflow-hidden rounded-xl bg-white">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-medium text-[#77786f]">
                  <span className="rounded-full border border-black/10 px-3 py-1">
                    {article.category}
                  </span>

                  <span>{article.date}</span>
                </div>

                <h3 className="text-xl font-semibold leading-snug transition-colors group-hover:text-[#77786f] sm:text-2xl">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#66675f]">
                  {article.description}
                </p>

                <a
                  href={`mailto:hello@nexor.com?subject=${encodeURIComponent(
                    article.title
                  )}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                >
                  Read more <span aria-hidden="true">↗</span>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
