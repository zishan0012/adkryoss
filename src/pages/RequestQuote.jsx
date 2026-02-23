import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  FileSearch,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    services: [],
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "",
    goal: "",
  });

  const [generatedOtp, setGeneratedOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const servicesList = [
    "SEO",
    "Paid Ads",
    "Content Marketing",
    "AI Automation",
    "CRO",
    "ORM",
    "ASO",
    "App Marketing",
  ];

  const budgetOptions = [
    "₹10k – ₹30k",
    "₹30k – ₹1L",
    "₹1L – ₹5L",
    "₹5L+",
    "Let Adkryoss suggest",
  ];

  const timelineOptions = ["ASAP", "1–3 months", "3–6 months", "Ongoing retainer"];

  const quoteDeliverables = [
    "Scope of work breakdown",
    "Recommended service stack",
    "Transparent pricing structure",
    "Projected KPIs & timelines",
    "Action roadmap (90-day plan)",
    "Dedicated account manager intro",
  ];

  const sendOtp = () => {
    if (!formData.email) {
      alert("Please enter your email first.");
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    setOtpLoading(true);

    emailjs
      .send(
        "service_lb93y5t",
        "template_34mfvgd",
        {
          email: formData.email,
          otp: otp,
        },
        "wzMZB3gXbCN1HTitr"
      )
      .then(() => {
        setOtpSent(true);
        alert("OTP sent to your email!");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send OTP");
      })
      .finally(() => {
        setOtpLoading(false);
      });
  };

  const verifyOtp = () => {
    if (enteredOtp === generatedOtp) {
      setOtpVerified(true);
      alert("Email verified successfully!");
    } else {
      alert("Invalid OTP");
    }
  };

  const validate = () => {
    let newErrors = {};

    if (formData.services.length === 0) {
      newErrors.services = "Please select at least one service";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Mobile number must be 10 digits";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget range";
    }

    if (!formData.timeline) {
      newErrors.timeline = "Please select a timeline";
    }

    if (!formData.goal.trim()) {
      newErrors.goal = "Please tell us about your goal";
    } else if (formData.goal.length < 10) {
      newErrors.goal = "Please provide at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
    setErrors((prev) => ({ ...prev, services: "" }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (name === "email") {
      setOtpVerified(false);
      setOtpSent(false);
      setEnteredOtp("");
      setGeneratedOtp("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (!validate()) return;

    if (!otpVerified) {
      alert("Please verify your email first.");
      return;
    }

    setLoading(true);

    const submitData = {
      ...formData,
      services: formData.services.join(", "),
    };

    emailjs
      .send(
        "service_lb93y5t",
        "template_cdooj2p",
        submitData,
        "wzMZB3gXbCN1HTitr"
      )
      .then(() => {
        setSuccess("Your quote request has been sent successfully!");

        setTimeout(() => {
          setSuccess("");
        }, 4000);

        setFormData({
          services: [],
          name: "",
          email: "",
          phone: "",
          company: "",
          budget: "",
          timeline: "",
          goal: "",
        });

        setOtpSent(false);
        setOtpVerified(false);
        setEnteredOtp("");
        setGeneratedOtp("");
      })
      .catch((error) => {
        console.log("EmailJS Error:", error);
        alert("Something went wrong.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const scrollToForm = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Success Toast */}
      {success && (
        <div className="fixed top-6 right-6 z-50 animate-slideIn">
          <div className="bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <p className="font-semibold">Success!</p>
              <p className="text-sm">{success}</p>
            </div>
          </div>
        </div>
      )}

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-br from-[#003f80] to-[#0066CC] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Get a{" "}
                <span className="text-orange-300">Customised</span> Quote
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                Tell us your goal — we'll craft a strategy priced exactly for it.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToForm}
                  className="bg-white text-[#0066CC] px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Your Quote ↓
                </button>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  <Phone size={20} />
                  Call Us
                </a>
              </div>
            </div>

            {/* Right - Animated Checklist */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">
                What's Included in Your Quote:
              </h3>
              <div className="space-y-4">
                {[
                  "Free strategy call within 24 hours",
                  "Custom roadmap tailored to your goals",
                  "No lock-in contracts",
                  "Transparent pricing breakdown",
                  "Dedicated account manager",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white/10 rounded-xl p-4 animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 size={18} className="text-white" />
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUE PROP STRIP ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Get a Quote?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We believe in transparent, no-obligation quotes that help you make
              informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileSearch size={36} />,
                title: "Tailored Pricing",
                body: "No fixed packages — every quote is built around your specific goals and budget.",
              },
              {
                icon: <Clock size={36} />,
                title: "Fast Turnaround",
                body: "Receive a detailed proposal within 24–48 business hours.",
              },
              {
                icon: <ShieldCheck size={36} />,
                title: "No Obligation",
                body: "A quote is a conversation starter, not a commitment.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-slate-100 p-8 hover:border-[#0066CC] hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,102,204,0.15)] transition-all duration-300 group"
              >
                <div className="text-[#0066CC] mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUOTE REQUEST FORM ===== */}
      <section id="quote-form" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Content - What Happens Next */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                What Happens{" "}
                <span className="text-[#0066CC]">Next?</span>
              </h2>

              <div className="space-y-6 mb-10">
                {[
                  {
                    step: "01",
                    title: "We review your requirements",
                    desc: "Our team analyzes your goals, current performance, and competitive landscape.",
                  },
                  {
                    step: "02",
                    title: "Expert calls you within 24 hrs",
                    desc: "A dedicated specialist reaches out to understand your needs in detail.",
                  },
                  {
                    step: "03",
                    title: "You receive a customized proposal",
                    desc: "Get a detailed quote with strategy, timeline, and transparent pricing.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="w-16 h-16 bg-[#0066CC] text-white rounded-2xl flex items-center justify-center font-bold text-xl shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <p className="text-slate-700 font-medium flex items-center gap-3">
                  <ShieldCheck className="text-green-600" size={24} />
                  No spam. No pressure. Just strategy.
                </p>
              </div>
            </div>

            {/* Right - Form Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Request Your Quote
                  </h3>
                  <p className="text-slate-600 mt-2">
                    Fill in your details and we'll get back to you
                  </p>
                </div>

                {/* Services of Interest */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Service(s) of Interest *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {servicesList.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceToggle(service)}
                        className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                          formData.services.includes(service)
                            ? "bg-[#0066CC] text-white border-[#0066CC]"
                            : "bg-white text-gray-700 border-gray-200 hover:border-[#0066CC]"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                  {errors.services && (
                    <p className="text-red-500 text-sm mt-2">{errors.services}</p>
                  )}
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}

                    {/* OTP Button */}
                    <div className="mt-3 flex justify-start">
                      <button
                        type="button"
                        onClick={sendOtp}
                        disabled={otpLoading || otpVerified}
                        className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:scale-100 text-sm"
                      >
                        {otpLoading
                          ? "Sending..."
                          : otpVerified
                          ? "✓ Verified"
                          : "Send OTP"}
                      </button>
                    </div>

                    {/* OTP Input */}
                    {otpSent && !otpVerified && (
                      <div className="mt-4">
                        <input
                          type="text"
                          placeholder="Enter 6-digit OTP"
                          value={enteredOtp}
                          onChange={(e) => setEnteredOtp(e.target.value)}
                          className="w-full border border-gray-300 rounded-lg p-3 mb-3 text-center tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                          type="button"
                          onClick={verifyOtp}
                          className="px-8 py-2 rounded-full bg-green-600 text-white font-medium shadow-md hover:bg-green-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                          Verify OTP
                        </button>
                      </div>
                    )}

                    {/* Verified Message */}
                    {otpVerified && (
                      <div className="mt-3">
                        <p className="text-green-600 font-medium text-sm">
                          ✅ Email Verified Successfully
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Budget & Timeline Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Monthly Budget Range *
                    </label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                      >
                        <option value="">Select budget</option>
                        {budgetOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={20}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                    </div>
                    {errors.budget && (
                      <p className="text-red-500 text-sm mt-1">{errors.budget}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Project Timeline *
                    </label>
                    <div className="relative">
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={20}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                    </div>
                    {errors.timeline && (
                      <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>
                    )}
                  </div>
                </div>

                {/* Goal */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Tell us about your goal *
                  </label>
                  <textarea
                    rows="4"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    placeholder="Describe your project goals, expected outcomes, or any specific requirements..."
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"
                  />
                  {errors.goal && (
                    <p className="text-red-500 text-sm">{errors.goal}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-700 text-white font-semibold py-4 rounded-full hover:bg-blue-800 transition-all duration-300 hover:shadow-lg disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {loading ? "Submitting..." : "Get My Quote →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DELIVER IN A QUOTE ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Deliver in a Quote
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every quote comes with a comprehensive breakdown of how we'll approach
              your project.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {quoteDeliverables.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 w-full md:w-[calc(33%-15px)] min-w-[250px] max-w-[350px] grow cursor-pointer group hover:bg-[#0066CC] hover:text-white hover:-translate-y-1.5 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/20 border border-slate-100"
              >
                <CheckCircle2
                  size={24}
                  className="shrink-0 group-hover:scale-110 transition-transform text-[#0066CC] group-hover:text-white"
                />
                <span className="text-[16px] font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-24 bg-gradient-to-r from-[#0066CC] to-[#004999]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Talk to a growth expert today. Zero cost, zero commitment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+91XXXXXXXXXX"
                className="bg-white text-[#0066CC] px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Phone size={20} />
                Call Us Now
              </a>
              <a
                href="mailto:info@adkryoss.com"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={20} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;
