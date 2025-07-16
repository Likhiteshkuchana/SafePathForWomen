
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import ProfileCard from '@/components/dashboard/ProfileCard';
import ActiveTripCard from '@/components/dashboard/ActiveTripCard';
import CheckInLogs from '@/components/dashboard/CheckInLogs';
import SafeZoneMap from '@/components/dashboard/SafeZoneMap';
import EmergencyCard from '@/components/dashboard/EmergencyCard';
import EmptyDashboard from '@/components/dashboard/EmptyDashboard';
import WeeklySummary from '@/components/dashboard/WeeklySummary';
import AIInfoCard from '@/components/dashboard/AIInfoCard';

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userTrips, setUserTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  useEffect(() => {
    // Check authentication
    const userData = JSON.parse(localStorage.getItem('safepath_user') || '{}');
    
    if (!userData.email) {
      // Not logged in, redirect to login
      navigate('/login');
      return;
    }

    setCurrentUser(userData);
    
    // Get user's actual trip history (only their own data)
    const trips = JSON.parse(localStorage.getItem(`safepath_trips_${userData.email}`) || '[]');
    setUserTrips(trips);
    setLoading(false);
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-safepath-purple mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!currentUser || !currentUser.email) {
    return null; // Will redirect in useEffect
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
            <p className="text-gray-600">
              Welcome back, {currentUser.name}! {hasTrips ? "Here's your safety summary." : "Start your first trip to see your safety data here."}
            </p>
          </div>
          
          {hasTrips ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <ProfileCard 
                  name={currentUser.name}
                  phone={currentUser.phone || currentUser.emergencyContact?.phone || "+1 (555) 123-4567"}
                  status="safe" 
                />
                <ActiveTripCard 
                  destination="No active trip"
                  startTime=""
                  duration={0}
                  contactName={currentUser.emergencyContact?.name || "Emergency Contact"}
                  contactPhone={currentUser.emergencyContact?.phone || "+1 (555) 911-0000"}
                />
                <EmergencyCard />
              </div>
              
              {/* Middle and Right Columns */}
              <div className="lg:col-span-2 space-y-6">
                <AIInfoCard />
                <CheckInLogs userEmail={currentUser.email} />
                <SafeZoneMap />
                <WeeklySummary userEmail={currentUser.email} />
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
