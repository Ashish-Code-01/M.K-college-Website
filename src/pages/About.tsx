import React from 'react';
import { 
  Users, 
  Target, 
  Eye, 
  Award, 
  Calendar,
  MapPin,
  TrendingUp,
  Heart
} from 'lucide-react';

const About: React.FC = () => {
  const leadership = [
    {
      name: 'Dr. Margaret Williams',
      role: 'Chancellor',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Dr. Williams brings over 30 years of academic and administrative excellence. She holds a Ph.D. in Educational Leadership from Harvard University.'
    },
    {
      name: 'Prof. David Chen',
      role: 'Vice Chancellor (Academic)',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Prof. Chen is a renowned researcher in Computer Science with over 100 publications and 25 years of teaching experience.'
    },
    {
      name: 'Dr. Sarah Johnson',
      role: 'Director of Research',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Dr. Johnson leads our research initiatives and has secured over $50M in research grants for the institute.'
    }
  ];

  const milestones = [
    { year: '1995', event: 'Greenfield Institute of Technology founded' },
    { year: '2000', event: 'First batch of 500 students graduated' },
    { year: '2005', event: 'Achieved NAAC A+ accreditation' },
    { year: '2010', event: 'Launched postgraduate programs' },
    { year: '2015', event: 'Established international partnerships' },
    { year: '2020', event: 'Reached 10,000+ student milestone' },
    { year: '2023', event: 'Ranked among top 10 institutes nationally' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in education, research, and service.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnerships to achieve great things.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We foster creativity and encourage innovative thinking in all endeavors.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our actions and decisions.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Greenfield Institute</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Established in 1995, Greenfield Institute of Technology has been at the forefront of 
              technical education, research, and innovation for over two decades.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our History</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to bridge the gap between academia and industry, Greenfield Institute 
                of Technology began its journey in 1995 with just 100 students and a handful of dedicated faculty members.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we have grown into a premier institution known for our rigorous academic programs, 
                cutting-edge research facilities, and strong industry partnerships. Our graduates have gone on to 
                lead major corporations, start successful ventures, and contribute significantly to technological advancement.
              </p>
              <p className="text-lg text-gray-600">
                Today, we proudly serve over 12,000 students across undergraduate, postgraduate, and doctoral programs, 
                supported by world-class faculty and state-of-the-art infrastructure.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Campus History"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Target className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide world-class technical education that combines theoretical knowledge with practical 
                application, fostering innovation, critical thinking, and ethical leadership. We are committed 
                to developing globally competent professionals who can address the challenges of tomorrow.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <Eye className="text-emerald-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be a globally recognized center of excellence in technical education and research, known for 
                producing innovative leaders who drive technological advancement and contribute to sustainable 
                development of society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <value.icon className="text-blue-600" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-600">Meet the visionary leaders shaping our institution's future</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{leader.role}</p>
                <p className="text-gray-600 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our institutional history</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-center mb-8">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full font-bold z-10">
                  <Calendar size={24} />
                </div>
                <div className="ml-8">
                  <span className="text-blue-600 font-semibold text-lg">{milestone.year}</span>
                  <p className="text-gray-900 font-medium">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <MapPin className="text-emerald-400 mr-3" size={32} />
                <h2 className="text-4xl font-bold">Our Campus</h2>
              </div>
              <p className="text-xl mb-6">
                Located in the heart of Greenfield City, our 200-acre campus provides an ideal environment 
                for learning, research, and personal growth.
              </p>
              <p className="text-lg mb-6">
                The campus features modern academic buildings, state-of-the-art laboratories, extensive library 
                facilities, comfortable residential halls, and recreational amenities that support both academic 
                and personal development.
              </p>
              <p className="text-lg">
                With easy access to the city's business district and excellent transportation links, our location 
                offers students numerous opportunities for internships, industry collaboration, and career development.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Campus View"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;