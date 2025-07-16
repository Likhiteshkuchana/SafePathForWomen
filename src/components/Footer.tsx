
import { Link } from 'react-router-dom';
import { Shield, Github, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-safepath-purple-soft pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-safepath-purple" />
              <span className="font-poppins font-semibold text-xl text-gray-800">
                Safe<span className="text-safepath-purple">Path</span>
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Your safety, one step ahead. AI-powered protection for women on the go.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/safepath" target="_blank" rel="noopener noreferrer" className="text-safepath-purple-dark hover:text-safepath-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com/safepath" target="_blank" rel="noopener noreferrer" className="text-safepath-purple-dark hover:text-safepath-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/safepath" target="_blank" rel="noopener noreferrer" className="text-safepath-purple-dark hover:text-safepath-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://github.com/safepath" target="_blank" rel="noopener noreferrer" className="text-safepath-purple-dark hover:text-safepath-purple transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-safepath-purple transition-colors">Home</Link></li>
              <li><Link to="/how-it-works" className="text-gray-600 hover:text-safepath-purple transition-colors">How It Works</Link></li>
              <li><Link to="/features" className="text-gray-600 hover:text-safepath-purple transition-colors">Features</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-safepath-purple transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-safepath-purple transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Safety Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/dashboard" className="text-gray-600 hover:text-safepath-purple transition-colors">Dashboard</Link></li>
              <li><Link to="/emergency" className="text-gray-600 hover:text-safepath-purple transition-colors">Emergency Services</Link></li>
              <li><Link to="/features" className="text-gray-600 hover:text-safepath-purple transition-colors">Safety Tips</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-safepath-purple transition-colors">Report a Zone</Link></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Legal & Support</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-gray-600 hover:text-safepath-purple transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-safepath-purple transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-safepath-purple transition-colors">Support</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-safepath-purple transition-colors">Help Center</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-safepath-purple/20 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} SafePath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
