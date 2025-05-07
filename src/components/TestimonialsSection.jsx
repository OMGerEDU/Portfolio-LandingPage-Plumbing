import React, { useState } from "react";
import { Star, ArrowRight, ArrowLeft, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "אורי כהן",
      location: "אשדוד",
      text: "הגיעו במהירות ותיקנו לי נזילה שהייתה מתחת לכיור במטבח. עבודה מקצועית, נקייה ובמחיר הוגן. ממליץ בחום!",
      rating: 5,
      date: "15.03.2023"
    },
    {
      name: "מירב לוי",
      location: "אשדוד",
      text: "היה לי פיצוץ צינור בבית, התקשרתי בהיסטריה וממש תוך חצי שעה הגיע שרברב, סגר את המים והחליף את הצינור. שירות מדהים ומקצועי!",
      rating: 5,
      date: "22.05.2023"
    },
    {
      name: "דוד אזולאי",
      location: "אשקלון",
      text: "התקנתי דוד שמש חדש דרכם. התקנה מקצועית, הסבירו לי הכל בסבלנות והמחיר היה הוגן ביחס להצעות אחרות שקיבלתי. מומלץ!",
      rating: 5,
      date: "10.01.2023"
    },
    {
      name: "שירה גולן",
      location: "אשדוד",
      text: "כבר שנתיים אני משתמשת בשירותים שלהם, תמיד זמינים, תמיד אדיבים ומקצועיים. עשו לי שדרוג מלא למערכת האינסטלציה בדירה ומאז אין יותר בעיות רטיבות.",
      rating: 5,
      date: "05.06.2023"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 px-4 bg-blue-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 opacity-10">
        <Quote className="h-64 w-64 text-white transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="absolute bottom-0 right-0 opacity-10">
        <Quote className="h-64 w-64 text-white transform translate-x-1/2 translate-y-1/2 rotate-180" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">מה הלקוחות שלנו אומרים</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            אמון ושביעות רצון הלקוחות הם בראש מעייננו
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-blue-800 to-blue-700 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
              <div className="bg-blue-600 rounded-full p-4">
                <Quote className="h-8 w-8 text-blue-200" />
              </div>
            </div>

            <div className="mb-8 flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current text-yellow-400" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl mb-8 italic text-blue-100">
              "{testimonials[activeIndex].text}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-lg">{testimonials[activeIndex].name}</p>
                <p className="text-blue-300">{testimonials[activeIndex].location}, {testimonials[activeIndex].date}</p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="border-blue-400 text-blue-200 hover:bg-blue-800" 
                  onClick={prevTestimonial}
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="border-blue-400 text-blue-200 hover:bg-blue-800" 
                  onClick={nextTestimonial}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-all ${
                  activeIndex === index ? "bg-white w-6" : "bg-blue-600 hover:bg-blue-500"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`המלצה ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}