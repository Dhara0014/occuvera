"use client";

import { Eye, Glasses, Sparkles, Stethoscope, CheckCircle2, ShieldCheck, Clock, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/common/BookingModal";
import { useState } from "react";

const services = [
  {
    icon: Eye,
    title: "Comprehensive Eye Exams",
    description: "Our board-certified optometrists use advanced diagnostic technology to provide the most accurate assessments of your eye health and vision.",
    features: ["Digital Retinal Imaging", "Glaucoma Screening", "Visual Field Testing", "Pediatric Consultations"],
    bg: "bg-white",
  },
  {
    icon: Glasses,
    title: "Designer Frame Styling",
    description: "Find the perfect pair with our personalized styling consultations. We curate the latest international trends just for you.",
    features: ["Face Shape Analysis", "200+ Premium Brands", "Custom Fitting", "Lifestyle Matching"],
    bg: "bg-[#0B1C2D] text-white",
  },
  {
    icon: Stethoscope,
    title: "Advanced Lens Solutions",
    description: "We offer the latest in lens technology to provide superior clarity and protection for your digital and physical lifestyle.",
    features: ["Blue-Light Protection", "Digital Progressive Lenses", "High-Index Thinner Lenses", "Anti-Reflective Coating"],
    bg: "bg-white",
  },
  {
    icon: Sparkles,
    title: "Contact Lens Excellence",
    description: "From daily disposables to specialized toric or multifocal lenses, we ensure you find the perfect fit for maximum comfort.",
    features: ["Free Fitting Session", "Trial Lenses Included", "Subscription Options", "Expert Aftercare"],
    bg: "bg-white",
  },
];

export default function ServicesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-[#0B1C2D] py-24 relative overflow-hidden -mt-[72px] md:-mt-[108px]">
        {/* Aesthetic Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0D9488]/20 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0D9488]/10 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D]/50 via-transparent to-[#0B1C2D]/20 pointer-events-none z-0" />
        
        <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-[72px] md:pt-[108px]">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-black text-white leading-[1.1] mb-8 tracking-tight">
              Expert <span className="text-[#0D9488] relative inline-block">
                Eye Care
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#0D9488]/20 -z-10" />
              </span> <br />
              Tailored to You.
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-inter leading-relaxed mb-10 max-w-2xl font-light">
              At Occuvera, we combine clinical excellence with a passion for premium eyewear to ensure you see the world with clarity and style.
            </p>
            <div className="flex flex-wrap gap-5">
              <Button 
                onClick={() => setBookingOpen(true)}
                className="bg-[#0D9488] hover:bg-white hover:text-[#0B1C2D] text-white px-10 h-16 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-500 shadow-2xl shadow-[#0D9488]/20 group"
              >
                Book Your Eye Test
                <div className="ml-2 w-2 h-2 rounded-full bg-white group-hover:bg-[#0D9488] transition-colors" />
              </Button>
              <Button 
                className="bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-[#0B1C2D] px-10 h-16 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-500"
              >
                View Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className={`${service.bg} p-10 rounded-3xl border border-[#0B1C2D]/5 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group`}
              >
                <div className={`w-16 h-16 rounded-2xl ${service.bg.includes('0B1C2D') ? 'bg-white/10 text-[#0D9488]' : 'bg-[#0D9488]/10 text-[#0D9488]'} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="size-8" />
                </div>
                <h2 className="text-3xl font-montserrat font-bold mb-4">{service.title}</h2>
                <p className={`font-inter leading-relaxed mb-8 ${service.bg.includes('0B1C2D') ? 'text-white/70' : 'text-[#5a6a7a]'}`}>
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map(feature => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className={`size-4 ${service.bg.includes('0B1C2D') ? 'text-[#0D9488]' : 'text-[#0D9488]'}`} />
                      <span className={`text-sm font-semibold tracking-wide ${service.bg.includes('0B1C2D') ? 'text-white/80' : 'text-[#0B1C2D]/70'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-montserrat font-black text-[#0B1C2D] mb-6">The Occuvera Standard</h2>
            <p className="text-[#5a6a7a] font-inter text-lg italic">"We don't just sell glasses; we provide the gift of perfect vision."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Clinical Precision", desc: "Using the world's most accurate diagnostic equipment (Re-fit standard)." },
              { icon: HeartPulse, title: "Personalized Care", desc: "Every patient is unique. We spend 45+ minutes on every comprehensive exam." },
              { icon: Clock, title: "Aftercare Service", desc: "Lifetime adjustments and professional cleaning for all frames purchased." }
            ].map(item => (
              <div key={item.title} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-[#F6F8FA] mx-auto flex items-center justify-center text-[#0B1C2D] mb-6 group-hover:bg-[#0D9488] group-hover:text-white transition-all duration-300">
                  <item.icon className="size-8" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-[#0B1C2D] mb-3">{item.title}</h3>
                <p className="text-[#5a6a7a] font-inter text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
