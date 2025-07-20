import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Voice Disorders: Early Detection and Treatment",
    excerpt: "Learn about the common signs of voice disorders and how early intervention can make a significant difference in treatment outcomes.",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Voice Health",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Advances in Laryngeal Surgery: What Patients Need to Know",
    excerpt: "Discover the latest minimally invasive techniques in laryngeal surgery and their benefits for patient recovery.",
    author: "Dr. Michael Chen",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Surgery",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Voice Care for Professional Singers: Prevention and Recovery",
    excerpt: "Essential tips for singers to maintain vocal health and prevent injury during performances and practice.",
    author: "Dr. Emily Rodriguez",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Professional Voice",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "Pediatric Voice Disorders: A Parent's Guide",
    excerpt: "Understanding voice issues in children, when to seek help, and how to support your child's vocal development.",
    author: "Dr. Sarah Johnson",
    date: "February 28, 2024",
    readTime: "4 min read",
    category: "Pediatric Care",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "The Role of Speech Therapy in Voice Recovery",
    excerpt: "How speech therapy complements medical treatment in voice disorder recovery and long-term vocal health.",
    author: "Dr. Michael Chen",
    date: "February 20, 2024",
    readTime: "5 min read",
    category: "Therapy",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "Managing Vocal Fatigue: Tips for Voice Professionals",
    excerpt: "Practical strategies for teachers, singers, and public speakers to prevent and manage vocal fatigue.",
    author: "Dr. Emily Rodriguez",
    date: "February 15, 2024",
    readTime: "6 min read",
    category: "Professional Voice",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
  }
];

const categories = ["All", "Voice Health", "Surgery", "Professional Voice", "Pediatric Care", "Therapy"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Voice Care Blog
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Expert insights, latest research, and practical tips for maintaining optimal voice health
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm" className="p-0 h-auto font-medium group/btn">
                      Read more
                      <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;