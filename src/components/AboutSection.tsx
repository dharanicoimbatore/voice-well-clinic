import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Microscope, Heart, Shield } from "lucide-react";
import medicalFacilityImage from "@/assets/medical-facility.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Stethoscope,
      title: "Advanced Diagnostics",
      description: "State-of-the-art laryngoscopy and voice analysis technology for precise diagnosis."
    },
    {
      icon: Microscope,
      title: "Research-Based Treatment",
      description: "Evidence-based treatments backed by the latest medical research and clinical studies."
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Personalized treatment plans designed with your comfort and recovery in mind."
    },
    {
      icon: Shield,
      title: "Proven Results",
      description: "Consistent positive outcomes with our comprehensive approach to laryngeal health."
    }
  ];

  return (
    <section id="about" className="py-20 bg-medical-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">About VoiceCare Clinic</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Leading the Way in Laryngeal Medicine
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Since 2008, VoiceCare Clinic has been at the forefront of laryngeal disorder treatment, 
            combining innovative medical technology with decades of specialized expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={medicalFacilityImage} 
              alt="Modern Medical Facility" 
              className="rounded-lg shadow-card w-full h-96 object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Choose VoiceCare Clinic?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our clinic is specifically designed for the diagnosis and treatment of laryngeal disorders, 
              offering specialized care that general practitioners simply cannot provide. We understand 
              that voice problems can significantly impact your personal and professional life.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Specialized Equipment</h4>
                  <p className="text-sm text-muted-foreground">Latest laryngoscopy and voice analysis technology</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Expert Team</h4>
                  <p className="text-sm text-muted-foreground">Board-certified laryngologists and speech therapists</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Comprehensive Care</h4>
                  <p className="text-sm text-muted-foreground">From diagnosis to rehabilitation and follow-up</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-card transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;