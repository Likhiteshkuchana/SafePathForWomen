
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('safepath_user') || '{}');
    setIsLoggedIn(!!user.email);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Features', path: '/features' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Shield className="h-8 w-8 text-safepath-purple" />
            <span className="font-poppins font-semibold text-xl text-gray-800">
              Safe<span className="text-safepath-purple">Path</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="nav-link">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <Link to="/dashboard">
                <Button className="bg-safepath-purple hover:bg-safepath-purple-dark text-white">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" className="border-safepath-purple text-safepath-purple hover:bg-safepath-purple-soft">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-safepath-purple hover:bg-safepath-purple-dark text-white">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-safepath-purple z-50 relative"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40">
            <div className="px-4 py-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className="nav-link py-3 px-2 text-gray-700 hover:text-safepath-purple border-b border-gray-100 last:border-b-0"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 flex flex-col space-y-3">
                  {isLoggedIn ? (
                    <Link to="/dashboard" onClick={closeMenu}>
                      <Button className="w-full bg-safepath-purple hover:bg-safepath-purple-dark text-white">
                        Dashboard
                      </Button>
                    </Link>
                  ) : (
                    <>
                      <Link to="/login" onClick={closeMenu}>
                        <Button variant="outline" className="w-full border-safepath-purple text-safepath-purple hover:bg-safepath-purple-soft">
                          Login
                        </Button>
                      </Link>
                      <Link to="/register" onClick={closeMenu}>
                        <Button className="w-full bg-safepath-purple hover:bg-safepath-purple-dark text-white">
                          Get Started
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
