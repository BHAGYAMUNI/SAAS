import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Zap, Play, Calendar, ArrowRight, TrendingUp, Target, BarChart3, Users } from 'lucide-react';

const Demo = () => {
  const [selectedDemo, setSelectedDemo] = useState('overview');
  const [isScheduling, setIsScheduling] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    preferredDate: '',
    preferredTime: ''
  });

  const demoOptions = [
    {
      id: 'overview',
      title: 'Product Overview',
      duration: '15 min',
      description: 'Get a complete overview of ADmyBRAND AI Suite features and capabilities',
      features: ['AI Campaign Optimization', 'Real-time Analytics', 'Audience Segmentation', 'Performance Insights']
    },
    {
      id: 'deep-dive',
      title: 'Deep Dive Demo',
      duration: '30 min',
      description: 'Explore advanced features and see how ADmyBRAND AI can transform your marketing',
      features: ['Custom AI Models', 'Advanced Analytics', 'Multi-channel Integration', 'ROI Optimization']
    },
    {
      id: 'personalized',
      title: 'Personalized Demo',
      duration: '45 min',
      description: 'Tailored demonstration based on your specific business needs and use cases',
      features: ['Custom Use Cases', 'Industry-specific Examples', 'Implementation Planning', 'Q&A Session']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleScheduleDemo = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsScheduling(true);
    
    // Simulate scheduling
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsScheduling(false);
    alert('Demo scheduled successfully! You will receive a confirmation email shortly.');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                <Zap className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold gradient-text">ADmyBRAND AI</span>
            </Link>
            <Link to="/">
              <Button variant="ghost">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            See ADmyBRAND AI in Action
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of AI-driven marketing optimization. Choose your demo type 
            and see how we can transform your marketing campaigns.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Options */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Choose Your Demo Experience</h2>
            <div className="space-y-4">
              {demoOptions.map((demo) => (
                <Card
                  key={demo.id}
                  className={`p-6 cursor-pointer transition-all hover-lift ${
                    selectedDemo === demo.id 
                      ? 'ring-2 ring-primary bg-primary/5' 
                      : 'glass border-glass-border hover:bg-glass-bg/80'
                  }`}
                  onClick={() => setSelectedDemo(demo.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{demo.title}</h3>
                      <p className="text-sm text-muted-foreground">{demo.duration}</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 ${
                      selectedDemo === demo.id 
                        ? 'border-primary bg-primary' 
                        : 'border-border'
                    }`}>
                      {selectedDemo === demo.id && (
                        <div className="w-full h-full rounded-full bg-primary-foreground transform scale-50"></div>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{demo.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {demo.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Instant Demo Button */}
            <div className="mt-8">
              <Card className="glass border-glass-border p-6 text-center">
                <Play className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Watch Now</h3>
                <p className="text-muted-foreground mb-4">
                  Start with a 5-minute recorded demo to see our key features
                </p>
                <Button variant="outline" size="lg" className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo Video
                </Button>
              </Card>
            </div>
          </div>

          {/* Schedule Form */}
          <div>
            <Card className="glass border-glass-border p-8">
              <div className="flex items-center space-x-2 mb-6">
                <Calendar className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Schedule Your Demo</h2>
              </div>

              <form onSubmit={handleScheduleDemo} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    >
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                    </select>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isScheduling}
                >
                  {isScheduling ? 'Scheduling...' : 'Schedule Demo'}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Increase ROI by 40%</p>
                  </div>
                  <div>
                    <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Reduce CAC by 25%</p>
                  </div>
                  <div>
                    <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Save 15 hours/week</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;