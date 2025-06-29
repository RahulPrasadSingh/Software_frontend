import React, { useState } from "react";
import { Link } from "react-scroll"; // Import React Scroll Link
import { gsap } from "gsap";
import digital from "../img/digital.png"

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
          <img
            src={digital}
            alt="Digital Marketing - Social Media and Analytics"
            className="rounded-xl max-w-full h-auto"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400x300/22c55e/ffffff?text=Digital+Marketing";
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default DynamicScrollPage;