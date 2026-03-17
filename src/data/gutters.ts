export interface GutterProfile {
  id: string;
  code: string;
  name: string;
  bestFor: string;
  description: string;
  sizes: GutterSize[];
  image: string;
}

export interface GutterSize {
  size: string;
  materials: { name: string; gauge: string }[];
  note?: string;
}

export interface GutterComponent {
  id: string;
  code: string;
  name: string;
  bestFor: string;
  description: string;
  image: string;
}

export interface GutterMachine {
  id: string;
  name: string;
  profile: string;
  specSheet: string;
  image: string;
}

export const gutterCategories = [
  { id: "profiles", label: "Gutter Profiles", subtitle: "K-Style · Half-Round · Fascia" },
  { id: "integrated", label: "Integrated System", subtitle: "Roof + gutter combined" },
  { id: "components", label: "Downspouts & Components", subtitle: "Downspouts · Hangers · Miters" },
  { id: "machines", label: "Gutter Machines", subtitle: "Iron Man rollformer series" },
];

export const gutterProfiles: GutterProfile[] = [
  {
    id: "k-style",
    code: "K-STYLE / O.G.",
    name: '"K" or "O/G" Style Seamless Gutter',
    bestFor: "Residential, most common North American profile",
    description:
      "The most widely installed gutter profile in the U.S. Flat back mounts flush to fascia. Available in two sizes for different roof drainage loads.",
    sizes: [
      {
        size: '5" & 6"',
        materials: [
          { name: "Aluminum", gauge: "0.27" },
          { name: "Copper", gauge: "16 oz." },
          { name: "Steel", gauge: "26 gauge" },
        ],
      },
    ],
    image: "gutters-k",
  },
  {
    id: "half-round",
    code: "HALF-ROUND",
    name: "Half Round Style Gutter",
    bestFor: "Historic, traditional, and premium residential",
    description:
      "Semicircular profile used in historic restoration and high-end residential. Self-cleaning profile — debris passes through rather than accumulating.",
    sizes: [
      {
        size: '5" & 6"',
        materials: [
          { name: "Aluminum", gauge: "0.27" },
          { name: "Copper", gauge: "16 oz." },
          { name: "Steel", gauge: "26 gauge" },
        ],
      },
    ],
    image: "gutters-half-round",
  },
  {
    id: "fascia",
    code: "FASCIA STYLE",
    name: "Fascia Style Seamless Gutter",
    bestFor: "Contemporary residential and commercial — clean roofline",
    description:
      "Hides the fascia board completely for a finished, integrated look. Higher capacity than K-style at equivalent widths.",
    sizes: [
      {
        size: '5½" & 6"',
        materials: [
          { name: "Aluminum", gauge: "0.27" },
          { name: "Copper", gauge: "16 oz." },
          { name: "Steel", gauge: "26 gauge" },
        ],
      },
    ],
    image: "gutters-facia",
  },
  {
    id: "super-fascia",
    code: "SUPER / DEEP FASCIA",
    name: 'Super or Deep Fascia Style Seamless Gutter',
    bestFor: "High-volume drainage, large commercial roofs",
    description:
      'Extra-deep 7¼" fascia profile for maximum water capacity on large roof areas and high-rainfall regions.',
    sizes: [
      {
        size: '7¼"',
        materials: [
          { name: "Copper", gauge: "16 oz." },
          { name: "Steel", gauge: "26 gauge" },
        ],
      },
    ],
    image: "gutters-super",
  },
];

export const gutterComponents: GutterComponent[] = [
  {
    id: "downspouts",
    code: "DOWNSPOUTS",
    name: "Downspouts",
    bestFor: "Round and rectangular profiles",
    description: "Matched to gutter profile and color. Available in standard lengths.",
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/07/Down-Spouts-IMG_1703-1024x683.jpg",
  },
];

export const gutterMachines: GutterMachine[] = [
  { id: "im-jr", name: "Iron Man Junior", profile: "Compact entry-level rollformer", specSheet: "https://www.custombiltmetals.com/wp-content/uploads/2015/07/KWM-5in-Seamless.pdf", image: "iron-man-junior" },
  { id: "im-6", name: 'Iron Man 6" Seamless Rollformer', profile: "K-Style · 6\" · Aluminum", specSheet: "https://www.custombiltmetals.com/wp-content/uploads/2015/07/KWM-5in-Seamless.pdf", image: "iron-man-6-seamless" },
  { id: "im-55f", name: 'Iron Man 5" Fascia Cutter', profile: "Fascia · 5.5\" · Aluminum", specSheet: "https://www.custombiltmetals.com/wp-content/uploads/2015/07/KWM-5.5in-Fascia.pdf", image: "iron-man-5-fascia" },
  { id: "im-6hr", name: 'Iron Man 6" Half-Round Seamless Rollformer', profile: "Half-Round · 6\" · Aluminum", specSheet: "https://www.custombiltmetals.com/wp-content/uploads/2015/07/KWM-6in-Half-Round.pdf", image: "iron-man-6-half-round" },
  { id: "im-5", name: 'Iron Man 5" Seamless Rollformer', profile: "K-Style · 5\" · Aluminum", specSheet: "https://www.custombiltmetals.com/wp-content/uploads/2015/07/KWM-5in-Seamless.pdf", image: "iron-man-5-seamless" },
  { id: "im-7", name: 'Iron Man 7" Seamless Rollformer', profile: "Fascia/K-Style · 7\" · Aluminum", specSheet: "https://www.custombiltmetals.com/wp-content/uploads/2015/07/KWM-7in-Seamless.pdf", image: "iron-man-7-seamless" },
  { id: "im-56", name: 'Iron Man 5/6" Seamless Rollformer', profile: "K-Style · 5\" & 6\" combo · Aluminum", specSheet: "https://www.custombiltmetals.com/wp-content/uploads/2015/07/KWM-5-6-Seamless.pdf", image: "iron-man-56-seamless" },
];

export const gutterLocations = [
  { city: "Chino, CA", phone: "(909) 664-1587" },
  { city: "Honolulu, HI", phone: "(808) 845-1806" },
  { city: "Lakewood, WA", phone: "(253) 872-7330" },
  { city: "McClellan, CA", phone: "(916) 333-5680" },
  { city: "Nampa-Boise, ID", phone: "(986) 837-9508" },
  { city: "Phoenix, AZ", phone: "(602) 484-7015" },
  { city: "Portland, OR", phone: "(503) 256-3328" },
  { city: "San Jose, CA", phone: "(408) 433-0823" },
  { city: "Spokane, WA", phone: "(509) 533-1703" },
  { city: "Van Nuys, CA", phone: "(747) 998-2258" },
];
