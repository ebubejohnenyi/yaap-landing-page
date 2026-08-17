// Central place for landing-page copy & content.
// Swap placeholder strings/images here without touching component markup.

export const nav = {
  brand: "Yaap",
  announcement: {
    text: "Your food concierge is coming to WhatsApp.",
    ctaLabel: "Join the waitlist",
  },
  links: [
    { label: "How it works", href: "#how-it-works" },
    { label: "What Yaap can do", href: "#what-yaap-can-do" },
    { label: "For vendors & riders", href: "#for-vendors-riders" },
    { label: "About", href: "#about" },
  ],
  ctaLabel: "Try Yaap",
};

export const hero = {
  eyebrow: "Your personal food concierge",
  headline: ["Tell Yaap", "what you want to eat."],
  tagline: "Ask Yaap. Get it sorted.",
  body: "Tell Yaap what you're craving, what you want to spend, and where you're going. We'll help you find it and get it ordered.",
  ctaLabel: "Chat with Yaap",
  secondaryCtaLabel: "See how it works",
  chat: [
    { from: "user", text: "hey yaap, i need lunch for 3 people around lekki" },
    {
      from: "yaap",
      text: "Got you. I found 4 options nearby.",
      options: ["Chicken & chips", "Jollof + chicken", "Shawarma combo", "Rice bowl"],
      footer: "Want me to show you the best ones?",
    },
    { from: "user", text: "keep it under ₦4k please" },
    { from: "yaap", text: "On it. Here's what fits ₦4k, delivery included." },
  ],
};

export const problem = {
  eyebrow: "Sound familiar?",
  headline: "Ordering food shouldn't feel like a part-time job.",
  steps: [
    "Download another app",
    "Create an account",
    "Fill out forms",
    "Scroll through 40 restaurants",
    "Get to checkout",
    "Realize it's over budget",
  ],
  resolutionEyebrow: "No phone storage wahala.",
  resolutionHeadline: "No new app. No complicated menus. Just WhatsApp.",
  resolutionBody: "Tell Yaap what you're craving, and your food concierge takes it from there.",
};

export const whatYaapCanDo = {
  eyebrow: "Meet Yaap",
  headline: "Food ordering shouldn't feel like a chore.",
  body: "Ask Yaap what you're craving and what you want to spend. Yaap helps you find it, order it, and get it delivered.",
  cards: [
    {
      title: "Order food",
      body: "Tell Yaap what you're craving. It finds nearby options in seconds.",
      chat: { user: "yaap, order suya for two", yaap: "Found 3 spots nearby. Want to see them?" },
    },
    {
      title: "Order with your budget",
      body: "Tell Yaap what you want to spend. It only shows options that fit.",
      chat: { user: "jollof rice for 2, under ₦3k", yaap: "Got it — here's what fits ₦3k, delivery included." },
    },
    {
      title: "Send a voice note",
      body: "No time to type? Tell Yaap what you want, the way you'd tell a friend.",
      chat: { userVoice: "0:14", yaap: "Got it — lunch for 2 around Yaba, on it." },
    },
    {
      title: "Order again",
      body: "Craving the same thing again? Yaap remembers what you like.",
      chat: { user: "get me the usual", yaap: "Coming right up — jollof rice from Mama Put, like last time?" },
    },
  ],
};

export const howItWorks = {
  eyebrow: "How it works",
  headline: "Four steps. One chat.",
  steps: [
    { number: "1", title: "Ask Yaap", body: "Tell it what you're craving." },
    { number: "2", title: "Yaap finds it", body: "It searches for options that fit what you want to spend." },
    { number: "3", title: "You choose", body: "Review and confirm what you want." },
    { number: "4", title: "It's sorted", body: "Yaap helps move the order forward." },
  ],
};

