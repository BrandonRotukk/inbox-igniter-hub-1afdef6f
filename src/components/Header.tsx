import logo from "@/assets/logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Header = () => {
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
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
