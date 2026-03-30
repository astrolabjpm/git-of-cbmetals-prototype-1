import type { ProductPanel, ProductMeta } from "@/data/products";
import countryManorImg from "@/assets/country-manor-shake-hero.jpg";
import oxfordShingleImg from "@/assets/oxford-shingle.jpg";
import oxfordSlateRockImg from "@/assets/oxford-slate-rock.jpg";
import kasselwoodImg from "@/assets/kasselwood.jpg";
import kasselshakeImg from "@/assets/kasselshake.jpg";

export const aluminumShingles: ProductPanel[] = [
  {
    id: "country-manor-shake",
    code: "COUNTRY MANOR SHAKE",
    name: "Country Manor Shake",
    bestFor: "Craftsman, mountain & traditional homes",
    description:
      "Aluminum shake with deep shadow lines and dimensional texture replicating hand-split cedar. Four-way interlocking panels with concealed fasteners. Optional foam backers for enhanced walkability.",
    category: "shakes-shingles",
    series: "Aluminum Shakes",
    meta: [
      { key: "Material", value: "Aluminum", status: "yes" },
      { key: "Fastener", value: "Concealed" },
      { key: "Coating", value: "Kynar 500 PVDF" },
      { key: "Wind Rating", value: "120 mph (UL580)", status: "yes" },
      { key: "Fire Rating", value: "Class A (UL790)", status: "yes" },
      { key: "Recycled", value: "Up to 99%", status: "yes" },
    ],
    image: countryManorImg,
    links: [],
    showLocation: true,
  },
  {
    id: "oxford-shingle",
    code: "OXFORD SHINGLE",
    name: "Oxford Shingle",
    bestFor: "Contemporary & traditional architecture",
    description:
      'Low-profile aluminum shingle with crisp, clean lines. Large 12" × 60" interlocking panels install quickly and form a watertight barrier. Available in 15 fade-resistant PVDF colors. Solar-ready compatible.',
    category: "shakes-shingles",
    series: "Aluminum Shakes",
    meta: [
      { key: "Material", value: 'Aluminum (.024")' },
      { key: "Fastener", value: "Concealed" },
      { key: "Panel Size", value: '12" × 60"' },
      { key: "Coating", value: "Kynar 500 PVDF" },
      { key: "Fire Rating", value: "Class A (UL790)", status: "yes" },
      { key: "Energy Savings", value: "Up to 25%", status: "yes" },
    ],
    image: oxfordShingleImg,
    links: [],
    showLocation: true,
  },
  {
    id: "oxford-slate-rock",
    code: "OXFORD SLATE ROCK",
    name: "Oxford Slate Rock",
    bestFor: "High-end homes seeking a natural slate look",
    description:
      "Same proven Oxford platform with a proprietary four-layer PVDF print coat from Valspar that replicates natural slate coloring and texture. Weighs approximately 40 lbs per 100 sq ft versus 650–4,000 lbs for real slate.",
    category: "shakes-shingles",
    series: "Aluminum Shakes",
    meta: [
      { key: "Material", value: 'Aluminum (.024")' },
      { key: "Fastener", value: "Concealed" },
      { key: "Coating", value: "4-layer PVDF print" },
      { key: "Weight", value: "~40 lbs / 100 sf" },
      { key: "Fire Rating", value: "Class A (UL790)", status: "yes" },
      { key: "Recycled", value: "Up to 95%", status: "yes" },
    ],
    image: oxfordSlateRockImg,
    links: [],
    showLocation: true,
  },
];

export const steelShingles: ProductPanel[] = [
  {
    id: "kasselwood",
    code: "KASSELWOOD",
    name: "KasselWood Steel Shingle",
    bestFor: "Residential — cedar, slate & shingle looks",
    description:
      "Dimensional steel shingle with solid and multi-hued color options including cedar and slate appearances. Low weight allows installation over many existing asphalt roofs where code allows.",
    category: "shakes-shingles",
    series: "Steel Shingles",
    meta: [
      { key: "Material", value: "G90 Galv. Steel" },
      { key: "Fastener", value: "Concealed" },
      { key: "Coating", value: "Kynar 500 PVDF" },
      { key: "Fire Rating", value: "Class A (UL790)", status: "yes" },
      { key: "Wind Rating", value: "120 mph (UL580)", status: "yes" },
      { key: "Impact", value: "Class IV (UL2218)", status: "yes" },
    ],
    image: kasselwoodImg,
    links: [],
    showLocation: true,
  },
  {
    id: "kasselshake",
    code: "KASSELSHAKE",
    name: "KasselShake Steel Shake",
    bestFor: "High-end residential — bold shake profile",
    description:
      'Precision-stamped .0165" G90 steel with deep texture replicating hand-split shakes. Available in ThermoBond PVDF powder finishes with custom multi-hued colors. FEVE powder coat option allows custom colors in joblot quantities.',
    category: "shakes-shingles",
    series: "Steel Shingles",
    meta: [
      { key: "Material", value: 'G90 Steel (.0165")' },
      { key: "Fastener", value: "Concealed" },
      { key: "Coating", value: "ThermoBond PVDF" },
      { key: "Fire Rating", value: "Class A (UL790)", status: "yes" },
      { key: "Wind Rating", value: "120 mph (UL580)", status: "yes" },
      { key: "Impact", value: "Class IV (UL2218)", status: "yes" },
    ],
    image: kasselshakeImg,
    links: [],
    showLocation: true,
  },
];
