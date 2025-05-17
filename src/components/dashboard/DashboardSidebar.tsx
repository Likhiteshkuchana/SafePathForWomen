
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield,
  LayoutDashboard, 
  Map, 
  History, 
  MapPin, 
  UserPlus, 
  Settings, 
  LogOut
} from 'lucide-react';

const DashboardSidebar = ({ collapsed = false, toggleSidebar }: { collapsed?: boolean, toggleSidebar?: () => void }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const isActive = (path: string) => currentPath === path;
  
  const menuItems = [
    { 
      name: 'Dashboard', 
      path: '/dashboard', 
      icon: LayoutDashboard 
    },
    { 
      name: 'Start Trip', 
      path: '/trip/new', 
      icon: Map
    },
    { 
      name: 'Trip History', 
      path: '/trips', 
      icon: History 
    },
    { 
      name: 'Safe Zones', 
      path: '/safe-zones', 
      icon: MapPin 
    },
    { 
      name: 'Emergency Contacts', 
      path: '/contacts', 
      icon: UserPlus 
    },
    { 
      name: 'Settings', 
      path: '/settings', 
      icon: Settings 
    }
  ];
  
  return (
    <div className={`${collapsed ? 'w-20' : 'w-64'} transition-all duration-300 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 z-30`}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className={`py-6 flex ${collapsed ? 'justify-center' : 'px-6'}`}>
          {collapsed ? (
            <Shield className="h-8 w-8 text-safepath-purple" />
          ) : (
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-safepath-purple" />
              <span className="font-poppins font-semibold text-xl text-gray-800">
                Safe<span className="text-safepath-purple">Path</span>
              </span>
            </Link>
          )}
        </div>
        
        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center ${collapsed ? 'justify-center' : 'px-4'} py-3 ${collapsed ? '' : 'mx-2'} rounded-lg
                    ${isActive(item.path) 
                      ? 'bg-safepath-purple text-white' 
                      : 'text-gray-600 hover:bg-safepath-purple-soft hover:text-safepath-purple-dark'}
                    transition-colors duration-200
                  `}
                >
                  <item.icon className={`${collapsed ? 'h-6 w-6' : 'h-5 w-5 mr-3'}`} />
                  {!collapsed && <span className="font-medium">{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Logout Button */}
        <div className={`p-4 ${collapsed ? 'flex justify-center' : ''} border-t border-gray-200`}>
          <Link
            to="/logout"
            className={`
              flex items-center ${collapsed ? 'justify-center' : 'px-4'} py-3 rounded-lg
              text-gray-600 hover:bg-red-50 hover:text-red-600
              transition-colors duration-200
            `}
          >
            <LogOut className={`${collapsed ? 'h-6 w-6' : 'h-5 w-5 mr-3'}`} />
            {!collapsed && <span className="font-medium">Logout</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
