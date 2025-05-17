
import { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ActiveTripCardProps {
  destination: string;
  startTime: string;
  duration: number; // in minutes
  contactName: string;
  contactPhone: string;
}

const ActiveTripCard = ({ 
  destination, 
  startTime, 
  duration, 
  contactName,
  contactPhone 
}: ActiveTripCardProps) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [nextCheckIn, setNextCheckIn] = useState(5); // 5 minutes to next check-in
  
  // Simulate time passing
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prev => {
        const newTime = prev + 1;
        return newTime > duration ? duration : newTime;
      });
      
      setNextCheckIn(prev => {
        const newTime = prev - 1;
        return newTime < 0 ? 5 : newTime;
      });
    }, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, [duration]);
  
  const progress = (timeElapsed / duration) * 100;
  
  return (
    <div className="dashboard-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-poppins font-semibold text-lg">Active Trip</h3>
        <span className="status-badge bg-blue-100 text-blue-800">In Progress</span>
      </div>
      
      <div className="mb-4 bg-gray-100 rounded-lg p-4">
        <div className="flex items-start">
          <div className="bg-safepath-purple rounded-full p-2 mr-3">
            <MapPin size={20} className="text-white" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">{destination}</h4>
            <div className="flex items-center text-gray-600 mt-1">
              <Clock size={14} className="mr-1" />
              <span className="text-sm">Started at {startTime}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="bg-safepath-purple h-full rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{timeElapsed} min elapsed</span>
          <span>{duration - timeElapsed} min remaining</span>
        </div>
      </div>
      
      <div className="mb-4 p-3 border border-safepath-purple/20 bg-safepath-purple-soft/10 rounded-lg">
        <h4 className="text-sm font-medium mb-1">Next check-in</h4>
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-safepath-purple">{nextCheckIn} min</span>
          <Button variant="outline" size="sm" className="text-xs h-7 border-safepath-purple text-safepath-purple hover:bg-safepath-purple-soft">
            Check in now
          </Button>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium mb-2">Emergency Contact</h4>
        <div className="flex items-center bg-gray-50 p-3 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <Phone size={16} />
          </div>
          <div className="ml-3">
            <div className="font-medium text-sm">{contactName}</div>
            <div className="text-xs text-gray-500">{contactPhone}</div>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <Button variant="outline" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100">
          Update ETA
        </Button>
        <Button className="flex-1 bg-safepath-danger hover:bg-red-700 text-white">
          <AlertTriangle size={16} className="mr-1" />
          End Trip
        </Button>
      </div>
    </div>
  );
};

export default ActiveTripCard;
