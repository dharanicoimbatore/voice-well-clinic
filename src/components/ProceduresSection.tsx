import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Activity, Clock, Scissors } from "lucide-react";

const ProceduresSection = () => {
  const procedureCategories = [
    {
      title: "Diagnostic Procedures",
      icon: Stethoscope,
      color: "bg-primary/10 text-primary",
      procedures: [
        "Laryngoscopy (Direct & Indirect)",
        "Videostroboscopy",
        "Acoustic Voice Analysis",
        "Aerodynamic Voice Assessment",
        "Electromyography (EMG)",
        "CT Scan of Larynx",
        "MRI Larynx Imaging"
      ]
    },
    {
      title: "Therapeutic Procedures",
      icon: Activity,
      color: "bg-medical-teal/10 text-medical-teal",
      procedures: [
        "Voice Therapy Sessions",
        "Swallowing Rehabilitation",
        "Breathing Exercises",
        "Vocal Hygiene Training",
        "Speech Therapy",
        "Resonance Therapy",
        "Articulation Training"
      ]
    },
    {
      title: "Outpatient Procedures",
      icon: Clock,
      color: "bg-accent/10 text-accent",
      procedures: [
        "Vocal Cord Injection",
        "Botulinum Toxin Injection",
        "Office-based Laser Treatment",
        "Flexible Laryngoscopy",
        "Biopsy Procedures",
        "Steroid Injections",
        "Minor Polyp Removal"
      ]
    },
    {
      title: "Surgeries",
      icon: Scissors,
      color: "bg-medical-blue/10 text-medical-blue",
      procedures: [
        "Microlaryngeal Surgery",
        "Vocal Cord Paralysis Surgery",
        "Laryngeal Cancer Surgery",
        "Tracheostomy",
        "Laryngoplasty",
        "Arytenoid Adduction",
        "Laser Vocal Cord Surgery"
      ]
    }
  ];

  return (
    <section id="procedures" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Procedures</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Comprehensive Laryngeal Care
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a complete range of diagnostic, therapeutic, and surgical procedures 
            to address all types of laryngeal disorders with precision and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {procedureCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-medical transition-all duration-300 h-full">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {category.procedures.map((procedure, procIndex) => (
                    <li key={procIndex} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {procedure}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/5 to-medical-teal/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need More Information?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our experienced team will help determine the best treatment approach for your specific condition. 
              Contact us to discuss which procedures might be right for you.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors">
                Download Procedure Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProceduresSection;