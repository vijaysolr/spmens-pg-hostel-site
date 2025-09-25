import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-heading font-bold text-secondary">
              SP Men's PG
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-secondary transition-colors duration-300 font-body font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button variant="outline" size="sm" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-secondary transition-colors duration-300 font-body font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="outline" size="sm" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground w-fit">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;