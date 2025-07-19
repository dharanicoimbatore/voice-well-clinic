import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Mail, Calendar, Phone, MapPin, Award, GraduationCap, Clock, Users, Star } from "lucide-react";
import founderImage from "@/assets/founder-portrait.jpg";

const DoctorDetail = () => {
  const { id } = useParams();

  // Extended doctor data with more details
  const doctors = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      title: "Founder & Lead Laryngologist",
      image: founderImage,
      education: "Harvard Medical School",
      specialties: ["Voice Disorders", "Laryngeal Cancer", "Vocal Cord Surgery", "Swallowing Disorders"],
      experience: "15+ years",
      description: "Dr. Johnson is a renowned laryngologist with extensive experience in complex voice disorders and surgical interventions.",
      qualifications: [
        "MD - Harvard Medical School",
        "Residency - Massachusetts General Hospital",
        "Fellowship - Voice and Swallowing Disorders",
        "Board Certified - Otolaryngology"
      ],
      achievements: [
        "Published 50+ research papers on laryngeal disorders",
        "Keynote speaker at International Voice Foundation",
        "Recipient of Excellence in Patient Care Award 2023",
        "Pioneer in minimally invasive vocal cord surgery"
      ],
      languages: ["English", "Spanish", "French"],
      availability: "Monday - Friday: 8:00 AM - 5:00 PM",
      phone: "+1 (555) 123-4567",
      email: "dr.johnson@laryngealclinic.com",
      office: "Suite 302, Medical Center Building",
      yearsOfPractice: 15,
      patientsServed: "2000+",
      surgicalProcedures: "500+"
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      title: "Senior Laryngologist",
      image: founderImage,
      education: "Johns Hopkins University",
      specialties: ["Speech Therapy", "Swallowing Disorders", "Pediatric Voice", "Voice Rehabilitation"],
      experience: "12+ years",
      description: "Specializing in pediatric laryngeal conditions and innovative speech therapy techniques for voice restoration.",
      qualifications: [
        "MD - Johns Hopkins University",
        "Residency - Johns Hopkins Hospital",
        "Fellowship - Pediatric Otolaryngology",
        "Board Certified - Pediatric ENT"
      ],
      achievements: [
        "Developer of innovative speech therapy protocols",
        "Published expert in pediatric voice disorders",
        "Award for Outstanding Patient Care 2022",
        "Specialist in complex swallowing rehabilitation"
      ],
      languages: ["English", "Mandarin", "Cantonese"],
      availability: "Tuesday - Saturday: 9:00 AM - 6:00 PM",
      phone: "+1 (555) 123-4568",
      email: "dr.chen@laryngealclinic.com",
      office: "Suite 305, Medical Center Building",
      yearsOfPractice: 12,
      patientsServed: "1800+",
      surgicalProcedures: "300+"
    },
    {
      id: "3",
      name: "Dr. Emily Rodriguez",
      title: "Voice Rehabilitation Specialist",
      image: founderImage,
      education: "Stanford University",
      specialties: ["Voice Training", "Professional Voice", "Vocal Hygiene", "Performance Voice"],
      experience: "10+ years",
      description: "Expert in helping professional singers, actors, and public speakers maintain and restore their vocal health.",
      qualifications: [
        "MD - Stanford University School of Medicine",
        "Residency - Stanford Medical Center",
        "Fellowship - Professional Voice Care",
        "Board Certified - Laryngology"
      ],
      achievements: [
        "Voice coach for Grammy-winning artists",
        "Published authority on professional voice care",
        "Developer of vocal hygiene programs",
        "International speaker on voice preservation"
      ],
      languages: ["English", "Spanish", "Portuguese"],
      availability: "Monday - Thursday: 10:00 AM - 7:00 PM",
      phone: "+1 (555) 123-4569",
      email: "dr.rodriguez@laryngealclinic.com",
      office: "Suite 308, Medical Center Building",
      yearsOfPractice: 10,
      patientsServed: "1500+",
      surgicalProcedures: "200+"
    }
  ];

  const doctor = doctors.find(d => d.id === id);

  if (!doctor) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Doctor Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-foreground mb-2">{doctor.name}</h1>
              <p className="text-xl text-primary font-semibold mb-4">{doctor.title}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{doctor.description}</p>
            </div>
            
            <div className="text-center">
              <img 
                src={doctor.image} 
                alt={doctor.name}
                className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education & Qualifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                  Education & Qualifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {doctor.qualifications.map((qual, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{qual}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-5 w-5 text-primary" />
                  Areas of Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {doctor.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-5 w-5 text-primary" />
                  Professional Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {doctor.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Professional Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{doctor.yearsOfPractice}</div>
                    <div className="text-sm text-muted-foreground">Years of Practice</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{doctor.patientsServed}</div>
                    <div className="text-sm text-muted-foreground">Patients Served</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{doctor.surgicalProcedures}</div>
                    <div className="text-sm text-muted-foreground">Surgical Procedures</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-foreground">{doctor.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-foreground">{doctor.email}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-primary mt-1" />
                  <span className="text-foreground">{doctor.office}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-4 w-4 text-primary mt-1" />
                  <span className="text-foreground">{doctor.availability}</span>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle>Languages Spoken</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages.map((language, index) => (
                    <Badge key={index} variant="outline">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full" size="lg">
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;