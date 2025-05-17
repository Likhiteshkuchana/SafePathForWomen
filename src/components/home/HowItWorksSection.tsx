
import { MapPin, MessageCircle, Brain, Bell, Shield } from 'lucide-react';

const steps = [
  {
    title: "Start trip",
    description: "Select your destination and estimated arrival time. Choose which emergency contacts to notify.",
    icon: MapPin,
    color: "bg-safepath-purple text-white"
  },
  {
    title: "Get check-ins",
    description: "Receive automated check-ins via push notifications. Respond with voice or text.",
    icon: MessageCircle,
    color: "bg-safepath-purple-dark text-white"
  },
  {
    title: "AI analyzes tone",
    description: "Our AI system analyzes your responses for signs of stress, duress or danger.",
    icon: Brain,
    color: "bg-safepath-purple text-white"
  },
  {
    title: "Auto-alerts if needed",
    description: "If danger is detected or you miss check-ins, alerts are sent to your emergency contacts.",
    icon: Bell,
    color: "bg-safepath-purple-dark text-white"
  },
  {
    title: "Navigate to safety",
    description: "Find verified safe zones nearby with directions and safety ratings from the community.",
    icon: Shield,
    color: "bg-safepath-purple text-white"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-safepath-purple-soft/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            SafePath is designed to be simple to use while providing powerful protection.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-safepath-purple-dark/30 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md`}>
                  <step.icon size={24} />
                </div>
                <h3 className="font-poppins text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
