import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Award, Users, Heart } from "lucide-react";
import founderImage from "@/assets/founder-portrait.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-medical-blue-light to-background">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Expert Care for
              <span className="text-primary block">Laryngeal Disorders</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At VoiceCare Clinic, we specialize in comprehensive diagnosis and treatment of voice and throat disorders. 
              Our state-of-the-art facility combines cutting-edge technology with compassionate care to help you 
              restore your voice and quality of life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="shadow-medical">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                Learn More About Our Services
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">5000+</div>
                <div className="text-sm text-muted-foreground">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Founder Image */}
          <div className="animate-slide-in-right">
            <Card className="p-8 shadow-medical">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <img 
                    src={founderImage} 
                    alt="Dr. Sarah Johnson, Founder" 
                    className="w-64 h-64 rounded-full object-cover mx-auto shadow-card"
                  />
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Dr. Sarah Johnson</h3>
                <p className="text-primary font-semibold mb-4">Founder & Lead Laryngologist</p>
                <p className="text-muted-foreground text-center leading-relaxed">
                  "With over 15 years of experience in laryngeal medicine, I founded VoiceCare Clinic 
                  to provide patients with the most advanced, personalized care for voice and throat disorders. 
                  Every patient deserves to have their voice heard."
                </p>
                <div className="mt-6 flex justify-center space-x-4 text-sm text-muted-foreground">
                  <span>• Board Certified</span>
                  <span>• Harvard Medical</span>
                  <span>• 500+ Publications</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;