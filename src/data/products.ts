export type ProductCategory =
  | "standing-seam"
  | "exposed-fastener"
  | "shakes-shingles"
  | "corrugated";

export interface ProductMeta {
  key: string;
  value: string;
  status?: "yes" | "confirm" | "no";
}

export interface ProductLink {
  label: string;
  url: string;
  type: "PDF" | "ZIP";
}

export interface ProductPanel {
  id: string;
  code: string;
  name: string;
  bestFor: string;
  description: string;
  category: ProductCategory;
  series?: string;
  meta: ProductMeta[];
  image: string;
  links: ProductLink[];
  showLocation?: boolean;
  imageCover?: boolean;
}

export interface ProductCategoryInfo {
  id: ProductCategory;
  label: string;
  subtitle: string;
  description: string;
}

export const categories: ProductCategoryInfo[] = [
  {
    id: "standing-seam",
    label: "Standing Seam",
    subtitle: "CB & SL Series · Concealed fastener",
    description: "Concealed fastener panels field roll-formed on the jobsite to exact length. Available in PVDF-coated finishes (Kynar 500®, Hylar® 5000, Fluropon®) and bare metals. Cool Roof options reflect up to 70% of solar energy.",
  },
  {
    id: "exposed-fastener",
    label: "Exposed Fastener",
    subtitle: "TFR-36 · PBR",
    description: "Economical and fast-install panels for commercial, agricultural, and industrial roof and wall applications. Trim packages, flat stock, and polycarbonate skylight matches available. Available for will-call pickup at all 9 locations.",
  },
  {
    id: "shakes-shingles",
    label: "Shakes & Shingles",
    subtitle: "Aluminum · Country Manor · Rustic",
    description: "Aluminum shakes and shingles with a rustic wood-shake aesthetic. Four-sided interlock, 120 mph wind rating, 98% post-consumer recycled content. Cool Roof paint system standard.",
  },
  {
    id: "corrugated",
    label: "Corrugated",
    subtitle: "Corrugated Metal Panel",
    description: "Classic corrugated profiles for residential and agricultural roofing. Full color range available in steel and aluminum.",
  },
];

