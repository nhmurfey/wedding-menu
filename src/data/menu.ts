export interface Course {
  id: number;
  courseName: string;
  dish: {
    name: string;
    description: string;
    allergens: string[];
    image: string;
  };
  vegetarian?: {
    name: string;
    description: string;
    allergens: string[];
    image: string;
  };
  wine: {
    name: string;
    region: string;
    description: string;
    image: string;
  };
  story: string;
  pairingRationale: string;
}

export interface ScheduleEvent {
  time: string;
  title: string;
  description: string;
}

export const schedule: ScheduleEvent[] = [
  {
    time: "2:00 PM",
    title: "Ceremony",
    description: "Join us as we say our vows beneath the old oak tree.",
  },
  {
    time: "2:45 PM",
    title: "Drinks & Canapés",
    description: "Champagne and light bites on the terrace while we steal away for photos.",
  },
  {
    time: "4:30 PM",
    title: "Guests Seated",
    description: "Find your table and settle in for the evening.",
  },
  {
    time: "5:00 PM",
    title: "Dinner Service",
    description: "Five courses of food & wine, each with a story to tell.",
  },
  {
    time: "8:00 PM",
    title: "Speeches & Toasts",
    description: "Tears, laughter, and probably a bit of both.",
  },
  {
    time: "9:00 PM",
    title: "First Dance & Party",
    description: "Dancing until our feet give out.",
  },
];

