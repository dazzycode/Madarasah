// src/pages/Tutor.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaBook,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaPhoneAlt,
  FaEnvelope,
  FaChalkboardTeacher,
  FaFacebook, FaTwitter, FaInstagram, FaPhone,
} from "react-icons/fa";

export default function Tutors() {
  const tutors = [
    {
      name: "Ustadhah Fatimah AbdulQadir",
      img: "/founder.jpg",
      qualifications: "B.A. Arabic, Diploma in Tajweed",
      subjects: "Qur’an Recitation, Women’s Fiqh, Islamic Counseling",
      branch: "Idiya, Abeokuta",
      contact: "+234 800 123 4567",
      email: "fatimah@academy.org",
      experience: "10+ years in Quranic and Islamic education",
    },
    {
      name: "Ustadh Ahmad Bello",
      img: "/founder.jpg",
      qualifications: "M.A. Islamic Studies, Ijazah in Quran",
      subjects: "Tajweed, Fiqh, Seerah",
      branch: "Yaba, Lagos",
      contact: "+234 800 654 3210",
      email: "ahmad@academy.org",
      experience: "12 years teaching in Islamic schools",
    },
    {
      name: "Ustadhah Aisha Yusuf",
      img: "/founder.jpg",
      qualifications: "B.Ed Islamic Studies",
      subjects: "Qur’an, Arabic Grammar, Islamic Ethics",
      branch: "Zaria, Kaduna",
      contact: "+234 800 987 1234",
      email: "aisha@academy.org",
      experience: "9 years with a focus on female youth education",
    },
     {
      name: "Ustadhah Fatimah AbdulQadir",
      img: "/founder.jpg",
      qualifications: "B.A. Arabic, Diploma in Tajweed",
      subjects: "Qur’an Recitation, Women’s Fiqh, Islamic Counseling",
      branch: "Idiya, Abeokuta",
      contact: "+234 800 123 4567",
      email: "fatimah@academy.org",
      experience: "10+ years in Quranic and Islamic education",
    },
    {
      name: "Ustadh Ahmad Bello",
      img: "/founder.jpg",
      qualifications: "M.A. Islamic Studies, Ijazah in Quran",
      subjects: "Tajweed, Fiqh, Seerah",
      branch: "Yaba, Lagos",
      contact: "+234 800 654 3210",
      email: "ahmad@academy.org",
      experience: "12 years teaching in Islamic schools",
    },
    {
      name: "Ustadhah Aisha Yusuf",
      img: "/founder.jpg",
      qualifications: "B.Ed Islamic Studies",
      subjects: "Qur’an, Arabic Grammar, Islamic Ethics",
      branch: "Zaria, Kaduna",
      contact: "+234 800 987 1234",
      email: "aisha@academy.org",
      experience: "9 years with a focus on female youth education",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Back Button */}
      <div className="px-6 pt-6">
        <Link
          to="/"
          className="inline-flex items-center text-gray-700 hover:text-gray-900 transition"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
      </div>

      {/* Banner */}
      <section className="relative h-[50vh] bg-cover bg-center mt-6" style={{ backgroundImage: "url('/home.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Our Tutors Are Experienced, Qualified, and Passionate
          </h1>
        </div>
      </section>

      {/* Section Heading */}
      <div className="text-center mt-12 mb-6 px-6">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Teachers</h2>
        <p className="text-gray-600">Dedicated educators shaping the future of Islamic knowledge</p>
      </div>

      {/* Tutor Cards */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-16">
        {tutors.map((tutor, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <img
              src={tutor.img}
              alt={tutor.name}
              className="w-24 h-24 rounded-full object-cover mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold text-center text-gray-800 mb-2"> {tutor.name}</h3>
            <div className="space-y-4 text-sm text-gray-700">
  <div className="flex items-start gap-3">
    <FaGraduationCap className="mt-1 text-gray-900" />
    <p><strong>Qualifications:</strong> {tutor.qualifications}</p>
  </div>
  <div className="flex items-start gap-3">
    <FaBook className="mt-1 text-gray-900" />
    <p><strong>Subjects:</strong> {tutor.subjects}</p>
  </div>
  <div className="flex items-start gap-3">
    <FaMapMarkerAlt className="mt-1 text-gray-900" />
    <p><strong>Branch:</strong> {tutor.branch}</p>
  </div>
  <div className="flex items-start gap-3">
    <FaPhoneAlt className="mt-1 text-gray-900" />
    <p><strong>Contact:</strong> {tutor.contact}</p>
  </div>
  <div className="flex items-start gap-3">
    <FaEnvelope className="mt-1 text-gray-900" />
    <p><strong>Email:</strong> {tutor.email}</p>
  </div>
  <div className="flex items-start gap-3">
    <FaChalkboardTeacher className="mt-1 text-gray-900" />
    <p><strong>Experience:</strong> {tutor.experience}</p>
  </div>
</div>

          </div>
        ))}
      </div>
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
