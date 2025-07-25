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

        {/* Bento Box Layout */}
        <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[800px] mb-12">
          {/* Large Featured Card - Top Left */}
          <Card className="col-span-12 md:col-span-6 row-span-3 group overflow-hidden hover:shadow-medical transition-all duration-300">
            <div className="relative h-full">
              <img 
                src={galleryItems[0].image} 
                alt={galleryItems[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Badge variant="secondary" className="mb-3">
                    {galleryItems[0].type === 'facility' ? 'Facility' : 'Team'}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">{galleryItems[0].title}</h3>
                  <p className="text-sm opacity-90">{galleryItems[0].description}</p>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ZoomIn className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Tall Card - Top Right */}
          <Card className="col-span-12 md:col-span-6 row-span-4 group overflow-hidden hover:shadow-medical transition-all duration-300">
            <div className="relative h-full">
              <img 
                src={galleryItems[1].image} 
                alt={galleryItems[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                variant={galleryItems[1].type === 'facility' ? 'default' : 'secondary'} 
                className="absolute top-3 left-3 text-xs"
              >
                {galleryItems[1].type === 'facility' ? 'Facility' : 'Team'}
              </Badge>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="font-semibold mb-1">{galleryItems[1].title}</h3>
                <p className="text-xs opacity-90">{galleryItems[1].description}</p>
              </div>
            </div>
          </Card>

          {/* Wide Card - Middle Left */}
          <Card className="col-span-12 md:col-span-8 row-span-2 group overflow-hidden hover:shadow-medical transition-all duration-300">
            <div className="relative h-full">
              <img 
                src={galleryItems[2].image} 
                alt={galleryItems[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                variant={galleryItems[2].type === 'facility' ? 'default' : 'secondary'} 
                className="absolute top-3 left-3 text-xs"
              >
                {galleryItems[2].type === 'facility' ? 'Facility' : 'Team'}
              </Badge>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="font-semibold mb-1">{galleryItems[2].title}</h3>
                <p className="text-xs opacity-90">{galleryItems[2].description}</p>
              </div>
            </div>
          </Card>

          {/* Small Square Card - Middle Right */}
          <Card className="col-span-12 md:col-span-4 row-span-2 group overflow-hidden hover:shadow-medical transition-all duration-300">
            <div className="relative h-full">
              <img 
                src={galleryItems[3].image} 
                alt={galleryItems[3].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                variant={galleryItems[3].type === 'facility' ? 'default' : 'secondary'} 
                className="absolute top-3 left-3 text-xs"
              >
                {galleryItems[3].type === 'facility' ? 'Facility' : 'Team'}
              </Badge>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="font-semibold mb-1 text-sm">{galleryItems[3].title}</h3>
                <p className="text-xs opacity-90">{galleryItems[3].description}</p>
              </div>
            </div>
          </Card>

          {/* Bottom Row - Two Cards */}
          <Card className="col-span-12 md:col-span-6 row-span-1 group overflow-hidden hover:shadow-medical transition-all duration-300">
            <div className="relative h-full">
              <img 
                src={galleryItems[4].image} 
                alt={galleryItems[4].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {galleryItems[4].type === 'facility' ? 'Facility' : 'Team'}
                  </Badge>
                  <h3 className="font-semibold text-sm">{galleryItems[4].title}</h3>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ZoomIn className="mr-2 h-3 w-3" />
                    View
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="col-span-12 md:col-span-6 row-span-1 group overflow-hidden hover:shadow-medical transition-all duration-300">
            <div className="relative h-full">
              <img 
                src={galleryItems[5].image} 
                alt={galleryItems[5].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {galleryItems[5].type === 'facility' ? 'Facility' : 'Team'}
                  </Badge>
                  <h3 className="font-semibold text-sm">{galleryItems[5].title}</h3>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ZoomIn className="mr-2 h-3 w-3" />
                    View
                  </Button>
                </div>
              </div>
            </div>
          </Card>
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