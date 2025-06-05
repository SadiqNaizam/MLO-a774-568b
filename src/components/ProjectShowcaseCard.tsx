import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link2, Github } from 'lucide-react'; // Example icons

interface ProjectShowcaseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  repoUrl?: string;
  tags?: string[];
}

const ProjectShowcaseCard: React.FC<ProjectShowcaseCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
  repoUrl,
  tags,
}) => {
  console.log("Rendering ProjectShowcaseCard:", title);

  return (
    <Card className="w-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <CardHeader className="p-0">
        <AspectRatio ratio={16 / 9}>
          <img
            src={imageUrl || '/placeholder.svg'} // Use placeholder if no image
            alt={`Screenshot of ${title}`}
            className="object-cover w-full h-full"
            onError={(e) => (e.currentTarget.src = '/placeholder.svg')}
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-6 space-y-3">
        <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-3">{description}</CardDescription>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row sm:justify-start gap-3">
        {projectUrl && (
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full sm:w-auto">
              <Link2 className="mr-2 h-4 w-4" /> View Project
            </Button>
          </a>
        )}
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="w-full sm:w-auto">
              <Github className="mr-2 h-4 w-4" /> View Code
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};
export default ProjectShowcaseCard;