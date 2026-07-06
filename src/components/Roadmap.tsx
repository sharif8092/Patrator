import { motion } from "motion/react";
import { COMPLIANCE_STEPS } from "../data";
import { CheckCircle2, TrendingUp, Calendar, SearchCheck, Award, Shield } from "lucide-react";

const stepIcons = [
  SearchCheck,
  Calendar,
  TrendingUp,
  Award,
  CheckCircle2,
  Shield
];

export default function Roadmap() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100" id="roadmap">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest font-mono">CPCB RECOGNIZED STEPS</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            How We Enable <span className="text-emerald-600">End-to-End Compliance</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Our structured, 6-step compliance framework eliminates regulatory risk, secures verified recycling capacity, and guarantees clean audits on the CPCB portal.
          </p>
        </div>

        {/* Visual Stepper Roadmap - Alternating Layout */}
        <div className="relative max-w-4xl mx-auto" id="roadmap-timeline">
          {/* Central Connecting vertical line (desktop only) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-emerald-100 via-emerald-400 to-teal-100 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {COMPLIANCE_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx];
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  } relative`}
                >
                  {/* Circle Step Number Indicator */}
                  <div className="absolute md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-20 mb-4 md:mb-0">
                    <div className="h-12 w-12 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center shadow-md shadow-emerald-50">
                      <Icon className="h-5 w-5 text-emerald-600" />
                    </div>
                  </div>

                  {/* Left / Right Card Container */}
                  <div className="w-full md:w-[45%] mt-6 md:mt-0">
                    <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                      {/* Sub-badge */}
                      <span className="text-[10px] font-bold font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        Step {step.step}: {step.highlight}
                      </span>

                      {/* Header */}
                      <h3 className="font-display text-lg font-bold text-gray-900 mt-2 mb-3">
                        {step.title}
                      </h3>

                      {/* Desc */}
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer (desktop only) */}
                  <div className="hidden md:block w-[10%]" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
