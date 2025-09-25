import { Card } from '@/components/ui/card';
import { 
  Wifi, 
  Car, 
  Utensils, 
  Shield, 
  Shirt, 
  Zap, 
  AirVent, 
  Clock,
  Coffee,
  Dumbbell,
  Tv,
  Users
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Complimentary high-speed WiFi throughout the premises for all your connectivity needs.'
    },
    {
      icon: Utensils,
      title: 'Nutritious Meals',
      description: 'Healthy, home-cooked meals prepared with fresh ingredients and love.'
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Round-the-clock security with CCTV monitoring for your peace of mind.'
    },
    {
      icon: Shirt,
      title: 'Laundry Service',
      description: 'Professional laundry and ironing services to keep your clothes fresh and clean.'
    },
    {
      icon: Car,
      title: 'Parking Facility',
      description: 'Secure parking space for both two-wheelers and four-wheelers.'
    },
    {
      icon: AirVent,
      title: 'Air Conditioning',
      description: 'Fully air-conditioned rooms for maximum comfort in all seasons.'
    },
    {
      icon: Zap,
      title: 'Power Backup',
      description: '24/7 power backup to ensure uninterrupted electricity supply.'
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'No strict entry/exit timings - perfect for working professionals.'
    },
    {
      icon: Coffee,
      title: 'Common Kitchen',
      description: 'Fully equipped shared kitchen for your cooking needs and midnight snacks.'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'Modern gym equipment to maintain your fitness routine.'
    },
    {
      icon: Tv,
      title: 'Recreation Area',
      description: 'Entertainment lounge with TV and gaming facilities for relaxation.'
    },
    {
      icon: Users,
      title: 'Community Events',
      description: 'Regular social events and celebrations to build lasting friendships.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-card-foreground mb-6">
            Our <span className="text-secondary">Premium Services</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive amenities and services to ensure your stay is comfortable, 
            convenient, and memorable. Experience luxury living with all modern facilities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 bg-background hover:bg-muted transition-all duration-300 shadow-luxury hover:shadow-gold group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-secondary" />
                </div>
                
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-secondary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
              Ready to Experience Luxury Living?
            </h3>
            <p className="text-lg text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
              Join our community of satisfied residents and discover what makes SP Men's PG 
              the premier choice for accommodation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg font-body font-semibold shadow-gold transition-all duration-300"
              >
                Contact Us Today
              </a>
              <a 
                href="tel:+919840604508" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-lg font-body font-semibold transition-all duration-300"
              >
                Call: +91 98406 04508
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;