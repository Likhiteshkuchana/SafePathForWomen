
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Users, Shield, Target, Eye, Handshake } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Trust",
      description: "We build trust through transparency, reliability, and consistent protection for every user.",
      icon: Handshake
    },
    {
      title: "Clarity", 
      description: "Clear communication and intuitive design ensure you always know how SafePath protects you.",
      icon: Eye
    },
    {
      title: "Empowerment",
      description: "We empower women to move confidently through the world with technology that truly understands their needs.",
      icon: Shield
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Former safety advocate with 10+ years experience in women's protection initiatives.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Dr. Maya Patel",
      role: "Head of AI Development", 
      bio: "AI researcher specializing in voice analysis and stress detection technologies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Alex Chen",
      role: "Head of Safety Technology",
      bio: "Security expert with background in emergency response systems and location services.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-safepath-purple-soft/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Empowering Women's <span className="text-safepath-purple">Safety</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                SafePath was born from a simple belief: every woman deserves to feel safe and confident, 
                no matter where her journey takes her.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-poppins text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    We're dedicated to creating technology that truly understands and addresses the unique safety 
                    challenges women face in their daily lives. SafePath combines cutting-edge AI with human empathy 
                    to provide protection that feels natural, not intrusive.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    Our goal isn't just to create another safety app – it's to fundamentally change how women 
                    experience personal safety, giving them the confidence to live fully and fearlessly.
                  </p>
                  <div className="flex items-center">
                    <Target size={24} className="text-safepath-purple mr-3" />
                    <span className="text-lg font-semibold text-gray-800">Making safety accessible, intelligent, and empowering</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-safepath-purple-soft p-6 rounded-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                      alt="Women feeling empowered and safe"
                      className="w-full h-80 object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center">
                      <Heart size={24} className="text-red-500 mr-2" />
                      <div>
                        <div className="font-semibold text-gray-800">1000+</div>
                        <div className="text-sm text-gray-600">Women Protected</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do, from product design to customer support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-safepath-purple-soft rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon size={32} className="text-safepath-purple" />
                  </div>
                  <h3 className="font-poppins text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-poppins text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              </div>
              
              <div className="space-y-8">
                <div className="bg-safepath-purple-soft/30 p-6 rounded-xl">
                  <h3 className="font-poppins text-xl font-semibold text-gray-800 mb-3">The Beginning</h3>
                  <p className="text-gray-600">
                    SafePath started when our founder Sarah experienced a frightening situation walking home alone. 
                    Existing safety apps felt clunky and unreliable. She envisioned something smarter – technology 
                    that could understand context, emotion, and truly respond to women's needs.
                  </p>
                </div>
                
                <div className="bg-safepath-blue-soft/30 p-6 rounded-xl">
                  <h3 className="font-poppins text-xl font-semibold text-gray-800 mb-3">The Development</h3>
                  <p className="text-gray-600">
                    We spent two years researching women's safety experiences, partnering with AI experts, 
                    and testing with real users. Every feature was designed based on actual stories and 
                    needs from our community of beta testers.
                  </p>
                </div>
                
                <div className="bg-safepath-purple-soft/30 p-6 rounded-xl">
                  <h3 className="font-poppins text-xl font-semibold text-gray-800 mb-3">Today & Beyond</h3>
                  <p className="text-gray-600">
                    SafePath now protects thousands of women daily. We continue innovating with new AI capabilities, 
                    expanded safe zone networks, and deeper integration with emergency services. Our mission remains 
                    the same: empowering women to live fearlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-poppins text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Passionate experts dedicated to women's safety and empowerment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-poppins text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-safepath-purple font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
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

export default About;
