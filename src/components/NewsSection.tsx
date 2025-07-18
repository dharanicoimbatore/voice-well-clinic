import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Users } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      type: "research",
      title: "Breakthrough in Voice Restoration Therapy",
      date: "March 15, 2024",
      readTime: "5 min read",
      summary: "Our latest research shows 94% improvement in vocal cord function using new rehabilitation techniques.",
      category: "Research",
      featured: true
    },
    {
      type: "event",
      title: "Free Voice Health Screening Day",
      date: "March 30, 2024",
      readTime: "Event",
      summary: "Join us for complimentary voice assessments and learn about maintaining optimal vocal health.",
      category: "Community Event",
      featured: false
    },
    {
      type: "news",
      title: "New Advanced Laryngoscopy Equipment",
      date: "March 8, 2024",
      readTime: "3 min read",
      summary: "We've upgraded our diagnostic capabilities with the latest high-definition laryngoscopy technology.",
      category: "Technology Update",
      featured: false
    },
    {
      type: "event",
      title: "Professional Voice Workshop for Educators",
      date: "April 12, 2024",
      readTime: "Workshop",
      summary: "Special workshop designed for teachers and public speakers to prevent voice strain and injury.",
      category: "Educational Event",
      featured: false
    }
  ];

  const upcomingEvents = [
    {
      title: "Monthly Support Group Meeting",
      date: "March 25, 2024",
      time: "6:00 PM",
      location: "VoiceCare Clinic Conference Room"
    },
    {
      title: "Vocal Hygiene Seminar",
      date: "April 5, 2024",
      time: "2:00 PM",
      location: "Community Center"
    },
    {
      title: "Professional Voice Care Webinar",
      date: "April 18, 2024",
      time: "7:00 PM",
      location: "Online Event"
    }
  ];

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">News & Events</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Latest News & Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed about the latest developments in laryngeal medicine, 
            our research findings, and upcoming community events.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main News Section */}
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {newsItems.map((item, index) => (
                <Card key={index} className={`group hover:shadow-medical transition-all duration-300 ${item.featured ? 'border-primary/20' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant={item.featured ? 'default' : 'outline'}>
                        {item.category}
                      </Badge>
                      {item.featured && (
                        <Badge variant="secondary" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.summary}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                View All News & Articles
              </Button>
            </div>
          </div>

          {/* Sidebar - Upcoming Events */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Users className="mr-2 h-5 w-5 text-primary" />
                  Upcoming Events
                </h3>
                
                <div className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4">
                      <h4 className="font-semibold text-foreground mb-1">
                        {event.title}
                      </h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {event.time}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          📍 {event.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-3">
                    Newsletter Subscription
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest updates on voice health research and clinic news.
                  </p>
                  <Button className="w-full" size="sm">
                    Subscribe to Newsletter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;