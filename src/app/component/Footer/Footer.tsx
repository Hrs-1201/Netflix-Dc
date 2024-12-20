import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-8">
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-gray-200">FAQ</li>
            <li className="cursor-pointer hover:text-gray-200">
              Investor Relations
            </li>
            <li className="cursor-pointer hover:text-gray-200">
              Ways to Watch
            </li>
            <li className="cursor-pointer hover:text-gray-200">
              Corporate Information
            </li>
            <li className="cursor-pointer hover:text-gray-200">
              Netflix Originals
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-gray-200">Help Center</li>
            <li className="cursor-pointer hover:text-gray-200">Jobs</li>
            <li className="cursor-pointer hover:text-gray-200">Terms of Use</li>
            <li className="cursor-pointer hover:text-gray-200">Contact Us</li>
          </ul>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-gray-200">Account</li>
            <li className="cursor-pointer hover:text-gray-200">
              Redeem Gift Cards
            </li>
            <li className="cursor-pointer hover:text-gray-200">Privacy</li>
            <li className="cursor-pointer hover:text-gray-200">Speed Test</li>
          </ul>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-gray-200">Media Center</li>
            <li className="cursor-pointer hover:text-gray-200">
              Buy Gift Cards
            </li>
            <li className="cursor-pointer hover:text-gray-200">
              Cookie Preferences
            </li>
            <li className="cursor-pointer hover:text-gray-200">
              Legal Notices
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-4" />

        {/* Social Media Section */}
        <div className="flex items-center justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-gray-200">
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200">
            <i className="fab fa-youtube text-xl"></i>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm">
          <p className="mb-4">Questions? Call 1-800-123-4567</p>
          <p>
            &copy; {new Date().getFullYear()} Netflix Clone. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
