import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaUniversity } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub className="text-xl" />, url: "https://github.com/campusconnect" },
    { icon: <FaLinkedin className="text-xl" />, url: "https://linkedin.com/company/campusconnect" },
    { icon: <FaTwitter className="text-xl" />, url: "https://twitter.com/campusconnect" }
  ];

  const contactInfo = [
    { icon: <MdEmail className="mr-2" />, text: "contact@campusconnect.edu" },
    { icon: <MdPhone className="mr-2" />, text: "+1 (555) 123-4567" },
    { icon: <MdLocationOn className="mr-2" />, text: "University Campus, 123 College Ave" }
  ];

  const footerLinks = [
    { title: "Quick Links", links: [
      { name: "Home", url: "/" },
      { name: "Events", url: "/events" },
      { name: "Marketplace", url: "/marketplace" },
      { name: "Notes", url: "/notes" }
    ]},
    { title: "Legal", links: [
      { name: "Privacy Policy", url: "/privacy" },
      { name: "Terms of Service", url: "/terms" },
      { name: "Cookie Policy", url: "/cookies" }
    ]}
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-900 to-purple-800 text-white pt-12 pb-6"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <FaUniversity className="text-yellow-400 text-3xl mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Campus Connect
              </span>
            </div>
            <p className="text-purple-200 mb-4 text-center md:text-left">
              Your premier platform for campus collaboration and resources.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, color: "#FACC15" }}
                  className="text-purple-200 hover:text-yellow-300 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="text-yellow-300 font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.url}
                      whileHover={{ x: 5, color: "#FACC15" }}
                      className="text-purple-200 hover:text-yellow-300 transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="text-center md:text-left">
            <h3 className="text-yellow-300 font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center justify-center md:justify-start">
                  <span className="text-yellow-300">{item.icon}</span>
                  <span className="text-purple-200 ml-2">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-700 my-6"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-300 mb-4 md:mb-0">
            &copy; {currentYear} Campus Connect. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-purple-300 hover:text-yellow-300">Privacy Policy</a>
            <a href="#" className="text-purple-300 hover:text-yellow-300">Terms of Service</a>
            <a href="#" className="text-purple-300 hover:text-yellow-300">Cookies</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;