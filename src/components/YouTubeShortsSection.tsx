import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const YouTubeShortsSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  // Sample YouTube Shorts videos (replace with actual video IDs)
  const videos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Medical Tips for Daily Health',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
      id: 'jNQXAC9IVRw',
      title: 'Quick Health Check Tips',
      thumbnail: 'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg'
    },
    {
      id: 'ScMzIvxBSi4',
      title: 'Emergency First Aid Guide',
      thumbnail: 'https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg'
    },
    {
      id: 'ZZ5LpwO-An4',
      title: 'Healthy Lifestyle Tips',
      thumbnail: 'https://img.youtube.com/vi/ZZ5LpwO-An4/maxresdefault.jpg'
    },
    {
      id: 'fJ9rUzIMcZQ',
      title: 'Mental Health Awareness',
      thumbnail: 'https://img.youtube.com/vi/fJ9rUzIMcZQ/maxresdefault.jpg'
    }
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const playVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Health Tips & Shorts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch our quick health tips and medical advice in bite-sized video content
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative bg-card rounded-2xl overflow-hidden shadow-lg">
            {/* Video Thumbnail */}
            <div className="relative aspect-[9/16] bg-muted">
              <img
                src={videos[currentVideo].thumbnail}
                alt={videos[currentVideo].title}
                className="w-full h-full object-cover"
              />
              
              {/* Play Button Overlay */}
              <div 
                className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer hover:bg-black/30 transition-colors"
                onClick={() => playVideo(videos[currentVideo].id)}
              >
                <Button size="lg" className="rounded-full w-16 h-16 bg-primary/90 hover:bg-primary">
                  <Play className="w-6 h-6 fill-current" />
                </Button>
              </div>

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                onClick={prevVideo}
                disabled={videos.length <= 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                onClick={nextVideo}
                disabled={videos.length <= 1}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Video Info */}
            <div className="p-4">
              <h3 className="font-semibold text-foreground mb-2">
                {videos[currentVideo].title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {currentVideo + 1} of {videos.length}
                </span>
                <Button
                  variant="link"
                  className="text-sm p-0 h-auto"
                  onClick={() => playVideo(videos[currentVideo].id)}
                >
                  Watch on YouTube
                </Button>
              </div>
            </div>
          </div>

          {/* Video Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {videos.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentVideo ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentVideo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeShortsSection;