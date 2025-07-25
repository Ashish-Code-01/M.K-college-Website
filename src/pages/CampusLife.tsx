import React from 'react';
import { 
  Users, 
  Trophy, 
  Coffee, 
  Home, 
  Heart, 
  Calendar,
  Music,
  Palette,
  Camera,
  Gamepad2,
  Globe,
  BookOpen
} from 'lucide-react';

const CampusLife: React.FC = () => {
  const campusFeatures = [
    {
      icon: Users,
      title: 'Student Clubs',
      count: '50+',
      description: 'Active clubs covering technology, arts, sports, and social causes'
    },
    {
      icon: Trophy,
      title: 'Sports Facilities',
      count: '15+',
      description: 'Indoor and outdoor sports facilities for all fitness levels'
    },
    {
      icon: Coffee,
      title: 'Dining Options',
      count: '8',
      description: 'Diverse dining options from casual cafes to formal restaurants'
    },
    {
      icon: Home,
      title: 'Housing Options',
      count: '12',
      description: 'Comfortable dormitories and apartment-style accommodations'
    }
  ];

  const clubs = [
    {
      icon: BookOpen,
      name: 'Coding Club',
      category: 'Technology',
      members: 150,
      description: 'Programming competitions, hackathons, and coding workshops',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Music,
      name: 'Music Society',
      category: 'Arts',
      members: 80,
      description: 'Concerts, jam sessions, and music production workshops',
      image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Palette,
      name: 'Art Club',
      category: 'Creative',
      members: 60,
      description: 'Painting, sculpture, and digital art workshops and exhibitions',
      image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Camera,
      name: 'Photography Club',
      category: 'Creative',
      members: 90,
      description: 'Photo walks, workshops, and annual photography exhibitions',
      image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Globe,
      name: 'International Club',
      category: 'Cultural',
      members: 120,
      description: 'Cultural exchange events and language learning programs',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Heart,
      name: 'Community Service',
      category: 'Social',
      members: 200,
      description: 'Volunteer work, social causes, and community outreach programs',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const events = [
    {
      title: 'Annual Tech Fest - TechNova 2025',
      date: 'March 15-17, 2025',
      type: 'Festival',
      description: 'Three-day technology festival featuring competitions, workshops, and industry talks',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
    },
    {
      title: 'Cultural Night - Expressions',
      date: 'April 8, 2025',
      type: 'Cultural',
      description: 'Showcase of student talents in music, dance, drama, and arts',
      image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
    },
    {
      title: 'Inter-College Sports Meet',
      date: 'February 20-25, 2025',
      type: 'Sports',
      description: 'Annual sports championship with colleges across the region',
      image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
    },
    {
      title: 'Entrepreneurship Summit',
      date: 'May 12, 2025',
      type: 'Professional',
      description: 'Startup pitches, investor meetings, and entrepreneurship workshops',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
    }
  ];

  const sportsActivities = [
    { name: 'Basketball', facility: 'Indoor Court', teams: 4 },
    { name: 'Football', facility: 'Outdoor Field', teams: 6 },
    { name: 'Cricket', facility: 'Cricket Ground', teams: 8 },
    { name: 'Tennis', facility: 'Tennis Courts', teams: 3 },
    { name: 'Swimming', facility: 'Swimming Pool', teams: 2 },
    { name: 'Badminton', facility: 'Indoor Courts', teams: 5 },
    { name: 'Table Tennis', facility: 'Recreation Center', teams: 4 },
    { name: 'Volleyball', facility: 'Beach Court', teams: 3 }
  ];

  const housingOptions = [
    {
      name: 'Freshman Dormitories',
      type: 'Shared Rooms',
      capacity: 800,
      amenities: ['Wi-Fi', 'Study Rooms', 'Common Kitchen', '24/7 Security'],
      image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      name: 'Senior Student Apartments',
      type: 'Private Apartments',
      capacity: 400,
      amenities: ['Private Kitchen', 'Living Room', 'Laundry', 'Parking'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      name: 'Graduate Housing',
      type: 'Studio & 1-Bedroom',
      capacity: 200,
      amenities: ['Full Kitchen', 'Study Space', 'Gym Access', 'Pet-Friendly'],
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const diningOptions = [
    {
      name: 'Main Dining Hall',
      type: 'All-You-Can-Eat',
      features: ['International Cuisine', 'Vegetarian Options', 'Halal Food'],
      hours: '7 AM - 10 PM'
    },
    {
      name: 'Tech Café',
      type: 'Casual Dining',
      features: ['Coffee & Snacks', 'Quick Meals', 'Study-Friendly'],
      hours: '24/7'
    },
    {
      name: 'Food Court',
      type: 'Multiple Vendors',
      features: ['Fast Food', 'Asian Cuisine', 'Pizza & Burgers'],
      hours: '10 AM - 11 PM'
    },
    {
      name: 'Healthy Bites',
      type: 'Health-Conscious',
      features: ['Salads', 'Smoothies', 'Organic Options'],
      hours: '8 AM - 6 PM'
    }
  ];

  const wellnessServices = [
    {
      title: 'Health Center',
      description: 'On-campus medical services with qualified doctors and nurses',
      features: ['General Medicine', 'Emergency Care', 'Mental Health Support', 'Pharmacy']
    },
    {
      title: 'Counseling Services',
      description: 'Professional counseling and mental health support for students',
      features: ['Individual Counseling', 'Group Therapy', 'Crisis Intervention', 'Wellness Workshops']
    },
    {
      title: 'Fitness Center',
      description: 'State-of-the-art gym with modern equipment and fitness classes',
      features: ['Cardio Equipment', 'Weight Training', 'Group Classes', 'Personal Training']
    },
    {
      title: 'Recreation Center',
      description: 'Indoor activities and games for relaxation and socializing',
      features: ['Game Room', 'Movie Theater', 'Study Pods', 'Social Events']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Campus Life</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Experience a vibrant campus community where learning extends beyond the classroom 
              through clubs, events, sports, and lifelong friendships.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Features Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {campusFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-4 rounded-full">
                      <feature.icon className="text-blue-600" size={32} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{feature.count}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Clubs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Clubs & Organizations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join one of our many student organizations and discover your passions while building lasting friendships
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={club.image} 
                  alt={club.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <club.icon className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{club.name}</h3>
                      <p className="text-sm text-gray-500">{club.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{club.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-emerald-600 font-medium">{club.members} Members</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">Join Club →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Don't miss these exciting campus events and activities</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                    <div className="flex items-center text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Activities */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Sports & Recreation</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Stay active with our comprehensive sports facilities and competitive teams
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sportsActivities.map((sport, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="flex justify-center mb-4">
                  <Trophy className="text-emerald-300" size={32} />
                </div>
                <h3 className="font-semibold text-center mb-2">{sport.name}</h3>
                <p className="text-sm text-blue-100 text-center mb-2">{sport.facility}</p>
                <div className="text-center">
                  <span className="bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {sport.teams} Teams
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Housing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Housing Options</h2>
            <p className="text-xl text-gray-600">Comfortable and safe housing options for all students</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {housingOptions.map((housing, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={housing.image} 
                  alt={housing.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{housing.name}</h3>
                  <p className="text-gray-600 mb-4">{housing.type} • {housing.capacity} Students</p>
                  <ul className="space-y-2">
                    {housing.amenities.map((amenity, amenityIndex) => (
                      <li key={amenityIndex} className="flex items-center text-sm text-gray-600">
                        <Home size={14} className="text-emerald-500 mr-2" />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors duration-200">
                    Apply for Housing
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dining Options</h2>
            <p className="text-xl text-gray-600">Diverse dining experiences to satisfy every taste and dietary need</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diningOptions.map((dining, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <div className="flex justify-center mb-4">
                  <Coffee className="text-orange-500" size={32} />
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2">{dining.name}</h3>
                <p className="text-sm text-gray-600 text-center mb-4">{dining.type}</p>
                <ul className="space-y-1 mb-4">
                  {dining.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-gray-600 text-center">• {feature}</li>
                  ))}
                </ul>
                <div className="text-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {dining.hours}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Services */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Health & Wellness</h2>
            <p className="text-xl text-gray-600">Comprehensive support for your physical and mental well-being</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {wellnessServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <Heart className="text-emerald-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-sm text-center"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Campus Life?</h2>
          <p className="text-xl mb-8">
            Join our vibrant community and discover all the opportunities waiting for you at Greenfield Institute
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
              Schedule Campus Visit
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
              Virtual Campus Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;