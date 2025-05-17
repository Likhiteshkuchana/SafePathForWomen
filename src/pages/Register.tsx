
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, User, Lock, Phone, Heart, ArrowRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Register = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelation: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data for step 1
    if (!formData.fullName || !formData.email || !formData.password || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    // Password validation
    if (formData.password.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters long",
        variant: "destructive",
      });
      return;
    }
    
    setFormStep(2);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data for step 2
    if (!formData.emergencyName || !formData.emergencyPhone || !formData.emergencyRelation) {
      toast({
        title: "Error",
        description: "Please fill in all required emergency contact fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem('safepath_users') || '[]');
      const userExists = existingUsers.some((user: any) => user.email === formData.email);
      
      if (userExists) {
        toast({
          title: "Error",
          description: "A user with this email already exists",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }
      
      // Save user data
      const newUser = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password, // In a real app, this would be hashed
        phone: formData.phone,
        emergencyContact: {
          name: formData.emergencyName,
          phone: formData.emergencyPhone,
          relation: formData.emergencyRelation
        },
        isLoggedIn: false
      };
      
      existingUsers.push(newUser);
      localStorage.setItem('safepath_users', JSON.stringify(existingUsers));
      
      // Show success message
      toast({
        title: "Registration successful!",
        description: "You can now log in to your SafePath account",
      });
      
      // Redirect to login page
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 bg-safepath-purple-soft/30">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-safepath-purple/10 p-3 rounded-full">
                      <Shield className="h-8 w-8 text-safepath-purple" />
                    </div>
                  </div>
                  <h1 className="font-poppins text-2xl font-bold text-gray-800">Create Your Account</h1>
                  <p className="text-gray-600 mt-2">
                    {formStep === 1 
                      ? "Join SafePath for enhanced protection" 
                      : "Add an emergency contact for safety"}
                  </p>
                </div>
                
                {/* Step indicator */}
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      formStep >= 1 ? 'bg-safepath-purple text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      1
                    </div>
                    <div className={`w-16 h-1 ${
                      formStep >= 2 ? 'bg-safepath-purple' : 'bg-gray-200'
                    }`}></div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      formStep >= 2 ? 'bg-safepath-purple text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      2
                    </div>
                  </div>
                </div>
                
                {formStep === 1 ? (
                  <form onSubmit={handleNextStep} className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="form-label">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <User size={18} className="text-gray-400" />
                        </div>
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="Your full name"
                          className="pl-10"
                          value={formData.fullName}
                          onChange={(e) => updateFormData('fullName', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="form-label">Email</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <User size={18} className="text-gray-400" />
                        </div>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="password" className="form-label">Password</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <Lock size={18} className="text-gray-400" />
                        </div>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Create a strong password"
                          className="pl-10"
                          value={formData.password}
                          onChange={(e) => updateFormData('password', e.target.value)}
                          required
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Password must be at least 8 characters long
                      </p>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <Phone size={18} className="text-gray-400" />
                        </div>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Your phone number"
                          className="pl-10"
                          value={formData.phone}
                          onChange={(e) => updateFormData('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-safepath-purple hover:bg-safepath-purple-dark text-white"
                      disabled={isLoading}
                    >
                      Continue
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="bg-safepath-purple/5 p-4 rounded-lg mb-6">
                      <div className="flex items-center">
                        <Heart className="text-safepath-purple h-5 w-5 mr-2" />
                        <p className="text-gray-700 text-sm">
                          SafePath requires at least one emergency contact for your safety
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="emergencyName" className="form-label">Emergency Contact Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <User size={18} className="text-gray-400" />
                        </div>
                        <Input
                          id="emergencyName"
                          type="text"
                          placeholder="Contact's full name"
                          className="pl-10"
                          value={formData.emergencyName}
                          onChange={(e) => updateFormData('emergencyName', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="emergencyPhone" className="form-label">Emergency Contact Phone</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <Phone size={18} className="text-gray-400" />
                        </div>
                        <Input
                          id="emergencyPhone"
                          type="tel"
                          placeholder="Contact's phone number"
                          className="pl-10"
                          value={formData.emergencyPhone}
                          onChange={(e) => updateFormData('emergencyPhone', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="emergencyRelation" className="form-label">Relationship</label>
                      <select
                        id="emergencyRelation"
                        className="form-input w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                        value={formData.emergencyRelation}
                        onChange={(e) => updateFormData('emergencyRelation', e.target.value)}
                        required
                      >
                        <option value="">Select relationship</option>
                        <option value="family">Family</option>
                        <option value="friend">Friend</option>
                        <option value="partner">Partner</option>
                        <option value="roommate">Roommate</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button 
                        type="button" 
                        variant="outline"
                        className="flex-1 border-safepath-purple text-safepath-purple hover:bg-safepath-purple-soft"
                        onClick={() => setFormStep(1)}
                        disabled={isLoading}
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit" 
                        className="flex-1 bg-safepath-purple hover:bg-safepath-purple-dark text-white"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Signing up...
                          </span>
                        ) : (
                          <>
                            Complete Sign Up
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
                
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-safepath-purple hover:text-safepath-purple-dark font-medium">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;

