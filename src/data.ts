import { WasteStream, ComplianceStep } from "./types";

export const WASTE_STREAMS: WasteStream[] = [
  {
    id: "plastic",
    name: "Plastic Waste",
    iconName: "Droplet",
    tagline: "Rigid, Flexible & MLP Solutions",
    bgColor: "bg-emerald-50 text-emerald-900",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-200 hover:border-emerald-500",
    description: "Extended Producer Responsibility for plastic packaging. Covers producers, importers, and brand owners (PIBOs) under the PWM Rules.",
    subCategories: [
      { name: "Rigid Plastics", description: "PET bottles, high-density polyethylene (HDPE) containers, polypropylene (PP) tubs, and hard plastic packaging." },
      { name: "Flexible & Multilayer Plastics (MLP)", description: "Chips packets, laminated pouches, grocery wraps, food wrappers, and multi-layered flexible materials." },
      { name: "Packaging Plastics", description: "Primary packaging (direct product wrap), secondary packing, and tertiary transit pallets or wraps." },
      { name: "Post-consumer Plastic Waste", description: "Household and municipal plastic waste sorted and recycled into industrial-grade plastic granules." }
    ],
    complianceStandard: "Mandated under CPCB Plastic Waste Management (PWM) Rules. Annual return submissions must be completed on the centralized portal.",
    targetFormula: "Calculated based on the average weight of plastic packaging introduced into the market in the preceding two financial years.",
    baseEprRate: 70 // 70% average target for current financial year
  },
  {
    id: "ewaste",
    name: "E-Waste",
    iconName: "Cpu",
    tagline: "Electronics & IT Telecom Asset Lifecycle",
    bgColor: "bg-cyan-50 text-cyan-900",
    textColor: "text-cyan-600",
    borderColor: "border-cyan-200 hover:border-cyan-500",
    description: "EPR compliance for consumer electricals, IT peripherals, and telecommunication hardware to support closed-loop material recovery.",
    subCategories: [
      { name: "Consumer Electronics", description: "Smartphones, televisions, personal computers, sound systems, and video consoles." },
      { name: "IT & Telecom Equipment", description: "Mainframes, server racks, network switches, routers, fiber hardware, and routers." },
      { name: "Household Electrical Appliances", description: "Refrigerators, washing machines, microwaves, air conditioners, and kitchen appliances." },
      { name: "Electronic Components & Peripherals", description: "Printed circuit boards (PCBs), logic boards, monitors, printers, scanners, and input devices." }
    ],
    complianceStandard: "Governed by the E-Waste (Management) Rules. Requires verified recycler tie-ups and EPR credit trading on the CPCB portal.",
    targetFormula: "Calculated as a specified percentage (typically 60% for recent years) of the average quantity of electrical equipment sold in previous years.",
    baseEprRate: 60 // 60% standard CPCB target
  },
  {
    id: "battery",
    name: "Battery Waste",
    iconName: "Battery",
    tagline: "Lithium-Ion & Industrial Cell Compliance",
    bgColor: "bg-amber-50 text-amber-900",
    textColor: "text-amber-600",
    borderColor: "border-amber-200 hover:border-amber-500",
    description: "Comprehensive recovery targets for portable, electric vehicle (EV), and industrial lead-acid or lithium batteries.",
    subCategories: [
      { name: "Portable Batteries", description: "AA, AAA, alkaline, button cell batteries used in hand-held devices and home utilities." },
      { name: "Lithium-ion Batteries", description: "High-density energy cells from EVs, laptops, smartphones, and energy storage systems." },
      { name: "Lead-acid Batteries", description: "Automotive starting batteries, UPS backup systems, and heavy industrial machinery power cells." },
      { name: "Nickel-based Batteries", description: "Nickel-Cadmium (NiCd) and Nickel-Metal Hydride (NiMH) rechargeable cells." }
    ],
    complianceStandard: "Governed by the Battery Waste Management (BWM) Rules. Targets emphasize absolute heavy metal recovery and cobalt/lithium extraction.",
    targetFormula: "Determined based on the total chemistry-specific battery weight placed on the domestic market in preceding cycles.",
    baseEprRate: 50 // 50% battery waste collection target
  },
  {
    id: "usedoil",
    name: "Used Oil",
    iconName: "Fuel",
    tagline: "Industrial & Lubricating Lubrication Management",
    bgColor: "bg-red-50 text-red-900",
    textColor: "text-red-600",
    borderColor: "border-red-200 hover:border-red-500",
    description: "Regulations tracking the lifecycle, refining, and re-processing of hazardous industrial lubricants and machinery oils.",
    subCategories: [
      { name: "Used Lubricating Oil", description: "Engine oils, gear oils, and transmission fluids drained from commercial and domestic vehicles." },
      { name: "Industrial Oils", description: "Hydraulic fluids, cutting oils, metalworking fluids, and machinery lubrication fluids." },
      { name: "Transformer Oil", description: "High-stability insulating and cooling oils drained from electric grid transformers and substations." },
      { name: "Automotive & Machinery Waste Oil", description: "Mixed workshop oily waste, filter residues, and industrial sumps." }
    ],
    complianceStandard: "EPR guidelines for Used Oil require recycling through registered re-refiners to produce high-grade base oils, reducing raw oil imports.",
    targetFormula: "EPR targets correspond to a specific percentage of the total lubricating oil imported or manufactured in previous fiscal years.",
    baseEprRate: 40 // 40% target starting for newer regulations
  },
  {
    id: "tyre",
    name: "Tyre Waste",
    iconName: "Disc",
    tagline: "End-of-Life Tyres (ELT) & Rubber Crumb Crushing",
    bgColor: "bg-slate-100 text-slate-900",
    textColor: "text-slate-600",
    borderColor: "border-slate-200 hover:border-slate-500",
    description: "Fulfillment pathways for scrap passenger, commercial, and off-the-road (OTR) tyres into rubber crumb, pyrolytic oil, or reclaimed rubber.",
    subCategories: [
      { name: "End-of-life Tyres (ELTs)", description: "Dismounted, worn-out tyres that can no longer serve vehicle operations safely." },
      { name: "Scrap Tyres", description: "Defective tyres, manufacturing discards, and retreading waste materials." },
      { name: "Shredded Tyre / Crumb Rubber", description: "Granulated tyre rubber used for athletic tracks, playground safety tiles, and asphalt mixing." },
      { name: "Tyre-derived Material for Recovery", description: "Reclaimed rubber sheets, steel cord wire extraction, and pyrolysis-derived carbon black." }
    ],
    complianceStandard: "Administered under Hazardous Waste (Management) Amendment Rules. Requires purchasing certificates from registered tyre recyclers.",
    targetFormula: "Calculated based on the overall weight of tyres manufactured or imported in the preceding financial cycle.",
    baseEprRate: 100 // 100% equivalent EPR target calculations over progressive years
  }
];

