"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  IconBook, 
  IconDownload, 
  IconMail, 
  IconChevronRight, 
  IconBrandGithub, 
  IconCheck, 
  IconStar, 
  IconRocket, 
  IconAlien,
  IconMapPin
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

export default function Home() {
  const [activeCover, setActiveCover] = useState<"front" | "back">("front");
  const [emailForm, setEmailForm] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailForm.name && emailForm.email && emailForm.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setEmailForm({ name: "", email: "", message: "" });
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-zinc-950">
      
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2 font-mono text-sm tracking-widest uppercase hover:text-amber-500 transition-colors">
            <span className="h-2 w-2 rounded-full bg-amber-500"></span>
            Mort Gloss
          </a>
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-zinc-400">
            <a href="#awc-section" className="hover:text-zinc-100 transition-colors">Atheist Welcoming Committee</a>
            <a href="#bbpp-section" className="hover:text-zinc-100 transition-colors">Balloon Boy Trilogy</a>
            <a href="#about-section" className="hover:text-zinc-100 transition-colors">About Author</a>
            <a href="#contact-section" className="hover:text-zinc-100 transition-colors">Contact</a>
          </nav>
          <div>
            <a 
              href="#contact-section" 
              className="inline-flex h-9 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-4 text-xs font-semibold uppercase tracking-wider text-zinc-200 transition-all active:scale-95"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 border-b border-zinc-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.05),transparent_50%)]"></div>
          <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Typography */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 text-xs font-mono text-amber-500 uppercase tracking-widest mb-6">
                <IconStar className="h-3.5 w-3.5" />
                Speculative Fiction & Comedy
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-none tracking-tight text-white mb-6">
                Fables from the afterlife and the edges of the galaxy.
              </h1>
              <p className="max-w-[55ch] text-base md:text-lg text-zinc-400 leading-relaxed mb-8">
                Explore the satirical and mind-bending universes of Mort Gloss. Download full novels and compilation sets in PDF, EPUB, or Word formats completely free.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href="#awc-section" 
                  className="inline-flex h-12 items-center justify-center rounded-full bg-amber-500 hover:bg-amber-400 px-6 text-sm font-semibold text-zinc-950 transition-all active:scale-95 shadow-lg shadow-amber-500/10"
                >
                  Explore Books
                </a>
                <a 
                  href="#about-section" 
                  className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-6 text-sm font-semibold text-zinc-300 transition-all active:scale-95"
                >
                  About Author
                </a>
              </div>
            </div>

            {/* Right Column: 3D Books Showcase */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-80 h-96 group perspective">
                
                {/* Book 1 (AWC) */}
                <div className="absolute top-4 left-4 w-56 aspect-[1607/2565] bg-zinc-900 rounded-lg shadow-2xl border border-zinc-800 transform -rotate-12 translate-x-[-20px] transition-transform duration-500 hover:rotate-[-6deg] hover:translate-x-[-10px] overflow-hidden z-20">
                  <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-transparent to-transparent opacity-60"></div>
                  <Image 
                    src="/covers/AWC.Front.Cover.jpg" 
                    alt="Atheist Welcoming Committee Cover" 
                    fill 
                    sizes="(max-width: 320px) 100vw, 240px"
                    className="object-cover" 
                    priority
                  />
                </div>

                {/* Book 2 (BBPP) */}
                <div className="absolute top-12 left-24 w-56 aspect-[1607/2565] bg-zinc-900 rounded-lg shadow-2xl border border-zinc-800 transform rotate-12 translate-x-[20px] transition-transform duration-500 hover:rotate-[6deg] hover:translate-x-[10px] overflow-hidden z-10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-transparent to-transparent opacity-60"></div>
                  <Image 
                    src="/covers/2.jpg" 
                    alt="Balloon Boy Trilogy Stacked Books" 
                    fill 
                    sizes="(max-width: 320px) 100vw, 240px"
                    className="object-cover" 
                    priority
                  />
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Section 1: Book 1 - The Atheist Welcoming Committee */}
        <section id="awc-section" className="py-24 border-b border-zinc-900 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Cover Art Display with Toggle */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-[340px] aspect-[1607/2565] bg-zinc-900 rounded-xl overflow-hidden shadow-2xl border border-zinc-800 transition-all duration-300">
                  <AnimatePresence mode="wait">
                    {activeCover === "front" ? (
                      <motion.div
                        key="front-cover"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0"
                      >
                        <Image 
                          src="/covers/AWC.Front.Cover.jpg" 
                          alt="The Atheist Welcoming Committee Front Cover" 
                          fill
                          sizes="(max-width: 340px) 100vw, 340px"
                          className="object-cover"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="back-cover"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0"
                      >
                        <Image 
                          src="/covers/Back.Cover.Final.jpg" 
                          alt="The Atheist Welcoming Committee Back Cover" 
                          fill
                          sizes="(max-width: 340px) 100vw, 340px"
                          className="object-cover"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Front / Back Toggle Buttons */}
                <div className="flex gap-2 mt-6 bg-zinc-900 border border-zinc-800 p-1 rounded-full">
                  <button 
                    onClick={() => setActiveCover("front")}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${activeCover === "front" ? "bg-amber-500 text-zinc-950 font-bold" : "text-zinc-400 hover:text-zinc-100"}`}
                  >
                    Front Cover
                  </button>
                  <button 
                    onClick={() => setActiveCover("back")}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${activeCover === "back" ? "bg-amber-500 text-zinc-950 font-bold" : "text-zinc-400 hover:text-zinc-100"}`}
                  >
                    Back Cover
                  </button>
                </div>
              </div>

              {/* Book Details */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="font-mono text-xs uppercase tracking-widest text-amber-500 mb-2">Featured Release</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  The Atheist Welcoming Committee
                </h2>
                
                <blockquote className="border-l-2 border-amber-500 pl-4 mb-6 italic text-zinc-300 text-sm leading-relaxed">
                  "What if everything you believed about the afterlife was demolished by a freight train?"
                </blockquote>
                
                <p className="text-zinc-400 text-base leading-relaxed mb-6">
                  Atticus is living his best life as a successful trial lawyer and apologist for atheism—until a locomotive comes barreling through his brain matter. But rather than the oblivion he preached during mortality, he is introduced to an unexpected afterlife where immortality is a community, memories can be revisited in perfect clarity, and the enigmatic "neverborns" seek control over the living and the dead. Guided by the Atheist Welcoming Committee and a sarcastic mentor named Duck, Atticus is forced to unravel a cosmic mystery that’s as hilarious as it is profound.
                </p>

                <div className="flex items-center gap-2 mb-8 bg-zinc-900 border border-zinc-800 rounded-lg py-2 px-4 text-xs font-mono text-zinc-300">
                  <IconBook className="h-4 w-4 text-amber-500" />
                  <span>Comparable to: C.S. Lewis's _The Great Divorce_ & Steven L. Peck's _A Short Stay in Hell_</span>
                </div>

                {/* Downloads Block */}
                <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-200 mb-4 flex items-center gap-2">
                    <IconDownload className="h-4 w-4 text-amber-500" />
                    Download Free Digital Editions
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <a 
                      href="/books/THE%20ATHEIST%20WELCOMING%20COMMITTEE.FINAL.pdf"
                      download="THE_ATHEIST_WELCOMING_COMMITTEE_Mort_Gloss.pdf"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition-colors uppercase tracking-wider active:scale-95"
                    >
                      PDF Format
                    </a>
                    <a 
                      href="/books/THE%20ATHEIST%20WELCOMING%20COMMITTEE.FINAL.docx.epub"
                      download="THE_ATHEIST_WELCOMING_COMMITTEE_Mort_Gloss.epub"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition-colors uppercase tracking-wider active:scale-95"
                    >
                      EPUB Format
                    </a>
                    <a 
                      href="/books/THE%20ATHEIST%20WELCOMING%20COMMITTEE.FINAL.docx"
                      download="THE_ATHEIST_WELCOMING_COMMITTEE_Mort_Gloss.docx"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition-colors uppercase tracking-wider active:scale-95"
                    >
                      Word Format
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Book 2 - Balloon Boy and the Porcupine Pals (Bento Grid) */}
        <section id="bbpp-section" className="py-24 border-b border-zinc-900 bg-zinc-950/50">
          <div className="mx-auto max-w-7xl px-6">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div className="max-w-xl">
                <span className="font-mono text-xs uppercase tracking-widest text-amber-500 mb-2">Sci-Fi Trilogy Box Set</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  Balloon Boy & the Porcupine Pals
                </h2>
              </div>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Cell 1: Main Cover Visual (Col-span-1, Row-span-2) */}
              <div className="md:row-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between items-center group overflow-hidden">
                <div className="relative w-full aspect-[1607/2565] max-w-[220px] rounded-lg overflow-hidden shadow-xl border border-zinc-800/50 transition-transform duration-500 group-hover:scale-105">
                  <Image 
                    src="/covers/2.jpg" 
                    alt="Balloon Boy Trilogy Stacked Books" 
                    fill
                    sizes="(max-width: 220px) 100vw, 220px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Trilogy Compilation Edition</span>
                </div>
              </div>

              {/* Cell 2: Content blurb & synopsis (Col-span-2) */}
              <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    The Complete Intergalactic Adventure
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    Balloon has always been a morbidly obese moron. But recently, something about his feeble brain has changed. Every time he guesses, he’s right. Victory, the girl he’s been crushing on for over 10 years, needs his abilities to save her dying father. Desperate for her affection, Balloon agrees to help. There’s only one catch: the cure is over 29 million light years away, perched on a pedestal at the center of the Sombrero Galaxy.
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    Transforming his single-wide trailer into a white trash spaceship, Balloon races to save Victory’s father. Along the way, he encounters an alien regime bent on his annihilation and a few new friends who feed him tacos.
                  </p>
                </div>
                
                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-300 mb-3 flex items-center gap-1.5">
                    <IconDownload className="h-3.5 w-3.5 text-amber-500" />
                    Download Trilogy Compilation
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <a 
                      href="/books/BBPP.Compilation.pdf"
                      download="Balloon_Boy_Trilogy_Compilation_Mort_Gloss.pdf"
                      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition-colors uppercase tracking-wider active:scale-95"
                    >
                      PDF
                    </a>
                    <a 
                      href="/books/BBPP.Compilation.docx.epub"
                      download="Balloon_Boy_Trilogy_Compilation_Mort_Gloss.epub"
                      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition-colors uppercase tracking-wider active:scale-95"
                    >
                      EPUB
                    </a>
                    <a 
                      href="/books/BBPP.Compilation.docx"
                      download="Balloon_Boy_Trilogy_Compilation_Mort_Gloss.docx"
                      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition-colors uppercase tracking-wider active:scale-95"
                    >
                      Word
                    </a>
                  </div>
                </div>
              </div>

              {/* Cell 3: Feature Callouts (Col-span-2) */}
              <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-950 border border-zinc-800 text-amber-500 mb-4">
                    <IconRocket className="h-5 w-5" />
                  </span>
                  <h4 className="text-sm font-semibold text-white mb-1">White-Trash Spaceship</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Featuring a retrofitted single-wide trailer powered by sheer luck and space dynamics.
                  </p>
                </div>
                <div className="flex flex-col">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-950 border border-zinc-800 text-amber-500 mb-4">
                    <IconAlien className="h-5 w-5" />
                  </span>
                  <h4 className="text-sm font-semibold text-white mb-1">29M Light Years Away</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    A cosmic journey leading straight into the hostile center of the Sombrero Galaxy.
                  </p>
                </div>
                <div className="flex flex-col">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-950 border border-zinc-800 text-amber-500 mb-4">
                    <IconBook className="h-5 w-5" />
                  </span>
                  <h4 className="text-sm font-semibold text-white mb-1">Complete Trilogy</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Contains all parts of the epic trilogy collected in a single compilation volume.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Biography */}
        <section id="about-section" className="py-24 border-b border-zinc-900 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Bio Text */}
              <div className="lg:col-span-7">
                <span className="font-mono text-xs uppercase tracking-widest text-amber-500 mb-2">The Author</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                  Behind the Prose: Mort Gloss
                </h2>
                <div className="space-y-4 text-zinc-400 text-sm md:text-base leading-relaxed">
                  <p>
                    Raised in the picturesque comforts of southern Idaho, Mort Gloss developed an enduring fascination for atheists in the afterlife, intergalactic warfare, evolving concepts of socially acceptable body image, chance vs. design hypotheses concerning the origin of the universe, has-been heavy metal bands, and fast-food tacos.
                  </p>
                  <p>
                    When not writing fiction, Mort works as a regulatory attorney. His stories blend legal-minded logical precision with surreal comedy, creating unique literary journeys that challenge core beliefs while providing laughs.
                  </p>
                  <p>
                    He loves his wife, his kids, and store-bought cookies.
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-8 text-xs font-mono text-zinc-500">
                  <IconMapPin className="h-4 w-4 text-amber-500" />
                  <span>Southern Idaho, USA</span>
                </div>
              </div>

              {/* Right Column: Author Photo / Portrait Frame */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-64 aspect-[3/4] bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 z-10"></div>
                  <Image 
                    src="/covers/mort-portrait.png" 
                    alt="Mort Gloss Portrait" 
                    fill
                    sizes="(max-width: 256px) 100vw, 256px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <p className="font-mono text-xs text-amber-500 uppercase tracking-widest mb-1">Writer Profile</p>
                    <p className="text-sm font-semibold text-white">Mort Gloss</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: Contact & Submission Form */}
        <section id="contact-section" className="py-24 bg-zinc-950/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-xl mx-auto text-center mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-500 mb-2">Get in Touch</span>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                Reach Out to Mort
              </h2>
              <p className="text-zinc-400 text-sm">
                Have questions about the novels, feedback on the trilogies, or just want to suggest a cookie recipe? Send Mort a direct message.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-4xl mx-auto">
              
              {/* Left Box: Simple Contact Info */}
              <div className="lg:col-span-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-200 mb-4">
                    Contact Information
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                    For inquiries, press requests, or book club invitations, you can also write directly via email.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:mort.gloss@gmail.com" 
                    className="flex items-center gap-3 text-xs text-zinc-300 hover:text-amber-500 transition-colors py-2 px-3 bg-zinc-950 border border-zinc-850 rounded-lg"
                  >
                    <IconMail className="h-4 w-4 text-amber-500" />
                    <span>mort.gloss@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Right Box: Interactive Form */}
              <div className="lg:col-span-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
                
                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center p-8 text-center"
                    >
                      <div className="h-12 w-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4">
                        <IconCheck className="h-6 w-6 text-amber-500" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-xs text-zinc-400 max-w-[32ch] leading-relaxed">
                        Thank you for your message. Mort will get back to you as soon as he steps away from his law desk or spaceship.
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        value={emailForm.name}
                        onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-zinc-100 placeholder-zinc-650 focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                        Your Email
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        value={emailForm.email}
                        onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-zinc-100 placeholder-zinc-650 focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                      Message
                    </label>
                    <textarea 
                      id="message"
                      rows={4}
                      required
                      value={emailForm.message}
                      onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-zinc-100 placeholder-zinc-650 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                      placeholder="Hi Mort, I just finished reading..."
                    />
                  </div>
                  <div className="flex justify-end">
                    <button 
                      type="submit"
                      className="inline-flex h-10 items-center justify-center rounded-full bg-amber-500 hover:bg-amber-400 px-6 text-xs font-semibold uppercase tracking-wider text-zinc-950 transition-all active:scale-95"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Mort Gloss. All rights reserved. All books are provided free for reader enjoyment.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest flex items-center gap-1">
              Made for Mort Gloss
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
