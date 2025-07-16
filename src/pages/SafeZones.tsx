
import { useState } from 'react';
import { MapPin, Plus, Coffee, Hospital, Shield, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SafeZones = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [filterType, setFilterType] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    location: '',
    rating: 5,
    review: ''
  });

  const safeZones = [
    {
      id: 1,
      name: "Central Coffee Shop",
      type: "cafe",
      location: "Downtown Area",
      rating: 5,
      distance: "0.3 miles",
      isOpen: true,
      reviews: 24
    },
    {
      id: 2,
      name: "City Hospital",
      type: "hospital",
      location: "Medical District",
      rating: 4,
      distance: "0.8 miles",
      isOpen: true,
      reviews: 89
    },
    {
      id: 3,
      name: "Main Police Station",
      type: "police",
      location: "City Center",
      rating: 5,
      distance: "0.5 miles",
      isOpen: true,
      reviews: 156
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'cafe': return <Coffee size={20} className="text-green-600" />;
      case 'hospital': return <Hospital size={20} className="text-blue-600" />;
      case 'police': return <Shield size={20} className="text-purple-600" />;
      default: return <MapPin size={20} className="text-gray-600" />;
    }
  };

  const handleAddZone = (e: React.FormEvent) => {
    e.preventDefault();
    // Add zone logic here
    setShowAddForm(false);
    setFormData({ name: '', type: '', location: '', rating: 5, review: '' });
  };

  const filteredZones = filterType === 'all' 
    ? safeZones 
    : safeZones.filter(zone => zone.type === filterType);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="font-poppins text-3xl font-bold text-gray-800 mb-4">Safe Zones</h1>
            <p className="text-gray-600">Find and add verified safe places in your area</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Filters and Add Button */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Filter className="mr-2" size={20} />
                    Filters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Zones</SelectItem>
                      <SelectItem value="cafe">Cafes</SelectItem>
                      <SelectItem value="hospital">Hospitals</SelectItem>
                      <SelectItem value="police">Police Stations</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              <Button 
                onClick={() => setShowAddForm(!showAddForm)}
                className="w-full bg-safepath-purple hover:bg-safepath-purple-dark"
              >
                <Plus className="mr-2" size={20} />
                Add New Safe Zone
              </Button>

              {/* Add Zone Form */}
              {showAddForm && (
                <Card>
                  <CardHeader>
                    <CardTitle>Add Safe Zone</CardTitle>
                    <CardDescription>Help others by adding a verified safe place</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAddZone} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Place Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="e.g., Downtown Coffee Shop"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="type">Type</Label>
                        <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cafe">Cafe</SelectItem>
                            <SelectItem value="hospital">Hospital</SelectItem>
                            <SelectItem value="police">Police Station</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                          placeholder="Address or area"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="rating">Safety Rating</Label>
                        <Select value={formData.rating.toString()} onValueChange={(value) => setFormData({...formData, rating: parseInt(value)})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 Stars - Excellent</SelectItem>
                            <SelectItem value="4">4 Stars - Very Good</SelectItem>
                            <SelectItem value="3">3 Stars - Good</SelectItem>
                            <SelectItem value="2">2 Stars - Fair</SelectItem>
                            <SelectItem value="1">1 Star - Poor</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="review">Review (Optional)</Label>
                        <Textarea
                          id="review"
                          value={formData.review}
                          onChange={(e) => setFormData({...formData, review: e.target.value})}
                          placeholder="Share your experience..."
                          rows={3}
                        />
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button type="submit" className="flex-1 bg-safepath-purple hover:bg-safepath-purple-dark">
                          Add Zone
                        </Button>
                        <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right Column - Map and Zone List */}
            <div className="lg:col-span-2 space-y-6">
              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="bg-gray-200 h-64 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-600">Interactive Map View</p>
                    </div>
                    
                    {/* Sample markers */}
                    <div className="absolute top-1/4 left-1/4">
                      <div className="bg-green-500 text-white p-2 rounded-full">
                        <Coffee size={16} />
                      </div>
                    </div>
                    <div className="absolute top-1/2 right-1/3">
                      <div className="bg-blue-500 text-white p-2 rounded-full">
                        <Hospital size={16} />
                      </div>
                    </div>
                    <div className="absolute bottom-1/4 right-1/4">
                      <div className="bg-purple-500 text-white p-2 rounded-full">
                        <Shield size={16} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Zone List */}
              <div className="space-y-4">
                <h3 className="font-poppins text-xl font-semibold">
                  {filteredZones.length} Safe Zones Found
                </h3>
                
                {filteredZones.map((zone) => (
                  <Card key={zone.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gray-100 p-3 rounded-lg">
                            {getTypeIcon(zone.type)}
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg">{zone.name}</h4>
                            <p className="text-gray-600 text-sm">{zone.location}</p>
                            <p className="text-sm text-gray-500">{zone.distance} away</p>
                            
                            <div className="flex items-center mt-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    size={16} 
                                    className={i < zone.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"} 
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500 ml-2">
                                ({zone.reviews} reviews)
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            zone.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {zone.isOpen ? 'Open' : 'Closed'}
                          </span>
                          
                          <div className="mt-2">
                            <Button size="sm" variant="outline">
                              <MapPin size={14} className="mr-1" />
                              Directions
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SafeZones;
