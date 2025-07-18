import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin,
  Heart
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">VoiceCare Clinic</h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Dedicated to providing exceptional care for laryngeal disorders with 
              state-of-the-art technology and compassionate treatment.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <div className="text-background/90">(555) 123-4567</div>
                  <div className="text-sm text-background/60">Main Office</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <div className="text-background/90">info@voicecareclinic.com</div>
                  <div className="text-sm text-background/60">General Inquiries</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-background/90">123 Medical Center Drive</div>
                  <div className="text-background/90">Suite 200</div>
                  <div className="text-background/90">Healthcare City, HC 12345</div>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-semibold mb-6">Office Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <div className="text-background/90 font-medium">Monday - Friday</div>
                  <div className="text-sm text-background/60">8:00 AM - 6:00 PM</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <div className="text-background/90 font-medium">Saturday</div>
                  <div className="text-sm text-background/60">9:00 AM - 2:00 PM</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <div className="text-background/90 font-medium">Sunday</div>
                  <div className="text-sm text-background/60">Emergency Only</div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button variant="outline" size="sm" className="border-background/20 text-background hover:bg-background hover:text-foreground">
                Emergency Contact
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#about" className="block text-background/80 hover:text-primary transition-colors">
                About Our Clinic
              </a>
              <a href="#doctors" className="block text-background/80 hover:text-primary transition-colors">
                Meet Our Doctors
              </a>
              <a href="#services" className="block text-background/80 hover:text-primary transition-colors">
                Treatment Services
              </a>
              <a href="#gallery" className="block text-background/80 hover:text-primary transition-colors">
                Facility Gallery
              </a>
              <a href="#news" className="block text-background/80 hover:text-primary transition-colors">
                News & Events
              </a>
              <a href="#contact" className="block text-background/80 hover:text-primary transition-colors">
                Contact Us
              </a>
              <a href="#privacy" className="block text-background/80 hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-background/60 text-sm mb-4 md:mb-0">
            © 2024 VoiceCare Clinic. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-background/60 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>for better voice health</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;