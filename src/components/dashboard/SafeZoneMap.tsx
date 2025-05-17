
import { MapPin, Coffee, Home, Hospital } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SafeZoneMap = () => {
  return (
    <div className="dashboard-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-poppins font-semibold text-lg">Safe Zones Nearby</h3>
        <Button variant="outline" size="sm" className="border-safepath-purple text-safepath-purple hover:bg-safepath-purple-soft">
          <MapPin size={16} className="mr-1" />
          Add Zone
        </Button>
      </div>
      
      <div className="bg-gray-200 h-48 rounded-lg relative overflow-hidden mb-4">
        {/* Placeholder for map - in a real app, this would be an interactive map */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-600">Map view</p>
        </div>
        
        {/* Sample safe zone markers */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-green-500 text-white p-2 rounded-full">
            <Coffee size={16} />
          </div>
        </div>
        <div className="absolute top-1/2 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-blue-500 text-white p-2 rounded-full">
            <Hospital size={16} />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-purple-500 text-white p-2 rounded-full">
            <Home size={16} />
          </div>
        </div>
      </div>
      
      <div className="flex mb-4 overflow-x-auto gap-2 pb-2">
        <Button variant="outline" size="sm" className="whitespace-nowrap bg-white">
          All Zones
        </Button>
        <Button variant="outline" size="sm" className="whitespace-nowrap bg-safepath-purple-soft text-safepath-purple border-safepath-purple">
          <Coffee size={14} className="mr-1" />
          Cafes
        </Button>
        <Button variant="outline" size="sm" className="whitespace-nowrap bg-white">
          <Hospital size={14} className="mr-1" />
          Hospitals
        </Button>
        <Button variant="outline" size="sm" className="whitespace-nowrap bg-white">
          Police
        </Button>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center p-3 bg-safepath-purple-soft/20 rounded-lg">
          <div className="bg-green-100 p-2 rounded-full mr-3">
            <Coffee size={16} className="text-green-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-sm">Central Coffee Shop</h4>
            <p className="text-xs text-gray-500">Open 24/7 • 0.3 miles away</p>
          </div>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                size={12} 
                className={star <= 5 ? "text-amber-400 fill-amber-400" : "text-gray-300"} 
              />
            ))}
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-white border border-gray-100 rounded-lg">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <Hospital size={16} className="text-blue-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-sm">City Hospital</h4>
            <p className="text-xs text-gray-500">Open 24/7 • 0.8 miles away</p>
          </div>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                size={12} 
                className={star <= 4 ? "text-amber-400 fill-amber-400" : "text-gray-300"} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Star component for ratings
const Star = ({ size, className }: { size: number, className: string }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

export default SafeZoneMap;
