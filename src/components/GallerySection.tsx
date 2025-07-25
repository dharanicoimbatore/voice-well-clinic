import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ZoomIn, Grid3X3, LayoutGrid } from "lucide-react";
import medicalFacilityImage from "@/assets/medical-facility.jpg";
import medicalTeamImage from "@/assets/medical-team.jpg";
import consultationRoomImage from "@/assets/consultation-room.jpg";
import medicalLabImage from "@/assets/medical-lab.jpg";
import waitingAreaImage from "@/assets/waiting-area.jpg";
import surgeryRoomImage from "@/assets/surgery-room.jpg";
import medicalDiscussionImage from "@/assets/medical-discussion.jpg";
import pharmacyImage from "@/assets/pharmacy.jpg";
import imagingRoomImage from "@/assets/imaging-room.jpg";
import therapyRoomImage from "@/assets/therapy-room.jpg";
import pediatricWardImage from "@/assets/pediatric-ward.jpg";
import emergencyRoomImage from "@/assets/emergency-room.jpg";
import conferenceRoomImage from "@/assets/conference-room.jpg";
import nurseStationImage from "@/assets/nurse-station.jpg";
import storageRoomImage from "@/assets/storage-room.jpg";
import cafeteriaImage from "@/assets/cafeteria.jpg";
import changingRoomImage from "@/assets/changing-room.jpg";
import dentalClinicImage from "@/assets/dental-clinic.jpg";
import bloodDonationImage from "@/assets/blood-donation.jpg";
import researchLabImage from "@/assets/research-lab.jpg";
import chapelImage from "@/assets/chapel.jpg";
import recordsOfficeImage from "@/assets/records-office.jpg";
import { useState } from "react";

const GallerySection = () => {
  const [layoutType, setLayoutType] = useState<'mixed' | 'grid'>('mixed');
  
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
      title: "Private Consultation Rooms",
      description: "Comfortable and private spaces for patient consultations",
      image: consultationRoomImage
    },
    {
      type: "facility",
      title: "Advanced Medical Laboratory",
      description: "State-of-the-art testing and diagnostic capabilities",
      image: medicalLabImage
    },
    {
      type: "facility",
      title: "Comfortable Waiting Areas",
      description: "Relaxing spaces designed for patient comfort",
      image: waitingAreaImage
    },
    {
      type: "facility",
      title: "Modern Surgery Suite",
      description: "Advanced surgical facilities with latest equipment",
      image: surgeryRoomImage
    },
    {
      type: "team",
      title: "Medical Team Discussion",
      description: "Collaborative care planning and case reviews",
      image: medicalDiscussionImage
    },
    {
      type: "facility",
      title: "On-site Pharmacy",
      description: "Convenient prescription services for patients",
      image: pharmacyImage
    },
    {
      type: "facility",
      title: "Medical Imaging Center",
      description: "Advanced diagnostic imaging capabilities",
      image: imagingRoomImage
    },
    {
      type: "facility",
      title: "Physical Therapy Room",
      description: "Rehabilitation and recovery support services",
      image: therapyRoomImage
    },
    {
      type: "facility",
      title: "Pediatric Care Unit",
      description: "Specialized care for our youngest patients",
      image: pediatricWardImage
    },
    {
      type: "facility",
      title: "Emergency Treatment Room",
      description: "Immediate care for urgent medical needs",
      image: emergencyRoomImage
    },
    {
      type: "facility",
      title: "Medical Conference Room",
      description: "Professional meeting and education spaces",
      image: conferenceRoomImage
    },
    {
      type: "facility",
      title: "Nurse Station Hub",
      description: "Central coordination for patient care",
      image: nurseStationImage
    },
    {
      type: "facility",
      title: "Medical Supply Storage",
      description: "Organized and sterile equipment storage",
      image: storageRoomImage
    },
    {
      type: "facility",
      title: "Patient Cafeteria",
      description: "Healthy dining options for patients and families",
      image: cafeteriaImage
    },
    {
      type: "facility",
      title: "Staff Changing Area",
      description: "Professional facilities for medical staff",
      image: changingRoomImage
    },
    {
      type: "facility",
      title: "Dental Treatment Room",
      description: "Comprehensive oral health services",
      image: dentalClinicImage
    },
    {
      type: "facility",
      title: "Blood Donation Center",
      description: "Community blood donation services",
      image: bloodDonationImage
    },
    {
      type: "team",
      title: "Research Laboratory",
      description: "Medical research and development team",
      image: researchLabImage
    },
    {
      type: "facility",
      title: "Meditation Chapel",
      description: "Peaceful space for reflection and prayer",
      image: chapelImage
    },
    {
      type: "facility",
      title: "Medical Records Office",
      description: "Secure patient information management",
      image: recordsOfficeImage
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

  const renderGalleryCard = (item: typeof galleryItems[0], index: number, className: string) => (
    <Card key={index} className={`${className} group overflow-hidden hover:shadow-medical transition-all duration-300`}>
      <div className="relative h-full">
        <img 
          src={item.image} 
          alt={item.title}
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
          variant={item.type === 'facility' ? 'default' : 'secondary'} 
          className="absolute top-3 left-3 text-xs"
        >
          {item.type === 'facility' ? 'Facility' : 'Team'}
        </Badge>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
          <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
          <p className="text-xs opacity-90 line-clamp-2">{item.description}</p>
        </div>
      </div>
    </Card>
  );

  return (
    <section id="gallery" className="py-20 bg-medical-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Facility Gallery</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Take a Look Inside Our Clinic
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our comprehensive medical facility with 26 specialized areas designed for complete healthcare, 
            featuring the latest diagnostic equipment and comfortable patient spaces.
          </p>
          
          {/* Layout Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-background rounded-lg p-1 flex space-x-1">
              <Button
                variant={layoutType === 'mixed' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLayoutType('mixed')}
                className="flex items-center"
              >
                <LayoutGrid className="mr-2 h-4 w-4" />
                Mixed Layout
              </Button>
              <Button
                variant={layoutType === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLayoutType('grid')}
                className="flex items-center"
              >
                <Grid3X3 className="mr-2 h-4 w-4" />
                Grid Layout
              </Button>
            </div>
          </div>
        </div>

        {layoutType === 'mixed' ? (
          // Mixed Masonry Layout
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 mb-12">
            {galleryItems.map((item, index) => {
              // Create varied heights for masonry effect
              const heights = ['h-64', 'h-80', 'h-72', 'h-96', 'h-60', 'h-88'];
              const randomHeight = heights[index % heights.length];
              
              return (
                <div key={index} className="break-inside-avoid mb-6">
                  <Card className="group overflow-hidden hover:shadow-medical transition-all duration-300">
                    <div className={`relative ${randomHeight}`}>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
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
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-white">
                        <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                        <p className="text-xs opacity-90 line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        ) : (
          // Traditional Grid Layout
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {galleryItems.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-medical transition-all duration-300">
                <div className="relative h-64">
                  <img 
                    src={item.image} 
                    alt={item.title}
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
                    variant={item.type === 'facility' ? 'default' : 'secondary'} 
                    className="absolute top-3 left-3 text-xs"
                  >
                    {item.type === 'facility' ? 'Facility' : 'Team'}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        )}

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