import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (

    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to simplify your logistics? Our team is here 24/7 to answer your
            questions and provide solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 animate-scale-in">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" placeholder="John Smith" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="john@company.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input id="subject" placeholder="Quote Request / Question / Partnership" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help..."
                  className="min-h-32"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-white hover:bg-primary/90 py-6 rounded-full"
              >
                Send Message
              </Button>
            </form>
          </Card>


          <div className="space-y-8 animate-fade-in">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <p className="text-muted-foreground mb-2">
                    24/7 Customer Service
                  </p>
                  <a
                    href="tel:+14169008673"
                    className="text-primary font-semibold text-lg hover:underline"
                  >
                    +1 416-900-8673
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground mb-4">General Inquiry</p>
                  <a
                    href="mailto:info@cloudpark.ca"
                    className="text-primary font-semibold hover:underline block mb-3"
                  >
                    info@cloudpark.ca
                  </a>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Karamvir G:</span>{" "}
                      <a href="mailto:kgill@cloudpark.ca" className="text-primary hover:underline">
                        kgill@cloudpark.ca
                      </a>
                    </div>
                    <div>
                      <span className="font-medium">Aman S:</span>{" "}
                      <a href="mailto:askerhi@cloudpark.ca" className="text-primary hover:underline">
                        askerhi@cloudpark.ca
                      </a>
                    </div>
                    <div>
                      <span className="font-medium">Sal B:</span>{" "}
                      <a href="mailto:sal@cloudpark.ca" className="text-primary hover:underline">
                        sal@cloudpark.ca
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-4">Yard Locations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-semibold text-muted-foreground mb-1">Calgary Yard</p>
                      <p className="text-muted-foreground">
                        9050 Innovation Ave SE
                        <br />
                        Calgary, AB T3S 0A2
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-muted-foreground mb-1">GTA Yard</p>
                      <p className="text-muted-foreground">
                        7499 Auburn Road
                        <br />
                        Milton, ON L9T 7V9
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          

          </div>
        </div>
      </div>
    </section>

  );
};

export default Contact;
