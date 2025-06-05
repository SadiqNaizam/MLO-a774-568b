import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, CodeXml } from 'lucide-react'; // Example social icons

const Footer: React.FC = () => {
  console.log("Rendering Footer");
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
  ];

  const quickLinks = [
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
    { href: '/terms', label: 'Terms of Service' }, // Example link
    { href: '/privacy', label: 'Privacy Policy' }, // Example link
  ];


  return (
    <footer className="bg-muted/50 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand/About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-primary">
                <CodeXml className="h-7 w-7" />
                <span className="font-bold text-xl">MyPortfolio</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Crafting digital experiences, one line of code at a time.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Links / Placeholder */}
           <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>


          {/* Column 4: Social Media/Contact */}
          <div>
             <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Connect</h3>
             <div className="flex space-x-4">
               {socialLinks.map(social => (
                 <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                   <span className="sr-only">{social.name}</span>
                   <social.icon className="h-5 w-5" />
                 </a>
               ))}
             </div>
             <p className="text-sm text-muted-foreground mt-4">
                Or email at <a href="mailto:hello@example.com" className="text-primary hover:underline">hello@example.com</a>
             </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} MyPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;