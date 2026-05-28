import heroOffshore from "@/assets/malin/hero-offshore.jpg";
import inspection from "@/assets/malin/inspection.jpg";
import sectorOilgas from "@/assets/malin/sector-oilgas.jpg";
import sectorRenewables from "@/assets/malin/sector-renewables.jpg";
import sectorCivil from "@/assets/malin/sector-civil.jpg";
import caseNuclear from "@/assets/malin/case-nuclear.jpg";
import caseShipyard from "@/assets/malin/case-shipyard.jpg";
import caseVessel from "@/assets/malin/case-vessel.jpg";
import heavyTransport from "@/assets/malin/heavy-transport.jpg";
import transportEscort from "@/assets/malin/transport-escort.jpg";

export const images = {
  heroOffshore,
  inspection,
  sectorOilgas,
  sectorRenewables,
  sectorCivil,
  caseNuclear,
  caseShipyard,
  caseVessel,
  heavyTransport,
  transportEscort,
};

export type Capability = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  detail: string;
  image: string;
};

export const capabilities: Capability[] = [
  {
    slug: "engineering-consultancy",
    index: "01",
    title: "Engineering Consultancy",
    summary:
      "Naval architecture, structural and marine engineering brought in early — where the cost and programme of a project are still being shaped.",
    detail:
      "Our chartered engineers work alongside your team from feasibility through to detailed design, modelling complex structures, lifts and marine operations before steel is ever cut. Early engineering input is consistently the cheapest risk you will ever buy.",
    image: inspection,
  },
  {
    slug: "heavy-lift-transport",
    index: "02",
    title: "Heavy Lift, Lift & Transportation",
    summary:
      "Moving and lifting the largest, heaviest and most awkward structures by land, quay and sea — planned to the millimetre.",
    detail:
      "From SPMT transport and load-out to ballasted marine operations and tandem lifts, we plan and execute transportation scopes where there is no margin for error, with full method statements, ground-bearing analysis and marine warranty engagement.",
    image: heavyTransport,
  },
  {
    slug: "specialist-marine-equipment",
    index: "03",
    title: "Specialist Marine Equipment",
    summary:
      "Barges, deck equipment and marine spreads available and engineered for the job in hand.",
    detail:
      "We own and operate a fleet of marine assets and specialist equipment, supported by the engineering to deploy them safely. When the standard solution does not exist, we design and build it.",
    image: caseVessel,
  },
  {
    slug: "specialist-welding-manufacturing",
    index: "04",
    title: "Specialist Welding & Manufacturing",
    summary:
      "Coded welding and heavy fabrication to defence, nuclear and energy standards, under one roof.",
    detail:
      "Our fabrication facilities deliver complex, safety-critical weldments and structures with full traceability, NDT and quality assurance — the kind of work that has to be right the first time.",
    image: caseShipyard,
  },
  {
    slug: "marine-assets",
    index: "05",
    title: "Marine Assets",
    summary:
      "Quaysides, dry docks and deep-water infrastructure that let major projects happen at the water's edge.",
    detail:
      "Strategically located marine infrastructure gives your project direct access to deep water, heavy load-out capability and the space to assemble at scale.",
    image: caseNuclear,
  },
];

export type Sector = {
  slug: string;
  name: string;
  blurb: string;
  detail: string;
  image: string;
};

export const sectors: Sector[] = [
  {
    slug: "defence",
    name: "Defence",
    blurb: "Supporting naval vessel programmes and the wider defence supply chain.",
    detail:
      "We deliver engineering, fabrication and marine operations to naval and defence programmes where security, traceability and absolute reliability are non-negotiable.",
    image: caseShipyard,
  },
  {
    slug: "nuclear",
    name: "Nuclear",
    blurb: "Safety-critical scopes delivered under the most rigorous assurance.",
    detail:
      "From decommissioning to new build, we bring quality systems and engineering discipline suited to the highly regulated nuclear environment.",
    image: caseNuclear,
  },
  {
    slug: "renewable-energy",
    name: "Renewable Energy",
    blurb: "Fabrication and marine support for offshore wind and tidal.",
    detail:
      "We manufacture, load out and transport the large structures behind the energy transition, with the quayside capacity to match.",
    image: sectorRenewables,
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    blurb: "Decades of experience across upstream and decommissioning.",
    detail:
      "Heavy lift, transport and engineering consultancy for platforms, modules and subsea infrastructure across their full lifecycle.",
    image: sectorOilgas,
  },
  {
    slug: "civil-infrastructure",
    name: "Civil Infrastructure",
    blurb: "Major bridges, sea walls and marine civils at the water's edge.",
    detail:
      "We bring marine engineering and heavy transport to civil projects where the river or sea is part of the challenge.",
    image: sectorCivil,
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  scope: string;
  summary: string;
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "deep-water-module-lift",
    title: "Deep-water module lift",
    sector: "Nuclear",
    scope: "Engineering · Heavy lift",
    summary:
      "Engineering, ballasting and the controlled lift of a 1,200-tonne reactor-grade module into a dry dock, planned to the millimetre and executed without incident.",
    image: caseNuclear,
  },
  {
    slug: "naval-load-out",
    title: "Naval programme load-out",
    sector: "Defence",
    scope: "Marine assets · Transport",
    summary:
      "Quayside load-out and marine transportation of major vessel sections for a UK naval programme, coordinated across multiple yards.",
    image: caseShipyard,
  },
  {
    slug: "abnormal-load-transport",
    title: "Abnormal load transportation",
    sector: "Energy",
    scope: "SPMT · Route engineering",
    summary:
      "Self-propelled modular transport of an oversized energy structure across public roads under full escort, with bespoke route and ground-bearing engineering.",
    image: heavyTransport,
  },
  {
    slug: "ro-ro-vessel-support",
    title: "Ro-Ro vessel support",
    sector: "Marine",
    scope: "Marine equipment · Operations",
    summary:
      "Marine equipment and operational support for a large Ro-Ro vessel berthing and discharge programme at a deep-water facility.",
    image: caseVessel,
  },
  {
    slug: "offshore-foundations",
    title: "Offshore wind foundations",
    sector: "Renewable Energy",
    scope: "Fabrication · Load-out",
    summary:
      "Fabrication, storage and quayside load-out of jacket foundations for an offshore wind development.",
    image: sectorRenewables,
  },
  {
    slug: "escorted-heavy-move",
    title: "Escorted heavy move",
    sector: "Civil Infrastructure",
    scope: "Transport · Planning",
    summary:
      "Multi-day escorted transportation of a critical civil structure through constrained urban routes.",
    image: transportEscort,
  },
];

export const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case studies" },
  { to: "/sectors", label: "Sectors" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;