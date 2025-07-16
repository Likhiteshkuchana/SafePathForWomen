
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-poppins text-4xl font-bold text-gray-800 mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <section className="mb-8">
                <h2 className="font-poppins text-2xl font-semibold text-gray-800 mb-4">Agreement to Terms</h2>
                <p className="text-gray-600">
                  By using SafePath, you agree to these terms. SafePath is a personal safety platform designed to 
                  provide monitoring and emergency response services. These terms govern your use of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-poppins text-2xl font-semibold text-gray-800 mb-4">Service Description</h2>
                <div className="space-y-4 text-gray-600">
                  <p>SafePath provides:</p>
                  <p>• Real-time location monitoring during trips</p>
                  <p>• AI-powered safety check-ins and stress detection</p>
                  <p>• Emergency alert services to your chosen contacts</p>
                  <p>• Safe zone mapping and navigation assistance</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="font-poppins text-2xl font-semibold text-gray-800 mb-4">User Responsibilities</h2>
                <div className="space-y-4 text-gray-600">
                  <p>• Provide accurate emergency contact information</p>
                  <p>• Use the service responsibly and not for false emergencies</p>
                  <p>• Keep your account secure and notify us of unauthorized access</p>
                  <p>• Understand that SafePath supplements but doesn't replace emergency services</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="font-poppins text-2xl font-semibold text-gray-800 mb-4">Emergency Services Disclaimer</h2>
                <p className="text-gray-600">
                  SafePath is not a substitute for emergency services. In immediate danger, always contact local 
                  emergency services (911 in the US) first. SafePath provides additional safety monitoring and 
                  notification services to supplement emergency response.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-poppins text-2xl font-semibold text-gray-800 mb-4">Service Availability</h2>
                <p className="text-gray-600">
                  We strive for 99.9% uptime but cannot guarantee uninterrupted service. Factors like network 
                  connectivity, device issues, or maintenance may affect availability. We're not liable for 
                  service interruptions beyond our reasonable control.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-poppins text-2xl font-semibold text-gray-800 mb-4">Account Termination</h2>
                <p className="text-gray-600">
                  You may terminate your account at any time. We may suspend or terminate accounts for violations 
                  of these terms, including misuse of emergency features or providing false information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-poppins text-2xl font-semibold text-gray-800 mb-4">Changes to Terms</h2>
                <p className="text-gray-600">
                  We may update these terms periodically. Significant changes will be communicated via email or 
                  app notification. Continued use after changes constitutes acceptance of new terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-poppins text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  Questions about these terms? Contact us at legal@safepath.com or through our 
                  <a href="/contact" className="text-safepath-purple hover:underline ml-1">contact page</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
