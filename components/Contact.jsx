"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with actual API endpoint when available
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000); // Reset success message after 5s
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-neutral text-neutral-content">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            La oss snakke sammen
          </h2>
          <p className="text-xl text-neutral-content/70 max-w-2xl mx-auto">
            Har du et prosjekt i tankene? Send meg en melding, så diskuterer vi
            hvordan jeg kan hjelpe deg.
          </p>
        </div>
      </div>
    </section>
  );
}
