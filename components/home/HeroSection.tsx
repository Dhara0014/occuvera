"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import BookingModal from "@/components/common/BookingModal";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface Slide {
  image: string;
  titlePrimary: string;
  titleSecondary: string;
  titleAccent: string;
  desc: string;
}

const SLIDES: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1615468822882-4828d2602857?w=1600&q=90&fit=crop",
    titlePrimary: "Bespoke",
    titleSecondary: "Luxury",
    titleAccent: "Eyewear",
    desc: "Curating the world's most exclusive eyewear collections. Precision optics meet avant-garde design for the discerning eye.",
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=90&fit=crop",
    titlePrimary: "Advanced",
    titleSecondary: "Clinical",
    titleAccent: "Precision",
    desc: "Experience Ahmedabad's most sophisticated diagnostic eye care. State-of-the-art scanning for lifelong vision protection.",
  },
  {
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1600&q=90&fit=crop",
    titlePrimary: "Designer",
    titleSecondary: "Summer",
    titleAccent: "Signature",
    desc: "Elevate your perspective with our hand-picked international collections. Limited-edition frames for ultimate style.",
  },
];

export default function HeroSection() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  return (
    <section className="relative -mt-[72px] md:-mt-[90px] h-[85vh] min-h-[700px] bg-[#0B1C2D] overflow-hidden">
      {/* Universal Ambient Glow (Behind Everything) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0D9488]/10 rounded-full blur-[150px] -mr-96 -mt-96 animate-pulse pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0D9488]/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none z-10" />

      {/* Embla Viewport */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.titleAccent}
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              {/* Background image + overlay */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={`${slide.titlePrimary} ${slide.titleAccent}`}
                  fill
                  sizes="100vw"
                  className="object-cover object-center opacity-40 scale-105"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-[#0B1C2D]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0B1C2D] to-transparent" />
              </div>

              {/* Slide content */}
              <div className="relative z-20 h-full flex flex-col justify-center pt-[72px] md:pt-[108px] pb-[80px] md:pb-[100px]">
                <div className="container px-6 md:px-12 max-w-7xl mx-auto">
                  <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-black leading-[0.95] text-white tracking-tighter mb-8 md:mb-10">
                      {slide.titlePrimary} <br className="hidden md:block" />
                      {slide.titleSecondary} <br className="hidden md:block" />
                      <span className="text-[#0D9488] relative inline-block">
                        {slide.titleAccent}
                        <span className="absolute bottom-2 left-0 w-full h-3 bg-[#0D9488]/20 -z-10" />
                      </span>
                    </h1>

                    <p className="text-white/60 text-lg md:text-2xl leading-relaxed max-w-2xl mb-10 md:mb-14 font-light font-inter">
                      {slide.desc}
                    </p>

                    <div className="flex flex-wrap gap-6 mt-4">
                      <Button 
                        onClick={() => setBookingOpen(true)}
                        className="h-16 md:h-20 px-10 md:px-14 rounded-2xl bg-[#0D9488] text-white hover:bg-white hover:text-[#0B1C2D] font-bold uppercase tracking-[0.2em] text-[11px] transition-all duration-500 shadow-2xl shadow-[#0D9488]/20 group"
                      >
                        Book Your Consultation
                        <div className="ml-3 w-2 h-2 rounded-full bg-white group-hover:bg-[#0D9488] transition-colors" />
                      </Button>
                      <Link
                        href="/products"
                        className="inline-flex items-center justify-center h-16 md:h-20 px-10 md:px-14 text-[11px] font-bold uppercase tracking-[0.2em] rounded-2xl border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                      >
                        Browse Collections
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows & Dots */}
      <div className="absolute inset-x-0 bottom-12 z-30 pointer-events-none">
        <div className="container max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-8">
          
          {/* Bottom Controls Group */}
          <div className="flex items-center gap-10 pointer-events-auto">
            {/* Arrows */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={scrollPrev}
                className="size-10 md:size-12 rounded-full bg-white/5 hover:bg-white text-white hover:text-[#0B1C2D] border border-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="size-4 md:size-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2.5">
                {SLIDES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      selectedIndex === index 
                        ? "w-8 bg-[#0D9488]" 
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={scrollNext}
                className="size-10 md:size-12 rounded-full bg-white/5 hover:bg-white text-white hover:text-[#0B1C2D] border border-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center group"
                aria-label="Next slide"
              >
                <ChevronRight className="size-4 md:size-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop-only side arrows (very minimal) */}
      <div className="hidden lg:block absolute inset-y-0 left-0 right-0 pointer-events-none z-30">
        <div className="container max-w-[1400px] h-full mx-auto relative">
          <button
            onClick={scrollPrev}
            className="absolute left-8 top-1/2 -translate-y-1/2 size-14 rounded-full text-white/20 hover:text-white hover:bg-white/5 transition-all duration-500 pointer-events-auto flex items-center justify-center group"
          >
            <ChevronLeft className="size-8 group-hover:-translate-x-2 transition-transform duration-500" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-8 top-1/2 -translate-y-1/2 size-14 rounded-full text-white/20 hover:text-white hover:bg-white/5 transition-all duration-500 pointer-events-auto flex items-center justify-center group"
          >
            <ChevronRight className="size-8 group-hover:translate-x-2 transition-transform duration-500" />
          </button>
        </div>
      </div>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>
  );
}
