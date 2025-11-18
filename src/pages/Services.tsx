import { useSearchParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield,
  Zap,
  Settings,
  Target,
  CheckCircle2,
  RefreshCw,
  ArrowLeft,
  Mail
} from "lucide-react";

const servicesData = {
  deliverability: {
    icon: Shield,
    title: "Email Deliverability",
    tagline: "Ensure your emails reach the inbox, not the spam folder",
    description: "Email deliverability is the foundation of any successful email campaign. We specialize in setting up and maintaining fully authenticated sending infrastructures that maximize inbox placement rates.",
    features: [
      {
        title: "SPF, DKIM, DMARC Setup",
        description: "Complete email authentication configuration to verify your sending domain and prevent spoofing. We ensure all records are properly configured and aligned."
      },
      {
        title: "DNS & Tracking Domains",
        description: "Custom domain configuration for links and tracking pixels that maintain your sender reputation and improve deliverability scores."
      },
      {
        title: "Dedicated Sending Domains",
        description: "Set up dedicated domains for different email types (marketing, transactional, cold outreach) to protect your primary domain reputation."
      },
      {
        title: "Warm-up Systems",
        description: "Gradual email volume ramping with automated warm-up sequences to build positive sender reputation with ISPs."
      },
      {
        title: "Spam Score Reduction",
        description: "Comprehensive analysis and optimization of content, technical setup, and sending patterns to minimize spam filtering."
      },
      {
        title: "Reputation Monitoring",
        description: "Continuous monitoring of sender score, blacklist status, and engagement metrics with proactive issue resolution."
      }
    ],
    benefits: [
      "95%+ inbox placement rate",
      "Reduced bounce rates",
      "Improved sender reputation",
      "Higher engagement rates",
      "Protected brand domain"
    ],
    pricing: "Starting at $500/setup + ongoing monitoring available"
  },
  marketing: {
    icon: Zap,
    title: "Email Marketing & Automation",
    tagline: "Engage your audience and nurture leads automatically",
    description: "Transform your email marketing with data-driven campaigns and sophisticated automation flows that turn subscribers into customers.",
    features: [
      {
        title: "Campaign Creation",
        description: "Professional email campaign design, copywriting, and HTML coding that looks great on all devices and drives conversions."
      },
      {
        title: "Automated Flows",
        description: "Welcome series, nurture sequences, abandoned cart recovery, win-back campaigns, and custom triggered automations based on user behavior."
      },
      {
        title: "Segmentation & Targeting",
        description: "Advanced audience segmentation based on demographics, behavior, engagement, and custom attributes for personalized messaging."
      },
      {
        title: "Newsletter Design & Copywriting",
        description: "Compelling content creation and professional design that reflects your brand and resonates with your audience."
      },
      {
        title: "Analytics and Optimization",
        description: "Detailed performance tracking, A/B testing, and data-driven optimization to continuously improve results."
      },
      {
        title: "Platform Expertise",
        description: "Full setup and management across Mailchimp, HubSpot, Klaviyo, Brevo, ConvertKit, and other major platforms."
      }
    ],
    benefits: [
      "Higher open and click rates",
      "Increased customer lifetime value",
      "Automated revenue generation",
      "Better customer relationships",
      "Time-saving automation"
    ],
    pricing: "Custom packages starting at $750/month"
  },
  coldemail: {
    icon: Settings,
    title: "Cold Email System Setup",
    tagline: "A complete ready-to-launch outbound engine",
    description: "Launch high-performing cold email campaigns with a fully configured system designed for maximum deliverability and conversion rates.",
    features: [
      {
        title: "Instantly.io Setup",
        description: "Complete configuration of Instantly.io including domain setup, inbox integration, and campaign structure optimization."
      },
      {
        title: "Inbox Rotation & Warm-up",
        description: "Multi-inbox setup with automated warm-up sequences to build reputation across multiple sending addresses."
      },
      {
        title: "Automated Sequences",
        description: "2-5 email sequences with personalized messaging, optimal timing, and strategic follow-up logic for maximum response rates."
      },
      {
        title: "Follow-up Logic",
        description: "Smart follow-up automation that stops when prospects engage and continues when they don't, with customizable timing."
      },
      {
        title: "A/B Testing",
        description: "Systematic testing of subject lines, messaging, CTAs, and sending times to optimize performance."
      },
      {
        title: "Analytics Dashboard",
        description: "Real-time tracking of deliverability, opens, clicks, replies, and conversions with actionable insights."
      }
    ],
    benefits: [
      "Faster time to market",
      "Optimized for replies",
      "Protected sender reputation",
      "Scalable infrastructure",
      "Data-driven improvements"
    ],
    pricing: "Complete setup starting at $1,200"
  },
  leadgen: {
    icon: Target,
    title: "B2B Lead Generation",
    tagline: "Get accurate, verified leads aligned to your ideal customer profile",
    description: "Stop wasting time on bad leads. Get high-quality B2B contact data that matches your exact targeting criteria and is ready for outreach.",
    features: [
      {
        title: "Advanced Filtering",
        description: "Precise targeting by industry, location, job titles, company size, revenue ranges, funding status, and technology stack."
      },
      {
        title: "Verified Contact Data",
        description: "Verified email addresses, LinkedIn profiles, and optional phone numbers with high deliverability rates."
      },
      {
        title: "Organized Delivery",
        description: "Clean, structured spreadsheets with all relevant contact and company information organized for immediate use."
      },
      {
        title: "Multi-Platform Support",
        description: "Leverage Apollo, Clay, Instantly Leads, and other premium data sources for comprehensive coverage."
      }
    ],
    benefits: [
      "95%+ email accuracy",
      "Time savings on prospecting",
      "Better targeting precision",
      "Higher conversion rates",
      "Scalable lead volume"
    ],
    pricing: "Custom quotes based on volume and targeting"
  },
  cleaning: {
    icon: CheckCircle2,
    title: "Lead Cleaning & Verification",
    tagline: "Protect your deliverability with clean, verified lists",
    description: "Don't risk your sender reputation with bad data. Our verification service ensures every email on your list is valid and safe to send to.",
    features: [
      {
        title: "Bulk Email Verification",
        description: "Process thousands of emails quickly with industry-leading verification technology that checks syntax, domain, and mailbox validity."
      },
      {
        title: "Spam Trap & Bounce Removal",
        description: "Identify and remove known spam traps, temporary emails, and invalid addresses before they damage your reputation."
      },
      {
        title: "Syntax Corrections",
        description: "Automatically fix common formatting errors and typos to recover valid email addresses."
      },
      {
        title: "Catch-all Classification",
        description: "Identify catch-all domains and provide risk scores to help you decide whether to include them in campaigns."
      },
      {
        title: "Deliverability Scoring",
        description: "Each email receives a detailed quality score with recommendations for optimal list segmentation."
      },
      {
        title: "Premium Tools",
        description: "Using MillionVerifier, NeverBounce, ZeroBounce, Instantly Verify, and other enterprise-grade platforms."
      }
    ],
    benefits: [
      "Reduced bounce rates",
      "Protected sender reputation",
      "Higher deliverability",
      "Cost savings on sends",
      "Better engagement metrics"
    ],
    pricing: "Starting at $0.004 per email verified"
  },
  management: {
    icon: RefreshCw,
    title: "Ongoing Management",
    tagline: "Hands-off support for continuous outreach success",
    description: "Focus on closing deals while we handle the day-to-day management of your email outreach infrastructure and campaigns.",
    features: [
      {
        title: "Weekly Campaign Execution",
        description: "Regular campaign launches with optimized targeting, messaging, and timing based on performance data."
      },
      {
        title: "Lead List Maintenance",
        description: "Continuous updating and cleaning of contact databases to maintain high quality and compliance."
      },
      {
        title: "Real-time Verification",
        description: "Automated verification of new leads before adding to campaigns to maintain deliverability standards."
      },
      {
        title: "Reputation Recovery",
        description: "Proactive monitoring and rapid response to deliverability issues with immediate corrective action."
      },
      {
        title: "Technical Audits",
        description: "Monthly reviews of DNS records, authentication, and technical setup to ensure optimal configuration."
      },
      {
        title: "Performance Reports",
        description: "Detailed monthly reports with key metrics, insights, and strategic recommendations for improvement."
      }
    ],
    benefits: [
      "Consistent results",
      "Time savings",
      "Expert optimization",
      "Proactive problem solving",
      "Scalable growth"
    ],
    pricing: "Retainer packages starting at $1,500/month"
  }
};

