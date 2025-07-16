
import { MessageSquare, Mic } from 'lucide-react';

interface CheckIn {
  id: number;
  time: string;
  mode: 'text' | 'voice';
  response: string;
  sentiment: 'safe' | 'stress' | 'danger';
}

interface CheckInLogsProps {
  userEmail: string;
}

const CheckInLogs = ({ userEmail }: CheckInLogsProps) => {
  // In a real app, this would fetch actual user check-ins based on userEmail
  const checkIns: CheckIn[] = [
    {
      id: 1,
      time: '5:30 PM',
      mode: 'text',
      response: "I'm at the coffee shop, all good!",
      sentiment: 'safe'
    },
    {
      id: 2,
      time: '6:15 PM',
      mode: 'voice',
      response: "Walking to the bus stop now",
      sentiment: 'safe'
    },
    {
      id: 3,
      time: '6:45 PM',
      mode: 'text',
      response: "Almost home, taking a different route",
      sentiment: 'stress'
    },
    {
      id: 4,
      time: '7:00 PM',
      mode: 'voice',
      response: "Made it to my building, I'm safe",
      sentiment: 'safe'
    }
  ];

  const getSentimentBadge = (sentiment: CheckIn['sentiment']) => {
    switch (sentiment) {
      case 'safe':
        return <span className="status-badge status-safe">✅ Safe</span>;
      case 'stress':
        return <span className="status-badge status-warning">⚠️ Stress</span>;
      case 'danger':
        return <span className="status-badge status-danger">🚨 Danger</span>;
      default:
        return <span className="status-badge status-safe">✅ Safe</span>;
    }
  };

  const getModeIcon = (mode: CheckIn['mode']) => {
    return mode === 'text' 
      ? <MessageSquare size={16} className="text-gray-500" /> 
      : <Mic size={16} className="text-gray-500" />;
  };

  return (
    <div className="dashboard-card">
      <h3 className="font-poppins font-semibold text-lg mb-4">Recent Check-In History</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mode
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Response
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                AI Sentiment
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {checkIns.map((checkIn) => (
              <tr key={checkIn.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                  {checkIn.time}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    {getModeIcon(checkIn.mode)}
                    <span className="ml-1 text-sm text-gray-600 capitalize">
                      {checkIn.mode}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 max-w-xs truncate">
                  "{checkIn.response}"
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {getSentimentBadge(checkIn.sentiment)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-center">
        <a href="#" className="text-sm text-safepath-purple hover:underline">
          View all check-ins
        </a>
      </div>
    </div>
  );
};

export default CheckInLogs;