export const courses: Course[] = [
  {
    id: 1,
    courseName: "Amuse-Bouche",
    dish: {
      name: "Smoked Trout Rillette on Rye Crisp",
      description:
        "Delicate smoked trout folded with crème fraîche and dill, served on house-baked rye crisps with a whisper of lemon zest.",
      allergens: ["fish", "dairy", "gluten"],
      image: "/placeholder-dish.svg",
    },
    vegetarian: {
      name: "Beetroot & Goat Cheese Tartlet",
      description:
        "Roasted baby beetroot with whipped goat cheese, candied walnuts, and a drizzle of aged balsamic on buttery shortcrust.",
      allergens: ["dairy", "gluten", "nuts"],
      image: "/placeholder-dish.svg",
    },
    wine: {
      name: "Crémant d'Alsace Brut",
      region: "Alsace, France",
      description:
        "Fine, persistent bubbles with notes of green apple, brioche, and white flowers. Crisp and celebratory.",
      image: "/placeholder-wine.svg",
    },
    story:
      "We found this little crémant at a wine shop in Strasbourg on a rainy Tuesday. The owner insisted we try it with some smoked fish he had behind the counter. We bought six bottles and drank them all that week.",
    pairingRationale:
      "The bright acidity and fine mousse of the crémant cuts through the richness of the smoked trout, while the brioche notes echo the rye crisp. A clean, palate-awakening start.",
  },
  {
    id: 2,
    courseName: "Entrée",
    dish: {
      name: "Spring Pea Velouté with Mint Oil",
      description:
        "Silky soup of fresh spring peas finished with a swirl of mint oil, crumbled feta, and toasted pepitas.",
      allergens: ["dairy"],
      image: "/placeholder-dish.svg",
    },
    wine: {
      name: "Sancerre, Domaine Vacheron",
      region: "Loire Valley, France",
      description:
        "A precise Sauvignon Blanc with flinty minerality, citrus blossom, and a hint of fresh-cut grass.",
      image: "/placeholder-wine.svg",
    },
    story:
      "This is the soup Holly's mum makes every Easter. We've had it at every family gathering since our first year together. It felt wrong not to include it.",
    pairingRationale:
      "The herbaceous, grassy character of Sancerre mirrors the fresh pea and mint flavours perfectly. The wine's minerality adds an elegant backbone to the delicate soup.",
  },
  {
    id: 3,
    courseName: "Fish Course",
    dish: {
      name: "Pan-Seared Barramundi with Preserved Lemon",
      description:
        "Crisp-skinned barramundi over a bed of braised fennel, with preserved lemon beurre blanc and fresh herbs.",
      allergens: ["fish", "dairy"],
      image: "/placeholder-dish.svg",
    },
    vegetarian: {
      name: "Fennel & Preserved Lemon Risotto",
      description:
        "Creamy arborio rice with braised fennel, preserved lemon, parmesan, and a shower of fresh herbs.",
      allergens: ["dairy"],
      image: "/placeholder-dish.svg",
    },
    wine: {
      name: "Grüner Veltliner, Schloss Gobelsburg",
      region: "Kamptal, Austria",
      description:
        "White pepper, green apple, and a saline mineral finish. Medium-bodied with vibrant acidity.",
      image: "/placeholder-wine.svg",
    },
    story:
      "Nathan caught a barramundi on our trip up to the Daintree and wouldn't stop talking about it for months. Holly suggested we put it on the menu just to give the story a proper ending.",
    pairingRationale:
      "Grüner Veltliner's characteristic white pepper spice and citrus notes complement the preserved lemon beautifully, while its acidity stands up to the richness of the beurre blanc.",
  },
  {
    id: 4,
    courseName: "Main",
    dish: {
      name: "Slow-Roasted Lamb Shoulder with Herb Gremolata",
      description:
        "12-hour lamb shoulder, impossibly tender, with a bright parsley, garlic, and lemon gremolata. Served with roasted root vegetables and creamy polenta.",
      allergens: ["dairy"],
      image: "/placeholder-dish.svg",
    },
    vegetarian: {
      name: "Wild Mushroom & Truffle Wellington",
      description:
        "A medley of wild mushrooms with truffle duxelles wrapped in golden puff pastry, served with roasted root vegetables and creamy polenta.",
      allergens: ["dairy", "gluten"],
      image: "/placeholder-dish.svg",
    },
    wine: {
      name: "Châteauneuf-du-Pape, Domaine du Vieux Télégraphe",
      region: "Rhône Valley, France",
      description:
        "Deep garnet. Rich dark fruit, garrigue herbs, and warm spice. Full-bodied with velvety tannins and a long, savoury finish.",
      image: "/placeholder-wine.svg",
    },
    story:
      "We had this exact wine on our first proper date — at that little French place that's now a bubble tea shop. We were too nervous to talk much, so we just kept refilling each other's glasses. The bottle was empty embarrassingly fast.",
    pairingRationale:
      "The Châteauneuf's ripe dark fruit and herbal complexity are a natural match for slow-cooked lamb. The garrigue notes in the wine literally grow alongside the herbs in the gremolata — they're from the same soil.",
  },
  {
    id: 5,
    courseName: "Cheese",
    dish: {
      name: "Artisan Cheese Selection",
      description:
        "A curated board of three cheeses — aged comté, creamy triple-cream brie, and a punchy blue — with honeycomb, quince paste, and walnut bread.",
      allergens: ["dairy", "gluten", "nuts"],
      image: "/placeholder-dish.svg",
    },
    wine: {
      name: "Sauternes, Château Suduiraut",
      region: "Bordeaux, France",
      description:
        "Golden, luscious, and honeyed. Apricot, marmalade, and candied citrus with a clean, lifted finish that never cloys.",
      image: "/placeholder-wine.svg",
    },
    story:
      "Holly maintains that cheese is a course, not a snack, and she will die on this hill. Nathan has learned not to argue. The Sauternes was her grandmother's favourite — she'd have a small glass every Christmas.",
    pairingRationale:
      "The classic French pairing: sweet Sauternes with salty, pungent cheese. The wine's honeyed sweetness tames the blue cheese's bite, while the acidity refreshes the palate between bites of rich triple-cream.",
  },
  {
    id: 6,
    courseName: "Dessert",
    dish: {
      name: "Dark Chocolate & Salted Caramel Tart",
      description:
        "A crisp chocolate shortcrust shell filled with layers of salted caramel and silky dark chocolate ganache, finished with Maldon sea salt and edible flowers.",
      allergens: ["dairy", "gluten", "eggs"],
      image: "/placeholder-dish.svg",
    },
    wine: {
      name: "Banyuls, Domaine du Mas Blanc",
      region: "Roussillon, France",
      description:
        "A fortified red with dark cherry, cocoa, and coffee notes. Sweet but not heavy, with a warming, lingering finish.",
      image: "/placeholder-wine.svg",
    },
    story:
      "This tart is the only thing Nathan can bake. He made it for Holly's birthday the first year and has been contractually obligated to make it every year since. The Banyuls was a sommelier friend's suggestion — and it was annoyingly perfect.",
    pairingRationale:
      "Banyuls is one of the few wines that can stand alongside dark chocolate without being overwhelmed. Its cocoa and cherry notes harmonise with the ganache, while the salted caramel bridges the wine's sweetness.",
  },
];
