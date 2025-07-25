import React, { useState } from 'react';
import { 
  Calendar, 
  User, 
  Tag, 
  ExternalLink, 
  Search,
  Filter,
  ChevronRight,
  Award,
  Megaphone,
  GraduationCap,
  Microscope
} from 'lucide-react';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'News', 'Events', 'Achievements', 'Research'];

  const newsItems = [
    {
      id: 1,
      title: 'Greenfield Institute Ranks Among Top 10 Engineering Colleges',
      excerpt: 'GIT has been recognized as one of the top 10 engineering institutes in the national ranking for the fifth consecutive year.',
      category: 'News',
      author: 'Dr. Margaret Williams',
      date: '2025-01-15',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: true,
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'TechNova 2025: Registration Now Open',
      excerpt: 'Annual technology festival featuring competitions, workshops, and industry talks. Early bird registration ends February 28.',
      category: 'Events',
      author: 'Student Council',
      date: '2025-01-12',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false,
      readTime: '2 min read'
    },
    {
      id: 3,
      title: 'Student Team Wins National Robotics Championship',
      excerpt: 'Team Greenfield Bots secures first place in the National Robotics Championship, competing against 200+ teams.',
      category: 'Achievements',
      author: 'Prof. Michael Thompson',
      date: '2025-01-10',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: true,
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Breakthrough Research in Quantum Computing Published',
      excerpt: 'Dr. Rajesh Kumar\'s team publishes groundbreaking research on quantum error correction in Nature Physics.',
      category: 'Research',
      author: 'Dr. Rajesh Kumar',
      date: '2025-01-08',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false,
      readTime: '5 min read'
    },
    {
      id: 5,
      title: 'New State-of-the-Art AI Lab Inaugurated',
      excerpt: 'The institute inaugurates a cutting-edge AI laboratory equipped with the latest hardware and software for research.',
      category: 'News',
      author: 'Communications Team',
      date: '2025-01-05',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false,
      readTime: '3 min read'
    },
    {
      id: 6,
      title: 'Annual Alumni Meet 2025 - Reconnect and Inspire',
      excerpt: 'Join us for the grand alumni reunion featuring networking sessions, campus tours, and inspiring success stories.',
      category: 'Events',
      author: 'Alumni Relations',
      date: '2025-01-03',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false,
      readTime: '2 min read'
    },
    {
      id: 7,
      title: 'Student Startup Secures $2M Funding',
      excerpt: 'EcoTech Solutions, founded by GIT students, raises $2M Series A funding for their sustainable technology platform.',
      category: 'Achievements',
      author: 'Entrepreneurship Cell',
      date: '2024-12-28',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: true,
      readTime: '4 min read'
    },
    {
      id: 8,
      title: 'International Collaboration with MIT Announced',
      excerpt: 'New partnership with MIT for joint research programs and student exchange initiatives in artificial intelligence.',
      category: 'News',
      author: 'International Affairs',
      date: '2024-12-25',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false,
      readTime: '3 min read'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Industry Guest Lecture Series',
      date: '2025-01-25',
      time: '2:00 PM',
      speaker: 'Tech Industry Leaders',
      location: 'Main Auditorium'
    },
    {
      title: 'Research Paper Presentation',
      date: '2025-02-01',
      time: '10:00 AM',
      speaker: 'Graduate Students',
      location: 'Conference Hall'
    },
    {
      title: 'Career Fair 2025',
      date: '2025-02-15',
      time: '9:00 AM',
      speaker: '50+ Companies',
      location: 'Sports Complex'
    },
    {
      title: 'Hackathon Weekend',
      date: '2025-02-22',
      time: '6:00 PM',
      speaker: 'Open to All',
      location: 'Computer Center'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'National Excellence Award',
      description: 'Institute receives national recognition for innovation in education'
    },
    {
      icon: GraduationCap,
      title: '95% Placement Rate',
      description: 'Highest placement rate achieved in institute history'
    },
    {
      icon: Microscope,
      title: '50+ Research Publications',
      description: 'Faculty publishes in top-tier international journals'
    }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = filteredNews.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'News': return <Megaphone size={16} />;
      case 'Events': return <Calendar size={16} />;
      case 'Achievements': return <Award size={16} />;
      case 'Research': return <Microscope size={16} />;
      default: return <Tag size={16} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'News': return 'bg-blue-100 text-blue-800';
      case 'Events': return 'bg-emerald-100 text-emerald-800';
      case 'Achievements': return 'bg-yellow-100 text-yellow-800';
      case 'Research': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">News & Events</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay updated with the latest news, events, achievements, and research developments 
              from Greenfield Institute of Technology.
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
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-blue-50'
                    }`}
                  >
                    {category !== 'All' && getCategoryIcon(category)}
                    <span>{category}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search news and events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured News */}
            {featuredNews.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Stories</h2>
                <div className="grid gap-8">
                  {featuredNews.map((item) => (
                    <article key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                            {getCategoryIcon(item.category)}
                            <span>{item.category}</span>
                          </span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar size={14} className="mr-1" />
                            {new Date(item.date).toLocaleDateString()}
                          </div>
                          <span className="text-gray-500 text-sm">{item.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <User size={16} className="text-gray-400 mr-2" />
                            <span className="text-sm text-gray-600">{item.author}</span>
                          </div>
                          <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                            Read More <ChevronRight size={16} className="ml-1" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Regular News */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {featuredNews.length > 0 ? 'Latest Updates' : 'All News & Events'}
              </h2>
              <div className="grid gap-6">
                {regularNews.map((item) => (
                  <article key={item.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex gap-6">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                            {getCategoryIcon(item.category)}
                            <span>{item.category}</span>
                          </span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar size={12} className="mr-1" />
                            {new Date(item.date).toLocaleDateString()}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{item.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">By {item.author}</span>
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                            Read More <ExternalLink size={12} className="ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Upcoming Events */}
            <section className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar size={12} className="mr-2 text-blue-500" />
                          {new Date(event.date).toLocaleDateString()} at {event.time}
                        </div>
                        <div className="flex items-center">
                          <User size={12} className="mr-2 text-emerald-500" />
                          {event.speaker}
                        </div>
                        <div className="flex items-center">
                          <Tag size={12} className="mr-2 text-purple-500" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors duration-200">
                  View All Events
                </button>
              </div>
            </section>

            {/* Recent Achievements */}
            <section className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Achievements</h3>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-yellow-100 p-2 rounded-lg">
                        <achievement.icon className="text-yellow-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{achievement.title}</h4>
                        <p className="text-gray-600 text-xs">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Newsletter Signup */}
            <section>
              <div className="bg-blue-600 text-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Subscribe to our newsletter for the latest news and updates from GIT.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  />
                  <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg font-medium text-sm transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;