import { Card } from '@/components/ui/card';
import { Users, Home, Award, Clock } from 'lucide-react';
import commonAreaImage from '@/assets/common-area.jpg';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Residents', value: '500+' },
    { icon: Home, label: 'Rooms Available', value: '50+' },
    { icon: Award, label: 'Years of Excellence', value: '10+' },
    { icon: Clock, label: '24/7 Support', value: 'Always' },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              About <span className="text-secondary">SP Men's PG</span>
            </h2>
            
            <p className="text-lg text-muted-foreground font-body mb-6 leading-relaxed">
              Established with a vision to provide premium accommodation for working professionals 
              and students, SP Men's PG has been setting the standard for luxury living in the city.
            </p>
            
            <p className="text-lg text-muted-foreground font-body mb-8 leading-relaxed">
              Our commitment to excellence, combined with modern amenities and a warm, homely 
              atmosphere, makes us the preferred choice for discerning residents who value 
              comfort, security, and community.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 bg-card shadow-luxury hover:shadow-gold transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <stat.icon className="w-6 h-6 text-secondary" />
                    <span className="font-body font-semibold text-card-foreground">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-body">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <img
                src={commonAreaImage}
                alt="SP Men's PG Common Area"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-8 -left-8 p-6 bg-secondary shadow-gold">
              <h3 className="font-heading font-bold text-secondary-foreground text-2xl mb-2">
                Premium Living
              </h3>
              <p className="text-secondary-foreground/80 font-body">
                Experience the finest in comfort and luxury
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;