import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  faqs: FAQ[];
}

const faqData: FAQCategory[] = [
  {
    category: "Getting Started",
    faqs: [
      {
        question: "What is Panlit?",
        answer: "Panlit is an AI-powered all-in-one platform designed specifically for tourism and experience businesses. It brings together ticketing and booking management, customer relationship management, calendar scheduling, business analytics, and more, in one simple platform. Built by someone who managed 1,500+ operators, Panlit helps tourism and experience creators run their operations more efficiently."
      },
      {
        question: "Who is Panlit for?",
        answer: "Panlit is built for tourism operators and experience creators including safari companies, tour operators, travel agencies, museums, yoga studios, cooking classes, kayaking, paint and sip studios, wellness retreats, and any business that sells experiences people can book."
      },
      {
        question: "How long does it take to set up Panlit?",
        answer: "Most users are fully operational within 10 minutes. The setup process involves creating your account, adding your services/pricing, and optionally importing existing customer data. There's no complex configuration or lengthy onboarding process."
      },
      {
        question: "Do I need technical knowledge to use Panlit?",
        answer: "No! Panlit is designed for non-technical users. If you can use email, Excel, or WhatsApp, you can use Panlit. Everything is straightforward with clear labels and intuitive navigation."
      },
      {
        question: "Can I import my existing customer data?",
        answer: "Yes! You can import customer data from spreadsheets (CSV/Excel) with just a few clicks. The system will guide you through mapping your columns to the correct fields."
      },
      {
        question: "How many team members can use Panlit?",
        answer: "As of today, only one account can be created per business and you can share the login credentials with your other team members. Everyone sees the same real-time data, ensuring perfect coordination across your team. In coming months, we will be launching multi-team accounts that will allow you to provide your team members with their own sub-account."
      }
    ]
  },
  {
    category: "Booking Management",
    faqs: [
      {
        question: "How do I create a booking?",
        answer: "Click \"Add Booking\" from your dashboard or bookings page. Select the customer (or create a new one), choose the service, pick the date and time, enter the number of guests, and confirm. The booking is instantly added to your calendar and visible to your entire team."
      },
      {
        question: "Can Panlit prevent double-bookings?",
        answer: "Yes! Panlit's unified calendar shows all bookings in real-time across your entire team. When you create a booking, the system checks availability and prevents conflicts automatically. This eliminates the risk of double-bookings that often happen with spreadsheets or separate calendars."
      },
      {
        question: "How do I track payment status?",
        answer: "Every booking has a payment status field where you can mark it as \"Pending,\" \"Paid,\" or \"Partially Paid.\" You can see payment status at a glance in your bookings list and filter by payment status to see what's outstanding."
      },
      {
        question: "Can I send booking confirmations automatically?",
        answer: "Currently, you can send booking confirmations with one click. Fully automated confirmations are coming soon in our upcoming updates."
      },
      {
        question: "What if I need to cancel or modify a booking?",
        answer: "Simply open the booking details and click \"Edit Booking\" to modify any information, or \"Cancel Booking\" to cancel it. The system will update the calendar immediately and all team members will see the change in real-time."
      },
      {
        question: "Can I manage multiple tours or experiences?",
        answer: "Yes! You can create unlimited services/products with different pricing tiers. Each service can have its own duration, capacity, and pricing structure."
      },
      {
        question: "How do I handle group bookings with different prices?",
        answer: "Panlit supports tiered pricing. You can set different prices for 1 person, 2 people, 3-5 people, 6+ people, etc. The system automatically calculates the correct price based on the number of guests."
      },
      {
        question: "Can I see all bookings for a specific customer?",
        answer: "Yes! Open any customer's profile to see their complete booking history, including past, current, and upcoming bookings."
      },
      {
        question: "Can I still accept walk-in bookings with Panlit?",
        answer: "Absolutely! Walk-ins are logged just like any other booking—takes 30 seconds. Panlit simply makes it easier to check availability, track payment, and ensure the booking doesn't conflict with anything else. Your spontaneous business stays spontaneous; it's just better organised."
      }
    ]
  },
  {
    category: "Customer Management",
    faqs: [
      {
        question: "How do I add a new customer?",
        answer: "Click \"Add Customer\" from the customers page or whilst creating a booking. Enter their name, email, phone number, and country. You can also add notes, preferences, and dietary requirements."
      },
      {
        question: "Can I track customer preferences?",
        answer: "Yes! Each customer profile has a notes section where you can track preferences, dietary restrictions, allergies, special requests, or any other important information. This helps you deliver personalised experiences."
      },
      {
        question: "Can I see how much each customer has spent?",
        answer: "Yes! Customer profiles show total spend across all bookings, making it easy to identify your most valuable customers."
      },
      {
        question: "How do I export my customer data?",
        answer: "Click \"Export CSV\" from the customers page to download all your customer data. You can also import this data back if needed."
      },
      {
        question: "Can I search for specific customers?",
        answer: "Yes! Use the search bar on the customers page to find any customer by name, email, or phone number instantly."
      },
      {
        question: "I'm worried about losing the personal touch if I use software.",
        answer: "Panlit actually enhances personalisation! Instead of forgetting customer preferences or searching through old messages, you have their dietary restrictions, special requests, and past booking history at your fingertips. When a repeat customer calls, you can say \"Welcome back! Still vegetarian?\" or \"Should we book the same guide you loved last time?\" Software doesn't replace warmth—it helps you remember the details that make customers feel valued."
      }
    ]
  },
  {
    category: "Calendar Management",
    faqs: [
      {
        question: "How does the calendar work?",
        answer: "Panlit's calendar shows all bookings across your entire operation in one unified view. You can switch between day, week, and month views. All team members see the same calendar in real-time, ensuring perfect coordination."
      },
      {
        question: "Can I filter the calendar by service or status?",
        answer: "Yes! Use the filters at the top of the calendar page to view specific services, booking statuses, or payment statuses. This helps you focus on what matters most."
      },
      {
        question: "Does the calendar sync with Google Calendar or Outlook?",
        answer: "Not yet, but calendar sync is on our roadmap and coming soon. For now, all bookings are managed within Panlit's unified calendar."
      },
      {
        question: "Can I block off dates when I'm unavailable?",
        answer: "This feature is coming soon! You'll be able to block dates or time slots for holidays, maintenance, or personal time."
      }
    ]
  },
  {
    category: "Analytics and Reporting",
    faqs: [
      {
        question: "What kind of reports can I see?",
        answer: "Panlit's dashboard shows your total earnings, customer count, total bookings, earnings trends over time, and bookings trends. You can filter by different time periods (week, month, 6 months) to see how your business is performing."
      },
      {
        question: "How do I track revenue over time?",
        answer: "The earnings trend chart on your dashboard shows revenue patterns over your selected time period. This helps you spot seasonal trends and plan accordingly."
      },
      {
        question: "Does Panlit integrate with accounting software?",
        answer: "Not yet, but integrations with accounting platforms like Xero and QuickBooks are on our roadmap."
      }
    ]
  },
  {
    category: "Pricing and Billing",
    faqs: [
      {
        question: "How much does Panlit cost?",
        answer: "We charge a 0.5% fee on all bookings completed through Panlit. These fees are capped depending on the currency you use to accept bookings. Fees accumulate over a 30-day rolling period, an invoice is sent to your business at the end of each billing period, and you have 7 days to pay. Please refer to our pricing page for currency-specific fee caps."
      },
      {
        question: "What's included in the early access pricing?",
        answer: "Everything! All current features including unlimited bookings, one user account, customer management, calendar, analytics, and all upcoming features as we release them."
      },
      {
        question: "Will my price increase later?",
        answer: "No! If you join during early access at $10/month, that price is locked in for a year. Even as we add new features and raise prices for new customers, your rate stays the same."
      },
      {
        question: "Are there any hidden fees?",
        answer: "No hidden fees! The monthly subscription covers everything. No setup fees, no per-booking charges, no surprise costs."
      },
      {
        question: "Can I cancel anytime?",
        answer: "Yes! There are no contracts or commitments. Cancel anytime and you won't be charged again. You can even export all your data before leaving."
      },
      {
        question: "Do you offer discounts for annual payments?",
        answer: "Yes, we offer a 20% discount on annual payments."
      }
    ]
  },
  {
    category: "Technical and Security",
    faqs: [
      {
        question: "Do you comply with GDPR?",
        answer: "Yes! Panlit is fully GDPR compliant. We take data protection seriously and follow all international data privacy regulations."
      },
      {
        question: "Can I delete customer data if they request it?",
        answer: "Yes! You have full control over customer data and can delete any customer record at any time to comply with data protection requests."
      },
      {
        question: "Is there a mobile app?",
        answer: "Not yet, but a mobile app is on our roadmap! For now, Panlit works great on mobile browsers, so you can access it from any device."
      },
      {
        question: "Does Panlit work offline?",
        answer: "Panlit requires an internet connection to sync data across your team in real-time. However, we're exploring offline capabilities for future releases."
      },
      {
        question: "I don't want to be glued to a computer all day. Is Panlit still useful?",
        answer: "Panlit works on phones and tablets, not just computers. Check availability on your phone during a call, log bookings from your tablet whilst on-site, review tomorrow's schedule on your mobile before bed. You're not tied to a desk—you're just better organised wherever you are."
      }
    ]
  },
  {
    category: "Support and Help",
    faqs: [
      {
        question: "How do I get help if I'm stuck?",
        answer: "You have three options: (1) Browse our Help Center for articles and guides, (2) Check our Resources section for detailed documentation, or (3) Contact our support team directly via email at support@panlit.com."
      },
      {
        question: "What kind of support do you offer?",
        answer: "We typically respond within 24 hours on business days. For urgent issues, we prioritise responses and often reply much faster."
      },
      {
        question: "Do you offer onboarding help?",
        answer: "Yes! Whilst Panlit is designed to be intuitive, we're happy to help you get started. Contact us to schedule a brief onboarding call if you need guidance."
      },
      {
        question: "Can you help me migrate data from my old system?",
        answer: "Yes! We can assist with importing data from spreadsheets or other systems. Contact our support team and we'll guide you through the process."
      },
      {
        question: "Do you offer training for my team?",
        answer: "Whilst Panlit is simple enough that most teams don't need training, we're happy to provide guidance. Contact us to arrange a team walkthrough if needed."
      }
    ]
  },
  {
    category: "Features and Roadmap",
    faqs: [
      {
        question: "What features are coming soon?",
        answer: "We're building: (1) AI-powered conversational booking and customer support, (2) Automated email and WhatsApp follow-ups, (3) Mobile app, (4) Email marketing integration, and (5) Multi-team accounts with individual sub-accounts."
      },
      {
        question: "Can I request new features?",
        answer: "Absolutely! We're building Panlit with our users, not just for them. Contact us with feature requests and they'll be added to our roadmap. Early access members have direct influence on what we build next."
      },
      {
        question: "Will you add integrations with other tools?",
        answer: "Yes! Integration with popular tools is a priority. Check our integrations page for the latest list of supported platforms."
      }
    ]
  }
];

