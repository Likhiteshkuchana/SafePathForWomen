
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Shield, Heart, Clock } from 'lucide-react';

interface EmptyDashboardProps {
  userName: string;
}

const EmptyDashboard = ({ userName }: EmptyDashboardProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-6 bg-safepath-purple-soft rounded-full flex items-center justify-center">
          <Shield size={48} className="text-safepath-purple" />
        </div>
        
        <h2 className="font-poppins text-3xl font-bold text-gray-800 mb-4">
          Welcome to SafePath, {userName}!
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          You're all set to start your first safe journey. SafePath will track your trips, 
          provide check-ins, and keep your emergency contacts informed.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <MapPin size={24} className="text-blue-600" />
            </div>
            <h3 className="font-poppins font-semibold text-lg mb-2">Start Your Journey</h3>
            <p className="text-gray-600 text-sm">Share your destination and get real-time safety monitoring</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Heart size={24} className="text-green-600" />
            </div>
            <h3 className="font-poppins font-semibold text-lg mb-2">Stay Connected</h3>
            <p className="text-gray-600 text-sm">Receive check-ins and keep your loved ones informed</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Clock size={24} className="text-purple-600" />
            </div>
            <h3 className="font-poppins font-semibold text-lg mb-2">Track History</h3>
            <p className="text-gray-600 text-sm">View your trip history and safety analytics</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/trip/new">
            <Button className="bg-safepath-purple hover:bg-safepath-purple-dark text-white px-8 py-3 h-auto text-lg">
              <MapPin size={20} className="mr-2" />
              Start Your First Trip
            </Button>
          </Link>
          <Link to="/safe-zones">
            <Button variant="outline" className="border-safepath-purple text-safepath-purple hover:bg-safepath-purple-soft px-8 py-3 h-auto text-lg">
              Explore Safe Zones
            </Button>
          </Link>
        </div>
        
        <div className="mt-12 bg-safepath-purple-soft/30 p-6 rounded-xl">
          <h3 className="font-poppins font-semibold text-lg mb-3">Quick Stats</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-safepath-purple">0</div>
              <div className="text-sm text-gray-600">Total Trips</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-safepath-purple">0</div>
              <div className="text-sm text-gray-600">Check-ins</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-safepath-purple">0</div>
              <div className="text-sm text-gray-600">Safe Arrivals</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyDashboard;
