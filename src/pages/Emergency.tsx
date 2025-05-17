
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, MapPin, Mic, Phone, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Emergency = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [countdown, setCountdown] = useState(5);
  
  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };
  
  return (
    <div className="min-h-screen bg-red-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/dashboard" className="flex items-center text-gray-700 hover:text-safepath-purple">
            <ArrowLeft size={20} className="mr-2" />
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-red-300">
            <div className="p-6">
              <div className="text-center mb-8">
                <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle size={40} className="text-red-600" />
                </div>
                <h1 className="font-poppins text-2xl font-bold text-gray-800 mb-2">Emergency Mode</h1>
                <p className="text-gray-600">
                  Activate only in case of emergency. This will alert your contacts.
                </p>
              </div>
              
              {/* Location */}
              <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <MapPin size={20} className="text-safepath-purple mr-2" />
                  <div>
                    <p className="text-sm font-medium">Current Location:</p>
                    <p className="text-xs text-gray-500">123 Main Street, City Center</p>
                  </div>
                </div>
              </div>
              
              {/* Emergency Button */}
              <Button 
                className="w-full h-16 bg-red-600 hover:bg-red-700 text-white flex items-center justify-center text-lg mb-6"
              >
                <AlertTriangle size={24} className="mr-2 animate-pulse" />
                Activate Emergency Alert
              </Button>
              
              <div className="text-center text-xs text-gray-500 mb-6">
                Your location will be shared with your emergency contacts
              </div>
              
              {/* Audio Recording */}
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Voice Recording</h3>
                  {isRecording && (
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-1 animate-pulse"></span>
                      Recording
                    </span>
                  )}
                </div>
                
                <Button 
                  onClick={toggleRecording}
                  variant={isRecording ? "default" : "outline"}
                  className={`w-full ${
                    isRecording ? "bg-red-600 hover:bg-red-700 text-white" : "border-gray-300"
                  }`}
                >
                  <Mic size={16} className="mr-2" />
                  {isRecording ? "Stop Recording" : "Start Recording"}
                </Button>
                
                {isRecording && (
                  <div className="mt-2 text-center text-xs text-gray-500">
                    Recording will be sent to your emergency contacts
                  </div>
                )}
              </div>
              
              {/* Quick Call */}
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  className="flex-1 border-gray-300 font-medium"
                >
                  <Phone size={16} className="mr-2" />
                  Call Emergency
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-gray-300 font-medium"
                >
                  <Phone size={16} className="mr-2" />
                  Call Contact
                </Button>
              </div>
            </div>
            
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Emergency Mode will activate in:</span>
                <span className="font-bold text-red-600">{countdown} seconds</span>
              </div>
              <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="bg-red-600 h-full rounded-full" 
                  style={{ width: `${(countdown / 5) * 100}%` }}
                ></div>
              </div>
              <Button 
                variant="link" 
                className="text-sm text-gray-600 hover:text-gray-800 w-full mt-2"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Emergency;
