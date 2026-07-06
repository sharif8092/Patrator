import { motion } from "motion/react";
import { ArrowRight, Calculator, Sparkles, ShieldCheck, Globe, CheckCircle2, TrendingUp, Leaf } from "lucide-react";

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

export default function Hero({ setActiveTab }: HeroProps) {
  const handleScroll = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-20 md:pt-36 md:pb-28" id="hero-section">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 -z-10" />
      <div className="absolute top-10 right-[10%] -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-emerald-200/40 to-teal-100/30 blur-3xl" />
      <div className="absolute bottom-10 left-[5%] -z-10 h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-cyan-100/30 to-emerald-50/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-800 rounded-full text-xs font-bold tracking-wide border border-emerald-100/80 shadow-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
              <span>Verified CPCB Portal EPR Partner</span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.05]"
              >
                Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">EPR Compliance</span> <br className="hidden sm:inline" />
                With <span className="underline decoration-teal-500/30 decoration-wavy">Patrator</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-gray-600 max-w-xl leading-relaxed font-medium"
              >
                Patrator simplifies Extended Producer Responsibility (EPR) under India’s CPCB guidelines. Secure verified credits, automate filing, and remove audit risk with a trusted compliance partner.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => handleScroll("calculator")}
                className="flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-bold tracking-wide shadow-lg shadow-emerald-600/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Calculator className="h-5 w-5" />
                <span>Calculate Target & Obligation</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200" />
              </button>

              <button
                onClick={() => handleScroll("calculator")}
                className="flex items-center justify-center gap-2 px-7 py-4 border border-slate-300 bg-white text-slate-900 rounded-xl font-bold tracking-wide shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <ArrowRight className="h-5 w-5 text-emerald-600" />
                <span>Request Compliance Plan</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-100"
            >
              <div className="space-y-1">
                <div className="text-3xl font-extrabold font-display text-emerald-600 tracking-tight">100%</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider font-mono">CPCB Audit Protected</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-extrabold font-display text-emerald-600 tracking-tight">PAN</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider font-mono">India Recyclers</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-extrabold font-display text-emerald-600 tracking-tight">Zero</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider font-mono">Filing Hassles</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 bg-slate-900 text-white p-7 rounded-[2.5rem] shadow-2xl border-4 border-slate-800 overflow-hidden">
              <div className="absolute -top-12 -right-12 h-44 w-44 bg-emerald-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-12 -left-12 h-44 w-44 bg-teal-500/10 rounded-full blur-3xl" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg text-emerald-400 border border-emerald-500/30">
                    <Leaf className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold tracking-wider text-slate-100 uppercase">Patrator Complishield™</h4>
                    <p className="text-[9px] font-mono text-emerald-400 font-bold">REAL-TIME PORTAL MONITOR</p>
                  </div>
                </div>
                <Globe className="h-4 w-4 text-emerald-400 animate-spin [animation-duration:8s]" />
              </div>

              <div className="space-y-5">
                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Plastic Waste Stream
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 font-bold">Category II & IV</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>EPR Target Complete</span>
                    <span className="font-bold text-white">82%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full" style={{ width: "82%" }} />
                  </div>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 hover:border-teal-500/30 transition-all duration-300">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-bold text-teal-300 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                      E-Waste Obligation
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 font-bold">ITW & Consumer Elec.</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Certificates Procured</span>
                    <span className="font-bold text-white">100%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-400 h-full rounded-full" style={{ width: "100%" }} />
                  </div>
                </div>

                <div className="bg-slate-950/40 p-4 rounded-2xl border border-slate-800/60">
                  <span className="text-[10px] font-mono font-bold text-slate-500 block mb-2 uppercase tracking-widest">LIVE ACTION FEED</span>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center space-x-2 text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="font-medium">1,200 MT Credits Procured</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-300">
                      <TrendingUp className="h-3.5 w-3.5 text-teal-400 flex-shrink-0" />
                      <span className="font-medium">Filing submitted to CPCB Desk</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono font-bold">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>AUDIT GUARANTEED PLAN</span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded">CPCB 2026</span>
              </div>
            </div>

            <div className="absolute top-8 left-8 -z-10 h-full w-full bg-gradient-to-tr from-emerald-600/20 to-teal-600/10 rounded-[2.5rem] blur-xl" />
            <div className="absolute -bottom-4 -left-4 -z-20 h-full w-full bg-slate-100 rounded-[2.5rem]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
