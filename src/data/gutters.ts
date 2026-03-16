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
  materials: string;
  gauge: string;
  note?: string;
}

export interface GutterComponent {
  id: string;
  code: string;
  name: string;
  bestFor: string;
  description: string;
  image: string;
  hasColorChart?: boolean;
}

export interface GutterMachine {
  id: string;
  name: string;
  profile: string;
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
      { size: '5"', materials: "Aluminum · Copper · Steel", gauge: "Al 0.027 · Cu 16 oz · Steel 26ga" },
      { size: '6"', materials: "Aluminum · Copper · Steel", gauge: "Al 0.027 · Cu 16 oz · Steel 26ga" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-2000.jpg",
  },
  {
    id: "half-round",
    code: "HALF-ROUND",
    name: "Half-Round Style Seamless Gutter",
    bestFor: "Historic, traditional, and premium residential",
    description:
      "Semicircular profile used in historic restoration and high-end residential. Self-cleaning profile — debris passes through rather than accumulating. Copper option for premium projects.",
    sizes: [
      { size: '5"', materials: "Aluminum · Copper · Steel", gauge: "Al 0.027 · Cu 16 oz · Steel 26ga" },
      { size: '6"', materials: "Aluminum · Copper · Steel", gauge: "Al 0.027 · Cu 16 oz · Steel 26ga" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-150.jpg",
  },
  {
    id: "fascia",
    code: "FASCIA STYLE",
    name: "Fascia Style Seamless Gutter",
    bestFor: "Contemporary residential and commercial — clean roofline",
    description:
      "Hides the fascia board completely for a finished, integrated look. Higher capacity than K-style at equivalent widths. Super/deep fascia at 7.25\" for high-volume drainage.",
    sizes: [
      { size: '5.5"', materials: "Aluminum · Copper · Steel", gauge: "Al 0.027 · Cu 16 oz · Steel 26ga" },
      { size: '6"', materials: "Aluminum · Copper · Steel", gauge: "Al 0.027 · Cu 16 oz · Steel 26ga" },
      { size: '7.25"', materials: "Copper · Steel", gauge: "Cu 16 oz · Steel 26ga", note: "Super/Deep" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-100.jpg",
  },
];

export const gutterComponents: GutterComponent[] = [
  {
    id: "downspouts",
    code: "DOWNSPOUTS",
    name: "Downspouts",
    bestFor: "Round and rectangular profiles",
    description: "Matched to gutter profile and color. Available in standard lengths.",
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-2000.jpg",
  },
  {
    id: "miters",
    code: "MITERS & CAPS",
    name: "Miters & End Caps",
    bestFor: "Left, right, inside, outside",
    description: "Profile-matched to K-style, half-round, and fascia gutters. Solder or snap-fit.",
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-150.jpg",
  },
  {
    id: "hangers",
    code: "HANGERS",
    name: "Hangers & Mounting",
    bestFor: "Hidden and exposed hanger types",
    description: "Spaced to code for wind load requirements. Profile-specific options available.",
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-100.jpg",
  },
  {
    id: "colors",
    code: "COLORS",
    name: "Colors & Finishes",
    bestFor: "Dura Coat XT-10 coated standard",
    description: "Aluminum and steel finished with Dura Coat XT-10. Copper and Zincalume® in natural finish.",
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SL-1750.jpg",
    hasColorChart: true,
  },
];

export const gutterMachines: GutterMachine[] = [
  { id: "im-5", name: 'Iron Man 5" Seamless Rollformer', profile: "K-Style · 5\" · Aluminum" },
  { id: "im-56", name: 'Iron Man 5/6" Seamless Rollformer', profile: "K-Style · 5\" & 6\" combo · Aluminum" },
  { id: "im-6hr", name: 'Iron Man 6" Half-Round Rollformer', profile: "Half-Round · 6\" · Aluminum" },
  { id: "im-55f", name: 'Iron Man 5.5" Fascia Cutter', profile: "Fascia · 5.5\" · Aluminum" },
  { id: "im-7", name: 'Iron Man 7" Seamless Rollformer', profile: "Fascia/K-Style · 7\" · Aluminum" },
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
