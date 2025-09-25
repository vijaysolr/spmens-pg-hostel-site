import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-heading font-bold text-secondary mb-4">
              SP Men's PG
            </h3>
            <p className="text-primary-foreground/80 font-body mb-6 leading-relaxed max-w-md">
              Where Comfort Meets Class - Experience premium accommodation with modern amenities 
              and a homely atmosphere in the heart of the city.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <a 
                  href="tel:+919840604508" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors font-body"
                >
                  +91 98406 04508
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <a 
                  href="mailto:info@spmenpg.com" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors font-body"
                >
                  info@spmenpg.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80 font-body">
                  Prime Location, Easy Access to IT Hubs
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-heading font-semibold text-secondary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-heading font-semibold text-secondary mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 text-primary-foreground/80 font-body">
              <li>Premium Accommodation</li>
              <li>24/7 Security</li>
              <li>Nutritious Meals</li>
              <li>High-Speed WiFi</li>
              <li>Laundry Service</li>
              <li>Parking Facility</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <p className="text-primary-foreground/60 font-body text-center md:text-left mb-4 md:mb-0">
              © 2024 SP Men's PG. All rights reserved. | Designed with ❤️ for premium living
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/60 font-body text-sm">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-primary-foreground/60 hover:text-secondary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-secondary/10"></div>
      </div>
    </footer>
  );
};

export default Footer;