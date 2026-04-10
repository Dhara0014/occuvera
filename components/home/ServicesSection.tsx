"use client";

import { type LucideIcon, Eye, Glasses, Sparkles, Stethoscope } from "lucide-react";
import Link from "next/link";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    icon: Eye,
    title: "Comprehensive Eye Exams",
    description: "State-of-the-art technology for thorough eye health assessments and vision testing by our board-certified optometrists.",
  },
  {
    icon: Glasses,
    title: "Designer Frames",
    description: "Curated collection of premium eyewear from top international and local brands — over 200 labels in stock.",
  },
  {
    icon: Sparkles,
    title: "Contact Lenses",
    description: "Wide range of contact lenses including daily, monthly, and specialty lenses with complimentary fitting.",
  },
  {
    icon: Stethoscope,
    title: "Lens Technology",
    description: "Advanced lens options including blue-light protection, transitions, progressive and high-index lenses.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden" id="services">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute -top-24 -left-24 text-[20rem] font-montserrat font-black text-[#0B1C2D]/[0.02] select-none pointer-events-none uppercase">
        Services
      </div>

      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-montserrat font-black text-[#0B1C2D] tracking-tighter mb-6 leading-tight">
              Clinical <span className="text-[#0D9488] relative inline-block">
                Excellence.
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#0D9488]/10 -z-10" />
              </span>
            </h2>
            <p className="text-[#5a6a7a] font-inter text-xl leading-relaxed max-w-xl font-light">
              Comprehensive eye care solutions tailored to your unique vision needs. Experience Ahmedabad's most advanced diagnostic care.
            </p>
          </div>
          <Link
            href="/services"
            className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.25em] text-[#0B1C2D] hover:text-[#0D9488] transition-colors"
          >
            Explore All Services 
            <div className="size-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#0D9488] group-hover:bg-[#0D9488] group-hover:text-white transition-all duration-300">
              <Eye className="size-4" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-[#F8FAFC] rounded-[2.5rem] p-10 border border-transparent hover:border-[#0D9488]/20 hover:bg-white hover:shadow-2xl hover:shadow-[#0D9488]/10 transition-all duration-500"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="size-20 rounded-3xl bg-white flex items-center justify-center text-[#0D9488] mb-8 group-hover:bg-[#0D9488] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:rotate-6">
                  <Icon className="size-9" strokeWidth={1.25} />
                </div>
                <h3 className="text-2xl font-montserrat font-black text-[#0B1C2D] mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[#5a6a7a] font-inter text-base leading-relaxed font-light">
                  {service.description}
                </p>
                <div className="mt-8 pt-6 border-t border-gray-100/50 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <Eye className="size-3" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
