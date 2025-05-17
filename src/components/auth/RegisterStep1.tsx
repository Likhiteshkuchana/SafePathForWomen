
import { User, Phone, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface RegisterStep1Props {
  formData: {
    fullName: string;
    email: string;
    password: string;
    phone: string;
  };
  updateFormData: (field: string, value: string) => void;
  handleNextStep: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const RegisterStep1 = ({ formData, updateFormData, handleNextStep, isLoading }: RegisterStep1Props) => {
  return (
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
  );
};

export default RegisterStep1;
