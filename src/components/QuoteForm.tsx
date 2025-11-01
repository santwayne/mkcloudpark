import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const QuoteForm = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Request a Quote</h2>
            <p className="text-xl text-muted-foreground">
              Get a competitive quote for your shipment within hours
            </p>
          </div>

          <Card className="p-8 md:p-12 animate-scale-in">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input id="company" placeholder="Your Company Inc." required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Name *</Label>
                  <Input id="contact" placeholder="John Smith" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="john@company.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="origin">Origin (City, State/Province) *</Label>
                  <Input id="origin" placeholder="Toronto, ON" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination (City, State/Province) *</Label>
                  <Input id="destination" placeholder="Chicago, IL" required />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="freight-type">Freight Type *</Label>
                  <Select>
                    <SelectTrigger id="freight-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="reefer">Reefer (Temperature Controlled)</SelectItem>
                      <SelectItem value="dry-van">Dry Van</SelectItem>
                      <SelectItem value="ftl">Full Truckload (FTL)</SelectItem>
                      <SelectItem value="ltl">Less Than Truckload (LTL)</SelectItem>
                      <SelectItem value="hazmat">Hazmat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (lbs) *</Label>
                  <Input id="weight" type="number" placeholder="5000" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="temperature">Temperature (°F)</Label>
                  <Input id="temperature" type="number" placeholder="35" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="pickup-date">Pickup Date *</Label>
                  <Input id="pickup-date" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="delivery-date">Requested Delivery Date</Label>
                  <Input id="delivery-date" type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Additional Details</Label>
                <Textarea 
                  id="details" 
                  placeholder="Commodity type, special requirements, handling instructions..."
                  className="min-h-32"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary text-white hover:bg-primary/90 text-lg py-6 rounded-full"
              >
                Get Your Quote
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                * Required fields. We'll respond within 2-4 business hours.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
