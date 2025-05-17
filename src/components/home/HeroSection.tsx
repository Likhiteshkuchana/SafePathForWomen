
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-safepath-purple-soft rounded-bl-[100px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-safepath-blue-soft rounded-tr-[100px] opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Your Safety, <span className="text-safepath-purple">One Step Ahead</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">Powered by AI</h2>
            <p className="text-gray-700 text-lg mb-8">
              SafePath uses AI technology to provide real-time safety monitoring, 
              emergency response, and peace of mind for women on the go. 
              Travel with confidence, knowing help is just a tap away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/trip/new">
                <Button className="bg-safepath-purple hover:bg-safepath-purple-dark text-white px-6 py-6 h-auto text-lg">
                  <MapPin size={20} className="mr-2" />
                  Start a Trip
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" className="border-safepath-purple text-safepath-purple hover:bg-safepath-purple-soft px-6 py-6 h-auto text-lg">
                  <Clock size={20} className="mr-2" />
                  View Dashboard
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-white bg-safepath-purple-soft flex items-center justify-center text-xs font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="ml-4 text-gray-600">
                <strong>1,000+</strong> women protected this week
              </span>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="bg-safepath-purple-soft p-4 rounded-2xl">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1974&auto=format&fit=crop"
                    alt="Woman walking safely with SafePath" 
                    className="w-full h-auto"
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-800">Active Trip</h3>
                        <p className="text-sm text-gray-500">Walk home - 10 min remaining</p>
                      </div>
                      <span className="status-badge status-safe">Safe</span>
                    </div>
                    <div className="mt-3 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-safepath-purple h-full rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-safepath-blue-soft rounded-full opacity-50"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-safepath-purple-soft rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
