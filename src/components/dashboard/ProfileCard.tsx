
import { User, Phone, Star } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  phone: string;
  status: 'safe' | 'traveling' | 'danger';
}

const ProfileCard = ({ name, phone, status }: ProfileCardProps) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'safe':
        return <span className="status-badge status-safe">Safe</span>;
      case 'traveling':
        return <span className="status-badge bg-blue-100 text-blue-800">Traveling</span>;
      case 'danger':
        return <span className="status-badge status-danger">Danger</span>;
      default:
        return <span className="status-badge status-safe">Safe</span>;
    }
  };

  return (
    <div className="dashboard-card">
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full bg-safepath-purple-soft flex items-center justify-center">
          <User size={32} className="text-safepath-purple" />
        </div>
        
        <div className="ml-4">
          <div className="flex items-center">
            <h3 className="font-poppins font-semibold text-lg">{name}</h3>
            <div className="ml-2">
              {getStatusBadge()}
            </div>
          </div>
          
          <div className="flex items-center text-gray-600 mt-1">
            <Phone size={14} className="mr-1" />
            <span className="text-sm">{phone}</span>
          </div>
          
          <div className="flex items-center mt-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  size={14} 
                  className={star <= 4 ? "text-amber-400 fill-amber-400" : "text-gray-300"} 
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-2">4.0 Safety Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
