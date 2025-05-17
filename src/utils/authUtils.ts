
import { toast } from '@/hooks/use-toast';
import { NavigateFunction } from 'react-router-dom';

interface FormData {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  emergencyName: string;
  emergencyPhone: string;
  emergencyRelation: string;
}

export const validateStep1 = (formData: Pick<FormData, 'fullName' | 'email' | 'password' | 'phone'>) => {
  if (!formData.fullName || !formData.email || !formData.password || !formData.phone) {
    toast({
      title: "Error",
      description: "Please fill in all required fields",
      variant: "destructive",
    });
    return false;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    toast({
      title: "Error",
      description: "Please enter a valid email address",
      variant: "destructive",
    });
    return false;
  }
  
  // Password validation
  if (formData.password.length < 8) {
    toast({
      title: "Error",
      description: "Password must be at least 8 characters long",
      variant: "destructive",
    });
    return false;
  }
  
  return true;
};

export const validateStep2 = (formData: Pick<FormData, 'emergencyName' | 'emergencyPhone' | 'emergencyRelation'>) => {
  if (!formData.emergencyName || !formData.emergencyPhone || !formData.emergencyRelation) {
    toast({
      title: "Error",
      description: "Please fill in all required emergency contact fields",
      variant: "destructive",
    });
    return false;
  }
  
  return true;
};

export const registerUser = async (formData: FormData) => {
  // Check if user already exists
  const existingUsers = JSON.parse(localStorage.getItem('safepath_users') || '[]');
  const userExists = existingUsers.some((user: any) => user.email === formData.email);
  
  if (userExists) {
    toast({
      title: "Error",
      description: "A user with this email already exists",
      variant: "destructive",
    });
    return false;
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
  
  return true;
};

export const loginUser = async (email: string, password: string, navigate: NavigateFunction, rememberMe: boolean = false) => {
  // Add a small delay to simulate server request
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      // First try to find the user in the registered users
      const users = JSON.parse(localStorage.getItem('safepath_users') || '[]');
      const user = users.find((u: any) => u.email === email && u.password === password);
      
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
        resolve(true);
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
        resolve(true);
      } 
      // If neither condition is met, show login failed message
      else {
        toast({
          title: "Login failed",
          description: "Invalid email or password. Please try again or register for an account.",
          variant: "destructive",
        });
        resolve(false);
      }
    }, 1500);
  });
};
