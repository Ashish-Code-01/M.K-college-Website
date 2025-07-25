import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  Download,
  ExternalLink,
  Filter,
  Search
} from 'lucide-react';

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Undergraduate', 'Postgraduate', 'Diploma'];

  const courses = [
    // Undergraduate Programs
    {
      id: 1,
      name: 'Computer Science & Engineering',
      category: 'Undergraduate',
      duration: '4 years',
      type: 'B.Tech',
      students: 120,
      description: 'Comprehensive program covering programming, algorithms, software engineering, AI, and machine learning.',
      highlights: ['AI & Machine Learning', 'Software Development', 'Data Structures', 'Web Technologies'],
      eligibility: '12th with Physics, Chemistry, Mathematics (60% minimum)',
      fees: '$15,000/year',
      brochureLink: '#'
    },
    {
      id: 2,
      name: 'Mechanical Engineering',
      category: 'Undergraduate',
      duration: '4 years',
      type: 'B.Tech',
      students: 100,
      description: 'Covers design, manufacturing, thermal systems, and advanced materials with hands-on laboratory experience.',
      highlights: ['CAD/CAM', 'Robotics', 'Thermal Engineering', 'Manufacturing'],
      eligibility: '12th with Physics, Chemistry, Mathematics (60% minimum)',
      fees: '$14,000/year',
      brochureLink: '#'
    },
    {
      id: 3,
      name: 'Electrical & Electronics Engineering',
      category: 'Undergraduate',
      duration: '4 years',
      type: 'B.Tech',
      students: 90,
      description: 'Focus on power systems, electronics, control systems, and renewable energy technologies.',
      highlights: ['Power Systems', 'Electronics', 'Control Systems', 'Renewable Energy'],
      eligibility: '12th with Physics, Chemistry, Mathematics (60% minimum)',
      fees: '$14,500/year',
      brochureLink: '#'
    },
    {
      id: 4,
      name: 'Civil Engineering',
      category: 'Undergraduate',
      duration: '4 years',
      type: 'B.Tech',
      students: 80,
      description: 'Comprehensive study of structural design, transportation, environmental engineering, and construction management.',
      highlights: ['Structural Design', 'Transportation', 'Environmental Engineering', 'Construction Management'],
      eligibility: '12th with Physics, Chemistry, Mathematics (60% minimum)',
      fees: '$13,500/year',
      brochureLink: '#'
    },

    // Postgraduate Programs
    {
      id: 5,
      name: 'Master of Computer Applications',
      category: 'Postgraduate',
      duration: '2 years',
      type: 'MCA',
      students: 60,
      description: 'Advanced program focusing on software development, database management, and emerging technologies.',
      highlights: ['Advanced Programming', 'Database Systems', 'Cloud Computing', 'Mobile Development'],
      eligibility: 'Bachelor\'s degree in Computer Science or related field (55% minimum)',
      fees: '$12,000/year',
      brochureLink: '#'
    },
    {
      id: 6,
      name: 'M.Tech in Artificial Intelligence',
      category: 'Postgraduate',
      duration: '2 years',
      type: 'M.Tech',
      students: 40,
      description: 'Specialized program in AI, machine learning, deep learning, and neural networks.',
      highlights: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision'],
      eligibility: 'B.Tech in CSE/ECE/IT (60% minimum)',
      fees: '$16,000/year',
      brochureLink: '#'
    },
    {
      id: 7,
      name: 'M.Tech in Data Science',
      category: 'Postgraduate',
      duration: '2 years',
      type: 'M.Tech',
      students: 35,
      description: 'Comprehensive program covering data analytics, big data technologies, and statistical modeling.',
      highlights: ['Big Data Analytics', 'Statistical Modeling', 'Data Visualization', 'Predictive Analytics'],
      eligibility: 'B.Tech in CSE/ECE/IT or related field (60% minimum)',
      fees: '$15,500/year',
      brochureLink: '#'
    },

    // Diploma Programs
    {
      id: 8,
      name: 'Diploma in Computer Science',
      category: 'Diploma',
      duration: '3 years',
      type: 'Diploma',
      students: 150,
      description: 'Practical-oriented program covering programming fundamentals and software development.',
      highlights: ['Programming Fundamentals', 'Web Development', 'Database Management', 'Software Testing'],
      eligibility: '10th grade with Mathematics and Science (50% minimum)',
      fees: '$8,000/year',
      brochureLink: '#'
    },
    {
      id: 9,
      name: 'Diploma in Mechanical Engineering',
      category: 'Diploma',
      duration: '3 years',
      type: 'Diploma',
      students: 100,
      description: 'Hands-on training in mechanical systems, manufacturing processes, and industrial machinery.',
      highlights: ['Manufacturing Processes', 'Industrial Machinery', 'Quality Control', 'Maintenance'],
      eligibility: '10th grade with Mathematics and Science (50% minimum)',
      fees: '$7,500/year',
      brochureLink: '#'
    },
    {
      id: 10,
      name: 'Diploma in Electronics',
      category: 'Diploma',
      duration: '3 years',
      type: 'Diploma',
      students: 80,
      description: 'Comprehensive training in electronic circuits, communication systems, and embedded systems.',
      highlights: ['Electronic Circuits', 'Communication Systems', 'Embedded Systems', 'PCB Design'],
      eligibility: '10th grade with Mathematics and Science (50% minimum)',
      fees: '$7,800/year',
      brochureLink: '#'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Academic Programs</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our comprehensive range of undergraduate, postgraduate, and diploma programs 
              designed to prepare you for success in today's technology-driven world.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-600" size={20} />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-blue-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                        {course.type}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.name}</h3>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div className="flex items-center mb-1">
                        <Clock size={16} className="mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-1" />
                        {course.students} students
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">{course.description}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="border-t pt-6 space-y-3">
                    <div>
                      <span className="font-medium text-gray-900">Eligibility: </span>
                      <span className="text-gray-600">{course.eligibility}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Annual Fees: </span>
                      <span className="text-emerald-600 font-semibold">{course.fees}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                      <ExternalLink size={18} className="mr-2" />
                      Apply Now
                    </button>
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                      <Download size={18} className="mr-2" />
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Programs?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs are designed to provide comprehensive education that prepares you for real-world challenges
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
                <BookOpen className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry-Relevant Curriculum</h3>
              <p className="text-gray-600">
                Our curriculum is regularly updated in consultation with industry experts to ensure relevance and practical applicability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-100 p-4 rounded-full inline-block mb-6">
                <Users className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Faculty</h3>
              <p className="text-gray-600">
                Learn from experienced faculty members who bring both academic excellence and industry expertise to the classroom.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-purple-100 p-4 rounded-full inline-block mb-6">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strong Placement Support</h3>
              <p className="text-gray-600">
                Our dedicated placement cell ensures excellent career opportunities with top companies and organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Academic Journey?</h2>
          <p className="text-xl mb-8">
            Choose from our wide range of programs and take the first step towards a successful career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
              Start Application Process
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;