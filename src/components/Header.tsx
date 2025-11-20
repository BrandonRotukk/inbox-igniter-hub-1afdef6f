import logo from "@/assets/logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-1">
            <a href={logo} download="fusion-outreach-hub-logo.png" className="cursor-pointer">
              <img src={logo} alt="Fusion Outreach Hub" className="h-10 w-10 hover:opacity-80 transition-opacity" />
            </a>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Fusion Outreach Hub
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <ThemeToggle />
          </nav>
          
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-foreground/80 hover:text-primary transition-colors">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <button 
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setOpen(false);
                    }}
                    className="text-foreground/80 hover:text-primary transition-colors font-medium text-left"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-foreground/80 hover:text-primary transition-colors font-medium text-left"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => scrollToSection('faq')}
                    className="text-foreground/80 hover:text-primary transition-colors font-medium text-left"
                  >
                    FAQ
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-foreground/80 hover:text-primary transition-colors font-medium text-left"
                  >
                    Contact
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
