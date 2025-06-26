import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { HiOutlineMenu, HiArrowNarrowRight, HiOutlineX } from "react-icons/hi";
import { FiTarget, FiBookOpen, FiAward } from "react-icons/fi";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../index.css';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

export default function HomePage() {
  const [selectedUser, setSelectedUser] = useState(null);
    const [activeCard, setActiveCard] = useState(null);
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const handleClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };
const advisors = [
  {
    name: "Dr. Aminu Bello",
    title: "Senior Islamic Scholar",
    photo: "/founder.jpg",
    bio: "Ph.D. in Islamic Studies, author of multiple books on Fiqh and Hadith, and over 20 years of teaching experience."
  },
  {
    name: "Prof. Aisha Sulaiman",
    title: "Education Consultant",
    photo: "/founder.jpg",
    bio: "Renowned curriculum expert with a focus on Arabic education and pedagogical innovation across Africa."
  },
  {
    name: "Imam Kareem Oladele",
    title: "Community Leader",
    photo: "/founder.jpg",
    bio: "Leads several da’wah programs nationwide. Known for bridging traditional knowledge with modern practices."
  },
   {
    name: "Dr. Aminu Bello",
    title: "Senior Islamic Scholar",
    photo: "/founder.jpg",
    bio: "Ph.D. in Islamic Studies, author of multiple books on Fiqh and Hadith, and over 20 years of teaching experience."
  },
  {
    name: "Prof. Aisha Sulaiman",
    title: "Education Consultant",
    photo: "/founder.jpg",
    bio: "Renowned curriculum expert with a focus on Arabic education and pedagogical innovation across Africa."
  },
  {
    name: "Imam Kareem Oladele",
    title: "Community Leader",
    photo: "/founder.jpg",
    bio: "Leads several da’wah programs nationwide. Known for bridging traditional knowledge with modern practices."
  }
];
  const users = [
    { name: "Abubakr Hassan", role: "Tutor", img: "/founder.jpg" },
    { name: "Maryam Ali", role: "Tutor", img: "/founder.jpg" },
    { name: "Yakunb Yahaya", role: "Tutor", img: "/founder.jpg" },
    { name: "Hassan Hamhed", role: "Tutor", img: "/founder.jpg" },
    { name: "Hassan Maram", role: "Tutor", img: "/founder.jpg" },
    { name: "Taofeeq Ali", role: "Tutor", img: "/founder.jpg" },
   
  ];
const testimonials = [
  {
    name: "Fatima Ahmed",
    quote: "I love learning the Quran here! The teachers are so kind and make it fun.",
  },
  {
    name: "Yusuf Ibrahim",
    quote: "Memorizing the Quran has never been this enjoyable and engaging.",
  },
  {
    name: "Amina Bello",
    quote: "This school gave me more than just education — it gave me purpose.",
  },
];
  const cards = [
    {
      title: "Our Vision",
      desc: "The goal of the school is to maximize your child’s ability to memorize the holy Quran...",
    },
    {
      title: "Our Mission",
      desc: "Daarus Salam Tahfidh Int'l Academy sets an international atmosphere for training...",
    },
    {
      title: "Our Objectives",
      desc: "To be one of the leading Tahfidh academy in Africa where students can achieve fullest potential...",
    },
  ];

  const getIcon = (title) => {
    if (title.includes("Vision")) return <FiTarget />;
    if (title.includes("Mission")) return <FiBookOpen />;
    if (title.includes("Objectives")) return <FiAward />;
    return null;
  };
