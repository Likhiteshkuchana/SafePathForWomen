import { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import ProfileCard from '@/components/dashboard/ProfileCard';
import ActiveTripCard from '@/components/dashboard/ActiveTripCard';
import CheckInLogs from '@/components/dashboard/CheckInLogs';
import SafeZoneMap from '@/components/dashboard/SafeZoneMap';
import EmergencyCard from '@/components/dashboard/EmergencyCard';

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  
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
            <p className="text-gray-600">Welcome back, Michelle! Here's your safety summary.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <ProfileCard 
                name="Michelle Lee" 
                phone="+1 (555) 123-4567" 
                status="safe" 
              />
              <ActiveTripCard 
                destination="Walk home from university"
                startTime="6:30 PM"
                duration={30}
                contactName="Emma Wilson"
                contactPhone="+1 (555) 987-6543"
              />
              <EmergencyCard />
            </div>
            
            {/* Middle and Right Columns */}
            <div className="lg:col-span-2 space-y-6">
              <CheckInLogs />
              <SafeZoneMap />
              {/* Other dashboard widgets would go here */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
