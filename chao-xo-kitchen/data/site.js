/*
 * Chào XO Kitchen: everything the page shows lives here.
 * To update the site, edit this file only. Every fact needs a source in client-spec.md.
 *
 * Rules:
 * - Unknown values are null. The page shows a [placeholder] for them instead of guessing.
 * - hidePrice: true hides the price slot (for dishes not on their price list).
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
    subhead: "**Chào XO Kitchen**, serving **phở, birria dumplings** and **house drinks** on E Plaza Blvd in **National City**."
  },

  rating: { source: "Google", value: 4.6, count: 412 },

  menu: {
    // Items with an image get a photo card; items without one get a compact row.
    // Source: chaoxo.com online ordering (Square), pulled 2026-09-29 with Kevin's OK.
    categories: [
      {
        name: "Phở",
        items: [
          { name: "Birria Phở", price: 18, description: "Tender birria beef broth, rich and savory, combined with traditional Vietnamese phở noodles, fresh vegetables, and herbs", image: "images/birria-pho.webp", alt: "Bowl of birria phở with shredded beef, rice noodles and green onion in a red broth" },
          { name: "Double Rib Phở", price: 18.5, description: "12 hours simmered beef broth, rib bone, rice noodle, onion, cilantro", image: "images/menu/double-rib-pho.webp", alt: "Double Rib Phở with two beef rib bones, herbs and rice noodles" },
          { name: "Chicken Phở", price: 15, description: "Chicken meat, rice noodles, onion mix" },
          { name: "Shrimp Phở", price: 17, description: "Shrimp, rice noodles, onion mix" },
          { name: "Pork Belly Phở", price: 15, description: "Pork belly, rice noodles, onion mix" },
          { name: "Ribeye Raresteak Pho", price: 15.75, description: "Ribeye Raresteak Phở" },
          { name: "Brisket Phở", price: 15.75, description: "4-hour-braised brisket, tender with a slight chew" },
          { name: "Ribeye & Brisket Pho", price: 16.5, description: "Ribeye Raresteak & Brisket Phở" },
          { name: "COMBO Pho (ribeye, brisket, tripe, meatball)", price: 17.25, description: "Ribeye, brisket, tripe, meatball" },
          { name: "Anthony Bourdain Pho", price: 19.75, description: "Aka Garlic Ribeye Phở. Wok-Seared Ribeye with scallions, red onions & garlic. Smoky, bold, and packed with flavor." },
          { name: "Meatball Phở", price: 15, description: "Phở with meatball" },
          { name: "Ribbone & Ribeye Phở", price: 18, description: "12 hours simmered beef broth, sliced ribeye, ribbone, rice noodles, onion mix" },
          { name: "Vegetarian Phở", price: 16, description: "Tofu, bok choy, green bean, eggplants, veggie stock, rice noodles, onion mix" }
        ]
      },
      {
        name: "Rice",
        items: [
          { name: "Lomo Saltado", price: null, hidePrice: true, description: "Beef stir-fried with peppers and onions, served with fries, rice and green sauce.", image: "images/lomo-saltado.webp", alt: "Beef stir-fry with peppers and onions, fries, white rice and green sauce" },
          { name: "Kare Curry", price: 21, description: "A classic Filipino dish of pork belly stewed in a rich, savory peanut sauce. Served with steamed rice and bagoong (shrimp paste)", image: "images/menu/kare-curry.webp", alt: "Kare curry with pork belly in a peanut sauce, topped with greens" },
          { name: "Ribeye Mushroom Rice", price: 18, description: "Sliced ribeye, white mushroom, gravy, jasmine rice, served with house green sauce", image: "images/menu/ribeye-mushroom-rice.webp", alt: "Sliced ribeye and mushrooms in gravy with a dome of jasmine rice and green sauce" },
          { name: "Fried Rice", price: 15, description: "Aromatic jasmine rice wok-fried with sweet and tangy tamarind sauce, fresh vegetables, and with chicken" }
        ]
      },
      {
        name: "Noodles",
        items: [
          { name: "Pad Thai", price: 16, description: "Tamarindo sauce, rice noodles, bean sprouts, egg, green onions, peanuts", image: "images/menu/pad-thai.webp", alt: "Pad thai with shrimp, bean sprouts, green onion and lime" },
          { name: "Tomyum Pasta", price: 19, description: "Made with fresh shrimp, mushrooms, and vegetables, this dish is cooked in a creamy Tom Yum sauce that is both tangy and spicy", image: "images/menu/tomyum-pasta.webp", alt: "Tomyum pasta with shrimp served in a sizzling skillet" },
          { name: "Garlic Noodles", price: 15, description: "Saute spaghetti noodles, garlic butter, cotija, parsley flake, served with house green sauce", image: "images/menu/garlic-noodles.webp", alt: "Garlic butter noodles topped with a seared protein and herbs" }
        ]
      },
      {
        name: "Appetizers",
        items: [
          { name: "Spicy Birria Dumplings", price: 14, description: "Chicken veggie dumplings, red cabbage, scallions, birria consome, cotija", image: "images/birria-dumplings.webp", alt: "Birria dumplings in consommé topped with purple cabbage and onion" },
          { name: "Salt & Pepper Shrimp", price: 15, description: "Tender and buttery with a crisp salt and pepper crust", image: "images/menu/salt-and-pepper-shrimp.webp", alt: "Salt and pepper shrimp with sliced jalapeños" },
          { name: "Coconut Seafood Ceviche", price: 14, description: "Shrimps, white fish, scallops, coconut milk, lime juice, basil oil, chili oil, pico de gallo, served with house chips", image: "images/menu/coconut-seafood-ceviche.webp", alt: "Coconut seafood ceviche with pico de gallo and an edible orchid" },
          { name: "Spring Rolls", price: 11, description: "Green leaf, carrot, vermicelli, rice paper, peanut sauce", image: "images/menu/spring-rolls.webp", alt: "Fresh spring rolls with peanut dipping sauce" },
          { name: "Birria Truffle Fries", price: 16, description: "Crispy fries, chuck roast, birria consome, truffle bechamel, parsley, onion mix, cotija", image: "images/menu/birria-truffle-fries.webp", alt: "Birria truffle fries topped with shredded beef, onion and herbs" },
          { name: "Crab Guacamole", price: 17, description: "Creamy avocado, crab meat, lime, cilantro, diced tomatoes, cotija, chili oil, served with house chips", image: "images/menu/crab-guacamole.webp", alt: "Crab guacamole topped with cotija and chili oil" },
          { name: "Nuggets & Fries", price: 9, description: null },
          { name: "Truffle Aioli Fries", price: 14, description: "Skinny Fries with Truffle Aioli sauce" },
          { name: "Parmesan Fries", price: 11, description: "Skinny Fries with Parmesan cheese" },
          { name: "Crispy Calamari", price: 15, description: "Salt & Pepper, ranch" },
          { name: "Regular Fries", price: 9, description: "Skinny Fries" },
          { name: "Egg Rolls", price: 11, description: "Wonton skin, pork, carrot, mushroom, glass noodle" },
          { name: "Fried Chicken Wings", price: 13, description: "Crispy battered wings, cotija cheese" },
          { name: "Crab Ragoon", price: 11, description: "Imitation crab meat, cream cheese, wonton skin, served with sweet and sour sauce" },
          { name: "Mango Salad", price: 14, description: null },
          { name: "Popcorn Chicken", price: 8, description: "Small, bite sized chunks of boneless chicken that are breaded or battered and deep-fried until golden and crispy." }
        ]
      },
      {
        name: "Drinks",
        items: [
          { name: "Ube Coffee", price: 7, description: "Vietnamese coffee with Ube foam", image: "images/purple-drinks.webp", alt: "Two iced purple ube drinks in Chào XO cups" },
          { name: "Mango Fruit Drinks", price: null, hidePrice: true, description: "Fresh fruit drinks loaded with mango.", image: "images/fruit-drinks.webp", alt: "Two iced fruit drinks with mango, one with a sugar rim and strawberry" },
          { name: "Mango Calamansi", price: 7, description: "Mango Minty Calamansi", image: "images/menu/mango-calamansi.webp", alt: "Mango calamansi drink with mint and a calamansi slice" },
          { name: "Matcha Latte", price: 7, description: "Our Matcha Latte is a creamy, energizing blend of premium Japanese matcha and velvety milk, lightly sweetened for the perfect balance.", image: "images/menu/matcha-latte.webp", alt: "Iced matcha latte with layered milk and green matcha" },
          { name: "Pandan Horchata", price: 7, description: "Our Pandan Horchata blends the creamy, cinnamon-kissed flavor of traditional horchata with the fragrant, nutty sweetness of pandan.", image: "images/menu/pandan-horchata.webp", alt: "Iced green pandan horchata next to a mango drink on a marble table" },
          { name: "Pineapple Tamarindo", price: 6, description: "Pineapple Tamarindo with Tajin", image: "images/menu/pineapple-tamarindo.webp", alt: "Pineapple tamarindo in a Chào XO cup with a chili-salt rim" },
          { name: "Black Tea (sweetened)", price: 5, description: "Black Tea sweetened" },
          { name: "Vietnamese Iced Coffee", price: 6, description: "Strong black coffee brewed with a metal drip filter, mixed with sweetened condensed milk and served over ice." },
          { name: "Banana Coffee", price: 8, description: "Vietnamese Coffee with Banana foam" },
          { name: "Green Iced Tea (unsweetened)", price: 6, description: "Jasmine green iced tea freshly brewed" },
          { name: "Minty Calamansi", price: 6, description: "Calamansi juice infused with mint leaves" },
          { name: "Pina Colada", price: 9, description: null },
          { name: "SODA", price: 3, description: null },
          { name: "Cloud Vietnamese Coffee", price: 7, description: "Vietnamese Coffee with extra milk to soften the bitterness" },
          { name: "Hot Tea", price: 5, description: null },
          { name: "Strawberry Foam Coffee", price: 7, description: "Vietnamese coffee with strawberry foam" },
          { name: "Lychee Green Iced Tea", price: 7, description: null },
          { name: "Lychee Lemonade", price: 6, description: "Lemonade with Lychee flavor" },
          { name: "Peach Tamarindo", price: 6, description: "Peach Tamarindo drink with Tajin" },
          { name: "Egg Coffee", price: 7, description: "Vietnamese with egg coffee" },
          { name: "Banana Matcha", price: 8, description: "Matcha with banana foam" },
          { name: "Ube Horchata", price: 7, description: "Horchata fusion with ube" },
          { name: "Ice Pumpkin Espresso", price: 7, description: null }
        ]
      },
      {
        name: "Desserts",
        items: [
          { name: "Pandan Halo", price: 10, description: "A refreshing mix jellies, fruits, topped with pandan, evaporated milk, ube ice cream", image: "images/dessert.webp", alt: "Pandan Halo in a coupe glass with jellies and ube ice cream topped with an edible flower" },
          { name: "Mango Sticky Rice", price: 13, description: "(seasonal) Fresh mango, sticky rice, coconut milk, peanuts", image: "images/menu/mango-sticky-rice.webp", alt: "Mango sticky rice with coconut milk and an edible orchid" },
          { name: "Chè Thái", price: 8, description: "Vietnamese fruit cocktail. Mix jellies, fruits, milk", image: "images/menu/che-thai.webp", alt: "Chè Thái, a Vietnamese fruit cocktail with jellies in milk" },
          { name: "Mango Sago", price: 7, description: "A refreshing dessert made with ripe mangoes blended, coconut milk, mango jellies and small tapioca pearls" },
          { name: "Fried Banana Sticky Rice", price: 9.5, description: "Fried battered banana, coconut sauce, sticky rice, salted sesame" },
          { name: "Ube Ice Cream", price: 5, description: null }
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
    text: "Planning a party, celebration, or something special? Chào XO does catering, food trays and custom event menus. Party trays include Spring Rolls, Egg Rolls, Coconut Ceviche, Chicken Wings, Crab Ragoon, Pad Thai, Garlic Noodles, Ribeye Mushroom Rice, Tomyum Pasta, Kare Curry, Fried Rice and 'Saltado' Shaken."
  },

  analytics: {
    siteKey: null, // [SITE_KEY] from the team hub
    hubUrl: null,  // [HUB_URL]
    cfToken: null  // [CF_TOKEN] Cloudflare Web Analytics
  }
};
