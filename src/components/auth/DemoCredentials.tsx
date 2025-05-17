
import { Link } from 'react-router-dom';

const DemoCredentials = () => {
  return (
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
  );
};

export default DemoCredentials;
