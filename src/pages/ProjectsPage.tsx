import React, { useState } from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import ProjectShowcaseCard from '@/components/ProjectShowcaseCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const allProjects = [
  { id:1, title: "Project Alpha", description: "A complex data visualization tool for financial markets.", imageUrl: "https://source.unsplash.com/random/800x600?data,chart", projectUrl: "#", repoUrl: "#", tags: ["React", "D3.js", "TypeScript"], category: "Web App" },
  { id:2, title: "Project Beta", description: "An innovative mobile game with unique mechanics.", imageUrl: "https://source.unsplash.com/random/800x600?game,mobile", projectUrl: "#", repoUrl: "#", tags: ["Unity", "C#", "GameDev"], category: "Mobile" },
  { id:3, title: "Project Gamma", description: "A SaaS platform for project management and collaboration.", imageUrl: "https://source.unsplash.com/random/800x600?saas,platform", projectUrl: "#", repoUrl: "#", tags: ["Vue.js", "Node.js", "MongoDB"], category: "Web App" },
  { id:4, title: "Project Delta", description: "An e-commerce solution for artisanal crafts.", imageUrl: "https://source.unsplash.com/random/800x600?ecommerce,crafts", projectUrl: "#", tags: ["Shopify", "Liquid", "UX"], category: "E-commerce" },
  { id:5, title: "Project Epsilon", description: "AI-driven content generation tool.", imageUrl: "https://source.unsplash.com/random/800x600?ai,writing", projectUrl: "#", repoUrl: "#", tags: ["Python", "NLP", "Machine Learning"], category: "AI" },
  { id:6, title: "Project Zeta", description: "A community portal for local artists.", imageUrl: "https://source.unsplash.com/random/800x600?community,art", repoUrl: "#", tags: ["Next.js", "Firebase", "Tailwind"], category: "Web App" },
  { id:7, title: "Project Eta", description: "Cross-platform utility application.", imageUrl: "https://source.unsplash.com/random/800x600?utility,app", projectUrl: "#", repoUrl: "#", tags: ["Flutter", "Dart"], category: "Mobile" },
];

const ITEMS_PER_PAGE = 6;

const ProjectsPage: React.FC = () => {
  console.log('ProjectsPage loaded');
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["All", ...new Set(allProjects.map(p => p.category))];

  const filteredProjects = activeTab === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeTab);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to first page on tab change
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NavigationMenu />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">My Projects</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my work, showcasing my skills in various technologies and problem domains.
          </p>
        </header>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-10">
          <TabsList className="grid w-full sm:w-auto sm:mx-auto grid-cols-2 sm:grid-cols-none sm:flex sm:justify-center">
            {categories.map(category => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedProjects.map((project) => (
              <ProjectShowcaseCard key={project.id} {...project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-muted-foreground">No projects found for this category.</p>
          </div>
        )}


        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1);}} 
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : undefined}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                // Basic pagination display logic (can be enhanced for more pages)
                if (totalPages <= 5 || pageNum === 1 || pageNum === totalPages || Math.abs(pageNum - currentPage) <= 1) {
                  return (
                    <PaginationItem key={pageNum}>
                      <PaginationLink 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); handlePageChange(pageNum);}}
                        isActive={currentPage === pageNum}
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  );
                } else if (Math.abs(pageNum - currentPage) === 2 && totalPages > 5) {
                   return <PaginationEllipsis key={`ellipsis-${pageNum}`} />;
                }
                return null;
              })}
              <PaginationItem>
                <PaginationNext 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1);}}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : undefined}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;