const [activeCategory, setActiveCategory] = useState("Quran");

  const courseCategories = [
    { label: "Taafiz'l Qur'anic", key: "Quran" },
    { label: "Arabic ", key: "Arabic" },
    { label: "Islamic Studies", key: "Hadith" },
    { label: "Others", key: "Fiqh" },
  ];

  const coursePreviews = {
    Quran: {
      title: "Taafiz'l Qur'anic ",
      desc: "Tajweed for Beginners, Qur’an Memorization, Tafsir Basics",
    },
    Arabic: {
      title: "Arabic for Beginners",
      desc: "Arabic Reading & Writing, Nahwu & Sarf, Arabic Conversation ",
    },
    Hadith: {
      title: " Islamic Studies",
      desc: "Fiqh of Worship, Aqeedah, Hadith 40 Nawawi, Seerah of the Prophet ﷺ",
    },
    Fiqh: {
      title: "Emerging Tech in the Integrated Curriculum",
      desc: " Career readiness + Islamic ethical framework",
    },
  };
  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
    

    <nav className="flex justify-between items-center p-6 border-b relative z-50 bg-white">
      <div className="flex items-center gap-8">
        <div className="text-xl text-[#111827] font-bold">Madrasah</div>
        <ul className="hidden md:flex gap-6 text-sm text-gray-700">
          <Link to="/about"><li className="hover:text-[#111827]">About Us</li></Link>
          <Link to="/courses"><li className="hover:text-[#111827]">Online Courses</li></Link>
          <Link to="/tutors"><li className="hover:text-[#111827]">Tutors</li></Link>
          <Link to="/contact"><li className="hover:text-[#111827]">Contact Us</li></Link>
          <Link to="/event"><li className="hover:text-[#111827]">Events</li></Link>
        </ul>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <a href="https://wa.me/2348012345678" target="_blank" rel="noreferrer">
          <FaWhatsapp className="text-3xl text-green-500" />
        </a>
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t shadow-md md:hidden">
          <ul className="flex flex-col p-6 gap-4 text-gray-700">
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}><li>About Us</li></Link>
            <Link to="/courses" onClick={() => setMobileMenuOpen(false)}><li>Online Courses</li></Link>
            <Link to="/tutors" onClick={() => setMobileMenuOpen(false)}><li>Tutors</li></Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}><li>Contact Us</li></Link>
            <Link to="/event" onClick={() => setMobileMenuOpen(false)}><li>Events</li></Link>
          </ul>
        </div>
      )}
    </nav>
 


      {/* Hero */}
      <section className="text-center py-10 px-4 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Join us <br />and Learn.
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Learning and memorizing the holy Quran with fun in a comfortable environment.
        </p>
        <div className="flex justify-center gap-4">
         <Link to="/courses"><button className="bg-[#111827] text-white px-6 py-3 rounded-full text-sm flex items-center gap-2">
            Our Courses <HiArrowNarrowRight />
          </button></Link>
        <Link to="/contact"> <button className="border border-[#111827] px-6 py-3 rounded-full text-sm flex items-center gap-2">
            Contact us <HiArrowNarrowRight />
          </button></Link>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="relative h-[120%] md:h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/home.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 w-full text-white">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="text-xs text-[#111827] font-semibold uppercase tracking-wide text-gray-200">
                Welcome to:
              </div>
              <h2 className="text-3xl  md:text-4xl font-bold"> Darul Bayan Institute 

              </h2>
              <p className="text-gray-200 text-justify">
                A center of excellence in classical Arabic and Islamic scholarship. Darul Bayan emphasizes memorization, grammar, and classical texts, while integrating basic modern education for a well-rounded foundation.

              </p>
            </div></div>
          <div className="flex justify-end pt-10">
          {/* User Grid Container aligned right */}
<div className="flex justify-end pt-10">
  <div className="grid max-w-4xl grid-cols-2 sm:grid-cols-3 gap-4">
    {users.map((user, idx) => (
      <div
        key={idx}
        onClick={() => setSelectedUser(user)}
        className="flex items-center gap-3 bg-white text-black rounded-full px-4 py-2 shadow w-full cursor-pointer hover:bg-gray-100 transition"
      >
        <img
          src={user.img}
          alt={user.name}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{user.name}</span>
          <span className="text-xs text-gray-500">{user.role}</span>
        </div>
      </div>
    ))}
  </div>
