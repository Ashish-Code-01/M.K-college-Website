import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  GraduationCap,
  Users,
  BookOpen,
  Home,
  Award,
  Calendar
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiry: 'general',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your inquiry! We will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        inquiry: 'general',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Campus Address',
      details: [
        '123 Education Avenue',
        'Greenfield City, GC 12345',
        'United States'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Main Office: +1 (555) 123-4567',
        'Admissions: +1 (555) 123-4568',
        'Student Services: +1 (555) 123-4569'
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'General: info@greenfield-tech.edu',
        'Admissions: admissions@greenfield-tech.edu',
        'Support: support@greenfield-tech.edu'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 4:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  const departments = [
    {
      icon: GraduationCap,
      name: 'Admissions Office',
      email: 'admissions@greenfield-tech.edu',
      phone: '+1 (555) 123-4568',
      description: 'Application process, entrance exams, scholarships'
    },
    {
      icon: Users,
      name: 'Student Services',
      email: 'studentservices@greenfield-tech.edu',
      phone: '+1 (555) 123-4569',
      description: 'Academic support, counseling, student life'
    },
    {
      icon: BookOpen,
      name: 'Academic Office',
      email: 'academic@greenfield-tech.edu',
      phone: '+1 (555) 123-4570',
      description: 'Course information, academic policies, transcripts'
    },
    {
      icon: Home,
      name: 'Housing Services',
      email: 'housing@greenfield-tech.edu',
      phone: '+1 (555) 123-4571',
      description: 'Dormitories, apartments, accommodation'
    },
    {
      icon: Award,
      name: 'Career Services',
      email: 'careers@greenfield-tech.edu',
      phone: '+1 (555) 123-4572',
      description: 'Placement assistance, internships, job fairs'
    },
    {
      icon: Building,
      name: 'International Office',
      email: 'international@greenfield-tech.edu',
      phone: '+1 (555) 123-4573',
      description: 'International students, visa support, exchange programs'
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Information' },
    { value: 'admissions', label: 'Admissions Inquiry' },
    { value: 'academic', label: 'Academic Programs' },
    { value: 'student-services', label: 'Student Services' },
    { value: 'housing', label: 'Housing & Accommodation' },
    { value: 'financial', label: 'Financial Aid & Scholarships' },
    { value: 'international', label: 'International Students' },
    { value: 'alumni', label: 'Alumni Relations' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're here to help! Get in touch with us for any questions, inquiries, 
              or assistance you may need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-4 rounded-full">
                      <info.icon className="text-blue-600" size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiry"
                        name="inquiry"
                        value={formData.inquiry}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition-colors duration-200"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Campus Map */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us on Campus</h3>
                <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-4 text-gray-400" size={48} />
                    <p className="text-gray-600">Interactive Campus Map</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Click to view detailed campus directions and facilities
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-blue-600 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Main Campus</h4>
                      <p className="text-gray-600 text-sm">
                        123 Education Avenue, Greenfield City, GC 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Building className="text-emerald-600 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Visitor Parking</h4>
                      <p className="text-gray-600 text-sm">
                        Available at Main Gate and Academic Block
                      </p>
                    </div>
                  </div>
                </div>

                <button className="mt-6 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-medium transition-colors duration-200">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Department Contacts</h2>
            <p className="text-xl text-gray-600">Direct contact information for specific departments</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <dept.icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{dept.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail size={14} className="text-gray-400 mr-2" />
                    <a href={`mailto:${dept.email}`} className="text-blue-600 hover:text-blue-800 text-sm">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone size={14} className="text-gray-400 mr-2" />
                    <a href={`tel:${dept.phone}`} className="text-gray-600 text-sm">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Quick Answers?</h2>
          <p className="text-xl mb-8">
            Check out our frequently asked questions or schedule a campus visit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              <MessageSquare size={20} className="mr-2" />
              View FAQ
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              <Calendar size={20} className="mr-2" />
              Schedule Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;