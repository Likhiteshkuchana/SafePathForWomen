
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, MessageSquare, Brain, Bell, MapPin, Shield } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Start Your Trip",
      description: "Enter your destination, select emergency contacts, and set your expected arrival time. SafePath begins monitoring your journey.",
      icon: MapPin,
      image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=800&auto=format&fit=crop"
    },
    {
      number: "02", 
      title: "Receive Check-ins",
      description: "Get automated check-ins via notifications. Respond with voice messages, text, or quick emoji reactions to confirm you're safe.",
      icon: MessageSquare,
      image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=800&auto=format&fit=crop"
    },
    {
      number: "03",
      title: "AI Analysis",
      description: "Our AI analyzes your response tone, background sounds, and keywords to detect signs of distress, panic, or danger.",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=800&auto=format&fit=crop"
    },
    {
      number: "04",
      title: "Emergency Response",
      description: "If danger is detected or you miss check-ins, immediate alerts are sent to your emergency contacts with your exact location.",
      icon: Bell,
      image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const features = [
    {
      title: "Real-time Location Sharing",
      description: "Your trusted contacts can see your live location during trips",
      icon: MapPin
    },
    {
      title: "Voice & Text Check-ins", 
      description: "Multiple ways to confirm your safety during your journey",
      icon: MessageSquare
    },
    {
      title: "AI Stress Detection",
      description: "Advanced AI analyzes your responses for signs of distress",
      icon: Brain
    },
    {
      title: "Instant Emergency Alerts",
      description: "Immediate notifications to your emergency contacts when needed",
      icon: Bell
    },
    {
      title: "Safe Zone Mapping",
      description: "Navigate to verified safe locations like police stations and hospitals",
      icon: Shield
    },
    {
      title: "Trip History & Analytics",
      description: "Track your safety patterns and journey insights over time",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-safepath-purple-soft/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                How SafePath <span className="text-safepath-purple">Protects You</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Our AI-powered safety system works in four simple steps to keep you protected during every journey.
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {steps.map((step, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-6">
                      <span className="text-4xl font-bold text-safepath-purple mr-4">{step.number}</span>
                      <step.icon size={40} className="text-safepath-purple" />
                    </div>
                    <h2 className="font-poppins text-3xl font-bold text-gray-800 mb-4">{step.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-safepath-purple-soft p-4 rounded-2xl">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Complete Safety Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need for safe, confident travel in one comprehensive platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-safepath-purple-soft rounded-lg flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-safepath-purple" />
                  </div>
                  <h3 className="font-poppins text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