export const budgetFirst = {
  eyebrow: "Budget-first",
  headline: "Start with your budget. Not the menu.",
  body: "Tell Yaap what you want and what you want to spend. It finds options that actually fit — delivery included.",
  chat: [
    { from: "user", text: "yaap, i need lunch for 3. amala + ewedu. ₦4k max." },
    { from: "yaap", text: "Got you. I'm looking for options around ₦4k, including delivery." },
  ],
};

export const vendorsRiders = {
  eyebrow: "For vendors & riders",
  headline: "The marketplace behind the concierge.",
  body: "Every request that comes through Yaap needs someone to fulfil it. Vendors list what they sell. Riders pick up and deliver. Yaap connects both to real, budget-matched demand.",
  roles: [
    {
      title: "For vendors",
      tagline: "More orders. Less marketplace noise.",
      body: "Get orders that already match what a customer wants and can afford — no browsing, no haggling.",
    },
    {
      title: "For riders",
      tagline: "More deliveries. More predictable requests.",
      body: "Get delivery requests as they come in, with clear pickup and drop-off details from the start.",
    },
  ],
  gettingStarted: {
    eyebrow: "Getting started",
    headline: "Get set up in a few minutes.",
    steps: [
      { number: "1", text: "Open the Yaap app link on your phone's browser." },
      { number: "2", text: "Tap \"Add to Home Screen\" (iPhone) or \"Install app\" (Android)." },
      { number: "3", text: "Open Yaap from your home screen, just like any other app." },
      { number: "4", text: "Sign up as a vendor or rider and start getting requests." },
    ],
    ctaLabel: "Open the Yaap app",
    ctaHref: "https://yaap-app.vercel.app/",
  },
};

// Held back until Yaap expands beyond food (groceries, pharmacy, errands, etc.) —
// bring this section back into App.jsx once that broader concierge story is real.
export const brandStatement = {
  eyebrow: "The Yaap way",
  headline: "Life is busy enough. Let Yaap handle the little things.",
  body: "From dinner tonight to groceries for the week, Yaap is there when you need something done.",
};

export const faq = {
  eyebrow: "FAQ",
  headline: "Frequently asked questions",
  items: [
    {
      q: "What is Yaap?",
      a: "Yaap is your personal food concierge on WhatsApp. Tell Yaap what you're craving, what you want to spend, and where you need it delivered. Yaap helps you find a suitable option and place your order.",
      defaultOpen: true,
    },
    {
      q: "Do I need to download another app?",
      a: "No. Yaap lives directly in WhatsApp, so you can chat with it just like you chat with a friend.",
    },
    {
      q: "What can I ask Yaap to do?",
      a: "Right now, Yaap helps you order food — tell it what you're craving, your budget, and where you are. We're building out more ways Yaap can help beyond food.",
    },
    {
      q: "How does ordering work?",
      a: "Tell Yaap what you're craving and what you want to spend. Yaap finds options that fit, confirms the details with you, and helps get the order moving.",
    },
    {
      q: "Can Yaap make decisions for me?",
      a: "Yaap can recommend options and help you compare them, but you're always in control of what you choose and order.",
    },
    {
      q: "Where does Yaap work?",
      a: "Yaap currently operates in Lagos, starting with the neighborhoods and restaurants people order from most.",
    },
  ],
};

export const ctaBanner = {
  eyebrow: "Hungry?",
  headline: ["What's for dinner?", "Ask Yaap."],
  body: "No new app, no endless scrolling. Message Yaap on WhatsApp and let your food concierge help you find something good — within budget.",
  ctaLabel: "Chat with Yaap",
};

export const footer = {
  brand: "Yaap",
  columns: [
    {
      title: "Product",
      links: [
        { label: "What Yaap can do", href: "#what-yaap-can-do" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Chat with Yaap", href: "#" },
        { label: "For vendors & riders", href: "#for-vendors-riders" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "About Yaap", href: "#about" },
        { label: "FAQs", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Use", href: "#" },
      ],
    },
  ],
  copyright: "© 2026 Yaap. All rights reserved.",
};
