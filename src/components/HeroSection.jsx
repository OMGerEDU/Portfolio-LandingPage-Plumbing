import React from "react";
import { ArrowLeft, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute left-0 top-0 transform -translate-x-1/4 -translate
        -y-1/4">
          <svg width="800" height="800" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute right-0 bottom-0 transform translate-x-1/3 translate-y-1/3">
          <svg width="800" height="800" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-blue-300">שירותי אינסטלציה</span> מקצועיים ואמינים באשדוד
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              א.א אינסטלציה מספקת שירותי אינסטלציה מקצועיים, אמינים ומהירים. עם ניסיון של 7 שנים ואחריות על כל עבודה, אנחנו כאן בשבילכם 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0541234567">
                <Button className="text-lg px-8 py-6 bg-blue-500 hover:bg-blue-600 rounded-xl">
                  <PhoneCall className="h-5 w-5 ml-2" />
                  התקשרו עכשיו
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" className="text-lg px-8 py-6 text-white border-white hover:bg-white/10 rounded-xl">
                  לשירותים שלנו
                  <ArrowLeft className="h-5 w-5 mr-2" />
                </Button>
              </a>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-4 ml-4">
                <img src="https://i.pravatar.cc/100?img=1" alt="לקוח" className="w-12 h-12 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/100?img=2" alt="לקוח" className="w-12 h-12 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/100?img=3" alt="לקוח" className="w-12 h-12 rounded-full border-2 border-white" />
              </div>
              <div className="text-blue-200">
                <span className="font-bold">4.9 ⭐</span> ממוצע דירוג מ-150+ לקוחות מרוצים
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 blur-3xl transform -translate-x-10 translate-y-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1583776752020-5e5f3558f5a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="אינסטלציה מקצועית" 
                className="relative z-10 rounded-2xl shadow-2xl max-w-md mx-auto transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}