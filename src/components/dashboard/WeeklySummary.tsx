
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Shield, AlertTriangle, Clock } from 'lucide-react';

interface WeeklySummaryProps {
  userEmail: string;
}

const WeeklySummary = ({ userEmail }: WeeklySummaryProps) => {
  // In a real app, this would fetch actual user data
  const weeklyData = [
    { day: 'Mon', trips: 2, alerts: 0, checkIns: 8 },
    { day: 'Tue', trips: 1, alerts: 0, checkIns: 4 },
    { day: 'Wed', trips: 3, alerts: 1, checkIns: 12 },
    { day: 'Thu', trips: 2, alerts: 0, checkIns: 8 },
    { day: 'Fri', trips: 4, alerts: 0, checkIns: 16 },
    { day: 'Sat', trips: 1, alerts: 0, checkIns: 4 },
    { day: 'Sun', trips: 2, alerts: 0, checkIns: 8 },
  ];

  const totalTrips = weeklyData.reduce((sum, day) => sum + day.trips, 0);
  const totalAlerts = weeklyData.reduce((sum, day) => sum + day.alerts, 0);
  const totalCheckIns = weeklyData.reduce((sum, day) => sum + day.checkIns, 0);

  return (
    <div className="dashboard-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-poppins font-semibold text-lg">Weekly Safety Summary</h3>
        <TrendingUp size={20} className="text-safepath-purple" />
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">{totalTrips}</div>
          <div className="text-sm text-gray-600 flex items-center justify-center mt-1">
            <Clock size={14} className="mr-1" />
            Total Trips
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">{totalCheckIns}</div>
          <div className="text-sm text-gray-600 flex items-center justify-center mt-1">
            <Shield size={14} className="mr-1" />
            Check-ins
          </div>
        </div>
        
        <div className="bg-amber-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-amber-600">{totalAlerts}</div>
          <div className="text-sm text-gray-600 flex items-center justify-center mt-1">
            <AlertTriangle size={14} className="mr-1" />
            Alerts
          </div>
        </div>
      </div>
      
      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="trips" fill="#8B5CF6" name="Trips" />
            <Bar dataKey="checkIns" fill="#10B981" name="Check-ins" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklySummary;
