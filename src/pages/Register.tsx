
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from '@/hooks/use-toast';
import { validateStep1, validateStep2, registerUser } from '@/utils/authUtils';

// Imported components
import RegisterHeader from '@/components/auth/RegisterHeader';
import StepIndicator from '@/components/auth/StepIndicator';
import RegisterStep1 from '@/components/auth/RegisterStep1';
import RegisterStep2 from '@/components/auth/RegisterStep2';

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
    if (validateStep1(formData)) {
      setFormStep(2);
    }
  };
  
  const handleGoBack = () => {
    setFormStep(1);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data for step 2
    if (!validateStep2(formData)) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await registerUser(formData);
      
      if (success) {
        // Redirect to login page after successful registration
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      }
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
                <RegisterHeader formStep={formStep} />
                <StepIndicator currentStep={formStep} totalSteps={2} />
                
                {formStep === 1 ? (
                  <RegisterStep1 
                    formData={formData}
                    updateFormData={updateFormData}
                    handleNextStep={handleNextStep}
                    isLoading={isLoading}
                  />
                ) : (
                  <RegisterStep2
                    formData={formData}
                    updateFormData={updateFormData}
                    handleSubmit={handleSubmit}
                    goBack={handleGoBack}
                    isLoading={isLoading}
                  />
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
