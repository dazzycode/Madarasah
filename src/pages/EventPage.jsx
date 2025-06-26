import React, { useState } from "react";
import {  FaCamera, FaNewspaper, FaGraduationCap, FaPlay, FaCloudDownloadAlt, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const EventPage = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [playVideo, setPlayVideo] = useState(false);

  const gallery = {
    "2025": ["/home.png", "/home.png"],
    "2024": ["/home.png"],
 "2023": ["/home.png", "/home.png", "/home.png"],

  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-5 space-y-8 text-gray-900">
         <div className="px-2">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 transition"
        >
          <FaArrowLeft className="mr-2" />
          Back to Homepage
        </Link></div>
      {/* Section: Upcoming Events */}
      <section>
        <div className="bg-gray-900 py-5 ">  <h2 className="text-2xl md:text-3xl text-center text-white font-bold mb-4"> Upcoming Events</h2>
</div>
        <div className="space-y-4">
          {[
            {
              title: "Eid Lecture & Qur’an Quiz Competition",
              date: "July 2025",
              cta: "RSVP",
            },
            {
              title: "Summer Youth Leadership Camp",
              date: "August 2025",
              cta: "RSVP",
            },
            {
              title: "Virtual Da’wah Symposium",
              date: "September 2025",
              cta: "Join Online",
            },
          ].map((event, idx) => (
            <div
              key={idx}
              className="border border-gray-300 p-4 rounded-lg flex flex-col md:flex-row md:justify-between items-start md:items-center"
            >
              <div>
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.date}</p>
              </div>
              <button className="mt-2 md:mt-0 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-purple-800 text-sm">
                {event.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Recent Highlights */}
      <section>
        <h2 className="text-2xl font-bold mb-4"> Recent Highlights</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <FaGraduationCap className="text-gray-900" />
            <p> Graduation Ceremony at Darul Bayan – May 2025</p>
          </div>
          <div className="flex items-center gap-4">
            <FaCamera className="text-gray-900" />
            <p>Gallery: Ramadan Feeding Project</p>
          </div>
          <div className="flex items-center gap-4">
            <FaNewspaper className="text-gray-900" />
            <p>Article: Why Arabic Matters in a Digital Age</p>
          </div>
        </div>
      </section>

      {/* Section: Archive */}
      <section>
        <h2 className="text-2xl font-bold mb-4"> Photo & Video Archive</h2>

        {/* Filter by year */}
        <div className="mb-4">
          <label htmlFor="year" className="block mb-1 font-medium">
            Filter by Year
          </label>
          <select
            id="year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          >
            {Object.keys(gallery).map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery[selectedYear].map((img, index) => (
            <div key={index} className="relative group">
              <img
                src={img}
                alt={`Event ${index}`}
                className="rounded-md w-full object-cover h-48"
              />
              <a
                href={img}
                download
                className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 transition"
              >
                <FaCloudDownloadAlt /> Download
              </a>
            </div>
          ))}
        </div>

    
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-2">🎥 Recent Lecture</h3>

      <div className="relative w-full aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
        {!playVideo ? (
          <div
            className="w-full h-full cursor-pointer bg-black"
            onClick={() => setPlayVideo(true)}
          >
            {/* Thumbnail Image */}
            <img
  src="/home.png"
  alt="Video thumbnail"
  className="w-full h-48 object-cover rounded-md"
/>

            {/* Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-80 rounded-full p-4 hover:scale-110 transition">
                <FaPlay className="text-2xl text-purple-700" />
              </div>
            </div>
          </div>
        ) : (
          // Embedded Video
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
            title="Lecture Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64"
          ></iframe>
        )}
      </div>
    </div>


        {/* CTA */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800">
     View Full Gallery
          </button>
          <button className="bg-white border border-gray-900 px-6 py-2 rounded-full hover:bg-gray-100">
             Submit a Report or Testimony
          </button>
        </div>
      </section>
       {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-6 mt-20">
              <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
                {/* Left: Newsletter */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Subscribe to our newsletter</h3>
      
                  <form
                    action="https://formspree.io/f/yourFormID" // 🔁 Replace with your Formspree form ID
                    method="POST"
                    className="space-y-3"
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none"
                      required
                    />
                    <div className="flex items-center gap-2 text-sm">
                      <input type="checkbox" id="privacy" className="accent-purple-600" required />
                      <label htmlFor="privacy" className="text-gray-400">
                        I agree to the privacy policy
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="bg-white hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm"
                    >
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
                    <a href="mailto:info@kaaif.org">
                      <p className="flex items-center gap-2 underline">
                        <FaEnvelope /> info@kaaif.org
                      </p>
                    </a>
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
};

export default EventPage;
