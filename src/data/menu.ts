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
  drink: {
    name: string;
    type: "wine" | "cocktail" | "champagne";
    region?: string;
    description: string;
    tastingNotes?: string;
    pokemon?: { name: string; reason: string };
    movie?: { name: string; reason: string };
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
    time: "2:45 PM",
    title: "Welcome Party",
    description: "Arrive, mingle, and soak it all in.",
  },
  {
    time: "3:30 PM",
    title: "Ceremony",
    description: "Join us as we say our vows.",
  },
  {
    time: "4:00 PM",
    title: "Champagne & Jazz",
    description: "Bubbles and celebrations while we steal away for photos.",
  },
  {
    time: "4:45 PM",
    title: "Cocktails & Speeches",
    description: "Drinks flowing and words from our favourite people.",
  },
  {
    time: "6:30 PM",
    title: "Swing, Food & Wine Pairing",
    description: "Live swing music, six courses, and wines to match.",
  },
  {
    time: "7:30 PM",
    title: "Dance Floor",
    description: "Dancing until our feet give out.",
  },
];

export const courses: Course[] = [
  {
    id: 1,
    courseName: "Starter",
    dish: {
      name: "Fried Chicken & Truffle Fries",
      description:
        "Crispy fried chicken with truffle fries and grana padano.",
      allergens: ["dairy", "gluten"],
      image: "/placeholder-dish.svg",
    },
    vegetarian: {
      name: "Pumpkin Arancini",
      description:
        "Golden-fried pumpkin arancini with grana padano.",
      allergens: ["dairy", "gluten"],
      image: "/placeholder-dish.svg",
    },
    drink: {
      name: "Piper-Heidsieck Champagne",
      type: "champagne",
      region: "Champagne, France",
      description:
        "Pale gold with fine persistent bubbles. Fresh almond, white peaches, brioche, and orange blossom. Bright and lively with a long, spicy finish.",
      tastingNotes:
        "50-55% Pinot Noir, 30-35% Meunier, 15-20% Chardonnay. Crunchy pomelo, blonde grapes, stone fruit, hint of mint. Creamy mousse, toasty brioche depth, smoke and spice on the finish. 90-95 pts across critics.",
      pokemon: {
        name: "Starmie",
        reason:
          "Water/Psychic type with a jewel core that flashes in every colour. The fine persistent bubbles = Starmie's signature Rapid Spin. Mysterious, elegant, and deceptively powerful — just like an NV champagne that scores 95 points. The multi-coloured gem at its centre is all those secondary flavour hits (almond, then brioche, then smoke, then spice).",
      },
      movie: {
        name: "Mary Poppins",
        reason:
          "Arrives with a pop, practically perfect, and makes everything instantly more fun. Bright, bubbly, and celebratory on the surface but surprisingly deep underneath. The Marilyn Monroe connection = old Hollywood glamour = Julie Andrews descending with an umbrella. And the spoonful of sugar? That's the 10g/l dosage.",
      },
      image: "/placeholder-wine.svg",
    },
    story:
      "Fried foods and champagne is a surprising but perfect pairing, just like the bride and groom.",
    pairingRationale:
      "The bright acidity and fine mousse of the champagne cuts through the richness of the fried chicken, while the brioche notes echo the crispy coating. A celebratory start.",
  },
  {
    id: 2,
    courseName: "Duck Pastrami",
    dish: {
      name: "Duck Pastrami with Grilled Stone Fruit",
      description:
        "House-cured duck pastrami with grilled nectarine and rhubarb chutney finished with cabernet vinegar.",
      allergens: [],
      image: "/placeholder-dish.svg",
    },
    drink: {
      name: "His & Hers Cocktails",
      type: "cocktail",
      description:
        "A pair of bespoke cocktails — one for him, one for her. Go find yours.",
      pokemon: {
        name: "Nidoking & Nidoqueen",
        reason:
          "The original his & hers Pokemon. Always found together, always complementary. One's a bit more rough around the edges, the other's a bit more composed — but they're a perfect pair.",
      },
      movie: {
        name: "Shrek",
        reason:
          "A love story between two people who weren't supposed to go together but turned out to be perfect. Also, there's layers. Like an onion. Like a cocktail.",
      },
      image: "/placeholder-wine.svg",
    },
    story:
      "Go find yours.",
    pairingRationale:
      "Sometimes the best pairing isn't a wine — it's a cocktail made just for you.",
  },
  {
    id: 3,
    courseName: "Mushroom Trials",
    dish: {
      name: "Sous Vide Mushrooms in Bao Buns",
      description:
        "Sous vide mushrooms with smoked paprika and garlic — oyster, enoki, king brown, lion's mane, and shiitake — served in soft bao buns.",
      allergens: ["gluten"],
      image: "/placeholder-dish.svg",
    },
    drink: {
      name: "Settlement Chardonnay",
      type: "wine",
      region: "Marlborough, New Zealand",
      description:
        "Single-vineyard from 30+ year-old organic vines. Ripe stone fruit, baked custard, toasted sourdough, and a flinty mineral edge with creamy mid-palate.",
      tastingNotes:
        "Wild fermented in barrel (15% new oak), 12 months on lees. Ripe yellow stone fruit, sweet grapefruit, baked custard, toasted sourdough, popcorn, and white pepper on the nose. Medium-full body with crunchy acidity. 93 pts from Cameron Douglas MS.",
      pokemon: {
        name: "Ninetales",
        reason:
          "Nine tails = nine layers of flavour (peach, grapefruit, custard, sourdough, popcorn, white pepper, oatmeal, flint). Mystical and wise, lives for a thousand years — this wine is from 30+ year-old vines and is built to age. Elegant and regal but there's real power behind the poise.",
      },
      movie: {
        name: "Spirited Away",
        reason:
          "Layers of complexity that reveal themselves slowly and reward patience. Crafted with Miyazaki-level care and restraint — nothing wasted, nothing overdone. The flinty mineral edge is the spirit world's strange, crystalline beauty. And like the film, this wine ages beautifully — you notice something new every time.",
      },
      image: "/placeholder-wine.svg",
    },
    story:
      "In honour of Erin Patterson and the mushroom trials. Best thing 2025 had to offer (outside of the proposal of course!).",
    pairingRationale:
      "The Chardonnay's creamy texture and toasted sourdough notes are a natural match for earthy, umami-rich mushrooms. The flinty acidity cuts through the smokiness.",
  },
  {
    id: 4,
    courseName: "Spanish Influence",
    dish: {
      name: "Bruschetta",
      description:
        "Classic bruschetta — because what we learned after 3 weeks of travelling Spain is: put anchovies on everything.",
      allergens: ["gluten", "fish"],
      image: "/placeholder-dish.svg",
    },
    drink: {
      name: "Unico Zelo Halcyon Days",
      type: "wine",
      region: "Riverland, South Australia",
      description:
        "Bright punchy blue and brambly black fruits, peppery spice, meaty chew, and crispy tannins. A finer-boned, Pinot-esque Nero d'Avola. Best served slightly chilled.",
      tastingNotes:
        "100% Nero d'Avola. Nutmeg and baking spice on the nose with cedary undertones. Plush red fruits, peppery spice, a salty mineral line, and juicy acidity. Crispy tannins. The winemakers call it 'a pretense-free wine made for good times, good people.'",
      pokemon: {
        name: "Arcanine",
        reason:
          "Fire-type that matches the peppery spice, nutmeg, and warm baking notes. Arcanine looks like it should be a heavy bruiser but its signature trait is speed and grace — just like this Nero d'Avola that should be big and heavy but is instead finer-boned and nimble. Both are loyal, warm-hearted, and belong at a good time with friends.",
      },
      movie: {
        name: "Ratatouille",
        reason:
          "Unpretentious origins, unexpected finesse. It comes from the Riverland (not exactly prestige wine country), much like Remy is the 'wrong' species to be a chef — but both deliver something genuinely refined from humble beginnings. A pretense-free wine made for good times, just like 'anyone can cook.'",
      },
      image: "/placeholder-wine.svg",
    },
    story:
      "Our trip to Spain proved that pintxos can still be enjoyed despite a broken rib (Nathan), stolen earrings (Holly) and a crashed hire car (Holly & Nathan). We emerged from Spain with a love of pintxos and anchovies.",
    pairingRationale:
      "The Nero d'Avola's peppery spice and brambly fruit complement the salty, savoury bruschetta beautifully. Served chilled, it's the perfect Mediterranean match.",
  },
  {
    id: 5,
    courseName: "Pork & Pinot",
    dish: {
      name: "Masterstock Braised Pork Belly & Brussels Sprouts",
      description:
        "Masterstock braised pork belly, sous vide and grilled brussels sprouts with mustard and lemon.",
      allergens: [],
      image: "/placeholder-dish.svg",
    },
    drink: {
      name: "Mulline Pinot Noir",
      type: "wine",
      region: "Bellarine Peninsula, Victoria",
      description:
        "Bright crimson and luminous. Wild strawberries, dried roses, white pepper, and dried mountain herbs. Silken tannins, bright acidity, and an emphatic finish.",
      tastingNotes:
        "Cool-climate Pinot from Geelong. Wild strawberries, raspberries, kirsch, dried roses, white pepper, and dried mountain herbs on the nose. Light-medium body with silken fine-grained tannins and restrained oak. 94-97 pts across Halliday. Campbell Mattinson calls Mulline 'a star.'",
      pokemon: {
        name: "Butterfree",
        reason:
          "Delicate, beautiful, light on its feet — but don't underestimate it. The perfumed nose of dried roses, wild strawberries, and white pepper is basically Butterfree's compound eyes picking up every scent in a meadow. Evolves from something humble (Caterpie from Geelong) into something genuinely gorgeous. Signature move Sleep Powder? That's what this wine's aromatics do to you.",
      },
      movie: {
        name: "My Neighbor Totoro",
        reason:
          "Quiet magic discovered in a gentle countryside landscape — that's the Bellarine Peninsula. Light, delicate, and beautiful but with genuine wonder underneath. The perfumed nose of dried roses and wild strawberries is literally Totoro's forest. Satsuki and Mei finding Totoro = you discovering a $37 Pinot scoring 97 points.",
      },
      image: "/placeholder-wine.svg",
    },
    story:
      "We always order the brussels sprouts. Always. If they're on the menu, they're on our table.",
    pairingRationale:
      "Our favourite pinots are found in the West — Grampians or, like this one, the Bellarine region. The Pinot's bright acidity and silken tannins lift the richness of the braised pork belly.",
  },
  {
    id: 6,
    courseName: "Main",
    dish: {
      name: "Slow Roast Beef",
      description:
        "Slow-roasted beef — impossibly tender, deeply savoury, and worth the wait.",
      allergens: [],
      image: "/placeholder-dish.svg",
    },
    vegetarian: {
      name: "Eggplant & Chickpea Tagine",
      description:
        "Eggplant and chickpea tagine, served with spiced couscous and fresh herbs.",
      allergens: ["gluten"],
      image: "/placeholder-dish.svg",
    },
    drink: {
      name: "Papi Barossa Shiraz",
      type: "wine",
      region: "Barossa Valley, South Australia",
      description:
        "Deep inky purple-red. Powerfully ripe blackberry, dark mocha, smoky tobacco, and cracked black pepper. Full-bodied with fine-grained powdery tannins and an exceptionally long finish.",
      tastingNotes:
        "Classic Barossa Shiraz. Dried currant, dark mocha, smoky tobacco, wet-red-clay earthiness, and cracked black pepper. Licorice, roast meat, and exotic spice on the palate. Grippy but fine-grained powdery tannins. Exceptionally long finish.",
      pokemon: {
        name: "Charizard",
        reason:
          "Fire/Flying. The big, bold, unapologetic powerhouse. Deep inky colour, smoky intensity, cracked pepper heat — Charizard breathing fire is basically swirling this glass. Iconic, not trendy. Everyone's first favourite, and for good reason. The long smouldering finish is Charizard's tail flame that never goes out.",
      },
      movie: {
        name: "Moana",
        reason:
          "This wine announces itself like Moana standing on the bow screaming 'I am Moana of Motunui!' The deep earthiness and connection to ancient land (Barossa's 150+ year old vines) mirrors Moana's ancestral connection to her island. Te Ka the lava demon is the tannin structure — dark and imposing but revealing something beautiful underneath.",
      },
      image: "/placeholder-wine.svg",
    },
    story:
      "We love slow cooked beef. We needed a dish to pair with a heavier red. Holly's beef farming heritage demanded it.",
    pairingRationale:
      "The Shiraz's dark fruit, smoky depth, and powdery tannins are built for slow-roasted beef. A pairing as honest and satisfying as it gets.",
  },
  {
    id: 7,
    courseName: "Dessert",
    dish: {
      name: "Pumpkin Pie",
      description:
        "Classic pumpkin pie — in honour of Nathan's Canadian heritage.",
      allergens: ["dairy", "gluten", "eggs"],
      image: "/placeholder-dish.svg",
    },
    drink: {
      name: "To be announced",
      type: "wine",
      description:
        "Something sweet to close out the evening.",
      image: "/placeholder-wine.svg",
    },
    story:
      "Nathan's Canadian heritage, represented in pastry form.",
    pairingRationale:
      "Stay tuned.",
  },
];
