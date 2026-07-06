import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Truck, Users2, ShieldAlert, Award, FileSpreadsheet, ChevronRight, X } from "lucide-react";

interface Service {
  id: string;
  num: string;
  title: string;
  icon: any;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  bullets: string[];
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: "audit",
      num: "01",
      title: "Recycler Due Diligence & EPR Audit",
      icon: Search,
      tagline: "Rigorous legal & physical verification",
      shortDesc: "Comprehensive vetting of recycling partners to ensure complete compliance, safe handling practices, and legitimate operations.",
      longDesc: "When purchasing EPR credits, any recycler deficiency turns into your regulatory liability. Our independently certified auditors perform exhaustive physical, operational, and financial diligence on plastic and electronic waste recyclers before any credits are generated.",
      bullets: [
        "In-person operational capability audits & plant inspection.",
        "CPCB / SPCB license validation & capacity verification.",
        "Detailed traceability audits (mass balance analysis).",
        "Assurance reports matching physical flow with certificate output."
      ]
    },
    {
      id: "logistics",
      num: "02",
      title: "Waste Collection & Logistics Coordination",
      icon: Truck,
      tagline: "Traceable green logistics chain",
      shortDesc: "End-to-end management of dry recyclable waste pick-ups, reverse logistics, and transport manifests with complete documentation trails.",
      longDesc: "We synchronize physical reverse supply chains to transport material from consumer nodes directly to authorized recycling destinations, tracking the entire path.",
      bullets: [
        "Consolidated pick-ups for Plastic, E-Waste, and Lead-acid batteries.",
        "Form 6 and CPCB manifest generation & verification.",
        "Secure storage, sortation, and co-processing routing.",
        "Real-time GPS tracking of waste shipping cycles."
      ]
    },
    {
      id: "aaas",
      num: "03",
      title: "Awareness as a Service (AaaS)",
      icon: Users2,
      tagline: "Engage consumers, fulfill compliance obligations",
      shortDesc: "Mandatory CPCB citizen outreach and dry waste collection campaigns designed and implemented under your company's banner.",
      longDesc: "Environmental guidelines mandate that manufacturers promote and finance awareness campaigns on waste collection. Our AaaS handles consumer drives and corporate workshops.",
      bullets: [
        "Custom consumer collection drives with physical banners.",
        "E-waste disposal workshops for educational & corporate institutes.",
        "Digital publicity materials and impact reports.",
        "CPCB audit-ready proof of awareness spending & activities."
      ]
    },
    {
      id: "circularity",
      num: "04",
      title: "Corporate Sustainability & Circularity",
      icon: Award,
      tagline: "Transforming liabilities into circular assets",
      shortDesc: "Custom action plans to re-incorporate recycled plastic granules, metals, and tyre crumbs back into your product packaging lines.",
      longDesc: "Regulatory compliance is just the baseline. We help forward-thinking brands close the loop by establishing direct take-back programs that transform post-consumer trash into high-quality circular products.",
      bullets: [
        "Packaging redesign using PCR (Post-Consumer Recycled) polymers.",
        "Closed-loop design for lithium battery packs & electronics.",
        "Life Cycle Assessment (LCA) profiling & sustainability scoring.",
        "Zero Waste to Landfill consulting & ISO 14044 support."
      ]
    },
    {
      id: "legal",
      num: "05",
      title: "Compliance & Legal Advisory",
      icon: ShieldAlert,
      tagline: "Proactive regulatory shield for PIBOs",
      shortDesc: "Continuous regulatory monitoring, legal review, dispute mitigation, and direct filings with Central & State Pollution Control Boards.",
      longDesc: "Environmental rules in India change quickly. Our regulatory team reviews policy amendments instantly, keeping you updated before penalties, notice letters, or asset freezes can occur.",
      bullets: [
        "CPCB notice assessment & expert dispute resolution.",
        "Filing of state-specific SPCB authorizations.",
        "Annual and quarterly return checking & validation.",
        "Regular regulatory briefing sessions with senior counsel."
      ]
    },
    {
      id: "s2p",
      num: "06",
      title: "Source-to-Pay EPR Credit Module",
      icon: FileSpreadsheet,
      tagline: "Digital certificate tracking system",
      shortDesc: "Secure portal for client operations. Match targets, compare credit prices, manage invoices, and track transfers securely.",
      longDesc: "No more manually managing spreadsheets for your compliance credits. Our proprietary EPR Module organizes purchases, verifies invoice matches, and updates portal credit balances.",
      bullets: [
        "Centralized target tracking by waste stream (E-waste, Plastic, Tyre).",
        "Direct recycler pricing comparisons & invoice matching.",
        "Automated PDF document compilation for faster audits.",
        "Notification alerts for upcoming portal filing deadlines."
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest font-mono">OUR EXPERTISE-DRIVEN TEAM</div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Comprehensive <span className="text-emerald-600">EPR Solutions</span> Under One Roof
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            From registration and recycler diligence to credit trading and annual audits, we provide a complete, risk-free compliance solution tailored for Indian enterprises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setSelectedService(service)}
                className="bg-white p-8 rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full relative overflow-hidden"
              >
                {/* Visual Number Backdrop */}
                <div className="absolute top-4 right-6 text-5xl font-extrabold font-display text-gray-50 group-hover:text-emerald-50/70 transition-colors duration-300 -z-0">
                  {service.num}
                </div>

                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Text */}
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-emerald-700 tracking-wide font-mono uppercase bg-emerald-50/50 px-2 py-0.5 rounded inline-block">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed pt-2">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="relative z-10 flex items-center text-xs font-semibold text-emerald-600 hover:text-emerald-700 mt-6 pt-4 border-t border-gray-100 group-hover:border-emerald-100 transition-colors duration-200">
                  <span>Learn more about service</span>
                  <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Dialog for Service Details */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm" id="service-modal">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl border border-gray-100 overflow-hidden relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-1.5 rounded-full bg-gray-100 text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="space-y-6">
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-600 uppercase tracking-widest font-mono">
                    <span>SERVICE {selectedService.num}</span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900">
                      {selectedService.title}
                    </h3>
                    <p className="text-sm font-semibold text-emerald-700 tracking-wide font-mono uppercase">
                      {selectedService.tagline}
                    </p>
                  </div>

                  {/* Deep Description */}
                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    <p>{selectedService.longDesc}</p>
                    <p className="font-semibold text-gray-800">Key Deliverables & Capabilities:</p>
                    <ul className="grid sm:grid-cols-2 gap-3 pt-1">
                      {selectedService.bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span className="text-xs text-gray-700">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom consulting trigger */}
                  <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 justify-end">
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        const calcElement = document.getElementById("calculator");
                        if (calcElement) {
                          calcElement.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold transition-all duration-200"
                    >
                      Enquire for pricing
                    </button>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-sm font-semibold transition-all duration-200"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
