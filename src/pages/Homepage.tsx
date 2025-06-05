import React from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import HeroSection from '@/components/HeroSection';
import ProjectShowcaseCard from '@/components/ProjectShowcaseCard';
import { Button } from '@/components/ui/button';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const featuredProjects = [
  {
    title: "AI Powered Chatbot",
    description: "A cutting-edge chatbot leveraging natural language processing to provide instant customer support.",
    imageUrl: "https://source.unsplash.com/random/800x600?ai,technology",
    projectUrl: "#",
    repoUrl: "#",
    tags: ["AI", "React", "Node.js"],
  },
  {
    title: "E-commerce Platform",
    description: "A fully-featured online store with a modern UI, secure payments, and order management.",
    imageUrl: "https://source.unsplash.com/random/800x600?ecommerce,web",
    projectUrl: "#",
    repoUrl: "#",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
  },
  {
    title: "Mobile Fitness App",
    description: "Track your workouts, set goals, and stay motivated with this sleek mobile application.",
    imageUrl: "https://source.unsplash.com/random/800x600?fitness,mobileapp",
    projectUrl: "#",
    repoUrl: "#",
    tags: ["React Native", "Firebase", "UI/UX"],
  },
];

const Homepage: React.FC = () => {
  console.log('Homepage loaded');
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NavigationMenu />
      <main className="flex-grow">
        <HeroSection
          title="Crafting Digital Excellence"
          subtitle="Innovative Web Solutions & Creative Designs. Let's build something amazing together."
          ctaText="View My Work"
          ctaLink="/projects"
          imageUrl="https://source.unsplash.com/random/1600x900?abstract,technology,code"
        />

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.slice(0,3).map((project) => (
                <ProjectShowcaseCard key={project.title} {...project} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/projects">
                <Button size="lg" variant="outline" className="group">
                  Explore All Projects
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Start a Project?</h2>
                 <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    I'm passionate about bringing ideas to life. If you have a project in mind or just want to connect, feel free to reach out.
                 </p>
                 <Link to="/contact">
                    <Button size="lg">
                        Get In Touch
                    </Button>
                 </Link>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;