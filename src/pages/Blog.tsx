import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Zap, Search, Calendar, User, ArrowRight, TrendingUp, Target, Brain } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'marketing', name: 'Marketing Strategy' },
    { id: 'optimization', name: 'Campaign Optimization' },
    { id: 'case-studies', name: 'Case Studies' },
    { id: 'tutorials', name: 'Tutorials' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI-Powered Marketing: 2025 Trends and Predictions",
      excerpt: "Explore the latest AI marketing trends that will reshape how businesses engage with customers in 2025 and beyond.",
      author: "Sarah Chen",
      date: "2025-01-15",
      category: "ai",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "How TechCorp Increased ROI by 300% with AI Campaign Optimization",
      excerpt: "A deep dive into how TechCorp transformed their marketing performance using ADmyBRAND AI Suite's advanced optimization algorithms.",
      author: "Michael Rodriguez",
      date: "2025-01-12",
      category: "case-studies",
      readTime: "12 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Mastering Multi-Channel Attribution with AI",
      excerpt: "Learn how to leverage AI for accurate multi-channel attribution and make data-driven decisions across all your marketing channels.",
      author: "Emily Watson",
      date: "2025-01-10",
      category: "tutorials",
      readTime: "15 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "The Science Behind Predictive Audience Segmentation",
      excerpt: "Understand the machine learning algorithms that power predictive audience segmentation and how they can boost your campaign performance.",
      author: "Dr. James Park",
      date: "2025-01-08",
      category: "ai",
      readTime: "10 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "From Zero to Hero: A Complete Guide to AI Marketing Automation",
      excerpt: "Step-by-step guide to implementing AI marketing automation that drives results from day one.",
      author: "Lisa Thompson",
      date: "2025-01-05",
      category: "tutorials",
      readTime: "20 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Real-Time Bidding Optimization: The AI Advantage",
      excerpt: "Discover how AI-powered real-time bidding optimization can reduce your cost per acquisition while increasing conversion rates.",
      author: "Alex Kumar",
      date: "2025-01-03",
      category: "optimization",
      readTime: "7 min read",
      image: "/api/placeholder/400/250"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
            AI Marketing Insights & Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights, case studies, and tutorials 
            on AI-powered marketing optimization.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && !searchTerm && (
          <Card className="glass border-glass-border p-8 mb-12">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Featured Article</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button variant="hero" size="lg">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {categories.find(c => c.id === featuredPost.category)?.name}
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card key={post.id} className="glass border-glass-border overflow-hidden hover-lift">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary">
                    {categories.find(c => c.id === post.category)?.name}
                  </span>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="glass border-glass-border p-8 mt-16 text-center">
          <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Stay Updated with AI Marketing Insights</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the latest articles, case studies, and AI marketing tips delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            />
            <Button variant="hero">Subscribe</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Blog;