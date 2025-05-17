
import { AlertTriangle, PhoneCall, Mic, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EmergencyCard = () => {
  return (
    <div className="dashboard-card border-2 border-red-200">
      <div className="text-center mb-4">
        <h3 className="font-poppins font-semibold text-lg text-red-600">Emergency Mode</h3>
        <p className="text-gray-600 text-sm">
          Activating will alert your emergency contacts
        </p>
      </div>
      
      <Button 
        className="w-full h-16 bg-safepath-danger hover:bg-red-700 text-white flex items-center justify-center text-lg mb-4"
      >
        <AlertTriangle size={24} className="mr-2" />
        Activate Emergency Mode
      </Button>
      
      <div className="grid grid-cols-3 gap-2">
        <Button 
          variant="outline" 
          className="border-gray-300 text-gray-700 hover:bg-gray-100 flex flex-col h-auto py-3"
        >
          <PhoneCall size={20} className="mb-1" />
          <span className="text-xs">Call</span>
        </Button>
        <Button 
          variant="outline" 
          className="border-gray-300 text-gray-700 hover:bg-gray-100 flex flex-col h-auto py-3"
        >
          <Mic size={20} className="mb-1" />
          <span className="text-xs">Record</span>
        </Button>
        <Button 
          variant="outline" 
          className="border-gray-300 text-gray-700 hover:bg-gray-100 flex flex-col h-auto py-3"
        >
          <Share2 size={20} className="mb-1" />
          <span className="text-xs">Share</span>
        </Button>
      </div>
    </div>
  );
};

export default EmergencyCard;
