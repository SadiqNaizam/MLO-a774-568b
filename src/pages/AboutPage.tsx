import React from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea'; // As per layout-info
import { Briefcase, Lightbulb, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  console.log('AboutPage loaded');
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NavigationMenu />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">About Me</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer dedicated to creating impactful and user-friendly digital experiences.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 items-center mb-12 md:mb-16">
          <div className="md:col-span-1 flex justify-center">
            <Avatar className="w-40 h-40 md:w-56 md:h-56 border-4 border-primary shadow-lg">
              <AvatarImage src="https://source.unsplash.com/random/400x400?portrait,person" alt="My Name" />
              <AvatarFallback>MN</AvatarFallback>
            </Avatar>
          </div>
          <div className="md:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">My Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Hello! I'm [Your Name/Alias], a software developer and creative thinker with a knack for turning complex problems into elegant solutions. My journey into the world of technology began with a fascination for how software shapes our world, and it has since evolved into a deep passion for web development, UI/UX design, and innovative technologies.
                </p>
                <p>
                  I thrive on challenges and am constantly learning new skills to stay at the forefront of this ever-evolving industry. My goal is to not just write code, but to craft experiences that are intuitive, performant, and visually appealing.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">My Philosophy</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center">
                    <CardHeader>
                        <div className="flex justify-center mb-2"> <Briefcase className="h-10 w-10 text-primary"/> </div>
                        <CardTitle>Professionalism</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Delivering high-quality, well-documented, and maintainable code is my top priority.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <div className="flex justify-center mb-2"> <Lightbulb className="h-10 w-10 text-primary"/> </div>
                        <CardTitle>Innovation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Always exploring new technologies and approaches to create unique and effective solutions.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <div className="flex justify-center mb-2"> <Users className="h-10 w-10 text-primary"/> </div>
                        <CardTitle>Collaboration</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Believing in the power of teamwork and open communication to achieve the best results.</p>
                    </CardContent>
                </Card>
            </div>
        </section>
        
        {/* Textarea for a block of text as per layout-info, if needed for longer, less structured content */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">A Note from Me</h2>
          <Textarea
            readOnly
            value="This is a space where I might share a more personal note, a mission statement, or a specific reflection on my work and approach. The Textarea component is used here as specified, allowing for a distinct visual presentation for a block of text. I believe in continuous learning and always strive to push the boundaries of what's possible with technology. Let's connect and create something amazing!"
            className="min-h-[150px] text-muted-foreground bg-muted/50 border-border p-4 rounded-md"
            rows={6}
          />
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;