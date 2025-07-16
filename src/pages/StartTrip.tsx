
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Clock, Phone, ArrowLeft, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const StartTrip = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    destination: '',
    estimatedTime: '',
    transportMode: '',
    emergencyContact: '',
    checkInInterval: '15'
  });

  const handleStartTrip = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save trip data
    const currentUser = JSON.parse(localStorage.getItem('safepath_user') || '{}');
    const tripData = {
      id: Date.now(),
      ...formData,
      startTime: new Date().toISOString(),
      status: 'active',
      userEmail: currentUser.email
    };
    
    // Save to user's trip history
    const existingTrips = JSON.parse(localStorage.getItem(`safepath_trips_${currentUser.email}`) || '[]');
    existingTrips.push(tripData);
    localStorage.setItem(`safepath_trips_${currentUser.email}`, JSON.stringify(existingTrips));
    
    toast({
      title: "Trip Started!",
      description: "Your safety monitoring is now active. Stay safe!",
    });
    
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/dashboard" className="flex items-center text-gray-700 hover:text-safepath-purple">
            <ArrowLeft size={20} className="mr-2" />
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <div className="bg-safepath-purple-soft rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Play size={32} className="text-safepath-purple" />
              </div>
              <CardTitle className="font-poppins text-2xl">Start New Trip</CardTitle>
              <CardDescription>
                Set up your safety monitoring for this journey
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleStartTrip} className="space-y-6">
                <div>
                  <Label htmlFor="destination">Destination</Label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-3 top-3 text-gray-400" />
                    <Input
                      id="destination"
                      value={formData.destination}
                      onChange={(e) => setFormData({...formData, destination: e.target.value})}
                      placeholder="Where are you going?"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="estimatedTime">Estimated Travel Time</Label>
                  <div className="relative">
                    <Clock size={16} className="absolute left-3 top-3 text-gray-400" />
                    <Input
                      id="estimatedTime"
                      value={formData.estimatedTime}
                      onChange={(e) => setFormData({...formData, estimatedTime: e.target.value})}
                      placeholder="e.g., 30 minutes"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="transportMode">Mode of Transport</Label>
                  <Select value={formData.transportMode} onValueChange={(value) => setFormData({...formData, transportMode: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="How are you traveling?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="walking">Walking</SelectItem>
                      <SelectItem value="driving">Driving</SelectItem>
                      <SelectItem value="public-transport">Public Transport</SelectItem>
                      <SelectItem value="rideshare">Rideshare</SelectItem>
                      <SelectItem value="cycling">Cycling</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="emergencyContact">Emergency Contact</Label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-3 text-gray-400" />
                    <Input
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                      placeholder="Contact to notify"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="checkInInterval">Check-in Interval</Label>
                  <Select value={formData.checkInInterval} onValueChange={(value) => setFormData({...formData, checkInInterval: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">Every 5 minutes</SelectItem>
                      <SelectItem value="10">Every 10 minutes</SelectItem>
                      <SelectItem value="15">Every 15 minutes</SelectItem>
                      <SelectItem value="30">Every 30 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="bg-safepath-purple-soft/20 p-4 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">What happens next?</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• You'll receive regular check-ins</li>
                    <li>• AI will analyze your responses</li>
                    <li>• Emergency contacts will be notified if needed</li>
                    <li>• Your location will be tracked safely</li>
                  </ul>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-safepath-purple hover:bg-safepath-purple-dark text-white h-12 text-lg"
                >
                  <Play size={20} className="mr-2" />
                  Start Trip
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StartTrip;