interface ExpandedState {
  [key: string]: boolean;
}

export default function FAQs() {
  const [expandedItems, setExpandedItems] = useState<ExpandedState>({});
  const [expandedCategories, setExpandedCategories] = useState<{[key: string]: boolean}>({});

  const toggleItem = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-slate-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                Got questions? This way.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Browse our comprehensive FAQ covering getting started, bookings, customers, pricing, and more. Can't find what you need? Contact <a href="mailto:support@panlit.com" className="text-panlit-orange font-semibold hover:underline">support@panlit.com</a> and we'll help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQs by Category */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="space-y-6">
              {faqData.map((categoryData, categoryIdx) => (
                <motion.div 
                  key={categoryData.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIdx * 0.05 }}
                  className="border-2 border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-colors"
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(categoryData.category)}
                    className="w-full px-6 py-4 md:px-8 md:py-6 bg-gradient-to-r from-panlit-orange/10 to-orange-50 hover:from-panlit-orange/20 hover:to-orange-100 flex items-center justify-between transition-colors"
                  >
                    <h2 className="text-lg md:text-xl font-bold font-heading text-slate-900 text-left">
                      {categoryData.category}
                    </h2>
                    <ChevronDown 
                      className={`w-6 h-6 text-panlit-orange transition-transform ${
                        expandedCategories[categoryData.category] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Category Content */}
                  {expandedCategories[categoryData.category] && (
                    <div className="divide-y divide-slate-100">
                      {categoryData.faqs.map((faq, faqIdx) => {
                        const itemId = `${categoryData.category}-${faqIdx}`;
                        const isExpanded = expandedItems[itemId];

                        return (
                          <div key={itemId} className="px-6 md:px-8 py-4 md:py-5">
                            <button
                              onClick={() => toggleItem(itemId)}
                              className="w-full text-left flex items-start justify-between gap-4 group"
                            >
                              <h3 className="font-semibold text-slate-900 group-hover:text-panlit-orange transition-colors text-base md:text-lg leading-relaxed">
                                {faq.question}
                              </h3>
                              <ChevronDown 
                                className={`w-5 h-5 text-slate-400 group-hover:text-panlit-orange flex-shrink-0 mt-1 transition-all ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              />
                            </button>

                            {isExpanded && (
                              <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.2 }}
                                className="mt-4 text-slate-600 leading-relaxed text-base"
                              >
                                {faq.answer}
                              </motion.div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 p-8 md:p-12 bg-slate-50 rounded-xl text-center border border-slate-200"
            >
              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-3">
                Didn't find your answer?
              </h3>
              <p className="text-slate-600 mb-6">
                Our support team is here to help. Contact us at <a href="mailto:support@panlit.com" className="text-panlit-orange font-semibold">support@panlit.com</a>
              </p>
              <Button className="bg-panlit-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg">
                Contact Support
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
