import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+91 98406 04508',
      action: 'tel:+919840604508'
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'spmenspg@gmail.com',
      action: 'mailto:info@spmenpg.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'City Park Layout, 118B, 2nd Cross St, Siruseri, Egattur, Chennai, Tamil Nadu 603103',
      action: 'https://www.google.com/maps/place/SP+MEN%27S+PG/@12.825159,80.2259138,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525be5d915742f:0x99b3452270e93cea!8m2!3d12.825159!4d80.2259138!16s%2Fg%2F11yjsfmmns?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      icon: Clock,
      title: 'Visiting Hours',
      content: '24/7 Available for inquiries',
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-card-foreground mb-6">
            Get In <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Ready to make SP Men's PG your new home? Contact us today to book your room 
            or schedule a visit. We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-heading font-bold text-card-foreground mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 bg-background shadow-luxury hover:shadow-gold transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-heading font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-muted-foreground hover:text-secondary transition-colors duration-300 font-body"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground font-body">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="p-8 bg-secondary shadow-gold">
              <h4 className="text-2xl font-heading font-bold text-secondary-foreground mb-4">
                Ready to Book?
              </h4>
              <p className="text-secondary-foreground/80 font-body mb-6 leading-relaxed">
                Don't wait! Premium rooms are filling up fast. Call us now to secure 
                your spot in our exclusive community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  variant="outline" 
                  className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
                >
                  <a href="tel:+919840604508">Call Now</a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
                >
                  <a href="https://wa.me/919840604508">WhatsApp</a>
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="p-8 bg-background shadow-luxury">
              <h3 className="text-3xl font-heading font-bold text-foreground mb-8">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 font-body"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 font-body"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 font-body"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">
                    Move-in Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 font-body"
                  />
                </div>

                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 font-body resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold py-3 shadow-gold"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Map or Additional Info */}
        <div className="mt-16 animate-fade-in">
          <Card className="p-8 bg-background shadow-luxury">
            <div className="text-center">
              <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
                Visit Our Premium Facility
              </h3>
              <p className="text-lg text-muted-foreground font-body mb-6 max-w-2xl mx-auto leading-relaxed">
                Schedule a visit to experience our premium facilities firsthand. We're confident 
                that once you see what we offer, you'll want to make SP Men's PG your home.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold shadow-gold"
                >
                  <a href="tel:+919840604508">Schedule a Visit</a>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-body font-semibold"
                >
                  <a href="https://www.google.com/maps/place/SP+MEN'S+PG/@12.825159,80.2259138,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525be5d915742f:0x99b3452270e93cea!8m2!3d12.825159!4d80.2259138!16s%2Fg%2F11yjsfmmns?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D
">Get Directions</a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;