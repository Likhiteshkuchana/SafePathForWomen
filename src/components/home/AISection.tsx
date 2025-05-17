
import { Brain, Shield, MessageCircle } from 'lucide-react';

const AISection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-safepath-purple/10 to-safepath-blue-soft/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-safepath-purple/20 text-safepath-purple-dark py-1 px-3 rounded-full text-sm font-medium mb-3">
              Advanced Technology
            </span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">
              AI-Powered Safety
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              SafePath uses cutting-edge artificial intelligence to provide proactive protection.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-safepath-purple/10">
            <div className="flex items-start space-x-6 mb-6">
              <div className="bg-safepath-purple rounded-lg p-3 shrink-0">
                <Brain size={28} className="text-white" />
              </div>
              <div>
                <h3 className="font-poppins text-xl font-semibold mb-2">Emotional Analysis</h3>
                <p className="text-gray-600">
                  Our AI system analyzes your voice and text responses to detect signs of stress, fear, or distress, 
                  helping identify potentially dangerous situations before they escalate.
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-100 my-6"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-safepath-purple-light rounded-lg p-2 shrink-0">
                  <MessageCircle size={20} className="text-safepath-purple-dark" />
                </div>
                <div>
                  <h4 className="font-poppins font-medium mb-1">Natural Conversation</h4>
                  <p className="text-gray-600 text-sm">
                    Check-ins feel natural and conversational, adapting to your personal communication style.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-safepath-purple-light rounded-lg p-2 shrink-0">
                  <Shield size={20} className="text-safepath-purple-dark" />
                </div>
                <div>
                  <h4 className="font-poppins font-medium mb-1">Predictive Protection</h4>
                  <p className="text-gray-600 text-sm">
                    SafePath learns your routes and patterns to provide more personalized safety recommendations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-safepath-purple/5 rounded-lg p-4 border-l-4 border-safepath-purple">
              <p className="italic text-gray-700">
                "SafePath uses AI to analyze emotional tone in user responses (via text or speech) using GPT and Whisper. 
                It can detect signs of stress or panic and take automatic safety actions like alerting guardians or guiding users to safe areas."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
