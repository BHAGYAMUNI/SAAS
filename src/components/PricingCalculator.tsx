import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PricingCalculator = () => {
  const [campaigns, setCampaigns] = useState(5);
  const [monthlySpend, setMonthlySpend] = useState(10000);
  const [teamSize, setTeamSize] = useState(3);

  const calculations = useMemo(() => {
    let basePlan = 'Starter';
    let monthlyPrice = 49;
    let aiCredits = 10000;
    
    if (campaigns > 10 || monthlySpend > 25000 || teamSize > 5) {
      basePlan = 'Pro';
      monthlyPrice = 149;
      aiCredits = 100000;
      
      if (campaigns > 50 || monthlySpend > 100000 || teamSize > 20) {
        basePlan = 'Enterprise';
        monthlyPrice = 399;
        aiCredits = 1000000;
      }
    }

    // Additional costs for high usage
    const extraCampaignCost = Math.max(0, campaigns - (basePlan === 'Starter' ? 5 : basePlan === 'Pro' ? 50 : 999)) * 10;
    const extraUserCost = Math.max(0, teamSize - (basePlan === 'Starter' ? 3 : basePlan === 'Pro' ? 10 : 999)) * 25;
    
    const totalMonthlyPrice = monthlyPrice + extraCampaignCost + extraUserCost;
    const annualPrice = totalMonthlyPrice * 10; // 20% discount for annual
    
    // ROI Calculations (conservative estimates)
    const currentROI = monthlySpend * 2; // Assuming 2x ROI currently
    const improvedROI = monthlySpend * 3.4; // 340% improvement (from testimonials)
    const monthlyGain = improvedROI - currentROI;
    const annualGain = monthlyGain * 12;
    const netAnnualBenefit = annualGain - (totalMonthlyPrice * 12);

    return {
      basePlan,
      monthlyPrice: totalMonthlyPrice,
      annualPrice,
      aiCredits,
      monthlyGain,
      annualGain,
      netAnnualBenefit,
      roiMultiplier: (improvedROI / currentROI).toFixed(1)
    };
  }, [campaigns, monthlySpend, teamSize]);

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">ROI Calculator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how much you could save and earn with ADmyBRAND AI Suite based on your specific needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Controls */}
          <Card variant="glass">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="h-6 w-6 mr-2 text-primary" />
                Your Current Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Number of Campaigns */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Number of Marketing Campaigns
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={campaigns}
                    onChange={(e) => setCampaigns(Number(e.target.value))}
                    className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="w-16 text-right font-semibold">{campaigns}</span>
                </div>
              </div>

              {/* Monthly Ad Spend */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Monthly Ad Spend ($)
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="1000"
                    max="500000"
                    step="1000"
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                    className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="w-20 text-right font-semibold">
                    ${monthlySpend.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Team Size */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Marketing Team Size
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="w-16 text-right font-semibold">{teamSize}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card variant="glass">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-6 w-6 mr-2 text-success" />
                Your Projected Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Recommended Plan */}
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="text-sm text-primary font-medium">Recommended Plan</div>
                <div className="text-2xl font-bold">{calculations.basePlan}</div>
                <div className="text-sm text-muted-foreground">
                  ${calculations.monthlyPrice}/month • {calculations.aiCredits.toLocaleString()} AI credits
                </div>
              </div>

              {/* ROI Projections */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Monthly Revenue Increase</span>
                  <span className="font-semibold text-success">
                    +${calculations.monthlyGain.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Annual Revenue Increase</span>
                  <span className="font-semibold text-success">
                    +${calculations.annualGain.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-glass-border">
                  <span className="font-medium">Net Annual Benefit</span>
                  <span className="text-2xl font-bold text-success">
                    +${calculations.netAnnualBenefit.toLocaleString()}
                  </span>
                </div>

                <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
                  <div className="text-sm text-success font-medium">ROI Multiplier</div>
                  <div className="text-3xl font-bold text-success">
                    {calculations.roiMultiplier}x
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Return on Investment
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Button variant="hero" size="lg" className="w-full">
                  Start Your Free Trial
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  14-day free trial • No credit card required
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            * Results are projections based on average customer performance and may vary. 
            Actual results depend on various factors including industry, current performance, 
            and implementation. ROI calculations are estimates for illustration purposes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;