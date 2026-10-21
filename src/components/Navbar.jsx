
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const BASE = '/nexor-website'

const links = [
  { name: 'About', href: `${BASE}/#about` },
  { name: 'Services', href: `${BASE}/#services` },
  { name: 'Contact', href: `${BASE}/#contact` },
  { name: 'Blog', href: `${BASE}/blog` },
]

const pages = [
  { name: 'Home', href: `${BASE}/` },
  { name: 'About Us', href: `${BASE}/#about` },
  { name: 'Services', href: `${BASE}/#services` },
  { name: 'Services Details', href: `${BASE}/#services-details` },
  { name: 'Contact', href: `${BASE}/#contact` },
  { name: 'Blog', href: `${BASE}/blog` },
  { name: 'Blog Details', href: `${BASE}/blog-details` },
  { name: 'Privacy Policy', href: `${BASE}/privacy-policy` },
  { name: 'Terms & Conditions', href: `${BASE}/terms-conditions` },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white md:bg-[#f8f7f4]">
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">

        {/* Logo */}
        <a href={`${BASE}/`}>
          <img
            src="https://framerusercontent.com/images/f6VTynItzl233pgArrziNVDfbUw.svg?width=107&height=34"
            alt="Nexor"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 rounded-xl bg-white px-6 py-3 md:flex">
          <a
            href={`${BASE}/#about`}
            className="text-lg font-semibold text-[#555650] transition-colors duration-200 hover:text-black"
          >
            About
          </a>

          {/* Desktop Pages dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={pagesOpen}
              className="flex items-center gap-2 text-lg font-semibold text-[#555650] transition-colors duration-200 hover:text-black"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full bg-black/50 transition-all duration-300 ${
                  pagesOpen
                    ? 'scale-100 opacity-100'
                    : 'scale-0 opacity-0'
                }`}
              />

              Pages

              <span
                className={`inline-block font-bold transition-transform duration-300 ease-in-out ${
                  pagesOpen ? 'rotate-180' : 'rotate-0'
                }`}
              >
                ⌵
              </span>
            </button>

            {/* Animated desktop dropdown */}
            <div
              className={`invisible absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-4 transition-[opacity,transform,visibility] duration-300 ease-in-out ${
                pagesOpen
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible -translate-y-2 opacity-0'
              }`}
            >
              <div className="rounded-xl border border-black/5 bg-white p-5 shadow-xl">
                <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                  {pages.map((page, index) => (
                    <a
                      key={`${page.name}-${index}`}
                      href={page.href}
                      onClick={() => setPagesOpen(false)}
                      className="text-sm font-medium text-[#555650] transition-colors duration-200 hover:text-black"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other desktop links */}
          {links
            .filter((link) => link.name !== 'About')
            .map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-semibold text-[#555650] transition-colors duration-200 hover:text-black"
              >
                {link.name}
              </a>
            ))}
        </div>

        {/* Desktop Contact Us button */}
        <a
          href={`${BASE}/#contact`}
          className="hidden md:inline-flex items-center justify-center rounded-lg border border-[#20231f] bg-black px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-black/75 hover:text-white focus:outline-none"
        >
          Contact Us
        </a>

        {/* Hamburger button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-xl text-[#20231f] md:hidden"
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </nav>

      {/* Animated mobile menu */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0, y: -12 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -12 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-black/10 bg-white md:hidden"
          >
            <div className="px-6 pb-6 pt-4">
              <div className="flex flex-col items-start gap-5">

                {/* About */}
                <motion.a
                  href={`${BASE}/#about`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="text-sm font-medium text-[#20231f]"
                >
                  About
                </motion.a>

                {/* Mobile Pages dropdown */}
                <div className="w-full">
                  <button
                    type="button"
                    onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                    aria-expanded={mobilePagesOpen}
                    className="flex items-center gap-2 text-sm font-medium text-[#20231f]"
                  >
                    Pages

                    <span
                      className={`inline-block font-bold transition-transform duration-300 ${
                        mobilePagesOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      ⌄
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {mobilePagesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -6 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -6 }}
                        transition={{
                          duration: 0.3,
                          ease: 'easeInOut',
                        }}
                        className="mt-4 overflow-hidden"
                      >
                        <div className="grid grid-cols-2 gap-x-6 gap-y-4 rounded-lg bg-white p-4">
                          {pages.map((page, index) => (
                            <a
                              key={`${page.name}-${index}`}
                              href={page.href}
                              onClick={() => {
                                setMenuOpen(false)
                                setMobilePagesOpen(false)
                              }}
                              className="text-sm font-medium text-[#555650] transition-colors duration-200 hover:text-black"
                            >
                              {page.name}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other mobile links */}
                {links
                  .filter((link) => link.name !== 'About')
                  .map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.1 * (index + 1),
                      }}
                      className="text-sm font-medium text-[#20231f]"
                    >
                      {link.name}
                    </motion.a>
                  ))}

                {/* Mobile Contact Us button */}
                <motion.a
                  href={`${BASE}/#contact`}
                  onClick={() => {
                    setMenuOpen(false)
                    setMobilePagesOpen(false)
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                  className="inline-flex self-start items-center justify-center rounded-lg border border-[#20231f] bg-black px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-black/75 hover:text-white focus:outline-none"
                >
                  Contact Us
                </motion.a>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}