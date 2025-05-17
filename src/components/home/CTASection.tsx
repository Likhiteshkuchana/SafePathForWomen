
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-safepath-purple to-safepath-purple-dark rounded-2xl overflow-hidden shadow-lg">
          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="w-full lg:w-1/3 relative hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                alt="Woman feeling confident and safe" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-safepath-purple/40"></div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-2/3 p-8 md:p-12 text-white">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">
                Take Control of Your Safety Today
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Join thousands of women who feel safer every day with SafePath's AI-powered protection. 
                Sign up now and get your first month free.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/register">
                  <Button className="bg-white hover:bg-gray-100 text-safepath-purple font-medium px-6 py-6 h-auto text-lg">
                    Sign Up Free
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 h-auto text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center">
                <span className="mr-4 text-white/80 font-medium">As featured in:</span>
                <div className="flex space-x-6">
                  <span className="text-white font-poppins font-semibold opacity-80 hover:opacity-100 transition-opacity">TechCrunch</span>
                  <span className="text-white font-poppins font-semibold opacity-80 hover:opacity-100 transition-opacity">Forbes</span>
                  <span className="text-white font-poppins font-semibold opacity-80 hover:opacity-100 transition-opacity">Wired</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
