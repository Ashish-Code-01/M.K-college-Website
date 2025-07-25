import React, { useState } from 'react';
import { 
  Calendar,
  CheckCircle,
  FileText,
  Users,
  Clock,
  AlertCircle,
  Download,
  ExternalLink,
  Plus,
  Minus
} from 'lucide-react';

const Admissions: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const admissionSteps = [
    {
      step: 1,
      title: 'Online Application',
      description: 'Complete the online application form with personal and academic details',
      timeline: '1-2 weeks before entrance exam'
    },
    {
      step: 2,
      title: 'Entrance Examination',
      description: 'Appear for the GIT entrance exam or qualify through national level exams',
      timeline: 'As per exam schedule'
    },
    {
      step: 3,
      title: 'Document Verification',
      description: 'Submit required documents for verification',
      timeline: 'After qualifying exam'
    },
    {
      step: 4,
      title: 'Counseling & Seat Allotment',
      description: 'Participate in counseling process for course and seat selection',
      timeline: '1-2 weeks after results'
    },
    {
      step: 5,
      title: 'Admission Confirmation',
      description: 'Pay fees and complete admission formalities',
      timeline: 'As per allotment schedule'
    }
  ];

  const importantDates = [
    { event: 'Application Form Release', date: 'January 15, 2025', status: 'upcoming' },
    { event: 'Last Date for Application', date: 'March 30, 2025', status: 'upcoming' },
    { event: 'Admit Card Release', date: 'April 15, 2025', status: 'upcoming' },
    { event: 'Entrance Examination', date: 'May 10-12, 2025', status: 'upcoming' },
    { event: 'Result Declaration', date: 'May 25, 2025', status: 'upcoming' },
    { event: 'Counseling Process', date: 'June 1-15, 2025', status: 'upcoming' },
    { event: 'Classes Commence', date: 'July 15, 2025', status: 'upcoming' }
  ];

  const eligibilityCriteria = [
    {
      program: 'B.Tech Programs',
      criteria: [
        'Completed 10+2 with Physics, Chemistry, and Mathematics',
        'Minimum 60% aggregate marks in 12th grade',
        'Valid score in JEE Main or GIT entrance exam',
        'Age limit: 17-25 years'
      ]
    },
    {
      program: 'M.Tech Programs',
      criteria: [
        'Bachelor\'s degree in Engineering/Technology',
        'Minimum 60% aggregate marks in graduation',
        'Valid GATE score or GIT postgraduate entrance exam',
        'No age limit'
      ]
    },
    {
      program: 'MCA Program',
      criteria: [
        'Bachelor\'s degree in any discipline',
        'Mathematics at 10+2 or graduation level',
        'Minimum 55% aggregate marks in graduation',
        'Valid score in entrance exam'
      ]
    },
    {
      program: 'Diploma Programs',
      criteria: [
        'Completed 10th grade with Mathematics and Science',
        'Minimum 50% aggregate marks in 10th grade',
        'Age limit: 15-22 years',
        'Merit-based selection'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What is the application fee for different programs?',
      answer: 'The application fee varies by program: B.Tech - $50, M.Tech - $40, MCA - $40, Diploma - $30. Payment can be made online through credit card, debit card, or net banking.'
    },
    {
      question: 'Is there any reservation policy?',
      answer: 'Yes, we follow the government reservation policy with seats reserved for SC/ST/OBC candidates and physically challenged students as per regulations.'
    },
    {
      question: 'Can I apply for multiple programs?',
      answer: 'Yes, you can apply for multiple programs but you need to fill separate applications and pay fees for each program.'
    },
    {
      question: 'What documents are required for admission?',
      answer: 'Required documents include academic transcripts, entrance exam scorecard, identity proof, address proof, passport-size photographs, and category certificate (if applicable).'
    },
    {
      question: 'Is there any scholarship available?',
      answer: 'Yes, we offer merit-based scholarships, need-based financial aid, and special scholarships for exceptional students. Details are available on the scholarship portal.'
    },
    {
      question: 'What is the refund policy for fees?',
      answer: 'Fees are refundable as per the institute\'s refund policy. Generally, 90% is refunded if withdrawal is before classes begin, reducing to 50% after classes commence.'
    },
    {
      question: 'Can international students apply?',
      answer: 'Yes, international students are welcome. Additional requirements include English proficiency test scores and visa documentation.'
    },
    {
      question: 'Is hostel accommodation guaranteed?',
      answer: 'Hostel accommodation is provided on a first-come-first-served basis. Priority is given to outstation students and based on distance from the campus.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Admissions 2025</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Join Greenfield Institute of Technology and be part of a community dedicated to 
              excellence, innovation, and academic achievement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                <ExternalLink size={20} className="mr-2" />
                Apply Online
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                <Download size={20} className="mr-2" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Important Dates</h2>
            <p className="text-xl text-gray-600">Mark your calendar with these crucial admission dates</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantDates.map((date, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-l-blue-500">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{date.event}</h3>
                    <div className="flex items-center text-blue-600">
                      <Calendar size={16} className="mr-2" />
                      <span className="font-medium">{date.date}</span>
                    </div>
                  </div>
                  <div className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium">
                    {date.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to secure your admission at Greenfield Institute of Technology
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {admissionSteps.map((step, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl z-10">
                    {step.step}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <div className="flex items-center text-sm text-blue-600">
                        <Clock size={16} className="mr-2" />
                        <span className="font-medium">{step.timeline}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
            <p className="text-xl text-gray-600">Check if you meet the requirements for your desired program</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {eligibilityCriteria.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{program.program}</h3>
                <ul className="space-y-3">
                  {program.criteria.map((criterion, criterionIndex) => (
                    <li key={criterionIndex} className="flex items-start">
                      <CheckCircle className="text-emerald-500 mr-3 mt-0.5" size={16} />
                      <span className="text-gray-600">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common admission-related queries</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <Minus className="text-gray-500" size={20} />
                  ) : (
                    <Plus className="text-gray-500" size={20} />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Actions</h2>
            <p className="text-xl">Everything you need for a smooth admission process</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-xl text-center hover:bg-opacity-20 transition-colors duration-200">
              <FileText size={32} className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Application Form</h3>
              <p className="text-sm text-blue-100 mb-4">Start your application process</p>
              <button className="text-emerald-300 hover:text-white font-medium">Apply Now →</button>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl text-center hover:bg-opacity-20 transition-colors duration-200">
              <Download size={32} className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Prospectus</h3>
              <p className="text-sm text-blue-100 mb-4">Download detailed information</p>
              <button className="text-emerald-300 hover:text-white font-medium">Download →</button>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl text-center hover:bg-opacity-20 transition-colors duration-200">
              <Users size={32} className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Campus Visit</h3>
              <p className="text-sm text-blue-100 mb-4">Schedule a campus tour</p>
              <button className="text-emerald-300 hover:text-white font-medium">Schedule →</button>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl text-center hover:bg-opacity-20 transition-colors duration-200">
              <AlertCircle size={32} className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Get Help</h3>
              <p className="text-sm text-blue-100 mb-4">Contact admission counselor</p>
              <button className="text-emerald-300 hover:text-white font-medium">Contact →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;