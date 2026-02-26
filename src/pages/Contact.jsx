import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import contact2 from "../assets/contactuss.webp";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const service = params.get("service");

  const getDefaultInquiry = () => {
    if (service === "seo") return "SEO Services";
    if (service === "ai") return "AI Automation";
    if (service === "cro") return "Performance Audit";
    return "Growth Consultation";
  };

  const [formData, setFormData] = useState({
    inquiry: service ? getDefaultInquiry() : "Growth Consultation",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [generatedOtp, setGeneratedOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);

  useEffect(() => {
    if (service) {
      setFormData((prev) => ({
        ...prev,
        inquiry: getDefaultInquiry(),
      }));
    }
  }, [service]);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

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
        "service_q8qm5ah",
        "template_34mfvgd",
        {
          email: formData.email,
          otp: otp,
        },
        "wzMZB3gXbCN1HTitr",
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

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

    emailjs
      .send(
        "service_o2hqsiu",
        "template_2hvikhe",
        formData,
        "2X4j1gjI4qCBNp-1j",
      )
      .then(() => {
        setSuccess("Your message has been sent successfully!");
        setTimeout(() => setSuccess(""), 4000);

        setFormData({
          inquiry: getDefaultInquiry(),
          name: "",
          email: "",
          phone: "",
          message: "",
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

  // ========== REFS FOR ANIMATION ==========
  const topSectionRef = useRef(null);
  const topImageRef = useRef(null);
  const topHeadingRef = useRef(null);
  const topPara1Ref = useRef(null);
  const topPara2Ref = useRef(null);

  const leftContentRef = useRef(null);
  const leftStepsRef = useRef([]);
  const leftCardsRef = useRef([]);
  const leftBottomParaRef = useRef(null);

  const contactInfoRef = useRef(null);
  const infoHeadingRef = useRef(null);
  const infoSubParaRef = useRef(null);
  const infoCardsRef = useRef([]);
  const infoTaglineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach(st => st.kill());

      const isMobile = window.innerWidth < 768;
      const baseDuration = isMobile ? 0.9 : 1.2;
      const baseY = isMobile ? 30 : 50;
      const staggerDelay = isMobile ? 0.1 : 0.15;
      const floatAmount = isMobile ? 4 : 8;
      const floatDuration = isMobile ? 3 : 2.5;

      // ----- TOP SECTION (image + heading) -----
      if (topSectionRef.current) {
        gsap.set([topImageRef.current, topHeadingRef.current, topPara1Ref.current, topPara2Ref.current], {
          opacity: 0,
          y: baseY,
        });
        gsap.set(topImageRef.current, { scale: 0.95 });

        const topTl = gsap.timeline({
          scrollTrigger: {
            trigger: topSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        topTl
          .to(topHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to([topPara1Ref.current, topPara2Ref.current], { opacity: 1, y: 0, duration: baseDuration * 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.5")
          .to(topImageRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" }, "-=0.8");

        // Floating image (optional, not form)
        gsap.to(topImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.5,
          scrollTrigger: {
            trigger: topSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- LEFT CONTENT (steps, cards, bottom para) -----
      if (leftContentRef.current) {
        gsap.set(leftStepsRef.current, { opacity: 0, y: 20 });
        gsap.set(leftCardsRef.current, { opacity: 0, y: 40, scale: 0.95 });
        gsap.set(leftBottomParaRef.current, { opacity: 0, y: 30 });

        const leftTl = gsap.timeline({
          scrollTrigger: {
            trigger: leftContentRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        leftTl
          .to(leftStepsRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, stagger: staggerDelay, ease: "power2.out" })
          .to(leftCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4")
          .to(leftBottomParaRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.2");

        // Floating cards (subtle)
        leftCardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -floatAmount * 0.5,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2 + i * 0.1,
              scrollTrigger: {
                trigger: leftContentRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      // ----- CONTACT INFO SECTION (bottom gradient box) -----
      if (contactInfoRef.current) {
        gsap.set([infoHeadingRef.current, infoSubParaRef.current, infoTaglineRef.current], { opacity: 0, y: baseY });
        gsap.set(infoCardsRef.current, { opacity: 0, y: 40, scale: 0.95 });

        const infoTl = gsap.timeline({
          scrollTrigger: {
            trigger: contactInfoRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        infoTl
          .to(infoHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(infoSubParaRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(infoCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4")
          .to(infoTaglineRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.2");

        infoCardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -floatAmount * 0.5,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2 + i * 0.1,
              scrollTrigger: {
                trigger: contactInfoRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      ScrollTrigger.refresh();
    }, [topSectionRef, leftContentRef, contactInfoRef]);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== TOP SECTION ===== */}
        <div ref={topSectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
          <div ref={topImageRef} className="flex justify-center lg:justify-start">
            <img
              src={contact2}
              alt="Contact Illustration"
              className="w-[420px] md:w-[520px] lg:w-[580px] object-contain"
            />
          </div>

          <div>
            <h1 ref={topHeadingRef} className="text-4xl md:text-5xl font-bold leading-tight">
              {service === "seo" && <>Let’s Scale Your <span className="text-blue-700">SEO Growth</span></>}
              {service === "ecommerce" && <>Let’s Boost Your <span className="text-blue-700">Ecommerce Revenue</span></>}
              {service === "cro" && <>Let’s Improve Your <span className="text-blue-700">Conversions</span></>}
              {service === "affiliate" && <>Let’s Build Your <span className="text-blue-700">Revenue Engine</span></>}
              {service === "youtube" && <>Let’s Dominate <span className="text-blue-700">YouTube</span></>}
              {service === "ai" && <>Let’s Automate Your <span className="text-blue-700">Growth with AI</span></>}
              {service === "orm" && <>Let’s Strengthen Your <span className="text-blue-700">Brand Reputation</span></>}
              {service === "aso" && <>Let’s Optimize Your <span className="text-blue-700">App Store Growth</span></>}
              {service === "mobile-app-marketing" && <>Let’s Scale Your <span className="text-blue-700">Mobile App Growth</span></>}
              {service === "b2b" && <>Let’s Accelerate Your <span className="text-blue-700">B2B Growth</span></>}
              {service === "bfsi" && <>Let’s Drive Performance in the <span className="text-blue-700">BFSI Sector</span></>}
              {!service && (
                <>
                  <span className="text-blue-700">Let’s Build</span>{" "}
                  <span className="text-gray-900">What Your Brand</span>{" "}
                  <span className="text-orange-500">Deserves</span>
                </>
              )}
            </h1>

            <p ref={topPara1Ref} className="text-lg md:text-xl text-gray-600 max-w-xl mt-6">
              Ready to scale your digital presence with a{" "}
              <span className="font-semibold text-gray-900">
                performance-driven strategy
              </span>{" "}
              powered by AI, analytics, and measurable growth?
            </p>

            <p ref={topPara2Ref} className="text-gray-600 leading-relaxed mt-4">
              Whether you’re a startup building visibility or an enterprise
              focused on performance, we craft{" "}
              <span className="text-blue-700 font-medium">
                scalable growth systems
              </span>{" "}
              that move real business metrics — not just impressions.
            </p>
          </div>
        </div>

        {/* ===== SECOND SECTION (LEFT CONTENT + RIGHT FORM) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE CONTENT (ANIMATED) */}
          <div ref={leftContentRef}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              <span className="text-blue-700">What Happens</span>{" "}
              <span className="text-gray-900">After You</span>{" "}
              <span className="text-orange-500">Reach Out?</span>
            </h2>

            <ol className="space-y-4 text-gray-700 mb-10 list-decimal list-inside">
              {[
                "Requirement Understanding – We analyze your goals, audience, and current digital performance.",
                "Strategic Consultation – Our experts recommend data-backed solutions aligned with your KPIs.",
                "Customized Growth Roadmap – You receive a clear action plan with timelines and projected outcomes.",
              ].map((text, idx) => (
                <li key={idx} ref={el => (leftStepsRef.current[idx] = el)}>
                  <span className="font-semibold">{text.split(" – ")[0]}</span> –{" "}
                  {text.split(" – ")[1]}
                </li>
              ))}
            </ol>

            <p className="font-semibold text-gray-900 mb-12">
              No generic proposals.{" "}
              <span className="text-blue-700">
                Only strategy-driven execution.
              </span>
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-8 mt-16">
              <span className="text-gray-900">Why Brands</span>{" "}
              <span className="text-blue-700">Choose</span>{" "}
              <span className="text-orange-500">Adkryoss</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Performance-first digital marketing approach",
                "AI-powered campaign optimization",
                "ROI-focused SEO & Paid Advertising",
                "Conversion-driven content & creatives",
                "Transparent reporting & analytics dashboards",
              ].map((item, i) => (
                <div
                  key={i}
                  ref={el => (leftCardsRef.current[i] = el)}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
                >
                  <p className="font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>

            <p ref={leftBottomParaRef} className="mt-8 text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-900">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>{" "}
              combines creativity, automation, and analytics to deliver{" "}
              <span className="text-blue-700 font-medium">
                scalable digital growth systems
              </span>{" "}
              across SEO, paid media, and AI-driven marketing.
            </p>
          </div>

          {/* RIGHT SIDE FORM (STATIC – NO ANIMATION) */}
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

          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm h-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="font-bold text-4xl mb-10">Get in touch</h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Your Inquiry *
                </label>
                <select
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                >
                  <option>Growth Consultation</option>
                  <option>SEO Services</option>
                  <option>Paid Advertising</option>
                  <option>AI Automation</option>
                  <option>Performance Audit</option>
                </select>
              </div>

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
                  Your Email *
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

                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    onClick={sendOtp}
                    disabled={otpLoading}
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:scale-100"
                  >
                    {otpLoading ? "Sending..." : "Send OTP"}
                  </button>
                </div>

                {otpSent && !otpVerified && (
                  <div className="mt-5">
                    <input
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      value={enteredOtp}
                      onChange={(e) => setEnteredOtp(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-3 mb-4 text-center tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={verifyOtp}
                        className="px-8 py-2 rounded-full bg-green-600 text-white font-medium shadow-md hover:bg-green-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        Verify OTP
                      </button>
                    </div>
                  </div>
                )}

                {otpVerified && (
                  <div className="mt-4 text-center">
                    <p className="text-green-600 font-medium">
                      ✅ Email Verified Successfully
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Your Mobile number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Your Message *
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-700 text-white font-semibold py-3 rounded-full hover:bg-blue-800 transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit →"}
              </button>
            </form>
          </div>
        </div>

        {/* ===== CONTACT INFO SECTION (ANIMATED) ===== */}
        <div ref={contactInfoRef} className="mt-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-3xl py-16 px-8 text-center shadow-xl">
          <h2 ref={infoHeadingRef} className="text-4xl font-bold mb-6 leading-tight text-white">
            Let’s Start the Conversation
          </h2>

          <p ref={infoSubParaRef} className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
            Whether you're exploring new growth opportunities or ready to scale
            aggressively, our team is here to guide you with strategy-first
            execution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {/* Email */}
            <a
              ref={el => (infoCardsRef.current[0] = el)}
              href="mailto:info@adkryoss.com"
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:scale-105 hover:bg-white/20 transition duration-300 block"
            >
              <p className="text-3xl mb-3">📩</p>
              <p className="font-semibold text-lg text-white">Business Enquiries</p>
              <p className="text-white mt-2 underline">info@adkryoss.com</p>
            </a>

            {/* Phone */}
            <a
              ref={el => (infoCardsRef.current[1] = el)}
              href="tel:+01169269633"
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:scale-105 hover:bg-white/20 transition duration-300 block"
            >
              <p className="text-3xl mb-3">📞</p>
              <p className="font-semibold text-lg text-white">Call Us</p>
              <p className="text-white mt-2 underline">+01169269633</p>
            </a>

            {/* Location */}
            <a
              ref={el => (infoCardsRef.current[2] = el)}
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:scale-105 hover:bg-white/20 transition duration-300 block"
            >
              <p className="text-3xl mb-3">📍</p>
              <p className="font-semibold text-lg text-white">Location</p>
              <p className="text-white mt-2 underline">India (Serving Global Clients)</p>
            </a>
          </div>

          <p ref={infoTaglineRef} className="text-xl font-semibold text-orange-300">
            Build Visibility. Drive Traffic. Convert Customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;