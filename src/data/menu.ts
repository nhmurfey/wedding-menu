export interface Course {
  id: number;
  courseName: string;
  dish: {
    name: string;
    description: string;
    allergens: string[];
  };
  vegetarian?: {
    name: string;
    description: string;
    allergens: string[];
  };
  drink?: {
    name: string;
    type: "wine" | "cocktail" | "champagne";
    region?: string;
    description: string;
    tastingNotes?: string;
    pokemon?: { name: string; reason: string };
    movie?: { name: string; reason: string };
  };
  cocktails?: {
    name: string;
    label: string;
    description: string;
  }[];
  story: string;
  pairingRationale?: string;
}

export interface BarDrink {
  name: string;
  year: string;
  description: string;
  movie?: { name: string };
  pokemon?: { name: string };
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
    description: "Time for photos with family and friends.",
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
    },
    vegetarian: {
      name: "Tempura Veg",
      description:
        "Crispy tempura vegetables with grana padano.",
      allergens: ["dairy", "gluten"],
    },
    drink: {
      name: "Piper-Heidsieck Champagne NV",
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
      name: "Duck Pastrami",
      description:
        "Duck pastrami, grilled nectarine and rhubarb chutney with cabernet vinegar.",
      allergens: [],
    },
    drink: {
      name: "His & Hers Cocktails",
      type: "cocktail",
      description:
        "Go find yerself a cocktail!",
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
    },
    cocktails: [
      {
        name: "Negroni",
        label: "Hers",
        description:
          "A good old fashioned negroni made with house-made macerated orange gin.",
      },
      {
        name: "New York Whiskey Sour",
        label: "His",
        description:
          "Milk-washed whiskey sour with a Barossa shiraz float.",
      },
    ],
    story:
      "Go find yerself a cocktail!",
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
    },
    vegetarian: {
      name: "Sous Vide Mushrooms in Bao Buns",
      description:
        "Sous vide mushrooms with smoked paprika and garlic — oyster, enoki, king brown, lion's mane, and shiitake — served in soft bao buns.",
      allergens: ["gluten"],
    },
    drink: {
      name: "Settlement Chardonnay 2023",
      type: "wine",
      region: "Marlborough, New Zealand",
      description:
        "Seaspray, fresh lemon, seashells. Tastes like lemon curd, yoghurt, chamomile tea and flint.",
      tastingNotes:
        "Seaspray, fresh lemon, seashells on the nose. Tastes like lemon curd, yoghurt, chamomile tea and flint. Single-vineyard from 30+ year-old organic vines, wild fermented in barrel.",
      pokemon: {
        name: "Jolteon",
        reason:
          "Electric energy in a compact, elegant package. Jolteon is quick, sharp, and sparky — just like the zesty lemon curd and flinty mineral snap of this Chardonnay. Looks soft and approachable but packs a serious jolt when you least expect it.",
      },
      movie: {
        name: "The Little Mermaid",
        reason:
          "Seaspray, seashells, and a world beneath the surface waiting to be discovered. This Chardonnay smells like the ocean and tastes like buried treasure. Ariel wanted to be part of our world — this Marlborough Chardonnay already is.",
      },
    },
    story:
      "In honour of Erin Patterson and the mushroom trials. Best thing 2025 had to offer (outside of the proposal of course!).",
    pairingRationale:
      "The Chardonnay's creamy texture and lemon curd notes are a natural match for earthy, umami-rich mushrooms. The flinty acidity cuts through the smokiness.",
  },
  {
    id: 4,
    courseName: "Spanish Influence",
    dish: {
      name: "Anchovy & Smoked Tomato",
      description:
        "Anchovy, smoked tomato gel, sourdough crisp.",
      allergens: ["gluten", "fish"],
    },
    vegetarian: {
      name: "Heirloom Tomato Bruschetta",
      description:
        "Heirloom tomato bruschetta, fresh basil, red onion, toasted sourdough.",
      allergens: ["gluten"],
    },
    drink: {
      name: "Unico Zelo Halcyon Days 2022",
      type: "wine",
      region: "Riverland, South Australia",
      description:
        "Smells like purple. Tastes like purple. A finer-boned, Pinot-esque Nero d'Avola. Best served slightly chilled.",
      tastingNotes:
        "Smells like purple. Tastes like purple. A pretense-free wine made for good times, good people.",
      pokemon: {
        name: "Magmar",
        reason:
          "All heat, all intensity, but weirdly graceful about it. Magmar's flame body and molten energy match the peppery spice and meaty chew of this Nero d'Avola. Looks intimidating but is actually a lot of fun once you get to know it — just like this wine served chilled.",
      },
      movie: {
        name: "Mulan",
        reason:
          "Underestimated, from unexpected origins, and quietly brilliant. Mulan pretends to be something she's not to prove what she is — this Nero d'Avola from the Riverland pretends to be a big, heavy red but is actually finer-boned and nimble. Both are braver than they look.",
      },
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
        "Masterstock braised pork belly, sous vide and grilled Brussels sprouts with mustard and lemon.",
      allergens: [],
    },
    drink: {
      name: "Mulline Pinot Noir 2024",
      type: "wine",
      region: "Bellarine Peninsula, Victoria",
      description:
        "Compost, mushrooms, smoky, violets, and cigar box on the nose. Cherry, salty, vegetal, and mineral on the palate. A Pinot from our favourite region.",
      tastingNotes:
        "A Pinot from our favourite region — the West. Smells like compost, mushrooms, smoky, violets, cigar box. Tastes like cherry, salty, vegetal, minerals.",
      pokemon: {
        name: "Butterfree",
        reason:
          "Delicate, beautiful, light on its feet — but don't underestimate it. The perfumed nose of violets and smoky cigar box is basically Butterfree's compound eyes picking up every scent in a meadow. Evolves from something humble (Caterpie from Geelong) into something genuinely gorgeous. Signature move Sleep Powder? That's what this wine's aromatics do to you.",
      },
      movie: {
        name: "Treasure Planet",
        reason:
          "An underrated gem that most people haven't discovered yet. Adventurous, layered, and deeply rewarding if you give it a chance — just like a cool-climate Pinot from Geelong that smells like cigar box and violets but tastes like cherry and minerals. Both deserve way more recognition than they get.",
      },
    },
    story:
      "We always order the Brussels sprouts. Always. If they're on the menu, they're on our table.",
    pairingRationale:
      "Our favourite pinots are found in the West — Grampians or, like this one, the Bellarine region. The Pinot's bright acidity and silken tannins lift the richness of the braised pork belly.",
  },
  {
    id: 6,
    courseName: "Our First Holiday Together",
    dish: {
      name: "Oyster Blade",
      description:
        "Oyster blade with broccoli, zucchini and almond salad, cauliflower puree.",
      allergens: ["nuts"],
    },
    vegetarian: {
      name: "Eggplant & Chickpea Tagine",
      description:
        "Eggplant and chickpea tagine, served with spiced couscous and fresh herbs.",
      allergens: ["gluten"],
    },
    drink: {
      name: "Grand Pappy Barossa Shiraz 2020",
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
    },
    story:
      "We needed something to pair with a Barossan Shiraz.",
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
    },
    vegetarian: {
      name: "Pumpkin Pie",
      description:
        "Classic pumpkin pie — in honour of Nathan's Canadian heritage.",
      allergens: ["dairy", "gluten", "eggs"],
    },
    story:
      "Did you know Nathan's family hails from Canada? We always celebrate Halloween and want to make pumpkin pie.",
  },
];

export const barDrinks: BarDrink[] = [
  {
    name: "Brash Higgins Chenin Blanc",
    year: "2024",
    description: "Whoo! Tropical, passionfruit.",
    movie: { name: "Emperor's New Groove" },
  },
  {
    name: "Sauvignon Blanc Semillon",
    year: "2023",
    description:
      "Passionfruit, zesty, fruity. If you don't generally like sauv blanc, but do like rieslings and pinot gris, still give this a try.",
    movie: { name: "Madagascar" },
  },
  {
    name: "Xanadu Chardonnay",
    year: "2024",
    description:
      "Smells nutty, like almonds, a little floral and like dried apricot, loquat. Tastes like stonefruit, orange zest and minerals.",
    movie: { name: "Ice Age" },
  },
  {
    name: "Nero d'Avola Ripple",
    year: "2024",
    description:
      "Translucent garnet hue with a nose redolent of blueberries and candied wild strawberries and blue fruits with a touch of musk. On the palate, bright and juicy with red fruits and acidity. Nice with a light chill.",
    movie: { name: "Mulan" },
    pokemon: { name: "Magmar" },
  },
];
