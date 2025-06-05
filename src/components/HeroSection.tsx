import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string; // Optional background image
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Welcome to My Portfolio",
  subtitle = "Discover innovative projects and creative solutions.",
  ctaText = "View Projects",
  ctaLink = "/projects",
  imageUrl,
}) => {
  console.log("Rendering HeroSection with title:", title);

  const sectionStyle = imageUrl ? { backgroundImage: `url(${imageUrl})` } : {};

  return (
    <section
      className={`py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background text-center ${imageUrl ? 'bg-cover bg-center' : ''}`}
      style={sectionStyle}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10">
            {subtitle}
          </p>
          {ctaLink && ctaText && (
            <Link to={ctaLink}>
              <Button size="lg" className="group">
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
export default HeroSection;