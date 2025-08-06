import React from 'react';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Users, 
  Zap, 
  BarChart3,
  Globe,
  Shield
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Campaign Optimization",
      description: "Automatically optimize your campaigns using machine learning algorithms that analyze performance data in real-time."
    },
    {
      icon: Target,
      title: "Smart Audience Targeting",
      description: "Identify and reach your ideal customers with precision targeting powered by advanced demographic and behavioral analysis."
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      description: "Get instant insights into campaign performance with comprehensive dashboards and actionable recommendations."
    },
    {
      icon: Users,
      title: "Customer Journey Mapping",
      description: "Visualize and optimize every touchpoint in your customer's journey from awareness to conversion."
    },
    {
      icon: Zap,
      title: "Automated A/B Testing",
      description: "Run intelligent split tests that automatically allocate traffic to winning variations for maximum ROI."
    },
    {
      icon: BarChart3,
      title: "Predictive Forecasting",
      description: "Predict future performance and budget allocation using advanced AI models trained on millions of data points."
    },
    {
      icon: Globe,
      title: "Multi-Channel Integration",
      description: "Seamlessly connect all your marketing channels - social media, email, PPC, and more in one unified platform."
    },
    {
      icon: Shield,
      title: "Data Privacy & Security",
      description: "Enterprise-grade security with full GDPR compliance and advanced encryption to protect your sensitive data."
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span> for Modern Marketing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your marketing strategy with cutting-edge AI tools designed to maximize 
            your ROI and streamline your workflow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid-auto-fill">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              variant="feature"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to see these features in action?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="glass border-primary/20 text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover-lift">
              Schedule Demo
            </button>
            <button className="bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 rounded-lg font-medium transition-all duration-300 btn-glow">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;