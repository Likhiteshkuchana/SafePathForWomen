
import { Shield } from 'lucide-react';

const LoginHeader = () => {
  return (
    <div className="text-center mb-6">
      <div className="flex justify-center mb-4">
        <div className="bg-safepath-purple/10 p-3 rounded-full">
          <Shield className="h-8 w-8 text-safepath-purple" />
        </div>
      </div>
      <h1 className="font-poppins text-2xl font-bold text-gray-800">Welcome Back</h1>
      <p className="text-gray-600 mt-2">Sign in to your SafePath account</p>
    </div>
  );
};

export default LoginHeader;
