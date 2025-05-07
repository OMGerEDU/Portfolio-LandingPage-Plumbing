import React from "react";
import { Zap, Clock, Shield, ThumbsUp } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Clock className="h-10 w-10" />,
      title: "זמינות 24/7",
      description: "אנו זמינים בכל שעות היממה, כל ימות השבוע, כולל בסופי שבוע וחגים, למקרי חירום.",
      color: "blue"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "אחריות 5 שנים",
      description: "אנו נותנים אחריות מלאה למשך 5 שנים על כל עבודה שאנו מבצעים, ללא תנאים נסתרים.",
      color: "green"
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "תגובה מהירה",
      description: "זמן הגעה ממוצע של עד 45 דקות לקריאות דחופות, כדי שלא תצטרכו לחכות בעת משבר.",
      color: "amber"
    }
  ];

  return (
    <section id="benefits" className="py-24 px-4 bg-blue-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full filter blur-3xl opacity-70 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-200 rounded-full filter blur-3xl opacity-70 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-4">למה לבחור בנו?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            עם שנים של ניסיון באינסטלציה ומאות לקוחות מרוצים, אנחנו מספקים שירות מוביל בתחום
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`mx-auto bg-${benefit.color}-100 text-${benefit.color}-600 p-5 rounded-full inline-block mb-6`}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-950">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-900 text-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <ThumbsUp className="h-8 w-8 text-blue-300" />
                <h3 className="text-2xl md:text-3xl font-bold">אחריות ושקט נפשי</h3>
              </div>
              <p className="text-lg mb-8 text-blue-100">
                אנו מתחייבים לספק שירות ברמה הגבוהה ביותר, עם אחריות מלאה על כל עבודה. אם יש בעיה, אנחנו כאן לפתור אותה - ללא תירוצים וללא עלות נוספת.
              </p>
              <a 
                href="tel:0541234567" 
                className="inline-block px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-100 transition"
              >
                לייעוץ ללא התחייבות
              </a>
            </div>
            <div className="hidden md:block bg-blue-800 relative">
              <img 
                src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="שירות אינסטלציה מקצועי" 
                className="h-full w-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-3xl font-bold mb-2">100%</p>
                  <p className="text-xl">שביעות רצון</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}