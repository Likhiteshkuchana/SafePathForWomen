
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-poppins text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <section className="mb-8">
                <h2 className="font-poppins text-2xl font-semibold text-gray-800 mb-4">Our Commitment to Your Privacy</h2>
                <p className="text-gray-600 mb-4">
                  At SafePath, protecting your privacy is fundamental to our mission. We understand that personal safety 
                  requires trust, and we're committed to being transparent about how we collect, use, and protect your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-poppins text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
                <div className="space-y-4 text-gray-600">
                  <p><strong>Personal Information:</strong> Name, email address, phone number, and emergency contact details.</p>
                  <p><strong>Location Data:</strong> GPS coordinates during active trips only, automatically deleted after trip completion.</p>
                  <p><strong>Usage Data:</strong> App interaction patterns to improve our AI safety detection.</p>
                  <p><strong>Voice Data:</strong> Voice responses during check-ins, processed locally and not stored permanently.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="font-poppins text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
                <div className="space-y-4 text-gray-600">
                  <p>• Provide real-time safety monitoring and emergency alerts</p>
                  <p>• Improve our AI detection algorithms</p>
                  <p>• Send safety notifications to your emergency contacts</p>
                  <p>• Provide customer support and app improvements</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="font-poppins text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
                <p className="text-gray-600">
                  We use industry-standard encryption, secure servers, and strict access controls. Your data is never sold 
                  to third parties, and location sharing only occurs with your explicitly chosen emergency contacts.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-poppins text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
                <div className="space-y-4 text-gray-600">
                  <p>• Access and download your personal data</p>
                  <p>• Request deletion of your account and data</p>
                  <p>• Control location sharing preferences</p>
                  <p>• Opt out of non-essential communications</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="font-poppins text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-gray-600">
                  Questions about our privacy practices? Contact us at privacy@safepath.com or through our 
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

export default Privacy;
