import { Button } from '@/components/ui/button';
import { MapPin, Shield, Wifi } from 'lucide-react';
import heroRoomImage from '@/assets/hero-room.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroRoomImage})` }}
      >
        <div className="absolute inset-0 overlay-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
            Premium
            <span className="block text-secondary">Accommodation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-body leading-relaxed">
            Where Comfort Meets Class - Experience luxury living with modern amenities 
            and a homely atmosphere in the heart of the city.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold shadow-gold text-lg px-8 py-3"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book Your Stay
            </Button>
          
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-foreground/80">
              <MapPin className="w-6 h-6 text-secondary" />
              <span className="font-body font-medium">Prime Location</span>
            </div>
            <div className="flex items-center space-x-3 text-foreground/80">
              <Shield className="w-6 h-6 text-secondary" />
              <span className="font-body font-medium">24/7 Security</span>
            </div>
            <div className="flex items-center space-x-3 text-foreground/80">
              <Wifi className="w-6 h-6 text-secondary" />
              <span className="font-body font-medium">High-Speed WiFi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;