/*
 * Chào XO Kitchen: everything the page shows lives here.
 * To update the site, edit this file only. Every fact needs a source in client-spec.md.
 *
 * Rules:
 * - Unknown values are null. The page shows a [placeholder] for them instead of guessing.
 * - todo is optional: a note shown as a [placeholder] until we know the real detail.
 * - price is a number in dollars (12.5 shows as $12.50), or null if we don't know it.
 * - hours use 24-hour "HH:MM". A day set to null means "unknown"; "closed" means closed.
 *
 * This is a .js file (not .json) so the page also works when opened straight from a folder.
 */
window.SITE = {
  demo: true,

  business: {
    name: "Chào XO Kitchen",
    cuisine: "Asian fusion",
    city: "National City",
    tagline: "Asian comfort food, made with love.",
    priceRange: "$10–20",
    address: {
      street: "1420 E Plaza Blvd Ste D-05",
      city: "National City",
      region: "CA",
      postalCode: "91950"
    },
    // DEMO: fake 555 number. Replace with the real one at launch.
    phone: { display: "(619) 555-0123", tel: "+16195550123" },
    timeZone: "America/Los_Angeles"
  },

  hours: {
    mon: { open: "11:00", close: "20:00" },
    tue: { open: "11:00", close: "20:00" },
    wed: "closed",
    thu: { open: "11:00", close: "20:00" },
    fri: { open: "11:00", close: "20:00" },
    sat: { open: "11:00", close: "20:00" },
    sun: null
  },

  ordering: {
    orderUrl: "https://www.chaoxo.com/",
    apps: [
      { name: "DoorDash", url: "https://www.doordash.com/store/chao-xo-national-city-27736345/" }
    ]
  },

  hero: {
    image: "images/dining-room.webp",
    alt: "Chào XO Kitchen dining room with wooden booths, hanging plants, woven pendant lights and red bar stools",
    headline: "Asian Comfort Food in National City",
    // Words wrapped in ** show in bold.
    subhead: "**Chào XO Kitchen**, serving **pho, birria dumplings** and **house drinks** on E Plaza Blvd in **National City**."
  },

  rating: { source: "Google", value: 4.6, count: 412 },

  menu: {
    // Items with an image get a photo card; items without one get a compact row.
    categories: [
      {
        name: "Pho & noodles",
        items: [
          { name: "Birria Pho", price: null, description: "Pho meets birria: shredded beef and rice noodles in a rich red broth.", image: "images/birria-pho.webp", alt: "Bowl of birria pho with shredded beef, rice noodles and green onion in a red broth" },
          { name: "Short Rib Pho", price: null, description: null },
          { name: "Tomyum Pasta", price: null, description: null }
        ]
      },
      {
        name: "Plates & curry",
        items: [
          { name: "Lomo Saltado", price: null, description: "Beef stir-fried with peppers and onions, served with fries, rice and green sauce.", image: "images/lomo-saltado.webp", alt: "Beef stir-fry with peppers and onions, fries, white rice and green sauce" },
          { name: "Kare Curry", price: null, description: null }
        ]
      },
      {
        name: "Small bites",
        items: [
          { name: "Birria Dumplings", price: null, description: "Crispy dumplings in consommé, topped with cabbage, onion and chili.", image: "images/birria-dumplings.webp", alt: "Birria dumplings in consommé topped with purple cabbage and onion" }
        ]
      },
      {
        name: "Drinks",
        items: [
          { name: "Ube drinks", price: null, description: "Including their house-made ube coffee.", image: "images/purple-drinks.webp", alt: "Two iced purple drinks in Chào XO cups" },
          { name: "Fruit drinks", price: null, description: null, todo: "[Drink names]", image: "images/fruit-drinks.webp", alt: "Two iced fruit drinks with mango, one with a sugar rim and strawberry" },
          { name: "Pandan Horchata", price: null, description: null }
        ]
      },
      {
        name: "Dessert",
        items: [
          { name: "Dessert", price: null, description: null, todo: "[Dessert name]", image: "images/dessert.webp", alt: "Dessert in a coupe glass with purple ice cream and an edible flower" }
        ]
      }
    ],
    fullMenuUrl: "https://www.chaoxo.com/"
  },

  reviews: [
    {
      name: "Mireya M.",
      stars: 5,
      source: "Google",
      text: "First time here. The food was amazing. The service was really good too and fast! I was surprised. … Birria dumplings were perfect and spicy!! The dessert was out of this world. Definitely coming again"
    },
    {
      name: "Kristina B.",
      stars: 5,
      source: "Google",
      text: "Really good pho broth. And the drinks!!! Loved the drinks. Both appetizers were also tasty. Quick service. … Definitely a solid spot I want to try the other noodle dishes!"
    }
  ],

  story: {
    title: "A little love letter from our kitchen",
    // From the "About us" section of chaoxo.com, in their own words.
    paragraphs: [
      "Welcome to Chào XO, where every dish is a little love letter from our kitchen to you. Rooted in the comforting flavors of home and spiced with modern vibes, we serve up noodles, rice bowls, teas, and street food with heart.",
      "Whether you're here for a quick bite or a cozy meal, we’re all about bold flavor, good vibes, and that XO touch — hugs, kisses, and everything in between."
    ],
    tags: ["Catering available"],
    image: "images/fruit-drinks.webp",
    alt: "Two fruit drinks on a marble table in the dining room"
  },

  catering: {
    // From chaoxo.com.
    text: "Planning a party, celebration, or something special? Chào XO does catering, food trays and custom event menus."
  },

  analytics: {
    siteKey: null, // [SITE_KEY] from the team hub
    hubUrl: null,  // [HUB_URL]
    cfToken: null  // [CF_TOKEN] Cloudflare Web Analytics
  }
};
