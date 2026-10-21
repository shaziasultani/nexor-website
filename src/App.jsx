
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedIndustries from './components/TrustedIndustries'
import Services from './components/Services'
import About from './components/About'
import OurImpact from './components/OurImpact'
import CaseStudies from './components/CaseStudies'
import Result from './components/Result'
import CustorerStore from './components/CustorerStore'
import FAQ from './components/FAQ.'
import Insights from './components/Insights'
import Footer from './components/Footer'
import ConsultationCTA from './components/ConsultationCTA'
import Blog from './components/Blog'

function HomePage() {
  return (
    <div className="bg-[#f7f5f0]">
      <Navbar />

      <main>
        <section id="home" className="scroll-mt-28">
          <Hero />
        </section>

        <TrustedIndustries />

        <section id="about" className="scroll-mt-28">
          <About />
        </section>

        <section id="services" className="scroll-mt-28">
          <Services />
        </section>

        <OurImpact />
        <CaseStudies />
        <Result />
        <CustorerStore />
        <FAQ />
        <Insights />

        <section id="contact" className="scroll-mt-28">
          <ConsultationCTA />
        </section>
      </main>

      <Footer />
    </div>
  )
}

function BlogPage() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        smoothWheel: true,
        anchors: true,
      }}
    >
      <div className="bg-[#f7f5f0]">
        <Navbar />
        <main>
          <Blog />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ReactLenis
              root
              options={{
                lerp: 0.08,
                smoothWheel: true,
                anchors: true,
              }}
            >
              <HomePage />
            </ReactLenis>
          }
        />

        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  )
}
