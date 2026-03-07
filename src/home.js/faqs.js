"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TextAnimate } from "@/components/ui/text-animate";
import Heading from "@/components/layout/heading";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShineBorder } from "@/components/ui/shine-border";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide website development, web portals, e-commerce solutions, SEO, social media marketing, and custom web applications tailored to your business needs.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A basic website usually takes 7–10 days, while complex platforms like e-commerce or portals may take 3–5 weeks depending on requirements.",
  },
  {
    question: "Do you provide SEO with website development?",
    answer:
      "Yes, we implement basic SEO structure during development and also offer advanced SEO optimization services separately.",
  },
  {
    question: "Is the website mobile responsive?",
    answer:
      "Absolutely. All websites we build are fully responsive and optimized for mobile, tablet, and desktop devices.",
  },
  {
    question: "Can I update my website content myself?",
    answer:
      "Yes, we can build your website with a CMS or admin panel so you can easily manage and update content anytime.",
  },
  {
    question: "Do you offer website maintenance?",
    answer:
      "Yes, we offer monthly maintenance packages that include updates, backups, security monitoring, and performance optimization.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern technologies like React, Next.js, Tailwind CSS, Node.js, and PHP depending on project requirements.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern technologies like React, Next.js, Tailwind CSS, Node.js, and PHP depending on project requirements.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heading
            heading=" Frequently Asked "
            highliter="Questions"
            pera=" Everything you need to know about our services."
          />
        </motion.div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="col-span-1"
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border rounded-2xl px-6  relative"
                >
                  {/* <BorderBeam duration={8} size={100} /> */}
                  {/* <ShineBorder shineColor="#ff6f00" /> */}

                  <AccordionTrigger className="text-left text-lg font-medium   decoration-0">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                    <TextAnimate animation="blurIn" as="span">
                      {`${faq.answer}`}
                    </TextAnimate>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </div>
        </Accordion>
      </div>
    </section>
  );
}
