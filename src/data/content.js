// Central place for landing-page copy & content.
// Swap placeholder strings/images here without touching component markup.

export const nav = {
  brand: "Yaap",
  announcement: {
    text: "Session 2024 — Early-bird registration now open",
    ctaLabel: "Learn more",
  },
  links: [
    { label: "Features", href: "#features" },
    { label: "Accounts", href: "#accounts" },
    { label: "Company", href: "#company" },
    { label: "Insight", href: "#insight" },
  ],
};

export const hero = {
  eyebrow: "Try it now!",
  headline: ["Change the way you use your", "money"],
  body: "From your everyday spending, to planning for your future with savings and investments, Yaap helps you get more from your money.",
  ctaLabel: "Get Started Now",
  rating: { score: "5.0", count: "120+", label: "reviews" },
  stats: [
    { label: "Currencies", value: "56+" },
    { label: "Users Active", value: "" },
    { label: "Saving", value: "$196,000" },
  ],
};

export const logos = ["Loom", "HubSpot", "OpenAI", "Raycast", "Zenefits"];

export const about = {
  eyebrow: "About us",
  headline: "One app for all your money things",
  body: "Remove all the friction that stands in the way of your money goals.",
  cards: [
    {
      title: "Grow savings faster",
      value: "$12,000",
      variant: "dark",
    },
    {
      title: "Send across the global",
      variant: "light",
      transfers: [
        { amount: "$25,000", label: "Sent bro!" },
        { amount: "$40,000", label: "Thanks Chris!" },
      ],
    },
  ],
};

export const values = {
  eyebrow: "Values",
  headline: "Make your spend, Well-spent",
  body: "Manages a diversified group of specialized private credit brands with efficient tech-enabled processes.",
  cards: [
    {
      title: "Transparency",
      body: "A departure from the industry norm of ambiguity, Yaap, as a public and finest company.",
      variant: "light",
    },
    {
      title: "Creative expansion",
      body: "Yaap proprietary fintech platform helps our subsidiaries locate and manage investments.",
      variant: "light",
    },
    {
      title: "Private Credit Investments",
      body: "We provide access to unique private credit investments, a rare but valuable part of a sound investment portfolio.",
      variant: "cream",
    },
  ],
};

export const statsBanner = {
  eyebrow: "Numbers",
  headline: "Market and build the solutions",
  stats: [
    { value: "$14B", label: "Funds and syndicates" },
    { value: "23k+", label: "Raised by active startups" },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  headline: "Frequently asked questions",
  items: [
    {
      q: "How sending a bank transfer",
      a: "Go to Transfers, choose the recipient's bank account, enter the amount and confirm with your PIN or biometric ID. Transfers typically land within one business day.",
    },
    {
      q: "What is the scheduled payments feature?",
      a: "The scheduled payments feature allows you to manage all of your subscriptions or recurring payments in one place. This way, you can view details for every payment, which include the amount, frequency, payment dates etc.",
      defaultOpen: true,
    },
    {
      q: "How can I reactivate a terminated card?",
      a: "Open Cards in the app, select the terminated card, and tap Reactivate. If the card was closed for security reasons, you'll be issued a new card number instead.",
    },
    {
      q: "How about with a refund?",
      a: "Refunds are returned to your original payment method and usually appear within 5–10 business days, depending on your bank.",
    },
    {
      q: "How can add money to my account?",
      a: "You can top up via bank transfer, debit card, or by linking an external account in Settings → Add Money.",
    },
  ],
};

export const ctaBanner = {
  headline: ["Change the way you", "use your", "money"],
  body: "Join over million people who choose Yaap for fast and secure future banking.",
  ctaLabel: "Get Started Now",
};

export const footer = {
  brand: "Yaap",
  columns: [
    {
      title: "Account",
      links: ["Saving", "Join Accounts", "Crypto", "Freelance", "Commodities"],
    },
    {
      title: "Help",
      links: ["Customer Help", "Community", "Blog", "Payment"],
    },
    {
      title: "Finance",
      links: ["Cards", "Linked Accounts", "Contact", "Sustainability", "Career"],
    },
    {
      title: "Company",
      links: ["About Us", "Contact", "Sustainability", "Career"],
    },
  ],
  address: ["181 Bay Street, Bay Wellington", "Tower, Suite 2, Toronto,", "Ontario M5J 2T3"],
  legalLinks: ["Privacy Policy", "Terms of Use", "Disclosure"],
  copyright: "© Yaap Finance Ltd 2026",
};
