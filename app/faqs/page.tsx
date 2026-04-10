"use client";

import { useState } from "react";
import { Plus, Minus, Search, MessageCircle, Phone, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BookingModal from "@/components/common/BookingModal";

const categories = ["All", "Clinical", "Eyewear", "Payments", "Insurance"];

const FAQS = [
  {
    category: "Clinical",
    q: "How long does a comprehensive eye exam take?",
    a: "Our thorough clinical eye examination typically takes 30–45 minutes. This includes advanced visual acuity testing, digital refraction, and a session with our board-certified optometrist.",
  },
  {
    category: "Clinical",
    q: "Is an appointment mandatory for diagnostics?",
    a: "While we welcome walk-ins, we highly recommend booking an appointment to ensure you have a dedicated diagnostic slot with our specialists and minimal wait time.",
  },
  {
    category: "Eyewear",
    q: "What designer brands do you carry?",
    a: "We curate from over 200 global luxury labels including Ray-Ban, Prada, Tom Ford, Gucci, Versace, Oakley, and Persol, alongside independent designer collections.",
  },
  {
    category: "Eyewear",
    q: "How soon can I receive my new glasses?",
    a: "Standard prescription lenses are typically ready within 24–48 hours. Specialized progressive or high-index lenses may require 3–5 lab business days.",
  },
  {
    category: "Payments",
    q: "Do you offer Home Eye Testing services?",
    a: "Yes, Occuvera provides professional home eye testing with portable diagnostic equipment for senior citizens and corporate clients in selected areas.",
  },
  {
    category: "Insurance",
    q: "What is your warranty for frames and lenses?",
    a: "Every frame and lens pair comes with a comprehensive 1-year global warranty against manufacturing defects and structural issues.",
  },
  {
    category: "Clinical",
    q: "Can I bring my own prescription?",
    a: "Absolutely. While we offer expert testing, we are happy to fulfill prescriptions from other certified optometrists or ophthalmologists.",
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookingOpen, setBookingOpen] = useState(false);

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="">
      {/* Hero Header */}
      <section className="bg-[#0B1C2D] py-24 relative overflow-hidden -mt-[72px] md:-mt-[108px]">
        {/* Aesthetic Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0D9488]/20 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0D9488]/10 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D]/50 via-transparent to-[#0B1C2D]/10 pointer-events-none z-0" />
        
        <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center pt-[72px] md:pt-[108px]">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-black text-white mb-10 tracking-tight">
            How can we <span className="text-[#0D9488] relative inline-block">
              Help?
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#0D9488]/20 -z-10" />
            </span>
          </h1>
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-0 bg-[#0D9488]/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 size-6 text-gray-400 group-focus-within:text-[#0D9488] transition-colors z-20" />
            <Input 
              placeholder="Search for answers (e.g. warranty, eye test...)" 
              className="w-full pl-16 pr-6 py-10 rounded-[2rem] bg-white border-none shadow-2xl text-xl font-inter focus:ring-0 relative z-10 transition-all duration-300 group-focus-within:scale-[1.02]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar Controls */}
            <div className="lg:col-span-4 space-y-10">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#0B1C2D]/40 mb-6 font-montserrat">Categories</h3>
                <div className="flex flex-col gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        activeCategory === cat 
                        ? "bg-[#0B1C2D] text-white shadow-lg translate-x-1" 
                        : "text-[#0B1C2D]/60 hover:bg-gray-50"
                      }`}
                    >
                      <span className="font-inter">{cat}</span>
                      {activeCategory === cat && <div className="size-1.5 rounded-full bg-[#0D9488]" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[#0D9488] p-10 rounded-[2.5rem] shadow-xl shadow-[#0D9488]/20 text-white relative overflow-hidden group border border-white/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700 blur-2xl" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-montserrat font-bold mb-4 tracking-tight">Direct Support</h3>
                  <p className="text-white/80 font-inter text-base mb-10 leading-relaxed font-light">
                    Our optical experts are available via call or WhatsApp for immediate assistance.
                  </p>
                  <div className="space-y-4">
                    <a href="tel:+919876543210" className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/10">
                      <Phone className="size-5" />
                      <span className="text-sm font-bold tracking-widest">+91 98765 43210</span>
                    </a>
                    <Button 
                      onClick={() => setBookingOpen(true)}
                      className="w-full bg-white text-[#0D9488] hover:bg-[#0B1C2D] hover:text-white rounded-2xl py-8 font-bold uppercase tracking-widest text-[11px] shadow-lg transition-all duration-500"
                    >
                      Open Live Chat
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="lg:col-span-8">
              <div className="space-y-4">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, i) => (
                    <div
                      key={faq.q}
                      className={`group bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                        openIndex === i
                          ? "border-[#0D9488]/40 shadow-xl"
                          : "border-[#0B1C2D]/5 hover:border-[#0B1C2D]/10 hover:shadow-md"
                      }`}
                    >
                      <button
                        type="button"
                        className="w-full flex items-center justify-between text-left px-8 py-6 gap-4 outline-none"
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      >
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D9488]">{faq.category}</span>
                          <span className={`font-montserrat font-bold text-lg md:text-xl transition-colors ${
                            openIndex === i ? "text-[#0D9488]" : "text-[#0B1C2D]"
                          }`}>
                            {faq.q}
                          </span>
                        </div>
                        <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          openIndex === i ? "bg-[#0D9488] text-white rotate-180" : "bg-gray-50 text-[#0B1C2D]"
                        }`}>
                          {openIndex === i ? <Minus className="size-5" /> : <Plus className="size-5" />}
                        </div>
                      </button>

                      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}>
                        <div className="px-8 pb-8 pt-2">
                          <p className="text-[#5a6a7a] font-inter leading-relaxed text-base">
                            {faq.a}
                          </p>
                          <div className="mt-8 flex items-center gap-6 pt-6 border-t border-gray-50">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Was this helpful?</span>
                            <div className="flex gap-4">
                              <button className="text-xs font-bold text-[#0D9488] hover:underline uppercase tracking-widest">Yes</button>
                              <button className="text-xs font-bold text-gray-400 hover:text-[#0B1C2D] hover:underline uppercase tracking-widest">No</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-20 text-center bg-white rounded-3xl border border-dashed">
                    <MessageCircle className="size-16 text-gray-200 mx-auto mb-6" />
                    <h3 className="text-xl font-montserrat font-bold text-[#0B1C2D]">No matching questions found</h3>
                    <p className="text-[#5a6a7a] font-inter mt-2">Try a different keyword or category.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-white">
        {/* ... (existing content) */}
      </section>

      {/* Unified CTA Section */}
      <section className="bg-[#F8FAFC] py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="container max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-montserrat font-black text-[#0B1C2D] mb-6 tracking-tight">Start your own vision story.</h2>
                <p className="text-[#5a6a7a] font-inter text-xl mb-12 max-w-2xl mx-auto leading-relaxed">Join thousands of happy patients in Ahmedabad and experience the <span className="text-[#0D9488] font-bold underline decoration-[#0D9488]/30 underline-offset-4">Occuvera difference</span> today.</p>
                <Button 
                    onClick={() => setBookingOpen(true)}
                    className="bg-[#0D9488] hover:bg-[#0B1C2D] text-white px-12 h-18 py-8 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-2xl shadow-[#0D9488]/30 hover:-translate-y-1"
                >
                    Book Your Appointment Now
                </Button>
            </div>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
}
