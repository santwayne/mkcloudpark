import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Smartphone, Bell, MapPin } from "lucide-react";
import dispatchImage from "@/assets/dispatch-center.jpg";

const Tracking = () => {
  return (
    <section id="tracking" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Connected. Track Every Shipment in Real Time.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our advanced tracking technology keeps you informed every step of the way. 
              Monitor your freight's location, estimated arrival time, and delivery status from any device.
            </p>

            <div className="flex gap-3 mb-8">
              <Input 
                placeholder="Enter your tracking number..." 
                className="flex-1 h-12 text-base"
              />
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8">
                <Search className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-card border border-border hover-lift">
                <Smartphone className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-xs font-medium">Mobile Access</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border hover-lift">
                <Bell className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-xs font-medium">Live Updates</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border hover-lift">
                <MapPin className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-xs font-medium">GPS Precision</div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative animate-scale-in">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={dispatchImage} 
                alt="Cloud Park dispatch center with real-time tracking"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-6 border border-border shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Shipment Status</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">In Transit</span>
              </div>
              <div className="text-2xl font-bold mb-1">CPL-2024-1234</div>
              <div className="text-sm text-muted-foreground">ETA: Tomorrow, 2:30 PM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