export const COMPLIANCE_STEPS: ComplianceStep[] = [
  {
    step: 1,
    title: "EPR Assessment & Applicability Review",
    description: "Our compliance experts assess your product portfolio, sales history, and waste stream volumes to accurately determine your CPCB EPR obligations, category codes, and target years.",
    highlight: "Target Scoping"
  },
  {
    step: 2,
    title: "Registration & Portal Support",
    description: "We handle end-to-end registration on the centralized online CPCB/SPCB portal. We assemble required documentation, validate data formats, and coordinate with regulatory officers for prompt approvals.",
    highlight: "Portal Approval"
  },
  {
    step: 3,
    title: "EPR Target Planning & Strategy",
    description: "We draft a strategic compliance roadmap based on Indian environmental laws. We optimize target plans, forecast liabilities, and minimize purchase overheads with planned credit allocations.",
    highlight: "Liability Minimization"
  },
  {
    step: 4,
    title: "Recycler Due Diligence & Onboarding",
    description: "We connect you with independently audited, SPCB-authorized waste processing facilities. We execute compliance verification to eliminate secondary legal and operational liabilities.",
    highlight: "Verified Partnerships"
  },
  {
    step: 5,
    title: "Logistics, Recycling & Credit Purchase",
    description: "Our green logistics team tracks physical waste channelization. We facilitate official recycling transactions and secure verified EPR credits transferred directly to your CPCB account.",
    highlight: "Real-Time Credits"
  },
  {
    step: 6,
    title: "Documentation, Filings & Audit Support",
    description: "We manage progressive annual reports and quarterly filings. We organize a complete audit trail (invoices, recycler manifests, credit certificates) to ensure trouble-free audits.",
    highlight: "100% Audit Shield"
  }
];
