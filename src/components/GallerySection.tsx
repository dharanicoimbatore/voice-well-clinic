import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ZoomIn } from "lucide-react";
import medicalFacilityImage from "@/assets/medical-facility.jpg";
import medicalTeamImage from "@/assets/medical-team.jpg";

const GallerySection = () => {
  const galleryItems = [
    {
      type: "facility",
      title: "Modern Examination Rooms",
      description: "State-of-the-art diagnostic equipment in comfortable settings",
      image: medicalFacilityImage
    },
    {
      type: "team",
      title: "Our Medical Team",
      description: "Experienced professionals dedicated to your care",
      image: medicalTeamImage
    },
    {
      type: "facility",
      title: "Advanced Laryngoscopy Suite",
      description: "Cutting-edge technology for precise diagnosis",
      image: medicalFacilityImage
    },
    {
      type: "facility",
      title: "Voice Analysis Laboratory",
      description: "Comprehensive voice testing and analysis capabilities",
      image: medicalFacilityImage
    },
    {
      type: "team",
      title: "Patient Consultation",
      description: "Personalized care planning with our specialists",
      image: medicalTeamImage
    },
    {
      type: "facility",
      title: "Recovery & Therapy Areas",
      description: "Comfortable spaces for post-treatment care",
      image: medicalFacilityImage
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-medical-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Facility Gallery</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Take a Look Inside Our Clinic
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our modern medical facility designed specifically for laryngeal care, 
            featuring the latest diagnostic equipment and comfortable patient spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-medical transition-all duration-300">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ZoomIn className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </div>
                <Badge 
                  variant={item.type === 'facility' ? 'default' : 'secondary'} 
                  className="absolute top-3 left-3 text-xs"
                >
                  {item.type === 'facility' ? 'Facility' : 'Team'}
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-medical-teal/10 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Schedule a Virtual Tour
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't visit in person? Join us for a virtual tour of our facilities. 
              See our equipment, meet our staff, and learn about our treatment processes from the comfort of your home.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Virtual Tour
              </Button>
              <Button variant="outline" size="lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;