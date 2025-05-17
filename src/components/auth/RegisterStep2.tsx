
import { User, Phone, Heart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface RegisterStep2Props {
  formData: {
    emergencyName: string;
    emergencyPhone: string;
    emergencyRelation: string;
  };
  updateFormData: (field: string, value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  goBack: () => void;
  isLoading: boolean;
}

const RegisterStep2 = ({ formData, updateFormData, handleSubmit, goBack, isLoading }: RegisterStep2Props) => {
  return (
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
          onClick={goBack}
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
  );
};

export default RegisterStep2;
