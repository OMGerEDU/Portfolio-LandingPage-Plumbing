import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-8">
      <h3 className="text-2xl font-bold mb-6 text-blue-900">השאירו פרטים לחזרה</h3>
      
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h4 className="text-xl font-semibold text-green-700 mb-2">הטופס נשלח בהצלחה!</h4>
          <p className="text-gray-600 text-center">
            תודה על פנייתך. ניצור איתך קשר בהקדם.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              שם מלא
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              className="w-full"
              value={formState.name}
              onChange={handleChange}
              placeholder="הכנס את שמך המלא"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              טלפון
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full"
              value={formState.phone}
              onChange={handleChange}
              placeholder="הכנס את מספר הטלפון שלך"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              אימייל
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              className="w-full"
              value={formState.email}
              onChange={handleChange}
              placeholder="הכנס את כתובת האימייל שלך"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              פירוט הבעיה
            </label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              className="w-full"
              value={formState.message}
              onChange={handleChange}
              placeholder="תאר את הבעיה או השירות הנדרש"
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin ml-2" />
                שולח...
              </>
            ) : (
              "שלח פרטים"
            )}
          </Button>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            פרטיך ישמשו ליצירת קשר בלבד ולא יועברו לצד שלישי
          </p>
        </form>
      )}
    </div>
  );
}