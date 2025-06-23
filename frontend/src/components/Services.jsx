import React, { useState } from "react";
import { Link } from "react-scroll"; // Import React Scroll Link
import { gsap } from "gsap";

const DynamicScrollPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  // Toggle the expanded section and animate the text visibility
  const toggleExtraText = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);

    // Get the extra text and animate it
    const extraText = document.querySelector(`#${sectionId} .extra-text`);

    if (extraText) {
      if (expandedSection === sectionId) {
        // Hide extra text with animation
        gsap.to(extraText, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        // Show extra text with a delay and animation
        gsap.fromTo(
          extraText,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.3, // Delay for staggered animation
          }
        );
      }
    }
  };

  return (
    <div className="w-full font-sans bg-transparent rounded-t-3xl">
      {/* Section 1 - Web Development */}
      <section
        data-scroll
        data-scroll-speed="-0.1"
        className="section rounded-t-3xl flex flex-col md:flex-row items-center min-h-screen p-8 sm:p-12 md:p-14 gap-16 md:gap-32 bg-teal-100"
        data-bg="#F8FAFC"
        id="services"
      >
        <div className="content w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-teal-700 mb-6 leading-tight">
            Web Development
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
            We design websites that don't just look good-they slay. Whether you're building an e-commerce empire or showcasing your brand, we make sure your site is fire, fast, and future-ready.
          </p>

          <Link
            to="contact" // Scroll to "contact" section
            smooth={true}
            duration={500}
          >
            <button
              onClick={() => toggleExtraText("services")}
              className="mt-6 px-8 py-3 border-[2px] border-teal-600 text-teal-600 rounded-full shadow-md hover:bg-teal-100 transition-transform transform hover:scale-105"
            >
              Contact Us
            </button>
          </Link>
        </div>
        <div className="image w-full md:w-2/5 mt-6 md:mt-0">
          <img
            src="https://i.postimg.cc/gj9FJQPB/rb-1812-3.png"
            alt="Web Development"
            className="rounded-xl max-w-full h-auto"
          />
        </div>
      </section>

      {/* Section 2 - Application Development */}
      <section
        data-scroll
        data-scroll-speed="-0.2"
        className="section flex rounded-t-3xl flex-col md:flex-row items-center min-h-screen p-8 sm:p-12 md:p-14 gap-16 md:gap-32 bg-purple-300"
        data-bg="#E5E7EB"
        id="application"
      >
        <div className="content w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-700 mb-6 leading-tight">
            Application Development
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
            From concept to app store, we craft apps that vibe with your audience. Think smooth, functional and scroll-stopping-everything you need to keep your users hooked.
          </p>

          <Link
            to="contact" // Scroll to "contact" section
            smooth={true}
            duration={500}
          >
            <button
              onClick={() => toggleExtraText("application")}
              className="mt-6 px-8 py-3 border-[2px] border-purple-600 text-purple-600 rounded-full shadow-md hover:bg-indigo-100 transition-transform transform hover:scale-105"
            >
              Contact Us
            </button>
          </Link>
        </div>
        <div className="image w-full md:w-2/5 mt-6 md:mt-0">
          <img
            src="https://i.postimg.cc/8CtWbm04/communication-social-media-icons-smartphone-device.png"
            alt="Application Development"
            className="rounded-xl max-w-full h-auto"
          />
        </div>
      </section>

      {/* Section 3 - AI Integration */}
      <section
        data-scroll
        data-scroll-speed="-0.3"
        className="section flex rounded-t-3xl flex-col md:flex-row items-center min-h-screen p-8 sm:p-12 md:p-14 gap-16 md:gap-32 bg-blue-100"
        data-bg="#F3F4F6"
        id="ai"
      >
        <div className="content w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 mb-6 leading-tight">
            AI Integration
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
            AI is the real MVP. Automate the boring stuff, personalize like a pro and make smarter decisions with custom AI solutions tailored to your goals.
          </p>

          <Link
            to="contact" // Scroll to "contact" section
            smooth={true}
            duration={500}
          >
            <button
              onClick={() => toggleExtraText("ai")}
              className="mt-6 px-8 py-3 border-[2px] border-blue-600 text-blue-600 rounded-full shadow-md hover:bg-blue-100 transition-transform transform hover:scale-105"
            >
              Contact Us
            </button>
          </Link>
        </div>
        <div className="image w-full md:w-2/5 mt-6 md:mt-0">
          <img
            src="https://i.postimg.cc/HsMyNyxw/rb-5442.png"
            alt="AI Integration"
            className="rounded-xl max-w-full h-auto"
          />
        </div>
      </section>

      {/* Section 4 - Digital Marketing */}
      <section
        data-scroll
        data-scroll-speed="-0.4"
        className="section mt-24 flex flex-col md:flex-row items-center min-h-screen p-8 sm:p-12 md:p-14 gap-16 md:gap-32 bg-green-100"
        data-bg="#F0FDF4"
        id="marketing"
      >
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-700 mb-6 leading-tight">
            Digital Marketing
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
            Turn clicks into customers with marketing that actually converts. From SEO magic to social media buzz, we help your brand dominate the digital space and reach the right audience at the right time.
          </p>

          <Link
            to="contact"
            smooth={true}
            duration={500}
          >
            <button
              onClick={() => toggleExtraText("marketing")}
              className="mt-6 px-8 py-3 border-[2px] border-green-600 text-green-600 rounded-full shadow-md hover:bg-green-100 transition-transform transform hover:scale-105"
            >
              Contact Us
            </button>
          </Link>
        </div>

        <div className="w-full md:w-2/5 mt-6 md:mt-0 flex justify-center">
          <svg
            width="500"
            height="400"
            viewBox="0 0 500 400"
            className="max-w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Uniform Background */}
            <rect width="500" height="400" fill="#f0fdf4"/>
            
            {/* Growth Chart Background */}
            <rect x="40" y="50" width="200" height="140" fill="white" rx="12" opacity="0.9"/>
            
            {/* Chart Grid Lines */}
            <line x1="55" y1="75" x2="225" y2="75" stroke="#e5e7eb" strokeWidth="1"/>
            <line x1="55" y1="105" x2="225" y2="105" stroke="#e5e7eb" strokeWidth="1"/>
            <line x1="55" y1="135" x2="225" y2="135" stroke="#e5e7eb" strokeWidth="1"/>
            <line x1="55" y1="165" x2="225" y2="165" stroke="#e5e7eb" strokeWidth="1"/>
            
            {/* Upward Trending Line */}
            <polyline
              points="65,170 95,150 125,120 155,90 185,65 215,50"
              fill="none"
              stroke="#22c55e"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Chart Points */}
            <circle cx="65" cy="170" r="6" fill="#22c55e"/>
            <circle cx="95" cy="150" r="6" fill="#22c55e"/>
            <circle cx="125" cy="120" r="6" fill="#22c55e"/>
            <circle cx="155" cy="90" r="6" fill="#22c55e"/>
            <circle cx="185" cy="65" r="6" fill="#22c55e"/>
            <circle cx="215" cy="50" r="6" fill="#22c55e"/>
            
            {/* Big Profit Arrow */}
            <path d="M200 35 L220 15 L215 20 L235 20 L235 30 L215 30 Z" fill="#22c55e"/>
            
            {/* Mobile Phone - Bigger */}
            <rect x="280" y="70" width="100" height="180" fill="#1f2937" rx="15"/>
            <rect x="295" y="90" width="70" height="140" fill="white" rx="6"/>
            
            {/* Phone Screen Content - Social Media Interface */}
            <rect x="300" y="100" width="60" height="25" fill="#3b82f6" rx="4"/>
            <text x="330" y="115" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Facebook</text>
            
            <rect x="300" y="130" width="60" height="25" fill="#ec4899" rx="4"/>
            <text x="330" y="145" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Instagram</text>
            
            <rect x="300" y="160" width="60" height="25" fill="#10b981" rx="4"/>
            <text x="330" y="175" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">WhatsApp</text>
            
            <rect x="300" y="190" width="60" height="25" fill="#f59e0b" rx="4"/>
            <text x="330" y="205" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Analytics</text>
            
            {/* Floating Like Icons - More Prominent */}
            <g transform="translate(400, 90)">
              <circle cx="0" cy="0" r="16" fill="#ec4899" opacity="0.9"/>
              <text x="0" y="6" textAnchor="middle" fontSize="18" fill="white">♡</text>
              <text x="20" y="6" fontSize="12" fill="#ec4899" fontWeight="bold">+1K</text>
            </g>
            
            <g transform="translate(420, 130)">
              <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.8"/>
              <text x="0" y="5" textAnchor="middle" fontSize="16" fill="white">♡</text>
              <text x="18" y="5" fontSize="10" fill="#ec4899" fontWeight="bold">+500</text>
            </g>
            
            <g transform="translate(410, 170)">
              <circle cx="0" cy="0" r="12" fill="#ec4899" opacity="0.7"/>
              <text x="0" y="4" textAnchor="middle" fontSize="14" fill="white">♡</text>
              <text x="16" y="4" fontSize="9" fill="#ec4899" fontWeight="bold">+250</text>
            </g>
            
            {/* Customer Icons - Bigger and More Detailed */}
            <g transform="translate(70, 250)">
              <circle cx="0" cy="0" r="20" fill="#3b82f6"/>
              <circle cx="0" cy="-8" r="8" fill="white"/>
              <path d="M-12 12 Q0 0 12 12" fill="white"/>
              <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#3b82f6" fontWeight="bold">John</text>
            </g>
            
            <g transform="translate(120, 260)">
              <circle cx="0" cy="0" r="20" fill="#8b5cf6"/>
              <circle cx="0" cy="-8" r="8" fill="white"/>
              <path d="M-12 12 Q0 0 12 12" fill="white"/>
              <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#8b5cf6" fontWeight="bold">Sarah</text>
            </g>
            
            <g transform="translate(170, 250)">
              <circle cx="0" cy="0" r="20" fill="#f59e0b"/>
              <circle cx="0" cy="-8" r="8" fill="white"/>
              <path d="M-12 12 Q0 0 12 12" fill="white"/>
              <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#f59e0b" fontWeight="bold">Mike</text>
            </g>
            
            <g transform="translate(220, 260)">
              <circle cx="0" cy="0" r="20" fill="#ef4444"/>
              <circle cx="0" cy="-8" r="8" fill="white"/>
              <path d="M-12 12 Q0 0 12 12" fill="white"/>
              <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#ef4444" fontWeight="bold">Lisa</text>
            </g>
            
            {/* Plus signs for customer growth */}
            <text x="195" y="260" fontSize="24" fill="#22c55e" fontWeight="bold">+</text>
            <text x="245" y="250" fontSize="20" fill="#22c55e" fontWeight="bold">+</text>
            <text x="270" y="270" fontSize="18" fill="#22c55e" fontWeight="bold">+</text>
            
            {/* Dollar Signs for Profit - Bigger */}
            <g transform="translate(350, 280)">
              <circle cx="0" cy="0" r="25" fill="#22c55e"/>
              <text x="0" y="8" textAnchor="middle" fontSize="28" fill="white" fontWeight="bold">$</text>
              <text x="0" y="50" textAnchor="middle" fontSize="12" fill="#22c55e" fontWeight="bold">+50K</text>
            </g>
            
            <g transform="translate(400, 250)">
              <circle cx="0" cy="0" r="20" fill="#22c55e" opacity="0.9"/>
              <text x="0" y="7" textAnchor="middle" fontSize="22" fill="white" fontWeight="bold">$</text>
              <text x="0" y="40" textAnchor="middle" fontSize="10" fill="#22c55e" fontWeight="bold">+25K</text>
            </g>
            
            <g transform="translate(420, 300)">
              <circle cx="0" cy="0" r="16" fill="#22c55e" opacity="0.8"/>
              <text x="0" y="6" textAnchor="middle" fontSize="18" fill="white" fontWeight="bold">$</text>
              <text x="0" y="35" textAnchor="middle" fontSize="9" fill="#22c55e" fontWeight="bold">+10K</text>
            </g>
            
            {/* Large Trending Up Arrow */}
            <g transform="translate(250, 30)">
              <path d="M0 25 L25 0 L20 5 L40 5 L40 15 L20 15 Z" fill="#22c55e"/>
              <text x="45" y="15" fontSize="16" fill="#22c55e" fontWeight="bold">↗ GROWTH</text>
            </g>
            
            {/* Success Metrics */}
            <text x="50" y="30" fontSize="14" fill="#16a34a" fontWeight="bold">📈 ANALYTICS</text>
            <text x="50" y="220" fontSize="14" fill="#3b82f6" fontWeight="bold">👥 CUSTOMERS</text>
            <text x="350" y="50" fontSize="14" fill="#ec4899" fontWeight="bold">❤️ ENGAGEMENT</text>
            <text x="350" y="220" fontSize="14" fill="#22c55e" fontWeight="bold">💰 REVENUE</text>
            
            {/* Notification Badges */}
            <circle cx="370" cy="80" r="12" fill="#ef4444"/>
            <text x="370" y="86" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">99+</text>
            
            <circle cx="260" cy="80" r="10" fill="#ef4444"/>
            <text x="260" y="85" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">50</text>
            
            {/* Progress Bars */}
            <rect x="50" y="320" width="150" height="8" fill="#e5e7eb" rx="4"/>
            <rect x="50" y="320" width="120" height="8" fill="#22c55e" rx="4"/>
            <text x="50" y="340" fontSize="10" fill="#22c55e" fontWeight="bold">ROI: 80%</text>
            
            <rect x="50" y="350" width="150" height="8" fill="#e5e7eb" rx="4"/>
            <rect x="50" y="350" width="105" height="8" fill="#3b82f6" rx="4"/>
            <text x="50" y="370" fontSize="10" fill="#3b82f6" fontWeight="bold">Reach: 70%</text>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default DynamicScrollPage;