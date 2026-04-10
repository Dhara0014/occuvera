"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2 
} from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import BookingModal from "@/components/common/BookingModal";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Message sent successfully!");
    
    setTimeout(() => {
      setIsSuccess(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98765 43210",
      sub: "Mon-Sat: 9AM-7PM",
      href: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "occuveraoptical@gmail.com",
      sub: "Response within 24 hours",
      href: "mailto:occuveraoptical@gmail.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Satellite, Ahmedabad",
      sub: "380015, Gujarat, India",
      href: "#map"
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-[#0B1C2D] py-24 relative overflow-hidden -mt-[72px] md:-mt-[108px]">
        {/* Aesthetic Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0D9488]/20 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0D9488]/10 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D]/50 via-transparent to-[#0B1C2D]/10 pointer-events-none z-0" />
        
        <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center pt-[72px] md:pt-[108px]">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-black text-white mb-8 tracking-tight">
            Get in <span className="text-[#0D9488] relative inline-block">
              Touch.
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#0D9488]/20 -z-10" />
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-inter max-w-2xl mx-auto leading-relaxed font-light">
            Have questions about our clinical services or designer collections? 
            Our experts are ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-montserrat font-bold text-[#0B1C2D] mb-4">Contact Information</h2>
                  <p className="text-[#5a6a7a] font-inter">Choose your preferred way to reach us. We're here to help you see the world better.</p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((item) => (
                    <a 
                      key={item.title}
                      href={item.href}
                      className="group bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="size-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center text-[#0D9488] shrink-0 group-hover:bg-[#0D9488] group-hover:text-white transition-all duration-300">
                        <item.icon className="size-6" />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-bold text-[#0B1C2D] mb-1">{item.title}</h3>
                        <p className="text-[#0B1C2D]/80 font-bold mb-0.5">{item.details}</p>
                        <p className="text-sm text-[#5a6a7a] font-inter">{item.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-[#0B1C2D] p-8 rounded-3xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#0D9488]/10 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700" />
                <h4 className="text-xl font-montserrat font-bold mb-4">Follow Our Journey</h4>
                <p className="text-white/60 text-sm mb-6 font-inter">Stay updated with the latest trends and eye care tips.</p>
                <div className="flex gap-4">
                  {[FaInstagram, FaFacebookF, FaLinkedinIn].map((Icon, i) => (
                    <button key={i} className="size-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0D9488] transition-colors">
                      <Icon className="size-5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 relative">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="text-[11px] font-bold uppercase tracking-widest text-gray-400">First Name</Label>
                        <Input id="first-name" placeholder="John" required className="rounded-xl h-12 border-gray-100 focus:ring-[#0D9488]" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name" className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" required className="rounded-xl h-12 border-gray-100 focus:ring-[#0D9488]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required className="rounded-xl h-12 border-gray-100 focus:ring-[#0D9488]" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Phone Number</Label>
                        <Input id="phone" placeholder="+91 98765 43210" className="rounded-xl h-12 border-gray-100 focus:ring-[#0D9488]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" required className="rounded-xl h-12 border-gray-100 focus:ring-[#0D9488]" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Message</Label>
                      <Textarea id="message" placeholder="Tell us more about your inquiry..." required className="rounded-xl min-h-[150px] border-gray-100 focus:ring-[#0D9488]" />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-14 bg-[#0B1C2D] hover:bg-[#0D9488] text-white rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-xl shadow-[#0B1C2D]/10"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          Send Message
                          <Send className="size-4" />
                        </div>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="py-20 flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 rounded-full bg-[#0D9488]/10 flex items-center justify-center text-[#0D9488]">
                      <CheckCircle2 className="size-10" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-montserrat font-bold text-[#0B1C2D]">Message Sent!</h3>
                      <p className="text-[#5a6a7a] font-inter mt-3 max-w-sm">
                        Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSuccess(false)}
                      className="rounded-xl"
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="h-[500px] w-full bg-gray-100 relative group overflow-hidden">
        {/* Placeholder for Map - In a real app we'd use Google Maps component or iframe */}
        <div className="absolute inset-0 bg-[#0B1C2D]/5 flex items-center justify-center">
            <div className="text-center group-hover:scale-110 transition-transform duration-700">
                <MapPin className="size-12 text-[#0D9488] mx-auto mb-4" />
                <p className="font-montserrat font-bold text-[#0B1C2D]">Occuvera Optical – Satellite Center</p>
                <p className="text-sm text-[#5a6a7a] font-inter">Click to view on Google Maps</p>
            </div>
        </div>
        
        {/* Real iframe placeholder (Add proper API key or embed link in production) */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9333!2d72.5134!3d23.0338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzAxLjciTiA3MsKwMzAnNDguMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
        ></iframe>
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

      {/* Trust Quote */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="container max-w-7xl mx-auto px-6 md:px-12 text-center">
            <div className="max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl font-montserrat font-bold text-[#0B1C2D]/40 leading-relaxed">
                    "Exceptional clinical care is not just about measuring vision, it's about <span className="text-[#0B1C2D]">protecting the way you see the world.</span>"
                </p>
                <div className="w-12 h-1 bg-[#0D9488] mx-auto mt-8 opacity-30" />
            </div>
        </div>
      </section>
    </div>
  );
}
