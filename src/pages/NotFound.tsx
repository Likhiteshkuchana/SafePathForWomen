
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MapPin, ArrowLeft } from "lucide-react";
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-safepath-purple-soft/30 p-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="mb-6">
            <div className="bg-safepath-purple-soft/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
              <MapPin className="h-10 w-10 text-safepath-purple" />
            </div>
          </div>
          
          <h1 className="font-poppins text-4xl font-bold mb-2">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! You've gone off the safe path</p>
          <p className="text-gray-500 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <Link to="/">
            <Button className="bg-safepath-purple hover:bg-safepath-purple-dark text-white">
              <ArrowLeft size={16} className="mr-2" />
              Return to Safe Path
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
