import React from "react";
import { Award, Check, Clock, Shield, ThumbsUp } from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-950">אנחנו עומדים מאחורי השירות שלנו</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <div className="flex flex-col items-center max-w-xs p-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">הנדסאי אינסטלציה מוסמך</h3>
            <p className="text-gray-600 text-center">בעל תעודת הנדסאי וכל ההסמכות הנדרשות</p>
          </div>

          <div className="flex flex-col items-center max-w-xs p-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-green-700" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">רישיון מלא</h3>
            <p className="text-gray-600 text-center">רישיון ממשרד העבודה והרווחה לעבודות אינסטלציה</p>
          </div>

          <div className="flex flex-col items-center max-w-xs p-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <ThumbsUp className="h-8 w-8 text-purple-700" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">ניסיון מקצועי</h3>
            <p className="text-gray-600 text-center">ותק של 7 שנים בענף האינסטלציה</p>
          </div>

          <div className="flex flex-col items-center max-w-xs p-4">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-amber-700" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">זמינות 24/7</h3>
            <p className="text-gray-600 text-center">זמינים עבורכם בכל שעות היממה, כולל בסופי שבוע</p>
          </div>
        </div>

        <div className="mt-12 p-8 bg-white rounded-2xl shadow-lg max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-blue-100 p-6 rounded-full">
              <Shield className="h-12 w-12 text-blue-700" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">אחריות מלאה על כל עבודה</h3>
              <p className="text-gray-600 mb-4">
                אנו מעניקים אחריות למשך 5 שנים על כל עבודה שאנחנו מבצעים, ללא תנאים נסתרים
              </p>
              <ul className="space-y-2">
                {['אחריות על חלקים', 'אחריות על עבודה', 'ביטוח צד ג׳'].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="bg-green-100 p-1 rounded-full">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}