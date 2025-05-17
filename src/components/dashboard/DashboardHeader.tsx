
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, 
  Menu,
  MessageSquare, 
  User, 
  Search,
  Shield
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface DashboardHeaderProps {
  toggleSidebar: () => void;
}

const DashboardHeader = ({ toggleSidebar }: DashboardHeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  
  const notifications = [
    {
      id: 1,
      message: "Safety check requested for your trip",
      time: "Just now",
      read: false
    },
    {
      id: 2,
      message: "New safe zone added near your location",
      time: "2 hours ago",
      read: true
    },
    {
      id: 3,
      message: "Weekly safety report available",
      time: "Yesterday",
      read: true
    }
  ];
  
  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 right-0 left-0 z-20">
      <div className="flex h-16 items-center justify-between px-4 ml-[280px]">
        {/* Left side */}
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar} 
            className="p-2 mr-4 text-gray-600 hover:text-safepath-purple rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>
          
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 w-64 bg-gray-50 border border-gray-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* Mobile Logo (shown on small screens) */}
        <div className="md:hidden flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-safepath-purple" />
            <span className="font-poppins font-semibold text-lg text-gray-800">
              Safe<span className="text-safepath-purple">Path</span>
            </span>
          </Link>
        </div>
        
        {/* Right side */}
        <div className="flex items-center space-x-2">
          {/* Emergency Button */}
          <Link to="/emergency">
            <Button 
              className="hidden sm:flex bg-safepath-danger hover:bg-red-700 mr-2"
              size="sm"
            >
              Emergency
            </Button>
          </Link>
          
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-1.5 text-gray-600 hover:text-safepath-purple rounded-full hover:bg-gray-100"
              aria-label="Notifications"
            >
              <Bell size={20} />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                1
              </span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-800">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map(notification => (
                    <div 
                      key={notification.id}
                      className={`px-4 py-3 border-b border-gray-50 ${notification.read ? '' : 'bg-safepath-purple-soft/20'}`}
                    >
                      <div className="flex items-start">
                        <div className="bg-safepath-purple rounded-full p-1.5 mr-3">
                          <Bell size={14} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-800">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 text-center border-t border-gray-100">
                  <Link to="/notifications" className="text-xs text-safepath-purple hover:underline">
                    View all notifications
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          {/* Messages */}
          <button
            className="p-1.5 text-gray-600 hover:text-safepath-purple rounded-full hover:bg-gray-100"
            aria-label="Messages"
          >
            <MessageSquare size={20} />
          </button>
          
          {/* User menu */}
          <div className="relative">
            <button className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-safepath-purple-soft flex items-center justify-center border border-safepath-purple/30">
                <User size={16} className="text-safepath-purple" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
