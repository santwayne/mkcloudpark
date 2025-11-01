import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What temperature ranges can your reefer trucks maintain?",
    answer: "Our modern reefer fleet can maintain temperatures from -20°F to +70°F with multi-zone capabilities. All units feature real-time temperature monitoring and automatic alerts if conditions deviate from specified ranges."
  },
  {
    question: "Do you offer cross-border shipping between Canada and the US?",
    answer: "Yes, we specialize in cross-border logistics with experienced customs clearance handling. Our team manages all documentation, duties, and compliance requirements for seamless international shipments."
  },
  {
    question: "How quickly can you provide a shipping quote?",
    answer: "Standard quotes are provided within 2-4 hours during business hours. For urgent shipments, our 24/7 dispatch can provide immediate quotes and arrange pickup within hours."
  },
  {
    question: "What insurance coverage do you provide?",
    answer: "All shipments include $2 million comprehensive cargo insurance at no extra cost. We also offer additional coverage options for high-value or specialized freight upon request."
  },
  {
    question: "Can I track my shipment in real-time?",
    answer: "Absolutely. All trucks are GPS-enabled with real-time tracking accessible through our online portal or mobile app. You'll receive automatic updates at key milestones and can check location anytime."
  },
  {
    question: "What are your payment terms?",
    answer: "We offer NET 30 terms for qualified accounts. New customers typically start with prepayment or credit card, with credit terms available after account review. We accept all major payment methods."
  },
  {
    question: "Do you handle Less Than Truckload (LTL) shipments?",
    answer: "Yes, we offer both FTL and LTL services. Our LTL consolidation ensures cost-effective shipping for smaller loads while maintaining the same quality standards and temperature control."
  },
  {
    question: "What makes your reefer service different?",
    answer: "Our reefer fleet averages under 3 years old, features advanced climate control technology, and is maintained to the highest standards. Combined with 24/7 monitoring, FDA compliance, and experienced drivers, we ensure your temperature-sensitive freight arrives in perfect condition."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our reefer transport and logistics services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
