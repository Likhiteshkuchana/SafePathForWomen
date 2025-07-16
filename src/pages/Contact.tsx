
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would send the message to a backend
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      details: "support@safepath.com",
      description: "Get help with your account, technical issues, or general questions"
    },
    {
      icon: Phone,
      title: "Emergency Support",
      details: "+1 (555) 911-SAFE",
      description: "24/7 emergency support line for urgent safety concerns"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: "123 Safety Street, Tech Valley, CA 94000",
      description: "Visit our office during business hours"
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: "Monday - Friday: 9AM - 6PM PST",
      description: "Weekend emergency support available"
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
                Get in <span className="text-safepath-purple">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We're here to help with any questions, concerns, or feedback about SafePath. 
                Your safety and satisfaction are our top priorities.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="font-poppins text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-safepath-purple hover:bg-safepath-purple-dark text-white">
                      <Send size={20} className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="bg-safepath-purple text-white p-8 rounded-xl">
                    <h2 className="font-poppins text-2xl font-bold mb-4">Need Immediate Help?</h2>
                    <p className="mb-6 opacity-90">
                      If you're in immediate danger, please contact local emergency services first. 
                      SafePath support is available for app-related assistance.
                    </p>
                    <div className="flex items-center">
                      <Phone size={24} className="mr-3" />
                      <div>
                        <div className="font-semibold">Emergency: 911</div>
                        <div className="text-sm opacity-75">SafePath Support: +1 (555) 911-SAFE</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-safepath-purple-soft rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <info.icon size={24} className="text-safepath-purple" />
                          </div>
                          <div>
                            <h3 className="font-poppins font-semibold text-gray-800 mb-1">{info.title}</h3>
                            <p className="text-safepath-purple font-medium mb-1">{info.details}</p>
                            <p className="text-gray-600 text-sm">{info.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-poppins text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600">Quick answers to common questions about SafePath.</p>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-2">How quickly can SafePath detect if I'm in danger?</h3>
                  <p className="text-gray-600">Our AI analyzes your responses in real-time. If distress is detected or you miss a check-in, alerts are sent within 30 seconds.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-2">Is my location data private and secure?</h3>
                  <p className="text-gray-600">Yes, your location is only shared with your chosen emergency contacts during active trips. We use end-to-end encryption and don't store location data permanently.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-2">What happens if I accidentally trigger an alert?</h3>
                  <p className="text-gray-600">You have a 60-second window to cancel any alert. We also send a verification message to confirm before notifying your emergency contacts.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-2">Does SafePath work internationally?</h3>
                  <p className="text-gray-600">SafePath works in most countries with cellular coverage. Safe zone data is currently available in North America, with expansion planned for other regions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
