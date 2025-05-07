
import React from "react";
import { Droplet, Wrench, Sun, Bath, Home, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      icon: <Droplet className="h-8 w-8" />,
      title: "תיקון דליפות וצינורות",
      description: "טיפול מהיר ויעיל בכל סוגי הדליפות והצינורות הפגומים, מניעת נזק ועוגמת נפש.",
      color: "blue"
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "התקנת דוד שמש ומשאבת חום",
      description: "התקנה מקצועית של דודי שמש ומשאבות חום לחיסכון באנרגיה וביעילות מקסימלית.",
      color: "amber"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "איתור ואיטום נזילות",
      description: "איתור מדויק ואיטום נזילות במערכת האינסטלציה באמצעות טכנולוגיה מתקדמת.",
      color: "green"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "טיפול בשורשים ובגידים",
      description: "פתרונות מתקדמים לבעיות סתימות ושורשים במערכת הניקוז והאינסטלציה.",
      color: "purple"
    },
    {
      icon: <Bath className="h-8 w-8" />,
      title: "שיפוץ מקלחות",
      description: "שדרוג ושיפוץ מקלחות, החלפת אביזרים, תיקוני רטיבות ואיטום מקצועי.",
      color: "cyan"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "שיפוץ מטבחים",
      description: "התקנה וחידוש של מערכות אינסטלציה במטבח, כולל החלפת כיורים, ברזים ועוד.",
      color: "pink"
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-4">השירותים שלנו</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            אנו מספקים מגוון רחב של שירותי אינסטלציה באיכות גבוהה, 
            עם דגש על מקצועיות, זמינות ושירות ללא פשרות
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 border-t-4 border-${service.color}-500 hover:shadow-xl transition-all duration-300 group`}
            >
              <div className={`bg-${service.color}-100 text-${service.color}-600 p-4 rounded-xl inline-block mb-6 group-hover:bg-${service.color}-600 group-hover:text-white transition-all duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-950">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="tel:0541234567" className="inline-flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-800">
            לייעוץ מקצועי ללא עלות התקשרו עכשיו 054-1234567
          </a>
        </div>
      </div>
    </section>
  );
}
