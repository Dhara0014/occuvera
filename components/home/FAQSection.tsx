"use client";

import { useState } from "react";
import { Plus, Minus, Phone, Mail } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

const FAQS: FAQ[] = [
  {
    q: "How long does a comprehensive eye exam take?",
    a: "Our thorough clinical eye examination typically takes 30–45 minutes. This includes advanced visual acuity testing, digital refraction, and a session with our board-certified optometrist.",
  },
  {
    q: "Is an appointment mandatory for diagnostics?",
    a: "While we welcome walk-ins, we highly recommend booking an appointment to ensure you have a dedicated diagnostic slot with our specialists and minimal wait time.",
  },
  {
    q: "What designer brands do you carry?",
    a: "We curate from over 200 global luxury labels including Ray-Ban, Prada, Tom Ford, Gucci, Versace, Oakley, and Persol, alongside independent designer collections.",
  },
  {
    q: "How soon can I receive my new glasses?",
    a: "Standard prescription lenses are typically ready within 24–48 hours. Specialized progressive or high-index lenses may require 3–5 lab business days.",
  },
  {
    q: "What is your warranty for frames and lenses?",
    a: "Every frame and lens pair comes with a comprehensive 1-year global warranty against manufacturing defects and structural issues.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden" id="faq">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      <div className="absolute -top-24 -left-24 text-[20rem] font-montserrat font-black text-[#0B1C2D]/[0.015] select-none pointer-events-none uppercase">
        Inquiry
      </div>

      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">

          {/* Left Column */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-32">
            <div>
              <h2 className="text-3xl md:text-5xl font-montserrat font-black text-[#0B1C2D] tracking-tighter leading-[0.95] mb-6">
                Common <br />
                <span className="text-[#0D9488] relative inline-block">
                  Questions.
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#0D9488]/10 -z-10" />
                </span>
              </h2>
              <p className="text-[#5a6a7a] font-inter text-base md:text-lg leading-relaxed font-light">
                Find quick answers to your questions about Ahmedabad's most advanced clinical diagnostics and designer collections.
              </p>
            </div>

            <div className="space-y-4 pt-8 border-t border-gray-100">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0D9488]">
                Need more assistance?
              </p>
              <div className="flex flex-col gap-4">
                <a
                    href="tel:+915551234567"
                    className="flex items-center gap-4 text-[#0B1C2D] font-montserrat font-black text-lg hover:text-[#0D9488] transition-all group"
                >
                    <div className="size-8 rounded-lg bg-[#0D9488]/10 flex items-center justify-center text-[#0D9488] transition-colors group-hover:bg-[#0D9488] group-hover:text-white">
                        <Phone className="size-4" />
                    </div>
                    (555) 123-4567
                </a>
                <a
                    href="mailto:occuveraoptical@gmail.com"
                    className="flex items-center gap-4 text-[#0B1C2D] font-montserrat font-black text-lg hover:text-[#0D9488] transition-all group"
                >
                    <div className="size-8 rounded-lg bg-[#0D9488]/10 flex items-center justify-center text-[#0D9488] transition-colors group-hover:bg-[#0D9488] group-hover:text-white">
                        <Mail className="size-4" />
                    </div>
                    occuveraoptical@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column — Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={faq.q}
                className={`group bg-[#F8FAFC] rounded-2xl border transition-all duration-500 overflow-hidden ${
                  openIndex === i
                    ? "border-[#0D9488]/30 bg-white shadow-xl shadow-[#0D9488]/5"
                    : "border-transparent hover:border-gray-200"
                }`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between text-left px-6 py-5 md:py-6 gap-6 outline-none"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span
                    className={`font-montserrat font-black text-lg md:text-xl tracking-tight transition-colors ${
                      openIndex === i ? "text-[#0B1C2D]" : "text-[#0B1C2D]/60"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`shrink-0 size-9 rounded-xl flex items-center justify-center transition-all duration-500 border ${
                      openIndex === i
                        ? "bg-[#0D9488] text-white border-[#0D9488] rotate-180"
                        : "bg-white text-[#0B1C2D] border-gray-100 shadow-sm"
                    }`}
                  >
                    {openIndex === i ? (
                      <Minus className="size-4" />
                    ) : (
                      <Plus className="size-4" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === i ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-[#5a6a7a] font-inter leading-relaxed text-sm md:text-base font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
