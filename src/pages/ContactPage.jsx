
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="px-2">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 transition"
        >
          <FaArrowLeft className="mr-2" />
          Back to Homepage
        </Link>
      </div>

      <h2 className="text-3xl text-gray-900 font-bold text-center mb-4">
        📩 Contact Us
      </h2>
      <p className="text-center text-gray-900 text-lg mb-12">
        We’d love to hear from you — whether you have questions, want to enroll,
        support our work, or join our learning community.
      </p>

      {/* Grid: Contact Info + Form */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl text-gray-900 font-semibold mb-2">
              Contact Info
            </h3>
            <p className="mb-1 text-gray-900">
              <strong>Main Address:</strong>
              <br />
              Sokori, Abeokuta, Ogun State, Nigeria
            </p>
            <p className="mb-1 text-gray-900">
              <strong>Email:</strong>
              <br />
              <a href="mailto:info@kaaif.org" className="text-blue-600">
                info@kaaif.org
              </a>
            </p>
            <p className="mb-1 text-gray-900">
              <strong>Website:</strong>
              <br />
              <a
                href="https://www.kaaif.org"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.kaaif.org
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 text-2xl text-gray-900">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-blue-600" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="https://wa.me/2348012345678" target="_blank" rel="noreferrer">
              <FaWhatsapp className="hover:text-green-500" />
            </a>
          </div>

          {/* WhatsApp Quick Link */}
          <a
            href="https://wa.me/2348012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-white bg-gray-900 px-4 py-2 rounded-md hover:bg-green-700"
          >
            <FaWhatsapp className="text-lg text-green-500" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-900 px-10 rounded-[2em] py-10 space-y-4">
          <div>
            <label className="block mb-1 text-white font-medium">Full Name</label>
            <input
              type="text"
              required
              className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="block mb-1 text-white font-medium">Email Address</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="block mb-1 text-white font-medium">
              Phone Number (optional)
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="block mb-1 text-white font-medium">Message</label>
            <textarea
              required
              rows="5"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-gray-900 bg-white px-6 py-2 rounded-md hover:bg-gray-400"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Embedded Map */}
      <div className="mt-12">
        <h3 className="text-xl text-gray-900 font-semibold mb-4">Our Location</h3>
        <div className="w-full h-72 rounded-md overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.5365357901947!2d3.346070274057265!3d7.066224316774449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4b7d02b1a4d9%3A0xe0b775a3a7a03c41!2sSokori%2C%20Abeokuta%2C%20Ogun%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1719370981924"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="KAAIF Location"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

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
};

export default ContactPage;
