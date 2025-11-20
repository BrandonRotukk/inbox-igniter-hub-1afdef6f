import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "TechFlow Inc",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    review: "Our inbox rate went from 65% to 99% in just two weeks. The team fixed our deliverability issues and set up a complete infrastructure that just works.",
    result: "99% inbox rate",
    rating: 5
  },
  {
    name: "James Rodriguez",
    role: "CEO",
    company: "GrowthLabs",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    review: "We generated over 500 qualified B2B leads in the first month. The targeting was spot-on and the verification process saved us from countless bounces.",
    result: "500+ qualified leads",
    rating: 5
  },
  {
    name: "Emily Chen",
    role: "Sales Manager",
    company: "CloudScale Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    review: "The cold email system setup was flawless. We now have automated sequences that generate meetings on autopilot. Best investment we made this year.",
    result: "3x meeting bookings",
    rating: 5
  },
  {
    name: "Michael Thompson",
    role: "Founder",
    company: "StartupHub",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    review: "Their ongoing management service means we never worry about deliverability. Weekly reports, proactive monitoring, and consistent results month after month.",
    result: "Consistent 97%+ rate",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-card/30 backdrop-blur-sm border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped businesses achieve exceptional email deliverability and drive real growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border/50 hover:shadow-strong transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-primary/20"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-foreground/90 leading-relaxed mb-4">
                  "{testimonial.review}"
                </p>
                
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.result}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
