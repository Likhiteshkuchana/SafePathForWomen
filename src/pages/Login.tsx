
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, User, Lock, ArrowRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return false;
    }
    
    if (!password) {
      toast({
        title: "Error",
        description: "Please enter your password",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      console.log('Login attempt:', { email });
      
      // First try to find the user in the registered users
      const users = JSON.parse(localStorage.getItem('safepath_users') || '[]');
      const user = users.find((u: any) => u.email === email && u.password === password);
      
      setTimeout(() => {
        // Check if the user exists in our registered users
        if (user) {
          // Update user's login status
          user.isLoggedIn = true;
          localStorage.setItem('safepath_users', JSON.stringify(users));
          
          // Store the current user session
          localStorage.setItem('safepath_user', JSON.stringify({
            email: user.email,
            name: user.fullName,
            isLoggedIn: true
          }));
          
          toast({
            title: "Login successful!",
            description: `Welcome back, ${user.fullName}!`,
          });
          
          // Redirect to dashboard
          navigate('/dashboard');
        } 
        // If not found in registered users, fall back to the demo account
        else if (email === 'demo@safepath.com' && password === 'password123') {
          toast({
            title: "Demo Login successful!",
            description: "Welcome to the SafePath demo account",
          });
          
          localStorage.setItem('safepath_user', JSON.stringify({ 
            email, 
            name: 'Demo User',
            isLoggedIn: true 
          }));
          
          navigate('/dashboard');
        } 
        // If neither condition is met, show login failed message
        else {
          toast({
            title: "Login failed",
            description: "Invalid email or password. Please try again or register for an account.",
            variant: "destructive",
          });
        }
        
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 bg-safepath-purple-soft/30">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-safepath-purple/10 p-3 rounded-full">
                      <Shield className="h-8 w-8 text-safepath-purple" />
                    </div>
                  </div>
                  <h1 className="font-poppins text-2xl font-bold text-gray-800">Welcome Back</h1>
                  <p className="text-gray-600 mt-2">Sign in to your SafePath account</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="form-label">Password</label>
                      <Link to="/forgot-password" className="text-sm text-safepath-purple hover:text-safepath-purple-dark">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Lock size={18} className="text-gray-400" />
                      </div>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      className="h-4 w-4 text-safepath-purple focus:ring-safepath-purple border-gray-300 rounded"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-safepath-purple hover:bg-safepath-purple-dark text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Signing in...
                      </span>
                    ) : (
                      <>
                        Sign In
                        <ArrowRight size={16} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-safepath-purple hover:text-safepath-purple-dark font-medium">
                      Sign up
                    </Link>
                  </p>
                  <div className="mt-4 text-xs text-gray-500">
                    <p>Demo credentials:</p>
                    <p>Email: demo@safepath.com</p>
                    <p>Password: password123</p>
                  </div>
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

export default Login;
