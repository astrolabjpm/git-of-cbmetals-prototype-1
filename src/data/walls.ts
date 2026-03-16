import type { ProductPanel, ProductMeta, ProductLink } from "./products";

export interface WallPanel {
  id: string;
  code: string;
  name: string;
  bestFor: string;
  description: string;
  meta: ProductMeta[];
  image: string;
  links: ProductLink[];
}

export const wallCategories = [
  { id: "wall-soffit", label: "Wall & Soffit Panels", subtitle: "WS-100 · Corrugated" },
  { id: "roof-wall", label: "Roof + Wall Panels", subtitle: "TFR-36 · PBR" },
  { id: "leed", label: "LEED & Sustainability", subtitle: "ULTRA-Cool® · Recycled content" },
  { id: "applications", label: "Applications", subtitle: "Commercial · Residential · Institutional" },
];

export const wallPanels: WallPanel[] = [
  {
    id: "ws-100",
    code: "WS-100",
    name: "WS-100 Wall & Soffit Panel",
    bestFor: "Residential soffit · Commercial wall cladding · Accent panels",
    description:
      '1" depth concealed fastener panel. Available with stiffening ribs for longer spans. Three surface textures — stucco embossed, smooth, or vented for soffit airflow. 12" standard panel width for clean, consistent reveal lines.',
    meta: [
      { key: "Panel depth", value: '1"' },
      { key: "Panel width", value: '12" standard' },
      { key: "Fastener", value: "Concealed", status: "yes" },
      { key: "Vented option", value: "Yes — soffit airflow", status: "yes" },
      { key: "Stiffening ribs", value: "Available", status: "yes" },
      { key: "Reveal", value: "WS-100 with Reveal", status: "yes" },
      { key: "Surface", value: "Stucco · Smooth · Vented" },
      { key: "LEED", value: "Eligible", status: "yes" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/corrugated-1.jpg",
    links: [
      { label: "WS-100 Sale Sheet", url: "#", type: "PDF" },
      { label: "WS-100 Specifications", url: "#", type: "PDF" },
      { label: "WS-100 with Reveal", url: "#", type: "PDF" },
      { label: "WS-100 Install Guide", url: "#", type: "PDF" },
    ],
  },
  {
    id: "corrugated-wall",
    code: "CORRUGATED WALL",
    name: "Corrugated Metal Wall Panel",
    bestFor: "Agricultural · Industrial · Contemporary residential accent",
    description:
      'Classic corrugated profile for wall applications. Available in 7/8" corrugation and 7.2" rib panels. Factory fabricated in bare Zincalume®, natural copper, and weathering steel (A606). PVDF and Kynar 500® coated versions available.',
    meta: [
      { key: "Profile", value: '7/8" corrugation' },
      { key: "Alt. profile", value: '7.2" rib' },
      { key: "Bare metal", value: "Zincalume · Cu · A606", status: "yes" },
      { key: "Coating", value: "PVDF · Kynar 500®", status: "yes" },
      { key: "LEED", value: "Eligible (coated)", status: "yes" },
      { key: "Recycled content", value: "25% recycled steel", status: "yes" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/corrugated-1.jpg",
    links: [
      { label: "Corrugated Panels Sale Sheet", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/Corrugated_Panels_Sale_Sheet.pdf", type: "PDF" },
      { label: "Contour Install Guide", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/Contour_Install_Guide.pdf", type: "PDF" },
    ],
  },
];

export const wallRoofPanels: WallPanel[] = [
  {
    id: "tfr-36-wall",
    code: "TFR-36",
    name: "TFR-36 Panel — Wall Application",
    bestFor: "Commercial walls · Agricultural · Industrial cladding",
    description:
      '36" coverage for fast wall installations. Anti-siphon groove for weather tightness. Installs over open framing or solid substrates. Polycarbonate skylight match available for translucent wall sections.',
    meta: [
      { key: "Coverage", value: '36"' },
      { key: "Fastener", value: "Exposed", status: "no" },
      { key: "Substrate", value: "Open or solid" },
      { key: "Skylight match", value: "Polycarbonate", status: "yes" },
      { key: "Coating", value: "SMP or Kynar" },
      { key: "Bare option", value: "Galv. · Galvalume", status: "yes" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/TFR.jpg",
    links: [
      { label: "TFR-36 Sale Sheet", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/TFR-36_Panel_Sale_Sheet.pdf", type: "PDF" },
      { label: "PBR-TFR Guide", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/PBR-TFR_Guide.pdf", type: "PDF" },
    ],
  },
  {
    id: "pbr-wall",
    code: "PBR",
    name: "PBR Panel — Wall Application",
    bestFor: "Agricultural · Heavy commercial · Industrial",
    description:
      "Purlin-bearing rib design provides structural side lap overlap for high wind and load conditions. Available in 26ga and 24ga — heavier gauge options for demanding wall applications.",
    meta: [
      { key: "Coverage", value: '36"' },
      { key: "Fastener", value: "Exposed", status: "no" },
      { key: "Gauge", value: "26ga or 24ga" },
      { key: "Substrate", value: "Open or solid" },
      { key: "Coating", value: "SMP or Kynar" },
      { key: "Bare option", value: "Galv. · Galvalume", status: "yes" },
    ],
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/PBR.jpg",
    links: [
      { label: "PBR Sale Sheet", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/PBR_Panel_Sale_Sheet.pdf", type: "PDF" },
      { label: "PBR-TFR Guide", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/PBR-TFR_Guide.pdf", type: "PDF" },
    ],
  },
];

export const wallApplications = [
  { title: "Commercial", subtitle: "WS-100 or Corrugated for exterior walls. Match to standing seam roofing in the same color system." },
  { title: "Agricultural", subtitle: "TFR-36 and PBR for barn and outbuilding walls. Bare Zincalume or coated in standard Ag colors." },
  { title: "Residential Soffit", subtitle: "WS-100 vented for soffit airflow. Matches roofing panel color. Eliminates wood rot on overhangs." },
  { title: "Institutional / LEED", subtitle: "ULTRA-Cool® corrugated for LEED-targeted projects. Documentation package available." },
];

export const leedCredentials = [
  "25% recycled steel content",
  "100% recyclable at end of life",
  "ULTRA-Cool® reflective coating",
  "Kynar 500® / Hylar® 5000 / Fluropon® pigments",
  "Meets LEED materials & resources criteria",
  "Marine-grade PVDF available (select products)",
];
