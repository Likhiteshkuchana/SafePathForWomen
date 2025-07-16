
import { useState, useEffect } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import ProfileCard from '@/components/dashboard/ProfileCard';
import ActiveTripCard from '@/components/dashboard/ActiveTripCard';
import CheckInLogs from '@/components/dashboard/CheckInLogs';
import SafeZoneMap from '@/components/dashboard/SafeZoneMap';
import EmergencyCard from '@/components/dashboard/EmergencyCard';
import EmptyDashboard from '@/components/dashboard/EmptyDashboard';

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userTrips, setUserTrips] = useState<any[]>([]);
  
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  useEffect(() => {
    // Get current user data
    const userData = JSON.parse(localStorage.getItem('safepath_user') || '{}');
    setCurrentUser(userData);
    
    // Get user's trip history
    const trips = JSON.parse(localStorage.getItem(`safepath_trips_${userData.email}`) || '[]');
    setUserTrips(trips);
  }, []);

  if (!currentUser || !currentUser.email) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Please log in to continue</h2>
          <p className="text-gray-600">Redirecting to login page...</p>
        </div>
      </div>
    );
  }

  const hasTrips = userTrips.length > 0;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      
      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        {/* Header */}
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        {/* Dashboard Content */}
        <main className="pt-24 px-6 pb-8">
          <div className="mb-6">
            <h1 className="font-poppins text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">Welcome back, {currentUser.name}! {hasTrips ? "Here's your safety summary." : "Start your first trip to see your safety data here."}</p>
          </div>
          
          {hasTrips ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <ProfileCard 
                  name={currentUser.name}
                  phone={currentUser.phone || "+1 (555) 123-4567"}
                  status="safe" 
                />
                <ActiveTripCard 
                  destination="No active trip"
                  startTime=""
                  duration={0}
                  contactName=""
                  contactPhone=""
                />
                <EmergencyCard />
              </div>
              
              {/* Middle and Right Columns */}
              <div className="lg:col-span-2 space-y-6">
                <CheckInLogs />
                <SafeZoneMap />
              </div>
            </div>
          ) : (
            <EmptyDashboard userName={currentUser.name} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
