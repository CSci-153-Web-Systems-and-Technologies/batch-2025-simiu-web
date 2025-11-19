import gridPattern from "@/public/gridPattern.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";

const faq = [
  {
    question: "What is your return policy?",
    answer:
      "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
  },
  {
    question: "What if I receive a damaged item?",
    answer:
      "Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.",
  },
];

const FAQ = () => {
  return (
    <section className="py-8 pb-16 flex items-center justify-center bg-[#020103] relative">
      <div
        className="container flex flex-col items-center border border-white/20 rounded-xl px-8 py-16 md:p-16 gap-8 relative overflow-hidden"
        style={{ backgroundImage: `url(${gridPattern.src})` }}
      >
        {/* Layer blur overlay */}
        <div className="absolute -top-[200%] inset-0 bg-[radial-gradient(50%_50%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36)_78%,transparent)]"></div>
        <h2 className="text-6xl text-center tracking-tighter z-2">
          Frequently asked Questions
        </h2>

        <Accordion
          type="single"
          className="mt-6 max-w-[700px] w-full z-2"
          collapsible
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              className="border-white/20"
              value={`question-${index}`}
            >
              <AccordionTrigger className="text-left text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
