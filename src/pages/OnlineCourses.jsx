import React, { useState } from "react";
import { FaArrowLeft, FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiAward, FiClock, FiUsers, FiShield } from "react-icons/fi";

const moreFeatures = [
  {
    icon: <FiAward className="text-3xl text-purple-400" />,
    title: "Accredited Certifications",
    desc: "Earn certificates recognized by respected Islamic institutions worldwide.",
  },
  {
    icon: <FiClock className="text-3xl text-purple-400" />,
    title: "Lifetime Access",
    desc: "Review content anytime, with unlimited access to all recorded classes.",
  },
  {
    icon: <FiUsers className="text-3xl text-purple-400" />,
    title: "Peer Learning",
    desc: "Engage in a community of learners to motivate and grow together.",
  },
  {
    icon: <FiShield className="text-3xl text-purple-400" />,
    title: "Safe Learning Environment",
    desc: "Private and secure platform, especially designed for young and adult learners.",
  },
];

const courseCategories = ["Quran", "Arabic", "Others", "Fiqh"];

export default function OnlineCoursesPage() {
  const [activeCategory, setActiveCategory] = useState("Quran");

  return (
    <div className="bg-white text-gray-800">
      <div className="px-6 py-4">
        <Link to="/" className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 transition">
          <FaArrowLeft className="mr-2" /> Back to Homepage
        </Link>
      </div>

      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl text-center text-white font-bold mb-10">Courses</h1>
          <p className="text-lg leading-relaxed text-white">
            At <span className="font-semibold">KamaluDeen Al-Adabiy Al-Egbawy Islamic Foundation</span>, we offer a diverse range of scholarship-supported courses designed to serve both local and international students.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white">
            Whether you're a beginner in Qur’an recitation, seeking advanced Arabic grammar, or want to learn Islamic jurisprudence (Fiqh), there’s a course tailored for you.
          </p>
        </div>
      </section>

      <div className="text-center py-10">
        <h2 className="text-3xl font-bold">Explore Our Courses</h2>
        <p className="text-gray-600">Select a course category below</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {courseCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border transition text-sm ${
              activeCategory === cat ? "bg-[#111827] text-white" : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        {activeCategory === "Quran" && (
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl shadow p-6 border border-gray-200">
            <img src="/home.png" alt="Quran" className="w-full md:w-1/2 rounded-xl object-cover h-64" />
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold">Taafiz’l Qur’anic Courses</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><strong>Topics:</strong> Tajweed for Beginners, Qur’an Memorization, Tafsir Basics</li>
                <li><strong>Duration:</strong> 12 - 52 weeks</li>
                <li><strong>Levels:</strong> Beginner to Advanced</li>
                <li><strong>Mode:</strong> In-person & Online</li>
                <li><strong>Audience:</strong> Children, Youth, Adults</li>
              </ul>
              <Link to="/courses"><button className="bg-[#111827] text-white px-6 py-2 mt-5 rounded-full text-sm flex items-center gap-2">
                          Apply
                        </button></Link>
           </div>
          </div>
        )}

        {activeCategory === "Arabic" && (
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl shadow p-6 border border-gray-200">
            <img src="/home.png" alt="Arabic" className="w-full md:w-1/2 rounded-xl object-cover h-64" />
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold">Arabic Reading & Writing, Nahwu & Sarf, Arabic Conversation </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><strong>Skills:</strong> Arabic Reading & Writing, Nahwu & Sarf, Arabic Conversation</li>
                <li><strong>Special:</strong> Classical Texts taught alongside modern conversation</li>
                <li><strong>Duration:</strong> 12 - 52 weeks</li>
                <li><strong>Levels:</strong> Beginner to Advanced</li>
                <li><strong>Mode:</strong> In-person & Online</li>
                <li><strong>Audience:</strong> Teens, Adults</li>
              <li><strong>Special Features:</strong> Classical Texts taught alongside modern conversation</li>

              </ul>
               <Link to="/courses"><button className="bg-[#111827] text-white px-6 py-2 mt-5 rounded-full text-sm flex items-center gap-2">
                          Apply
                        </button></Link>
            </div>
          </div>
        )}

        {activeCategory === "Fiqh" && (
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl shadow p-6 border border-gray-200">
            <img src="/home.png" alt="Fiqh" className="w-full md:w-1/2 rounded-xl object-cover h-64" />
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold">Fiqh of Worship, Aqeedah, Hadith 40 Nawawi, Seerah of the Prophet ﷺ </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><strong>Certification:</strong> Available upon completion</li>
                <li><strong>Language:</strong> Arabic, Yoruba, and English</li>
                <li><strong>Duration:</strong> 12 - 40 weeks</li>
                <li><strong>Levels:</strong> Intermediate</li>
                <li><strong>Mode:</strong> In-person & Online</li>
                <li><strong>Audience:</strong> Youth, Adults</li>
              </ul>
               <Link to="/courses"><button className="bg-[#111827] text-white px-6 py-2 mt-5 rounded-full text-sm flex items-center gap-2">
                          Apply
                        </button></Link>
            </div>
          </div>
        )}

         {activeCategory === "Others" && (
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl shadow p-6 border border-gray-200">
            <img src="/home.png" alt="Hadith" className="w-full md:w-1/2 rounded-xl object-cover h-64" />
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold">Emerging Tech in the Integrated Curriculum </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><strong> Tracks:</strong>Software Development (HTML, CSS, JavaScript, Python),Cybersecurity Fundamentals, Graphics & Digital Media.  </li>
                <li><strong>Age Group:</strong>  Youth (15+) and Adults</li>
                <li><strong>Goal:</strong>  Career readiness + Islamic ethical framework</li>
                <li><strong>Mode:</strong> Physical + Online blended</li>
                <li><strong>Fee:</strong> Free via Tech Scholarship Scheme
 </li>
              </ul>
               <Link to="/courses"><button className="bg-[#111827] text-white px-6 py-2 mt-5 rounded-full text-sm flex items-center gap-2">
                          Apply
                        </button></Link>
            </div>
          </div>
        )}
      </div>

      {/* Additional Course Features */}
      <section className="mt-16 max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-10">Why Choose Our Courses?</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {["🎓","👨‍🏫","⏰","💬"].map((icon, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#111827]"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h4 className="text-lg font-semibold mb-2">
                {["Certified Curriculum", "Experienced Tutors", "Flexible Timing", "Live Support"][i]}
              </h4>
              <p className="text-gray-600 text-sm">
                {["Our courses follow a structured Islamic education syllabus with certification upon completion.", "Every course is taught by qualified scholars who specialize in Arabic and Islamic sciences.", "Study at your own pace or join live sessions according to your schedule.", "Ask questions and get help from instructors and fellow students in real-time."][i]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-200 text-gray-900 py-20 px-6 mt-16">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-gray-900  font-bold mb-4">More Reasons to Learn With Us</h2>
          <p className="text-gray-900 max-w-2xl mx-auto">
            Our platform offers more than just content — it's a full learning experience designed to inspire.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {moreFeatures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4 text-white">{item.icon}</div>
              <h4 className="text-lg text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-white text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
       <footer className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
              {/* Left: Newsletter + Privacy */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Subscribe to our newsletter</h3>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none"
                  />
                  <div className="flex items-center gap-2 text-sm">
                    <input type="checkbox" id="privacy" className="accent-purple-600" />
                    <label htmlFor="privacy" className="text-gray-400">
                      I agree to the privacy policy
                    </label>
                  </div>
                  <button className="bg-white hover:bg-white text-gray-900 px-4 py-2 rounded-full text-sm">
                    Subscribe
                  </button>
                </form>
              </div>
      
              {/* Middle: Logo */}
              <div className="flex justify-center md:justify-center">
                <div className="text-center">
                  <h2 className="text-2xl font-bold">Madrasah</h2>
                  <p className="text-sm text-gray-400 mt-2">Knowledge. Character. Light.</p>
                </div>
              </div>
      
              {/* Right: Contact + Social */}
              <div className="flex flex-col items-start md:items-end space-y-4">
                <div className="text-sm text-gray-400">
                  <p className="flex items-center gap-2">
                    <FaEnvelope /> info@madrasah.com
                  </p>
                  <p className="flex items-center gap-2">
                    <FaPhone/> +234 800 000 0000
                  </p>
                </div>
                <div className="flex gap-4 text-xl text-white">
                  <FaFacebook className="hover:text-gray-900 cursor-pointer" />
                  <FaTwitter className="hover:text-gray-900 cursor-pointer" />
                  <FaInstagram className="hover:text-gray-900 cursor-pointer" />
                </div>
              </div>
            </div>
      
            {/* Bottom note */}
            <div className="text-center text-gray-500 text-sm mt-8">
              &copy; {new Date().getFullYear()} Madrasah. All rights reserved.
            </div>
          </footer>
    </div>
  );
}