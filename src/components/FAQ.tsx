import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "How does ADmyBRAND AI Suite work?",
      answer: "ADmyBRAND AI Suite uses advanced machine learning algorithms to analyze your marketing data, identify patterns, and automatically optimize your campaigns. Our AI processes millions of data points in real-time to make intelligent decisions about budget allocation, audience targeting, and creative optimization, delivering measurable results within minutes of implementation."
    },
    {
      question: "What integrations are supported?",
      answer: "We support over 200+ integrations including Google Ads, Facebook Ads, Instagram, LinkedIn, Twitter, Mailchimp, HubSpot, Salesforce, Shopify, WooCommerce, Google Analytics, and many more. Our platform also offers robust APIs for custom integrations, and our team can help set up enterprise-level connections for larger organizations."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most customers see initial improvements within the first week of implementation. Significant results typically appear within 2-4 weeks as our AI models learn your specific business patterns. On average, customers experience a 200-400% increase in ROI within the first 90 days, with continuous improvement over time."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We take data security extremely seriously. All data is encrypted in transit and at rest using enterprise-grade encryption. We're fully GDPR compliant, SOC 2 certified, and follow strict data privacy protocols. Your data is never shared with third parties, and you maintain complete ownership and control over your information."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time without any cancellation fees or penalties. If you cancel, you'll continue to have access to all features until the end of your current billing period. We also offer a 14-day free trial so you can test our platform risk-free before committing to a paid plan."
    },
    {
      question: "Do you offer training and support?",
      answer: "We provide comprehensive onboarding for all new customers, including personalized training sessions, detailed documentation, and video tutorials. Our support team is available 24/7 via chat, email, and phone. Enterprise customers receive dedicated account managers and custom training programs to ensure maximum success."
    },
    {
      question: "What makes ADmyBRAND different from other marketing tools?",
      answer: "Unlike traditional marketing tools that require manual optimization, ADmyBRAND AI Suite uses cutting-edge artificial intelligence to automate and optimize your entire marketing workflow. Our predictive analytics, real-time optimization, and intelligent automation capabilities are powered by proprietary AI models trained on billions of marketing data points, delivering superior results with minimal manual intervention."
    }
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers. If you can't find what you're looking for, 
            feel free to contact our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="glass border-glass-border rounded-xl p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-glass-border"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="glass border-glass-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you succeed. Get in touch and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 rounded-lg font-medium transition-all duration-300 btn-glow">
                Contact Support
              </button>
              <button className="glass border-primary/20 text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover-lift">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;