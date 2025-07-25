import React, { useState } from 'react';
import { 
  Users, 
  Microscope, 
  BookOpen, 
  Award,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react';

const Departments: React.FC = () => {
  const [expandedDept, setExpandedDept] = useState<string | null>('CSE');

  const departments = [
    {
      id: 'CSE',
      name: 'Computer Science & Engineering',
      head: 'Dr. Rajesh Kumar',
      headImage: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      faculty: 24,
      students: 450,
      labs: 8,
      research: 15,
      description: 'Leading department in computer science education and research, focusing on artificial intelligence, machine learning, software engineering, and cybersecurity.',
      specializations: [
        'Artificial Intelligence & Machine Learning',
        'Data Science & Analytics',
        'Cybersecurity',
        'Software Engineering',
        'Cloud Computing',
        'Mobile App Development'
      ],
      laboratories: [
        'AI & Machine Learning Lab',
        'Data Science Lab',
        'Cybersecurity Lab',
        'Software Engineering Lab',
        'Computer Networks Lab',
        'Programming Languages Lab',
        'Database Management Lab',
        'Computer Graphics Lab'
      ],
      researchProjects: [
        {
          title: 'Deep Learning for Medical Image Analysis',
          leader: 'Dr. Priya Sharma',
          funding: '$250,000'
        },
        {
          title: 'Blockchain-based Secure Voting System',
          leader: 'Prof. Amit Singh',
          funding: '$180,000'
        },
        {
          title: 'Natural Language Processing for Regional Languages',
          leader: 'Dr. Sunita Gupta',
          funding: '$200,000'
        }
      ],
      facultyMembers: [
        {
          name: 'Dr. Rajesh Kumar',
          position: 'Head of Department',
          specialization: 'Machine Learning, AI',
          experience: '18 years',
          email: 'rajesh.kumar@greenfield-tech.edu'
        },
        {
          name: 'Dr. Priya Sharma',
          position: 'Professor',
          specialization: 'Computer Vision, Deep Learning',
          experience: '15 years',
          email: 'priya.sharma@greenfield-tech.edu'
        },
        {
          name: 'Prof. Amit Singh',
          position: 'Associate Professor',
          specialization: 'Cybersecurity, Blockchain',
          experience: '12 years',
          email: 'amit.singh@greenfield-tech.edu'
        }
      ]
    },
    {
      id: 'ME',
      name: 'Mechanical Engineering',
      head: 'Prof. Michael Thompson',
      headImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      faculty: 20,
      students: 380,
      labs: 12,
      research: 12,
      description: 'Comprehensive mechanical engineering program covering design, manufacturing, thermal systems, robotics, and sustainable energy solutions.',
      specializations: [
        'Robotics & Automation',
        'Thermal Engineering',
        'Manufacturing Technology',
        'Automotive Engineering',
        'Renewable Energy Systems',
        'CAD/CAM'
      ],
      laboratories: [
        'Robotics & Automation Lab',
        'Thermal Engineering Lab',
        'Manufacturing Technology Lab',
        'Automotive Systems Lab',
        'Materials Testing Lab',
        'CAD/CAM Lab',
        'Fluid Mechanics Lab',
        'Heat Transfer Lab',
        'Machine Design Lab',
        'Metrology Lab',
        'Workshop Practice Lab',
        'Renewable Energy Lab'
      ],
      researchProjects: [
        {
          title: 'Autonomous Robot Navigation Systems',
          leader: 'Dr. Sarah Wilson',
          funding: '$300,000'
        },
        {
          title: 'Solar Thermal Energy Storage',
          leader: 'Prof. David Lee',
          funding: '$220,000'
        },
        {
          title: 'Advanced Manufacturing Techniques',
          leader: 'Dr. Robert Chen',
          funding: '$190,000'
        }
      ],
      facultyMembers: [
        {
          name: 'Prof. Michael Thompson',
          position: 'Head of Department',
          specialization: 'Robotics, Automation',
          experience: '20 years',
          email: 'michael.thompson@greenfield-tech.edu'
        },
        {
          name: 'Dr. Sarah Wilson',
          position: 'Professor',
          specialization: 'Robotics, Control Systems',
          experience: '16 years',
          email: 'sarah.wilson@greenfield-tech.edu'
        },
        {
          name: 'Prof. David Lee',
          position: 'Associate Professor',
          specialization: 'Thermal Engineering, Renewable Energy',
          experience: '14 years',
          email: 'david.lee@greenfield-tech.edu'
        }
      ]
    },
    {
      id: 'EEE',
      name: 'Electrical & Electronics Engineering',
      head: 'Dr. Jennifer Davis',
      headImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      faculty: 18,
      students: 320,
      labs: 10,
      research: 10,
      description: 'Cutting-edge electrical and electronics engineering department focusing on power systems, electronics, control systems, and renewable energy.',
      specializations: [
        'Power Systems Engineering',
        'Electronics & Communication',
        'Control Systems',
        'Renewable Energy',
        'VLSI Design',
        'Signal Processing'
      ],
      laboratories: [
        'Power Systems Lab',
        'Electronics Lab',
        'Control Systems Lab',
        'VLSI Design Lab',
        'Signal Processing Lab',
        'Communication Systems Lab',
        'Renewable Energy Lab',
        'Electric Machines Lab',
        'Circuit Analysis Lab',
        'Microprocessor Lab'
      ],
      researchProjects: [
        {
          title: 'Smart Grid Technology Development',
          leader: 'Dr. Jennifer Davis',
          funding: '$280,000'
        },
        {
          title: 'VLSI Design for IoT Applications',
          leader: 'Prof. James Wilson',
          funding: '$200,000'
        },
        {
          title: 'Renewable Energy Integration Systems',
          leader: 'Dr. Lisa Brown',
          funding: '$250,000'
        }
      ],
      facultyMembers: [
        {
          name: 'Dr. Jennifer Davis',
          position: 'Head of Department',
          specialization: 'Power Systems, Smart Grids',
          experience: '17 years',
          email: 'jennifer.davis@greenfield-tech.edu'
        },
        {
          name: 'Prof. James Wilson',
          position: 'Professor',
          specialization: 'VLSI Design, Digital Systems',
          experience: '15 years',
          email: 'james.wilson@greenfield-tech.edu'
        },
        {
          name: 'Dr. Lisa Brown',
          position: 'Associate Professor',
          specialization: 'Renewable Energy, Control Systems',
          experience: '13 years',
          email: 'lisa.brown@greenfield-tech.edu'
        }
      ]
    },
    {
      id: 'CE',
      name: 'Civil Engineering',
      head: 'Prof. Alexander Smith',
      headImage: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      faculty: 16,
      students: 280,
      labs: 8,
      research: 8,
      description: 'Comprehensive civil engineering program covering structural design, transportation engineering, environmental systems, and urban planning.',
      specializations: [
        'Structural Engineering',
        'Transportation Engineering',
        'Environmental Engineering',
        'Geotechnical Engineering',
        'Water Resources Engineering',
        'Construction Management'
      ],
      laboratories: [
        'Structural Engineering Lab',
        'Transportation Lab',
        'Environmental Engineering Lab',
        'Geotechnical Lab',
        'Materials Testing Lab',
        'Surveying Lab',
        'Water Resources Lab',
        'Construction Management Lab'
      ],
      researchProjects: [
        {
          title: 'Sustainable Construction Materials',
          leader: 'Dr. Maria Rodriguez',
          funding: '$180,000'
        },
        {
          title: 'Smart Transportation Systems',
          leader: 'Prof. Alexander Smith',
          funding: '$220,000'
        },
        {
          title: 'Water Treatment Technologies',
          leader: 'Dr. John Anderson',
          funding: '$160,000'
        }
      ],
      facultyMembers: [
        {
          name: 'Prof. Alexander Smith',
          position: 'Head of Department',
          specialization: 'Structural Engineering, Earthquake Engineering',
          experience: '19 years',
          email: 'alexander.smith@greenfield-tech.edu'
        },
        {
          name: 'Dr. Maria Rodriguez',
          position: 'Professor',
          specialization: 'Construction Materials, Sustainability',
          experience: '14 years',
          email: 'maria.rodriguez@greenfield-tech.edu'
        },
        {
          name: 'Dr. John Anderson',
          position: 'Associate Professor',
          specialization: 'Environmental Engineering, Water Resources',
          experience: '12 years',
          email: 'john.anderson@greenfield-tech.edu'
        }
      ]
    }
  ];

  const toggleDepartment = (deptId: string) => {
    setExpandedDept(expandedDept === deptId ? null : deptId);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Academic Departments</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our world-class departments equipped with state-of-the-art facilities, 
              renowned faculty, and cutting-edge research opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Department Overview Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <p className="text-gray-600 font-medium">Departments</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">78</div>
                <p className="text-gray-600 font-medium">Faculty Members</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">38</div>
                <p className="text-gray-600 font-medium">Laboratories</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">45</div>
                <p className="text-gray-600 font-medium">Research Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Departments</h2>
            <p className="text-xl text-gray-600">Discover excellence in engineering education and research</p>
          </div>

          <div className="space-y-6">
            {departments.map((dept) => (
              <div key={dept.id} className="border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                {/* Department Header */}
                <div 
                  className="bg-gray-50 p-6 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => toggleDepartment(dept.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <img 
                        src={dept.headImage} 
                        alt={dept.head}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{dept.name}</h3>
                        <p className="text-gray-600">Head: {dept.head}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-8">
                      {/* Quick Stats */}
                      <div className="hidden md:flex space-x-6">
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Users className="text-blue-600" size={20} />
                          </div>
                          <div className="text-sm font-medium">{dept.faculty} Faculty</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Microscope className="text-emerald-600" size={20} />
                          </div>
                          <div className="text-sm font-medium">{dept.labs} Labs</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <BookOpen className="text-purple-600" size={20} />
                          </div>
                          <div className="text-sm font-medium">{dept.students} Students</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Award className="text-orange-600" size={20} />
                          </div>
                          <div className="text-sm font-medium">{dept.research} Research</div>
                        </div>
                      </div>
                      
                      {expandedDept === dept.id ? (
                        <ChevronUp className="text-gray-400" size={24} />
                      ) : (
                        <ChevronDown className="text-gray-400" size={24} />
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mt-4">{dept.description}</p>
                </div>

                {/* Department Details */}
                {expandedDept === dept.id && (
                  <div className="p-8 bg-white border-t">
                    <div className="grid lg:grid-cols-2 gap-12">
                      {/* Left Column */}
                      <div>
                        {/* Specializations */}
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-gray-900 mb-4">Specializations</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {dept.specializations.map((spec, index) => (
                              <span
                                key={index}
                                className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Laboratories */}
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-gray-900 mb-4">Laboratories</h4>
                          <div className="grid gap-2">
                            {dept.laboratories.map((lab, index) => (
                              <div key={index} className="flex items-center">
                                <Microscope className="text-emerald-600 mr-2" size={16} />
                                <span className="text-gray-600">{lab}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div>
                        {/* Research Projects */}
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-gray-900 mb-4">Featured Research Projects</h4>
                          <div className="space-y-4">
                            {dept.researchProjects.map((project, index) => (
                              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                <h5 className="font-semibold text-gray-900 mb-2">{project.title}</h5>
                                <p className="text-gray-600 text-sm mb-2">Lead Researcher: {project.leader}</p>
                                <div className="flex justify-between items-center">
                                  <span className="text-emerald-600 font-medium">{project.funding}</span>
                                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                                    Learn More <ExternalLink size={14} className="ml-1" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Faculty Members */}
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Faculty Members</h4>
                          <div className="space-y-4">
                            {dept.facultyMembers.map((faculty, index) => (
                              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <h5 className="font-semibold text-gray-900">{faculty.name}</h5>
                                    <p className="text-blue-600 text-sm">{faculty.position}</p>
                                  </div>
                                  <span className="text-xs text-gray-500">{faculty.experience}</span>
                                </div>
                                <p className="text-gray-600 text-sm mb-2">Specialization: {faculty.specialization}</p>
                                <div className="flex items-center">
                                  <Mail className="text-gray-400 mr-2" size={14} />
                                  <a href={`mailto:${faculty.email}`} className="text-blue-600 hover:text-blue-800 text-sm">
                                    {faculty.email}
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Department Heads */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch with Department Heads</h2>
            <p className="text-xl text-gray-600">Have specific questions about any department? Contact our department heads directly.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <div key={dept.id} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <img 
                  src={dept.headImage} 
                  alt={dept.head}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-semibold text-gray-900 mb-1">{dept.head}</h3>
                <p className="text-blue-600 text-sm mb-3">{dept.name}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-gray-600 text-sm">
                    <Mail size={14} className="mr-2" />
                    <span>dept.head@greenfield-tech.edu</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600 text-sm">
                    <Phone size={14} className="mr-2" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Academic Community?</h2>
          <p className="text-xl mb-8">
            Explore our programs and find the perfect department to launch your career in engineering and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
              Explore Programs
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

export default Departments;