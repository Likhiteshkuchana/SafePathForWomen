
import { MapPin, MessageCircle, AlertTriangle, Bell, Shield } from 'lucide-react';

const features = [
  {
    title: "Live Location Sharing",
    description: "Share your real-time location with trusted contacts during trips for enhanced safety monitoring.",
    icon: MapPin,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Voice/Text Check-ins",
    description: "Receive automated check-ins and respond via voice or text to confirm your safety status.",
    icon: MessageCircle,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "AI Danger Detection",
    description: "Advanced AI analyzes your responses and environment to detect signs of distress or unsafe situations.",
    icon: AlertTriangle,
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Emergency Alerts",
    description: "Instant alerts sent to your emergency contacts with your exact location if danger is detected.",
    icon: Bell,
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Verified Safe Zones",
    description: "Navigate to community-verified safe locations like police stations, cafes and hospitals nearby.",
    icon: Shield,
    color: "bg-purple-100 text-purple-600"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            SafePath combines innovative technology with practical safety tools to provide comprehensive protection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group hover:border-safepath-purple transition-all duration-300"
            >
              <div className={`${feature.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={24} />
              </div>
              <h3 className="font-poppins text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
