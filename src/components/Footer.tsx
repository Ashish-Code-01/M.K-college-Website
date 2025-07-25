import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Send
} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Connected with Greenfield</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get the latest news, events, and updates from Greenfield Institute of Technology
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200"
              >
                <Send size={18} />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Greenfield Institute</h3>
                  <p className="text-sm text-gray-300">of Technology</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Empowering minds, shaping futures. Greenfield Institute of Technology is committed to excellence in education, research, and innovation.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/admissions" className="text-gray-300 hover:text-white transition-colors duration-200">Admissions</Link></li>
                <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors duration-200">Academic Programs</Link></li>
                <li><Link to="/departments" className="text-gray-300 hover:text-white transition-colors duration-200">Departments</Link></li>
                <li><Link to="/campus-life" className="text-gray-300 hover:text-white transition-colors duration-200">Student Life</Link></li>
                <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors duration-200">News & Events</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Alumni</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Career Services</a></li>
              </ul>
            </div>

            {/* Academics */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Academics</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Undergraduate Programs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Graduate Programs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Diploma Courses</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Research</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Library</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Online Learning</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Academic Calendar</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-emerald-500 mt-1" size={16} />
                  <div>
                    <p className="text-gray-300 text-sm">123 Education Avenue</p>
                    <p className="text-gray-300 text-sm">Greenfield City, GC 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-emerald-500" size={16} />
                  <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-emerald-500" size={16} />
                  <p className="text-gray-300 text-sm">info@greenfield-tech.edu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Greenfield Institute of Technology. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;