</div>


            </div>
            {selectedUser && (
              <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
                <div className="bg-white text-black rounded-xl shadow-lg w-full max-w-sm p-6 relative">
                  <button
                    onClick={() => setSelectedUser(null)}
                    className="absolute top-3 right-3 text-black text-xl font-bold"
                  >
                    &times;
                  </button>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={selectedUser.img}
                      alt={selectedUser.name}
                      className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold mb-1">{selectedUser.name}</h2>
                    <p className="text-sm text-gray-600">{selectedUser.role}</p>
                    <p className="text-sm text-gray-500 mt-4">
                      This is a dedicated tutor with a passion for teaching and guiding students.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-stretch min-h-[300px]">
          <div className="h-full">
            <img
              src="/founder.jpg"
              alt="Founder"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">About the Founder</h2>
            <p className="text-gray-700 text-justify leading-relaxed">
              Our Mudir, Sheikh Ahmad, is a distinguished scholar with over 20 years of experience.<br /><br />
              Importance of Quran memorization for children – All praise is due to Allah... children, who is a delight for their parents and congratulations for the souls.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision Objectives */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 text-center transition duration-300 shadow-md hover:shadow-2xl border border-gray-400 hover:border-purple-500 hover:shadow-purple-200 rounded-tl-3xl rounded-br-2xl rounded-tr-md rounded-bl-lg"
            >
              <h3 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
                <span className="text-[#111827] text-2xl">{getIcon(card.title)}</span>
                {card.title}
              </h3>
              <p className="text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
  <section className="bg-gray-50 px-6 py-16 font-sans">
      {/* Advisor Board Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Advisory Board</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedAdvisor(advisor)}
            >
             <img
  src={advisor.photo}
  alt={advisor.name}
  className="w-64 h-64 rounded-lg mx-auto mb-4 object-cover"
/>

              <h3 className="text-lg font-semibold mb-1">{advisor.name}</h3>
              <p className="text-sm text-gray-500">{advisor.title}</p>
              <p className="mt-2 text-xs text-blue-900 hover:underline">Read More</p>
            </div>
          ))}
        </div>
      </div>
 {/* Advisor Modal */}
      {selectedAdvisor && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-lg">
            <button
              className="absolute top-3 right-3 text-xl"
              onClick={() => setSelectedAdvisor(null)}
            >
              &times;
            </button>
            <div className="text-center">
              <img
                src={selectedAdvisor.photo}
                alt={selectedAdvisor.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{selectedAdvisor.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{selectedAdvisor.title}</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {selectedAdvisor.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
      {/* What We Do */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">What We Do</h2>
          <p className="text-gray-600">Explore our six key programs</p>
        </div>
          

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-16 relative">
      {/* Card 1 */}
      <div
        onClick={() => handleClick(1)}
        className={`bg-white p-6 rounded-xl border border-gray-200 shadow-md transition-all duration-300 cursor-pointer relative
          ${activeCard === 1 ? "z-50 scale-105 shadow-2xl bg-gray-100" : "hover:scale-105 hover:shadow-xl"}
        `}
      >
        <h3 className="text-lg font-bold text-[#1f2937] mb-2"><span>📘 </span>Islamic and Arabic Teaching
 </h3>
        <p className="text-sm text-gray-600 mb-4">At the heart of our mission lies the preservation and transmission of authentic Islamic knowledge. Our scholarship-based programs include Qur'an memorization (Tahfiz), Tajweed, Hadith, Fiqh, and classical Arabic studies. Taught by experienced scholars, our curriculum nurtures spiritual growth and intellectual excellence for students of all ages.

        </p>
        <Link to="https://web-sandbox.oaiusercontent.com/what-we-do/islamic-arabic-teaching" className="text-blue-900 text-sm font-medium hover:underline">
          Learn More →
        </Link>
      </div>

      {/* Card 2 */}
      <div
        onClick={() => handleClick(2)}
        className={`bg-white p-6 rounded-xl border border-gray-200 shadow-md transition-all duration-300 cursor-pointer relative
          ${activeCard === 2 ? "z-50 scale-105 shadow-2xl bg-gray-100" : "hover:scale-105 hover:shadow-xl"}
        `}
      >
        <h3 className="text-lg font-bold text-[#1f2937] mb-2"><span>🧠 </span>Integrated Curriculum (Arabic + Emerging Technologies)
  </h3>
        <p className="text-sm text-gray-600 mb-4">Our integrated model blends Arabic and Islamic studies with modern education, including emerging technologies like software development, cybersecurity, and digital design. Fully scholarship-based, this curriculum prepares students to thrive spiritually and professionally in today’s world.

        </p>
        <Link to="https://web-sandbox.oaiusercontent.com/what-we-do/integrated-curriculum" className="text-blue-900 text-sm font-medium hover:underline">
          Learn More →
        </Link>
      </div>

      {/* Card 3 */}
      <div
        onClick={() => handleClick(3)}
        className={`bg-white p-6 rounded-xl border border-gray-200 shadow-md transition-all duration-300 cursor-pointer relative
          ${activeCard === 3 ? "z-50 scale-105 shadow-2xl bg-gray-100" : "hover:scale-105 hover:shadow-xl"}
        `}
      >
        <h3 className="text-lg font-bold text-[#1f2937] mb-2"> <span>📢 </span>Da’wah & Outreach Programs
 </h3>
        <p className="text-sm text-gray-600 mb-4">Our Da’wah Institute leads outreach efforts across communities and online, promoting Islamic values with compassion and wisdom. Through public lectures, interfaith dialogues, and prison outreach, our programs empower change-makers and provide access to free Islamic materials.

        </p>
        <Link to="https://web-sandbox.oaiusercontent.com/what-we-do/dawah-outreach" className="text-blue-900 text-sm font-medium hover:underline">
          Learn More →
        </Link>
      </div>

      {/* Card 4 */}
      <div
        onClick={() => handleClick(4)}
        className={`bg-white p-6 rounded-xl border border-gray-200 shadow-md transition-all duration-300 cursor-pointer relative
          ${activeCard === 4 ? "z-50 scale-105 shadow-2xl bg-gray-100" : "hover:scale-105 hover:shadow-xl"}
        `}
      >
        <h3 className="text-lg font-bold text-[#1f2937] mb-2"><span>👩‍🏫 </span> Women’s Islamic Education & Marriage Counselling
 </h3>
        <p className="text-sm text-gray-600 mb-4">We offer exclusive, scholarship-supported programs for Muslim women focused on spiritual growth, family life, and personal development. From Tafsir and Fiqh to pre-marital counselling and parenting workshops, our safe spaces promote empowerment through faith.

        </p>
        <Link to="https://web-sandbox.oaiusercontent.com/what-we-do/women-education" className="text-blue-900 text-sm font-medium hover:underline">
          Learn More →
        </Link>
      </div>

      {/* Card 5 */}
      <div
        onClick={() => handleClick(5)}
        className={`bg-white p-6 rounded-xl border border-gray-200 shadow-md transition-all duration-300 cursor-pointer relative
          ${activeCard === 5 ? "z-50 scale-105 shadow-2xl bg-gray-100" : "hover:scale-105 hover:shadow-xl"}
        `}
      >
        <h3 className="text-lg font-bold text-[#1f2937] mb-2"><span> 🌱 </span>Youth Leadership & Tarbiyyah
 </h3>
        <p className="text-sm text-gray-600 mb-4">
Our Tarbiyyah programs instill discipline, leadership, and Islamic identity in youth. Through debates, leadership bootcamps, mentorship and recreational activities, we empower youth to become ethical leaders and confident ambassadors of Islam — all under full scholarships.
</p>
        <Link to="https://web-sandbox.oaiusercontent.com/what-we-do/youth-leadership" className="text-blue-900 text-sm font-medium hover:underline">
          Learn More →
        </Link>
      </div>

      {/* Card 6 */}
      <div
        onClick={() => handleClick(6)}
        className={`bg-white p-6 rounded-xl border border-gray-200 shadow-md transition-all duration-300 cursor-pointer relative
          ${activeCard === 6 ? "z-50 scale-105 shadow-2xl bg-gray-100" : "hover:scale-105 hover:shadow-xl"}
        `}
      >
        <h3 className="text-lg font-bold text-[#1f2937] mb-2"> <span> 💻 </span>  Online & Distance Learning
</h3>
        <p className="text-sm text-gray-600 mb-4">Our flexible online programs deliver high-quality Islamic education globally. With recorded video lessons, live Zoom sessions, and interactive assessments, students of all backgrounds can learn remotely, often with the support of partial or full scholarships.

        </p>
        <Link to="https://web-sandbox.oaiusercontent.com/what-we-do/online-learning" className="text-blue-900 text-sm font-medium hover:underline">
          Learn More →
        </Link>
      </div>
    </div>

    </section>

      {/* Online Courses */}
          <section className="py-16 px-6 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Online Courses</h2>
        <p className="text-gray-600">Flexible learning from anywhere</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 flex-wrap mb-8">
        {courseCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-5 py-2 rounded-full border transition text-sm ${
              activeCategory === cat.key
                ? "bg-[#111827] text-white"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Course Preview */}
      <div className="max-w-xl mx-auto bg-gray-900 p-6 rounded-xl text-center shadow">
        <h3 className="text-xl  font-bold mb-2 text-white">
          {coursePreviews[activeCategory].title}
        </h3>
        <p className="text-sm text-white mb-4">{coursePreviews[activeCategory].desc}</p>
        <Link
          to='/courses'
          className="inline-block bg-white text-gray-900 px-6 py-2 rounded-full text-sm"
        >
          View Course
        </Link>
      </div>
    </section>
 <section className="bg-gray-50 py-16 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
    
    {/* Left Text Block */}
    <div className="flex-1">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
      <p className="text-gray-600 leading-relaxed">
        Daarus Salam Tahfidh Int'l Academy is dedicated to nurturing a new generation of Muslim
        learners by providing them with access to quality Quranic education, Islamic values, and
        a holistic academic experience. We aim to instill a love for the Quran and Sunnah in every
        student, empowering them to grow with discipline, knowledge, and purpose.
      </p>
    </div>

    {/* Right Contact Form */}
    <div className="flex-1 bg-white p-8 shadow-md rounded-lg w-full">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Us</h3>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Message"
          rows="5"
          className="w-full p-3 border border-gray-300 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-gray-900 text-white px-6 py-3 rounded-full w-full"
        >
          Send Message
        </button>
      </form>
    </div>

  </div>
</section>



    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left Content: Text + Slider */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-gray-600 mb-6">
            Hear inspiring stories from our students about how learning here has shaped their faith and future.
          </p>
          
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="max-w-md text-gray-900"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                  <p className="text-lg font-medium text-gray-800 mb-2">“{t.quote}”</p>
                  <p className="text-sm text-gray-500">– {t.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Content: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/home.png"
            alt="Happy Arabic Student"
            className="w-full max-w-5xl rounded-xl shadow-lg object-cover"
          />
        </div>
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
              <FaPhone /> +234 800 000 0000
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
