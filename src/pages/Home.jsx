import React from "react";
import { 
  PhoneCall, 
  Clock, 
  CheckCircle, 
  Zap, 
  Mail, 
  MapPin, 
  MessageCircle,
  Wrench,
  Droplet,
  Shower,
  Home,
  Sun
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import BenefitsSection from "../components/BenefitsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactForm from "../components/ContactForm";
import TrustBadges from "../components/TrustBadges";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-hidden" dir="rtl">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Contact Section */}
      <section id="contact" className="px-4 py-16 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-950">
            צור קשר
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <div className="flex flex-col justify-between space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-900">פרטי התקשרות</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <PhoneCall className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium">טלפון</p>
                      <a href="tel:0541234567" className="text-lg text-blue-700 hover:underline">
                        054-1234567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">וואטסאפ</p>
                      <a 
                        href="https://wa.me/9721234567" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg text-green-600 hover:underline"
                      >
                        054-1234567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">אימייל</p>
                      <a 
                        href="mailto:info@aa-plumbing.co.il" 
                        className="text-lg text-amber-600 hover:underline"
                      >
                        info@aa-plumbing.co.il
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-medium">שעות פעילות</p>
                      <p className="text-lg">א'-ו' 07:00–19:00</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">איזור שירות</p>
                      <p className="text-lg">אשדוד והסביבה</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg overflow-hidden h-64 shadow-lg">
                <iframe
                  title="מפה"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54260.41707583787!2d34.64007448382059!3d31.804904282283766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502a44707f182f1%3A0x9f8bd3bcd2647788!2sAshdod!5e0!3m2!1sen!2sil!4v1689766291399!5m2!1sen!2sil"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-8">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">א.א אינסטלציה</h2>
              <p className="text-blue-300">שירותי אינסטלציה מקצועיים באשדוד והסביבה</p>
            </div>
            <div className="flex gap-6">
              <a href="#services" className="text-blue-200 hover:text-white transition">שירותים</a>
              <a href="#benefits" className="text-blue-200 hover:text-white transition">יתרונות</a>
              <a href="#testimonials" className="text-blue-200 hover:text-white transition">המלצות</a>
              <a href="#contact" className="text-blue-200 hover:text-white transition">צור קשר</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-400">
            <p>© {new Date().getFullYear()} א.א אינסטלציה. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>

      {/* Call Now Floating Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <a href="tel:0541234567">
          <Button className="rounded-full h-16 w-16 bg-green-600 hover:bg-green-700 shadow-lg flex items-center justify-center">
            <PhoneCall className="h-8 w-8" />
          </Button>
        </a>
      </div>
    </div>
  );
}