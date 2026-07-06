import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WASTE_STREAMS } from "../data";
import { Cpu, Droplet, Battery, Fuel, Disc, Info, ArrowRight } from "lucide-react";

const iconMap: Record<string, any> = {
  Cpu: Cpu,
  Droplet: Droplet,
  Battery: Battery,
  Fuel: Fuel,
  Disc: Disc,
};

export default function WasteStreams() {
  const [activeStreamId, setActiveStreamId] = useState<string>("plastic");
  const activeStream = WASTE_STREAMS.find((w) => w.id === activeStreamId) || WASTE_STREAMS[0];

  return (
    <section className="py-20 bg-white" id="waste-streams">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest font-mono">CPCB CLASSIFIED STREAMS</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Comprehensive <span className="text-emerald-600">Multi-Waste Expertise</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            We handle Extended Producer Responsibility across multiple categories governed by distinct environmental rules. Tap a category to view sub-items and standard calculations.
          </p>
        </div>

        {/* Tab Buttons / Visual Selector */}
        <div className="flex flex-wrap gap-3 justify-center mb-12" id="waste-tabs-container">
          {WASTE_STREAMS.map((stream) => {
            const IconComponent = iconMap[stream.iconName];
            const isSelected = stream.id === activeStreamId;
            return (
              <button
                key={stream.id}
                onClick={() => setActiveStreamId(stream.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-2xl text-sm font-semibold tracking-wide transition-all duration-300 border ${
                  isSelected
                    ? `${stream.bgColor} ${stream.textColor} border-emerald-500 shadow-md shadow-emerald-100 scale-102`
                    : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-900"
                }`}
                id={`waste-tab-${stream.id}`}
              >
                <IconComponent className="h-4 w-4" />
                <span>{stream.name}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Stream Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStreamId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-12 gap-8 items-stretch"
            id="waste-details-panel"
          >
            {/* Left Content Column - Summary, Rules & Standard formulas */}
            <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
              {/* background graphic blob */}
              <div className="absolute -bottom-10 -right-10 h-44 w-44 bg-emerald-500/10 rounded-full blur-2xl" />

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/30">
                    TARGET CATEGORY
                  </span>
                  <h3 className="font-display text-3xl font-extrabold text-white mt-3">
                    {activeStream.name}
                  </h3>
                  <p className="text-emerald-300 font-mono text-xs font-semibold mt-1">
                    {activeStream.tagline}
                  </p>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed pt-2 border-t border-white/10">
                  {activeStream.description}
                </p>

                {/* Compliance Box */}
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-2">
                  <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider font-mono">
                    <Info className="h-3.5 w-3.5" />
                    <span>CPCB Compliance Standard</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {activeStream.complianceStandard}
                  </p>
                </div>
              </div>

              {/* Target Formula Block */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider font-mono text-emerald-400">
                  Target Planning Formula
                </div>
                <p className="text-xs text-gray-400 italic">
                  {activeStream.targetFormula}
                </p>
              </div>
            </div>

            {/* Right Subcategories Grid */}
            <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-gray-50 border border-gray-200/80">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <h4 className="font-display text-lg font-bold text-gray-900">
                    Regulated Sub-Categories
                  </h4>
                  <span className="text-xs font-semibold text-gray-500">
                    {activeStream.subCategories.length} Categories Monitored
                  </span>
                </div>

                {/* Subcategory Cards Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeStream.subCategories.map((sub, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white rounded-2xl border border-gray-200/50 hover:border-emerald-500/20 shadow-sm transition-all duration-200 flex flex-col justify-between h-full"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="h-2 w-2 rounded-full bg-emerald-500" />
                          <h5 className="text-sm font-bold text-gray-900 font-display">
                            {sub.name}
                          </h5>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {sub.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick calculator bridge */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-gray-500 leading-relaxed max-w-md">
                  Have business sales figures ready? Calculate your exact CPCB volume obligations for this category in our Interactive EPR Target Calculator.
                </div>
                <button
                  onClick={() => {
                    const calcElement = document.getElementById("calculator");
                    if (calcElement) {
                      calcElement.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="flex items-center space-x-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 font-mono uppercase bg-emerald-50 hover:bg-emerald-100/80 px-4 py-2.5 rounded-xl transition-all duration-200"
                >
                  <span>Go to Calculator</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
