import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    company: "PharmaCare Solutions",
    industry: "Healthcare",
    challenge: "Needed reliable temperature-controlled transport for time-sensitive pharmaceutical shipments across 12 states",
    solution: "Implemented dedicated reefer lanes with 24/7 monitoring and compliance documentation",
    results: [
      "100% on-time delivery rate",
      "Zero temperature deviations",
      "30% reduction in logistics costs",
      "FDA audit-ready documentation"
    ],
    image: null
  },
  {
    company: "Fresh Valley Farms",
    industry: "Agriculture",
    challenge: "Expanding produce distribution required faster transit times and better freshness preservation",
    solution: "Optimized routes with expedited reefer service and real-time quality monitoring",
    results: [
      "40% faster delivery times",
      "95% product freshness rating",
      "Expanded to 8 new markets",
      "Reduced spoilage by 60%"
    ],
    image: null
  },
  {
    company: "Artisan Bakery Co.",
    industry: "Food Service",
    challenge: "Regional bakery needed consistent temperature control for expanding into national retail",
    solution: "Custom multi-zone reefer solutions with flexible scheduling for overnight deliveries",
    results: [
      "Successfully entered 200+ stores",
      "Zero product returns",
      "5x revenue growth in 18 months",
      "98% customer satisfaction"
    ],
    image: null
  }
];

const CaseStudies = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-success/10 text-success rounded-full text-sm font-bold mb-4">
            📈 PROVEN RESULTS
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Real companies. Real growth.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            See how we've helped businesses <span className="text-foreground font-bold">scale 5x faster</span> with 
            reliable cold chain logistics that drives ROI
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.company}
              className="p-8 md:p-10 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                    {study.industry}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{study.company}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                      <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Our Solution</h4>
                      <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-2xl p-8 h-full flex flex-col justify-center border-2 border-success/20">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-10 h-10 bg-success rounded-xl flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-black text-xl text-success">Measurable Impact</h4>
                    </div>
                    <ul className="space-y-4">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                          <span className="text-lg font-bold text-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-primary text-white hover:bg-primary/90 px-8 py-6 rounded-full"
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
