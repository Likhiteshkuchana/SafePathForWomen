
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, MessageCircle, Brain, Bell, Shield, BarChart3, Clock, Users, Phone, Lock } from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      title: "Real-time Location Sharing",
      description: "Share your live location with trusted emergency contacts during trips. They can see exactly where you are and track your progress in real-time.",
      icon: MapPin,
      benefits: ["Live GPS tracking", "Battery-efficient monitoring", "Privacy-controlled sharing", "Automatic location updates"]
    },
    {
      title: "Safe Zones Map",
      description: "Navigate to community-verified safe locations including police stations, hospitals, fire departments, and well-lit public spaces.",
      icon: Shield,
      benefits: ["Community-verified locations", "24/7 availability info", "Quick navigation", "Safety ratings"]
    },
    {
      title: "AI Stress Detection",
      description: "Advanced AI analyzes your voice tone, response patterns, and keywords to detect signs of distress, panic, or potential danger.",
      icon: Brain,
      benefits: ["Voice tone analysis", "Keyword detection", "Response pattern monitoring", "Contextual awareness"]
    },
    {
      title: "Emergency Recording",
      description: "Instantly activate emergency recording with voice commands or panic button. Audio and location data are immediately sent to authorities.",
      icon: Phone,
      benefits: ["One-touch activation", "Automatic cloud backup", "Location timestamping", "Emergency contact alerts"]
    },
    {
      title: "Dashboard Analytics",
      description: "Track your safety patterns, journey insights, and trip history with comprehensive analytics and personalized safety recommendations.",
      icon: BarChart3,
      benefits: ["Trip history tracking", "Safety pattern analysis", "Personalized insights", "Progress monitoring"]
    }
  ];

  const additionalFeatures = [
    {
      title: "Smart Check-ins",
      icon: MessageCircle,
      description: "Automated safety check-ins with voice, text, or emoji responses"
    },
    {
      title: "Instant Alerts",
      icon: Bell,
      description: "Immediate notifications to emergency contacts when danger is detected"
    },
    {
      title: "Trip Planning",
      icon: Clock,
      description: "Plan your routes with estimated times and safety checkpoints"
    },
    {
      title: "Emergency Contacts",
      icon: Users,
      description: "Manage trusted contacts who receive your safety updates"
    },
    {
      title: "Privacy Controls",
      icon: Lock,
      description: "Full control over your data and sharing preferences"
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
                Comprehensive <span className="text-safepath-purple">Safety Features</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Everything you need to feel safe and confident during your journeys, powered by cutting-edge AI technology.
              </p>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {mainFeatures.map((feature, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-safepath-purple-soft rounded-2xl flex items-center justify-center mr-4">
                        <feature.icon size={32} className="text-safepath-purple" />
                      </div>
                      <h2 className="font-poppins text-3xl font-bold text-gray-800">{feature.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-safepath-purple rounded-full mr-3"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-safepath-purple-soft to-safepath-blue-soft p-8 rounded-2xl">
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <feature.icon size={64} className="text-safepath-purple mx-auto mb-4" />
                        <div className="text-center">
                          <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                          <div className="h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-safepath-purple rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Additional Safety Tools
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                More features designed to enhance your safety and peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-safepath-purple/30">
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

        {/* CTA Section */}
        <section className="py-16 bg-safepath-purple text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-poppins text-3xl font-bold mb-4">Ready to Feel Safe?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of women who trust SafePath for their daily journeys.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register" className="bg-white text-safepath-purple px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Free
              </a>
              <a href="/dashboard" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-safepath-purple transition-colors">
                View Dashboard
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
