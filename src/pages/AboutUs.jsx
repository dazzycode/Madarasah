import React from "react";
import { FaChalkboardTeacher, FaGlobe, FaBookOpen, FaUsers, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
       <div className="px-6 py-4">
      <Link
        to="/"
        className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 transition"
      >
        <FaArrowLeft className="mr-2" />
        Back to Homepage
      </Link>
    </div>
      <section className="bg-gray-700 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl  text-white font-bold mb-4">About Us</h1>
          <p className="text-white text-lg">
            Empowering minds with the beauty of Arabic and Islamic knowledge.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/home.png"
              alt="Arabic class"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              The <strong> KamaluDeen Al-Adabiy Al-Egbawy Islamic Foundation</strong> is a non-profit Islamic educational and Da’wah-based institution dedicated to nurturing minds and souls through the light of Islamic knowledge, Arabic literacy, and modern development. Established on the enduring legacy of knowledge, sincerity, and community service, the Foundation was born out of a vision to provide accessible, scholarship-based Islamic education for all  regardless of social or economic status.
For decades, the Foundation has served as a bastion of spiritual revival, educational transformation, and moral reformation across Abeokuta, Ogun State, and beyond. Our efforts have touched thousands of lives through structured Arabic and Islamic studies, community-based Da’wah, women's empowerment, youth mentorship, and modern tech-infused learning programs.
We remain committed to our core belief: “Ilm (knowledge) is a trust, and every soul deserves access to it.”


            </p>
          </div>
        </div>
      </section>
<section className="bg-white dark:bg-gray-100 py-12 px-4 md:px-16">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-6">
      Message from the Founder
    </h2>
    <p className="text-lg text-gray-900 dark:text-gray-900 leading-relaxed text-justify">The KamaluDeen Al-Adabiy Al-Egbawy Islamic Foundation was established with a singular purpose — to preserve and propagate Islamic values through timeless knowledge and purposeful action.
In an age of distraction and disconnection, our mission is to raise a generation of youth who are not only well-versed in the Qur’an and Sunnah, but also equipped with the tools of modern life. We do not see technology and spirituality as opposites, but as partners in meaningful progress.
From humble beginnings in Abeokuta, Allah has granted us the means to serve students, families, and entire communities — many of whom would not have had access to structured Islamic education without our scholarship programs. I am continually inspired by the resilience of our learners and the commitment of our teachers.
We pray for sincerity in this path, and ask Allah to accept our humble efforts. May He allow this Foundation to remain a legacy of ilm, adab, and khidmah for generations to come.


    </p>
        <p className="mt-6 text-right text-gray-900 dark:text-gray-900 font-semibold ">
Wa billahi tawfeeq.</p>
    <p className="mt-6 text-right text-gray-900 dark:text-gray-900 font-semibold italic">
      — Shaykh KamaluDeen Al-Adabiy Al-Egbawiy<br></br>Mudir & Founder


    </p>
  </div>
</section>
<section className=" py-12 px-4 md:px-16">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-900  mb-10">
      Our Institutes & Branches
    </h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {[
        {
          title: "Darul Bayan Institute – Ago Iwoye",
          image: "/home.png",
          description:"A center of excellence in classical Arabic and Islamic scholarship. Darul Bayan emphasizes memorization, grammar, and classical texts, while integrating basic modern education for a well-rounded foundation.",
        }, 
        {
          title: " KamaluDeen Arabic and Islamic Institute – Sokori, Abeokuta",
          image: "/home.png",
          description: "Our flagship branch and administrative center. It offers full-time and weekend madrasah programs, women's classes, Da’wah coordination, and houses many of our scholarship recipients.",
        },
        {
          title: " KamaluDeen Arabic and Islamic Institute – Idi Ori, Abeokuta ",
          image: "/home.png",
          description: "Known for its youth-focused curriculum and structured Qur’an memorization program, this branch trains future Imams, teachers, and community leaders from a young age.",
        },
        {
          title: " KamaluDeen Arabic and Islamic Institute – Idiya, Abeokuta",
          image: "/home.png",
          description: "Home to the Tajul Adab Mosque and the Da’wah & Outreach Center. This vibrant branch is active in public engagement, adult learning, and weekly seminars on faith, family, and social responsibility.  ",
        },
      ].map((branch, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={branch.image}
            alt={branch.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {branch.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4  text-justify line-clamp-3">
              {branch.description}
            </p>
            <Link to="#"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            >
              Read More →
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
          <p className="text-gray-600">We operate under 4 guiding missions that shape our programs, goals, and community engagement:
  </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Islamic and Arabic Teaching",
              desc: "Teaching traditional Islamic sciences and Arabic to all levels, rooted in the Qur’an and Sunnah.",
              icon: <FaChalkboardTeacher />,
            },
            {
              title: "Integrated Curriculum",
              desc: "Offering a unique blend of Islamic education with modern subjects — including emerging technologies such as software development and cybersecurity.",
              icon: <FaBookOpen />,
            },
            {
              title: "Da’wah Institute ",
              desc: "Engaging the wider community through outreach, public lectures, interfaith dialogue, and social campaigns.",
              icon: <FaGlobe />,
            },
            {
              title: "Accessible Learning (Scholarship-Focused)",
              desc: "Removing financial barriers through scholarships and sponsorships, especially for orphans, women, and youth.",
              icon: <FaUsers />,
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white shadow hover:shadow-lg transition p-6 rounded-lg text-center"
            >
              <div className="text-3xl text-gray-900 mb-3 mx-auto">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
     <section className="bg-gray-200 text-gray-900 py-16 px-6 md:px-20">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
      “What We Do” — Focus Areas of KAMALUDEEN AL-ADABIY AL-EGBAWY ISLAMIC FOUNDATION
    </h2>
    

    <div className="space-y-10">
      {/* 1 */}
      <div>
        <h3 className="text-2xl font-semibold mb-2"> <span> 📘</span>Islamic and Arabic Teaching
 </h3>
        <p className="text-gray-900 mb-2 text-justify">At the core of our Foundation lies a deep commitment to preserving, teaching, and living the sacred traditions of Islam through authentic Islamic knowledge and mastery of the Arabic language. We provide a structured, multi-level curriculum that spans the essential sciences of Islam — including Qur’an memorization (Tahfiz), Tajweed, Hadith, Fiqh, Aqeedah, and Tafsir — as well as advanced classical Arabic studies (Nahwu, Sarf, Balagha). </p>
       <p className="text-gray-900 mb-2 text-justify"> Our teaching approach is rooted in traditional scholarship and adapted to contemporary learners. Most importantly, the vast majority of students at our institution are sponsored through our scholarship programs, ensuring that access to Islamic education is never limited by financial barriers.
 </p>
 <p className="text-gray-900 mb-4 text-justify">We believe that a firm foundation in Islamic knowledge builds the moral compass that every individual and society needs. This is why our teachers are not only qualified scholars but also role models committed to nurturing hearts and minds.
 </p>
<h3 className="text-xl font-semibold mb-2">Key Offerings:

 </h3>
        <ul className="list-disc pl-6 text-gray-900 space-y-1">
          <li>Full-time and weekend Islamic programs for children, youth, and adults
 </li>
          <li>Structured Qur’anic memorization with Tajweed and revision circles
 </li>
          <li>Arabic literacy (reading, writing, and conversational fluency)</li>
 <li>Advanced subjects in Tafsir, Fiqh, Hadith, and Islamic ethics</li>
  <li>Scholarship-supported access for underprivileged families
 </li>

        </ul>
      </div>

      {/* 2 */}
      <div>
        <h3 className="text-2xl font-semibold mb-2"><span>🧠 </span> Integrated Curriculum (Arabic + Emerging Technologies)
 </h3>
        <p className="text-gray-900 mb-2 text-justify">We recognize that Islamic and Arabic education must evolve to meet the challenges of the 21st century. At our institution, we have pioneered an Integrated Curriculum that blends traditional Islamic and Arabic instruction with modern education and emerging technologies. This innovative approach prepares our students not just for the hereafter, but also for leadership, productivity, and excellence in the modern world.</p>
         <p className="text-gray-900 mb-2 text-justify">Beyond English, Mathematics, and Science, our students engage in <strong>practical, hands-on learning </strong> in areas like:
  </p>
        <ul className="list-disc pl-6 text-gray-900 space-y-1">
          <li>Software Development (Web & Mobile Applications) </li> 
          <li>Cybersecurity Principles and Practice</li>
          <li>Digital Literacy & Remote Collaboration Tools</li>
          <li>Graphics and Multimedia Design </li>
          <li>AI Literacy & Responsible Tech Use</li>
        </ul>
         <p className="text-gray-900 mb-2">This hybrid system cultivates critical thinking, problem-solving, and technical competence while remaining grounded in Islamic values. With a focus on talent discovery, creativity, and global relevance, we empower learners to thrive in both spiritual and professional spheres.
 </p>
  <p className="text-gray-900 mb-2"> Most students enrolled in the integrated curriculum benefit from our scholarship model, which enables children from low-income families to access world-class education free of cost.
</p>
<h3 className="text-xl font-semibold mb-2"> Program Highlights:
</h3>
   <ul className="list-disc pl-6 text-gray-900 space-y-1">
          <li>Modern classrooms equipped for tech-based learning </li> 
          <li>Curriculum that blends Islamic, Arabic, and modern disciplines</li>
          <li>Emerging tech tracks for youth (programming, cybersecurity, AI)</li>
          <li>Tech workshops, hackathons, and mentorship</li>
          <li>Scholarship-driven enrollment to bridge opportunity gaps</li>
        </ul>
      </div>

      {/* 3 */}
      <div>
        <h3 className="text-2xl font-semibold mb-2"><span>📢 </span>   Da’wah & Outreach Programs
</h3>
        <p className="text-gray-900 mb-2 text-justify">The Foundation’s Da’wah Institute serves as a proactive center for Islamic enlightenment, education, and inter-community engagement. We understand that Da’wah is not only about preaching but also about connecting, inspiring, and building bridges. That’s why our outreach programs are tailored to youth, families, professionals, and even non-Muslim audiences.

        </p>
         <p className="text-gray-900 mb-2 text-justify"> Through lectures, publications, street Da’wah, school visits, and digital campaigns, we bring the message of Islam with clarity, wisdom, and compassion. Our team of trained preachers and scholars are actively engaged in community development and spiritual revival across towns and online platforms.
</p>
<p className="text-gray-900 mb-2 text-justify"> Importantly, our Da’wah work is powered by volunteerism and scholarship, enabling communities to benefit from high-quality religious education and materials free of charge.
</p>
<h3 className="text-xl font-semibold mb-2">Key Programs:
</h3>
        <ul className="list-disc pl-6 text-gray-900 space-y-1">
          <li>Weekly community sermons and public lectures </li>
          <li>Interfaith and intergenerational dialogue sessions </li>
          <li>Printed and digital Da’wah literature (in Arabic, English, Yoruba) </li>
          <li> Outreach to prisons, hospitals, and remote villages</li>
          <li>Training for aspiring Da’wah workers and youth missionaries
 </li>
        </ul>

      </div>

      {/* 4 */}
      <div>
        <h3 className="text-2xl font-semibold mb-2"><span>👩‍🏫 </span> Women’s Islamic Education & Marriage Counselling
 </h3>
        <p className="text-gray-900 mb-2 text-justify">Women are the backbone of every thriving society, and their education is an investment in future generations. Our Foundation provides a range of Islamic programs dedicated exclusively to the spiritual, emotional, and intellectual growth of Muslim women and girls.

        </p>
                <p className="text-gray-900 mb-2 text-justify"> Classes are facilitated by trained female scholars and mentors, in safe and nurturing environments. Topics cover Qur’anic recitation, Hadith, Fiqh for women, parenting, modesty, and personal development. We also run pre-marital and marital counselling services, drawing on Qur’an and Sunnah to guide couples toward harmony and lasting relationships.
 </p>

        <p className="text-gray-900 mb-2 text-justify">To ensure inclusivity and community impact, most of our women’s programs are tuition-free, thanks to donor-funded scholarships.
 </p>
<h3 className="text-xl font-semibold mb-2">Highlght Include:
</h3>
        <ul className="list-disc pl-6 text-gray-900 space-y-1">
          <li> Dedicated women’s madrasah and learning circles </li>
          <li>Tafsir classes and Fiqh for personal and family matters </li>
          <li>Marriage counselling and conflict resolution by certified scholars </li>
           <li>Motherhood and Islamic parenting workshops </li>
          <li>Access to spiritual mentoring and support groups </li>
        </ul>
      </div>

      {/* 5 */}
      <div>
        <h3 className="text-2xl font-semibold mb-2"><span> 🌱</span> Youth Leadership & Tarbiyyah
</h3>
        <p className="text-gray-900 mb-2 text-justify">We are deeply invested in raising a new generation of Muslim leaders, equipped with character, confidence, and competence. Our Youth Tarbiyyah programs go beyond classroom learning to instill Islamic values, responsibility, and community consciousness.
        </p>
                <p className="text-gray-900 mb-2 text-justify">From mentorship to leadership bootcamps, from debates to Da’wah training, we provide young Muslims with tools to lead morally, speak effectively, and act ethically in all aspects of life. Our programs help counter peer pressure, identity crises, and spiritual stagnation.
 </p>
        <p className="text-gray-900 mb-2 text-justify">All youth activities are 100% scholarship-based and open to both male and female participants.
 </p>
  
<h3 className="text-xl font-semibold mb-2">Our Focus:
</h3>
        <ul className="list-disc pl-6 text-gray-900 space-y-1">
          <li> Weekly halaqah and youth mentorship sessions</li>
          <li>Public speaking, debating, and leadership workshops </li>
          <li>Islamic youth camps and recreational retreats </li>
           <li> Skill-based training (entrepreneurship, writing, organizing)</li>
          <li>Counselling support for at-risk or struggling youth </li>
        </ul>
      </div>

      {/* 6 */}
      <div>
        <h3 className="text-2xl font-semibold mb-2"><span> 💻</span>  Online & Distance Learning
</h3>
        <p className="text-gray-900 text-justify mb-2">To meet the growing demand for flexible and accessible Islamic education, the Foundation has established a robust Online Learning Platform. Designed for remote students, working professionals, and learners in diaspora, our virtual programs combine convenience with academic and spiritual depth. </p>
        <p className="text-gray-900 mb-2 text-justify"> Courses are available in Arabic, English, and Yoruba, and range from beginner to advanced levels. Live Zoom classes are complemented by recorded lectures, downloadable PDFs, and interactive assessments. We also offer personalized Qur’an correction and recitation coaching.
</p>
        <p className="text-gray-900 mb-2 text-justify">Our online school is open to all, but many participants receive full or partial scholarships through our donor sponsorships, making remote Islamic education accessible to the underserved.
 </p>
 <h3 className="text-xl font-semibold mb-2">Features Include:
</h3>
        <ul className="list-disc pl-6 text-gray-900 space-y-1">
          <li>Full online madrasah system with multiple tracks </li>
          <li> Qur’an, Arabic, Hadith, and Fiqh classes</li>
          <li>Certifications upon completion </li>
          <li>Weekly live sessions and class recordings </li>
          <li>Mobile and desktop accessibility </li>
        </ul>
      </div>
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
