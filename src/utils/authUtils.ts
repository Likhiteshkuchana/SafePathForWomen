
import { toast } from '@/hooks/use-toast';

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
