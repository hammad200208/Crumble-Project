import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#00009c] text-white px-6 py-6">
      {/* Top Section: Left aligned contact + icons */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Left: Contact info + icons */}
        <div>
          <p className="text-sm mb-2">
            For any other questions, please contact us at{' '}
            <a
              href="mailto:info@crumblepakistan.com"
              className="font-semibold underline hover:text-gray-200"
            >
              info@crumblepakistan.com
            </a>
          </p>
          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-xl hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-xl hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookSquare className="text-xl hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Centered Links */}
      <div className="mt-6 flex justify-center gap-6 text-sm">
        <a href="#" className="hover:underline">
          Terms
        </a>
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <a href="#" className="hover:underline">
          Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
