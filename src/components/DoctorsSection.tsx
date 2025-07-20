import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, Award, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import founderImage from "@/assets/founder-portrait.jpg";

const DoctorsSection = () => {
  const doctors = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      title: "Founder & Lead Laryngologist",
      image: founderImage,
      education: "Harvard Medical School",
      specialties: ["Voice Disorders", "Laryngeal Cancer", "Vocal Cord Surgery"],
      experience: "15+ years",
      description: "Dr. Johnson is a renowned laryngologist with extensive experience in complex voice disorders and surgical interventions."
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      title: "Senior Laryngologist",
      image: founderImage, // Using same image for demo
      education: "Johns Hopkins University",
      specialties: ["Speech Therapy", "Swallowing Disorders", "Pediatric Voice"],
      experience: "12+ years",
      description: "Specializing in pediatric laryngeal conditions and innovative speech therapy techniques for voice restoration."
    },
    {
      id: "3",
      name: "Dr. Emily Rodriguez",
      title: "Voice Rehabilitation Specialist",
      image: founderImage, // Using same image for demo
      education: "Stanford University",
      specialties: ["Voice Training", "Professional Voice", "Vocal Hygiene"],
      experience: "10+ years",
      description: "Expert in helping professional singers, actors, and public speakers maintain and restore their vocal health."
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Medical Team</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Meet Our Expert Doctors
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our team of board-certified laryngologists and specialists bring decades of combined experience 
            in treating voice and throat disorders with the latest medical advances.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Link key={index} to={`/doctor/${doctor.id}`}>
              <Card className="group hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-primary">
                      {doctor.experience}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-1">{doctor.name}</h3>
                    <p className="text-primary font-semibold mb-3">{doctor.title}</p>
                    
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-4">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span>{doctor.education}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground text-center mb-4 leading-relaxed line-clamp-3">
                    {doctor.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">Specialties</h4>
                    <div className="flex flex-wrap gap-1">
                      {doctor.specialties.slice(0, 3).map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-primary/5 border-primary/20 text-primary">
                          {specialty}
                        </Badge>
                      ))}
                      {doctor.specialties.length > 3 && (
                        <Badge variant="outline" className="text-xs bg-muted">
                          +{doctor.specialties.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1 group-hover:border-primary/50">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact
                    </Button>
                    <Button size="sm" className="flex-1">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            All our doctors are board-certified and stay current with the latest advances in laryngeal medicine.
          </p>
          <Button variant="outline" size="lg">
            View All Doctors & Staff
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;