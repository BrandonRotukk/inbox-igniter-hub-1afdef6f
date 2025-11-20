import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { Testimonials } from "@/components/Testimonials";
import { 
  Mail, 
  Zap, 
  Settings, 
  Users, 
  CheckCircle2, 
  BarChart3,
  Shield,
  Target,
  RefreshCw
} from "lucide-react";
import heroImage from "@/assets/hero-email.jpg";

const Index = () => {
  const services = [
    {
      icon: Shield,
      title: "Email Deliverability",
      description: "Ensure your emails reach the inbox.",
      features: [
        "SPF, DKIM, DMARC setup",
        "DNS & tracking domains",
        "Dedicated sending domains",
        "Warm-up systems",
        "Spam score reduction",
        "Reputation monitoring"
      ]
    },
    {
      icon: Zap,
      title: "Email Marketing & Automation",
      description: "Engage your audience and nurture leads automatically.",
      features: [
        "Campaign creation",
        "Automated flows (welcome, nurture, win-back)",
        "Segmentation & targeting",
        "Newsletter design & copywriting",
        "Analytics and optimization",
        "Compatible with Mailchimp, HubSpot, Klaviyo, Brevo, ConvertKit"
      ]
    },
    {
      icon: Settings,
      title: "Cold Email System Setup",
      description: "A complete ready-to-launch outbound engine.",
      features: [
        "Instantly.io setup",
        "Inbox rotation & warm-up",
        "Automated sequences (2–5 emails)",
        "Follow-up logic",
        "A/B testing",
        "Analytics dashboard"
      ]
    },
    {
      icon: Target,
      title: "B2B Lead Generation",
      description: "Get accurate, verified leads aligned to your ideal customer profile.",
      features: [
        "Filter by industry, location, job titles, company size, revenue, or tech stack",
        "Verified emails, LinkedIn profiles, optional phone numbers",
        "Delivered in organized spreadsheets",
        "Works with Apollo, Clay, Instantly Leads"
      ]
    },
    {
      icon: CheckCircle2,
      title: "Lead Cleaning & Verification",
      description: "Protect your deliverability with clean, verified lists.",
      features: [
        "Bulk email verification",
        "Spam trap & bounce removal",
        "Syntax corrections",
        "Catch-all classification",
        "Deliverability scoring",
        "Using MillionVerifier, NeverBounce, ZeroBounce, Instantly Verify"
      ]
    },
    {
      icon: RefreshCw,
      title: "Ongoing Management",
      description: "Hands-off support for continuous outreach success.",
      features: [
        "Weekly campaign execution",
        "Lead list maintenance",
        "Real-time verification",
        "Reputation recovery",
        "Technical audits",
        "Monthly performance reports"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Fusion Outreach Hub</span>
                </h1>
              </div>
              <p className="text-2xl lg:text-3xl font-semibold text-foreground">
                Emails that land. Leads that convert. Growth you can trust.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                We specialize in fixing email deliverability issues and building fully authenticated sending infrastructures that land in the inbox. Whether you're running newsletters or cold outreach, we make sure your entire email environment is correctly set up, compliant, and optimized for performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg" onClick={() => window.location.href = 'mailto:brannyk001@gmail.com'}>
                  Get Started
                </Button>
                <Button variant="hero-outline" size="lg" className="text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
              <img 
                src={heroImage} 
                alt="Email deliverability visualization" 
                className="relative rounded-2xl shadow-strong w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-y border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99%+</div>
              <div className="text-sm text-muted-foreground">Inbox Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Leads Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From technical setup to lead generation, we provide comprehensive email infrastructure and outreach solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="py-20 bg-card/50 backdrop-blur-sm border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Works With Your Tools</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work seamlessly with platforms like Instantly, Mailchimp, HubSpot, Klaviyo, Brevo, and more to deliver reliable, scalable sending.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {["Instantly.io", "Mailchimp", "HubSpot", "Klaviyo", "Brevo", "Apollo", "Clay", "MillionVerifier"].map((platform) => (
              <div key={platform} className="px-6 py-3 bg-background border border-border/50 rounded-lg shadow-soft">
                <span className="font-semibold text-foreground/80">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Fusion Outreach Hub</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specializing in email setup, verified leads, and automation that drives results.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Mail className="w-5 h-5" />
              <a 
                href="mailto:brannyk001@gmail.com" 
                className="hover:text-accent transition-colors"
              >
                brannyk001@gmail.com
              </a>
            </div>
            <p className="text-sm text-muted-foreground pt-4">
              © 2025 Fusion Outreach Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
