import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is email deliverability and why does it matter?",
    answer: "Email deliverability is the ability to successfully deliver emails to recipients' inboxes rather than spam folders. It directly impacts your ROI, campaign effectiveness, and sender reputation. Poor deliverability means lost revenue, wasted effort, and damaged brand credibility."
  },
  {
    question: "How quickly can you improve my inbox rate?",
    answer: "Most clients see significant improvements within 2-4 weeks. We start with a comprehensive audit, fix technical issues (SPF, DKIM, DMARC), implement proper infrastructure, and begin warming up your domains. Results depend on your current setup and sending practices."
  },
  {
    question: "Do you work with my existing email platform?",
    answer: "Yes! We work seamlessly with Instantly.io, Mailchimp, HubSpot, Klaviyo, Brevo, ConvertKit, and most major email platforms. We'll integrate with your current tools and optimize them for maximum deliverability."
  },
  {
    question: "What's included in your cold email system setup?",
    answer: "We provide complete end-to-end setup including domain configuration, inbox rotation, warm-up systems, automated sequences (2-5 emails), follow-up logic, A/B testing framework, and analytics dashboard. Everything you need to start generating leads immediately."
  },
  {
    question: "How do you source and verify B2B leads?",
    answer: "We use premium tools like Apollo, Clay, and Instantly Leads to source highly targeted leads based on your ideal customer profile. Every lead is verified through MillionVerifier, NeverBounce, or ZeroBounce to ensure accuracy and protect your sender reputation."
  },
  {
    question: "Can you help recover a damaged sender reputation?",
    answer: "Absolutely. We specialize in reputation recovery through technical fixes, list cleaning, gradual warm-up protocols, content optimization, and monitoring. Recovery typically takes 4-8 weeks depending on the severity of the damage."
  },
  {
    question: "What's the difference between marketing emails and cold emails?",
    answer: "Marketing emails go to subscribers who opted in (newsletters, promotions). Cold emails are outbound prospecting to potential customers who haven't engaged with you before. Each requires different infrastructure, compliance considerations, and deliverability strategies."
  },
  {
    question: "How does your pricing work?",
    answer: "Pricing varies based on your specific needs, email volume, and level of service required. We offer one-time setup packages and ongoing management retainers. Contact us for a custom quote tailored to your business goals."
  },
  {
    question: "Do you provide ongoing support and management?",
    answer: "Yes! Our ongoing management service includes weekly campaign execution, lead list maintenance, real-time verification, reputation monitoring, technical audits, and monthly performance reports. We handle everything so you can focus on closing deals."
  },
  {
    question: "What results can I expect?",
    answer: "While results vary by industry and approach, our clients typically achieve 95%+ inbox rates, 30-40% open rates for cold emails, and significant increases in qualified leads and meetings booked. We provide transparent reporting and continuous optimization."
  },
  {
    question: "How do I get started?",
    answer: "Simply reach out via our contact form or email us at brannyk001@gmail.com. We'll schedule a consultation to understand your needs, audit your current setup, and provide a customized plan to achieve your email marketing and outreach goals."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 lg:py-32" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our email deliverability and lead generation services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6 data-[state=open]:shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