export const products: ProductPanel[] = [
  // ── CB Series ──
  {
    id: "cb-2000",
    code: "CB-2000",
    name: "Standing Seam 2\"",
    bestFor: "Residential & commercial architectural",
    description: "Most popular CBM standing seam profile. Field roll-formed on the jobsite to eliminate transit damage and waste.",
    category: "standing-seam",
    series: "CB Series",
    meta: [
      { key: "Fastener", value: "Concealed" },
      { key: "Seam Height", value: "2\"" },
      { key: "Material", value: "Steel · Alum" },
      { key: "Cool Roof", value: "Yes", status: "yes" },
      { key: "Roll-Form Onsite", value: "Yes", status: "yes" },
      { key: "Bare Metal", value: "Yes", status: "yes" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-2000.jpg",
    links: [
      { label: "CB-2000 Sale Sheet", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-2000_Sale_Sheet.pdf", type: "PDF" },
      { label: "CB-2000 Specifications", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB2000_Specifications.pdf", type: "PDF" },
      { label: "Details & Installation Guide", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/Detail-and-Install-Guide-CB-2000.pdf", type: "PDF" },
      { label: "CAD Files", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-2000.zip", type: "ZIP" },
    ],
  },
  {
    id: "cb-150",
    code: "CB-150",
    name: "Standing Seam 1.5\"",
    bestFor: "Residential, lower-pitch applications",
    description: "Mid-height concealed fastener panel. Onsite roll-forming available for custom lengths.",
    category: "standing-seam",
    series: "CB Series",
    meta: [
      { key: "Fastener", value: "Concealed" },
      { key: "Seam Height", value: "1.5\"" },
      { key: "Material", value: "Steel · Alum" },
      { key: "Cool Roof", value: "Yes", status: "yes" },
      { key: "Roll-Form Onsite", value: "Yes", status: "yes" },
      { key: "Bare Metal", value: "Yes", status: "yes" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-150.jpg",
    links: [
      { label: "CB-150 Sale Sheet", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-150_Sale_Sheet.pdf", type: "PDF" },
      { label: "CB-150 Specifications", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB150_Specifications.pdf", type: "PDF" },
      { label: "Details & Installation Guide", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-150-Detail-and-Install-Guide-Residential.pdf", type: "PDF" },
      { label: "CAD Files", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-150_CAD_Residential.zip", type: "ZIP" },
    ],
  },
  {
    id: "cb-100",
    code: "CB-100",
    name: "Standing Seam 1\"",
    bestFor: "Residential, low-profile aesthetic",
    description: "Lower seam height for projects requiring a subtle roofline. Concealed fastener, full color availability.",
    category: "standing-seam",
    series: "CB Series",
    meta: [
      { key: "Fastener", value: "Concealed" },
      { key: "Seam Height", value: "1\"" },
      { key: "Material", value: "Steel · Alum" },
      { key: "Cool Roof", value: "Yes", status: "yes" },
      { key: "Roll-Form Onsite", value: "Yes", status: "yes" },
      { key: "Bare Metal", value: "Yes", status: "yes" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-100.jpg",
    links: [
      { label: "CB-100 Sale Sheet", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-100_Sale_Sheet1.pdf", type: "PDF" },
      { label: "CB-100 Specifications", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB100_Specifications1.pdf", type: "PDF" },
      { label: "Details & Installation Guide", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB100-Detail-and-Install-Guide-Residential1.pdf", type: "PDF" },
      { label: "CAD Files", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB100-CAD1.zip", type: "ZIP" },
    ],
  },
  // ── SL Series ──
  {
    id: "sl-1750",
    code: "SL-1750",
    name: "Snap-Lock 1.75\"",
    bestFor: "Commercial, faster install residential",
    description: "Snap-lock standing seam at 1.75\" height. Field-formed to length, designed for efficient installation.",
    category: "standing-seam",
    series: "SL Series",
    meta: [
      { key: "Fastener", value: "Concealed snap" },
      { key: "Seam Height", value: "1.75\"" },
      { key: "Cool Roof", value: "Yes", status: "yes" },
      { key: "Roll-Form Onsite", value: "Yes", status: "yes" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SL-1750.jpg",
    links: [
      { label: "SL-1750 Sale Sheet", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SL-1750_Sale_Sheet.pdf", type: "PDF" },
      { label: "SL-1750 Specifications", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SL1750_Specifications.pdf", type: "PDF" },
      { label: "Details & Installation Guide", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SL-1750_Detail-and-Install-Guide.pdf", type: "PDF" },
      { label: "CAD Files", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SL-1750_CAD.zip", type: "ZIP" },
    ],
  },
  {
    id: "sl-150",
    code: "SL-150",
    name: "Snap-Lock 1.5\"",
    bestFor: "Residential, mid-pitch applications",
    description: "Mid-height snap-lock profile. Onsite roll-forming available. Full PVDF color range.",
    category: "standing-seam",
    series: "SL Series",
    meta: [
      { key: "Fastener", value: "Concealed snap" },
      { key: "Seam Height", value: "1.5\"" },
      { key: "Cool Roof", value: "Yes", status: "yes" },
      { key: "Roll-Form Onsite", value: "Yes", status: "yes" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SL-150.jpg",
    links: [
      { label: "SL-150 Specifications", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SL150_Specifications.pdf", type: "PDF" },
      { label: "Details & Installation Guide", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SL150_Detail-and-Install-Guide-Residential.pdf", type: "PDF" },
      { label: "CAD Files", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SL150_Residential.zip", type: "ZIP" },
    ],
  },
  {
    id: "sl-100",
    code: "SL-100",
    name: "Snap-Lock 1\"",
    bestFor: "Low-profile residential rooflines",
    description: "Lowest-profile snap-lock option. Concealed fastener system with clean sight lines.",
    category: "standing-seam",
    series: "SL Series",
    meta: [
      { key: "Fastener", value: "Concealed snap" },
      { key: "Seam Height", value: "1\"" },
      { key: "Cool Roof", value: "Yes", status: "yes" },
      { key: "Roll-Form Onsite", value: "Yes", status: "yes" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SL-100.jpg",
    links: [
      { label: "SL-100 Sale Sheet", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SL-100_Sale_Sheet.pdf", type: "PDF" },
      { label: "SL-100 Specifications", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SL100_Specifications.pdf", type: "PDF" },
      { label: "Details & Installation Guide", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SL100_Detail-and-Install-Guide-Residential.pdf", type: "PDF" },
      { label: "CAD Files", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SL100_Residential.zip", type: "ZIP" },
    ],
  },
  // ── Additional Standing Seam ──
  {
    id: "slz-1000",
    code: "SLZ-1000",
    name: "Snap-Lock Zee 1\"",
    bestFor: "Residential, light commercial",
    description: "Zee-profile snap-lock standing seam. Concealed fastener with onsite roll-forming capability.",
    category: "standing-seam",
    series: "Additional Profiles",
    meta: [
      { key: "Fastener", value: "Concealed snap" },
      { key: "Seam Height", value: "1\"" },
      { key: "Cool Roof", value: "Yes", status: "yes" },
      { key: "Roll-Form Onsite", value: "Yes", status: "yes" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SLZ-1000.jpg",
    links: [
      { label: "SLZ-1000 Sale Sheet", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SLZ-1000_Sale_Sheet.pdf", type: "PDF" },
      { label: "SLZ-1000 Specifications", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SLZ1000_Specifications.pdf", type: "PDF" },
      { label: "Details & Installation Guide", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SLZ1000_Detail-and-Install-Guide-Residential.pdf", type: "PDF" },
      { label: "CAD Files", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SLZ1000_Residential.zip", type: "ZIP" },
    ],
  },
  {
    id: "cs-100",
    code: "CS-100",
    name: "Clip Seam 1\"",
    bestFor: "Architectural, commercial applications",
    description: "Clip-based concealed fastener system. Allows for thermal expansion on longer panel runs.",
    category: "standing-seam",
    series: "Additional Profiles",
    meta: [
      { key: "Fastener", value: "Concealed clip" },
      { key: "Seam Height", value: "1\"" },
      { key: "Cool Roof", value: "Yes", status: "yes" },
      { key: "Roll-Form Onsite", value: "Yes", status: "yes" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CS-100.jpg",
    links: [
      { label: "CS-100 Sale Sheet", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CS-100_Sale_Sheet.pdf", type: "PDF" },
      { label: "CS-100 Specifications", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/SLZ1000_Specifications.pdf", type: "PDF" },
      { label: "Details & Installation Guide", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CS100_Detail-and-Install-Guide-Residential.pdf", type: "PDF" },
      { label: "CAD Files", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CS100_CAD_Residential.zip", type: "ZIP" },
    ],
  },
  {
    id: "vintage",
    code: "VINTAGE",
    name: "Vintage Standing Seam",
    bestFor: "Traditional & heritage residential",
    description: "Classic standing seam aesthetic with a traditional profile. Available in Cool Roof colors and bare metals.",
    category: "standing-seam",
    series: "Additional Profiles",
    meta: [
      { key: "Fastener", value: "Concealed" },
      { key: "Profile", value: "Confirm", status: "confirm" },
      { key: "Cool Roof", value: "Yes", status: "yes" },
      { key: "Roll-Form Onsite", value: "Confirm", status: "confirm" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-2000.jpg",
    links: [
      { label: "Vintage Brochure", url: "#", type: "PDF" },
      { label: "Cool Metal Roofing Brochure", url: "#", type: "PDF" },
    ],
  },
  // ── Exposed Fastener ──
  {
    id: "tfr-36",
    code: "TFR-36",
    name: "Trapezoidal Panel — TFR-36",
    bestFor: "Commercial, industrial, agricultural — roof & wall",
    description: "36\" coverage trapezoidal rib panel. Matches polycarbonate skylights. Full trim packages and flat stock available for roof and wall applications.",
    category: "exposed-fastener",
    meta: [
      { key: "Fastener", value: "Exposed" },
      { key: "Coverage Width", value: "36\"" },
      { key: "Material", value: "Steel · Alum" },
      { key: "Cool Roof", value: "Yes", status: "yes" },
      { key: "Skylight Match", value: "Yes", status: "yes" },
      { key: "Wall Use", value: "Yes", status: "yes" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/TFR.jpg",
    links: [
      { label: "TFR-36 Sale Sheet", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/TFR-36_Panel_Sale_Sheet.pdf", type: "PDF" },
      { label: "PBR-TFR Installation Guide", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/PBR-TFR_Guide.pdf", type: "PDF" },
    ],
    showLocation: true,
  },
  {
    id: "pbr",
    code: "PBR",
    name: "Purlin Bearing Rib Panel",
    bestFor: "Agricultural, warehouse, structural applications",
    description: "Industry-standard PBR panel with structural overlap design for fast field assembly on agricultural and light industrial buildings.",
    category: "exposed-fastener",
    meta: [
      { key: "Fastener", value: "Exposed" },
      { key: "Coverage Width", value: "36\"" },
      { key: "Material", value: "Steel" },
      { key: "Structural Overlap", value: "Yes", status: "yes" },
      { key: "Cool Roof", value: "Confirm", status: "confirm" },
      { key: "Wall Use", value: "Yes", status: "yes" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/PBR.jpg",
    links: [
      { label: "PBR Sale Sheet", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/PBR_Panel_Sale_Sheet.pdf", type: "PDF" },
      { label: "PBR-TFR Installation Guide", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/PBR-TFR_Guide.pdf", type: "PDF" },
    ],
    showLocation: true,
  },
  // ── Shakes & Shingles ──
  {
    id: "shakes",
    code: "SHAKES",
    name: "Aluminum Shakes & Shingles",
    bestFor: "Traditional residential, fire-resistant",
    description: "Rustic wood-shake aesthetic in aluminum. Interlocks on all four sides for a weather-tight seal. Rated to 120 mph wind. Made from 98% post-consumer recycled metal. Cool Roof paint system standard.",
    category: "shakes-shingles",
    meta: [
      { key: "Wind Rating", value: "120 mph", status: "yes" },
      { key: "Recycled Content", value: "98%", status: "yes" },
      { key: "Cool Roof", value: "Yes", status: "yes" },
      { key: "Fire Resistant", value: "Yes", status: "yes" },
    ],
    image: "",
    links: [],
  },
  // ── Corrugated & Wall ──
  {
    id: "corrugated",
    code: "CORRUGATED",
    name: "Corrugated Metal Panel",
    bestFor: "Agricultural, residential accent, light commercial",
    description: "Traditional corrugated profile for roof and wall applications. Used in agricultural buildings and residential accent walls. Full color range available.",
    category: "corrugated",
    meta: [
      { key: "Fastener", value: "Exposed" },
      { key: "Coverage Width", value: "Confirm", status: "confirm" },
      { key: "Material", value: "Steel · Alum" },
      { key: "Roof Use", value: "Yes", status: "yes" },
      { key: "Wall Use", value: "Yes", status: "yes" },
      { key: "Cool Roof", value: "Confirm", status: "confirm" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/corrugated-1.jpg",
    links: [
      { label: "Corrugated Panels Sale Sheet", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/Corrugated_Panels_Sale_Sheet.pdf", type: "PDF" },
      { label: "Contour Install Guide", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/Contour_Install_Guide.pdf", type: "PDF" },
    ],
    showLocation: true,
  },
];

export interface ApplicationCard {
  title: string;
  subtitle: string;
  products: string;
  image: string;
}

export const applications: ApplicationCard[] = [
  {
    title: "Residential",
    subtitle: "Single-family, custom homes, multi-family",
    products: "CB-2000 · CB-150 · SL series · Copper",
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-2000.jpg",
  },
  {
    title: "Commercial",
    subtitle: "Retail, office, mixed-use, light industrial",
    products: "CB-2000 · TFR-36 · PBR",
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/TFR.jpg",
  },
  {
    title: "Agricultural / Industrial",
    subtitle: "Barns, warehouses, equestrian, storage",
    products: "TFR-36 · PBR · Corrugated",
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/PBR.jpg",
  },
  {
    title: "Institutional / Civic",
    subtitle: "Schools, government, cultural, healthcare",
    products: "CB-2000 · CS-100",
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CS-100.jpg",
  },
];
