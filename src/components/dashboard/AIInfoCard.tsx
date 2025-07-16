
import { Brain, MessageSquare, Shield, AlertTriangle } from 'lucide-react';

const AIInfoCard = () => {
  return (
    <div className="dashboard-card bg-gradient-to-r from-safepath-purple-soft to-safepath-blue-soft border-safepath-purple/20">
      <div className="flex items-start space-x-4">
        <div className="bg-safepath-purple rounded-full p-3">
          <Brain size={24} className="text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-poppins font-semibold text-lg mb-2">AI-Powered Protection</h3>
          <p className="text-gray-700 text-sm mb-4">
            SafePath uses advanced AI (GPT + Whisper) to analyze your responses and detect emotional tone. 
            Our system monitors for signs of stress or danger and automatically triggers alerts when needed.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <MessageSquare size={16} className="text-safepath-purple" />
              <span className="text-xs text-gray-600">Text Analysis</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield size={16} className="text-green-600" />
              <span className="text-xs text-gray-600">Voice Recognition</span>
            </div>
            <div className="flex items-center space-x-2">
              <AlertTriangle size={16} className="text-amber-600" />
              <span className="text-xs text-gray-600">Stress Detection</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInfoCard;
