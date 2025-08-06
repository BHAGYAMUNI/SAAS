import React from 'react';
import { ArrowRight, BookOpen, Video, FileText, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Resources = () => {
  const blogPosts = [
    {
      title: "10 AI Marketing Strategies That Delivered 500% ROI",
      excerpt: "Discover the proven AI marketing strategies that top-performing companies use to dramatically increase their return on investment.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      category: "Strategy",
      readTime: "8 min read",
      link: "#"
    },
    {
      title: "The Complete Guide to Marketing Automation in 2025",
      excerpt: "Everything you need to know about implementing marketing automation that actually works in today's competitive landscape.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      category: "Automation",
      readTime: "12 min read",
      link: "#"
    },
    {
      title: "How to Build High-Converting Landing Pages with AI",
      excerpt: "Learn how AI-powered optimization can transform your landing pages and boost conversion rates by up to 300%.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=200&fit=crop",
      category: "Conversion",
      readTime: "6 min read",
      link: "#"
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Comprehensive guides and tutorials to help you master AI marketing",
      count: "50+ articles",
      color: "text-blue-500"
    },
    {
      icon: Video,
      title: "Video Library",
      description: "Step-by-step video tutorials and webinars from marketing experts",
      count: "20+ videos",
      color: "text-red-500"
    },
    {
      icon: FileText,
      title: "Templates & Tools",
      description: "Ready-to-use templates and tools to accelerate your marketing",
      count: "15+ resources",
      color: "text-green-500"
    },
    {
      icon: Lightbulb,
      title: "Best Practices",
      description: "Industry insights and proven strategies from successful campaigns",
      count: "30+ case studies",
      color: "text-yellow-500"
    }
  ];

  return (
    <section id="resources" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Marketing <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover insights, best practices, and actionable strategies to supercharge 
            your marketing performance with AI.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resources.map((resource, index) => (
            <Card key={resource.title} variant="glass" className="text-center hover-lift">
              <CardContent className="p-6">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-muted/20 flex items-center justify-center`}>
                  <resource.icon className={`h-6 w-6 ${resource.color}`} />
                </div>
                <CardTitle className="text-lg mb-2">{resource.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-3">{resource.description}</p>
                <div className="text-xs text-primary font-medium">{resource.count}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Blog Posts */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Latest from Our Blog</h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.title} variant="glass" className="hover-lift group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    <a
                      href={post.link}
                      className="inline-flex items-center text-primary text-sm font-medium hover:text-primary-hover transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12">
            <button className="glass border-primary/20 text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover-lift">
              View All Articles
            </button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <Card variant="glass" className="text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get the latest AI marketing insights, strategies, and updates delivered 
                straight to your inbox. Join 10,000+ marketing professionals.
              </p>
              
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 rounded-lg font-medium transition-all duration-300 btn-glow">
                  Subscribe
                </button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-3">
                No spam, unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resources;