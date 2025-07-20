import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold text-primary">
              VoiceCare Clinic
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#doctors" className="text-foreground hover:text-primary transition-colors">
                Our Doctors
              </a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
                Gallery
              </a>
              <a href="#news" className="text-foreground hover:text-primary transition-colors">
                News & Events
              </a>
              <a href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <Button variant="default">
              Book Appointment
            </Button>
          </div>
          
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;