const Services = () => {
  const [searchParams] = useSearchParams();
  const serviceKey = searchParams.get("service") || "deliverability";
  const service = servicesData[serviceKey as keyof typeof servicesData] || servicesData.deliverability;
  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <Link to="/#services">
          <Button variant="ghost" className="mb-8 hover:bg-background/50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="mb-16 animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold">{service.title}</h1>
              <p className="text-xl text-muted-foreground mt-2">{service.tagline}</p>
            </div>
          </div>
          <p className="text-lg text-foreground/80 max-w-4xl leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">What's Included</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-start">
                      <span className="text-accent mr-2">•</span>
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground ml-6">{feature.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm sticky top-24">
              <CardHeader>
                <CardTitle>Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-primary/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-4">{service.pricing}</p>
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => window.location.href = 'mailto:brannyk001@gmail.com'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get a Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Other Services */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Other Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(servicesData)
              .filter(([key]) => key !== serviceKey)
              .slice(0, 3)
              .map(([key, svc]) => {
                const ServiceIcon = svc.icon;
                return (
                  <Link key={key} to={`/services?service=${key}`}>
                    <Card className="hover:shadow-medium transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-1 h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                          <ServiceIcon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-xl">{svc.title}</CardTitle>
                        <p className="text-muted-foreground text-sm mt-2">{svc.tagline}</p>
                      </CardHeader>
                    </Card>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
