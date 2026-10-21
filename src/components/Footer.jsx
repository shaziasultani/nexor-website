import React from "react";
import { Phone, AtSign } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const columns = [
    {
      title: "COMPANY",
      links: ["Home", "About Us", "Contact", "Our Service"],
    },
    {
      title: "PAGES",
      links: ["Blog", "Blog Details", "Case Study", "Case Study Details"],
    },
    {
      title: "RESOURCES",
      links: ["Terms & Condition", "Privacy Policy", "404"],
    },
  ];

  const legalText = [
    "Nexor Business Consultation is a trusted consulting firm dedicated to helping businesses overcome challenges, improve performance, and achieve sustainable growth. We partner with small and medium-sized businesses, and established enterprises to develop practical strategies that drive measurable results.",
    "Our team combines industry expertise, market insights, and data-driven decision-making to provide customized solutions that align with each client's unique goals. Whether you're launching a new business, expanding into new markets, improving operations, or planning long-term growth, Nexor provides the guidance and support you need to move forward with confidence.",
    "Nexor implements appropriate security measures to protect your data from unauthorized access, disclosure, or misuse. By using our website and services, you agree to the collection and use of information in accordance with this privacy notice.",
  ];

  const socials = [
    { name: "X", href: "https://x.com", symbol: "𝕏" },
    { name: "Facebook", href: "https://facebook.com", symbol: "f" },
    { name: "Instagram", href: "https://instagram.com", symbol: "◎" },
    { name: "YouTube", href: "https://youtube.com", symbol: "▷" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-[#F7F5F0] px-6 py-12 text-[#17211F] sm:px-10 lg:px-16 lg:py-16"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_0.9fr_0.9fr_0.9fr] lg:gap-12">
          {/* Brand and Contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-start"
          >
            <a
              href="/"
              aria-label="Nexor home"
              className="inline-flex items-center gap-2 text-[27px] font-medium tracking-tight text-[#17211F] no-underline"
            >
              <svg
                viewBox="0 0 40 40"
                className="h-7 w-7"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18 2C9.5 2.9 3 9.4 2 18h9.2c.7-4 3-6.8 6.8-8.1V2Z" />
                <path d="M22 2v7.9c3.8 1.3 6.5 4.2 7.2 8.1H38C37 9.4 30.5 2.9 22 2Z" />
                <path d="M2 22c1 8.6 7.5 15.1 16 16v-7.9c-3.8-1.3-6.1-4.1-6.8-8.1H2Z" />
                <path d="M29.2 22c-.7 4-3.4 6.8-7.2 8.1V38c8.5-.9 15-7.4 16-16h-8.8Z" />
              </svg>
              Nexor
            </a>

            <p className="mt-3 text-sm leading-6">
              Modern Consultancy starts here.
            </p>

            <div className="mt-14 space-y-3">
              <a
                href="tel:+48123421124"
                className="flex items-center gap-2 text-sm no-underline transition-colors hover:text-[#777D70]"
              >
                <Phone size={14} />
                +48 123 421 124
              </a>

              <a
                href="mailto:info@Nexor.com"
                className="flex items-center gap-2 text-sm no-underline transition-colors hover:text-[#777D70]"
              >
                <AtSign size={14} />
                info@Nexor.com
              </a>
            </div>
          </motion.div>

          {/* Navigation Columns */}
          {columns.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15 + index * 0.12,
              }}
            >
              <h3 className="mb-5 text-xs font-normal text-[#898D88]">
                {column.title}
              </h3>

              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href={
                        link === "Home"
                          ? "/"
                          : `/${link.toLowerCase().replaceAll(" ", "-")}`
                      }
                      className="text-sm text-[#17211F] no-underline transition-colors duration-200 hover:text-[#777D70]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Copyright and Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24 flex flex-col gap-5 border-b border-[#D8D6CF] pb-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} Nexor. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="flex h-5 w-5 items-center justify-center text-sm font-medium text-[#17211F] no-underline transition-colors hover:text-[#777D70]"
              >
                {social.symbol}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Legal Information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 pt-5"
        >
          {legalText.map((text, index) => (
            <p
              key={index}
              className="text-xs leading-[1.8] text-[#454A46]"
            >
              {text}
            </p>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
}