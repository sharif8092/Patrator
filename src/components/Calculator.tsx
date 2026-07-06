import React, { useState, startTransition } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WASTE_STREAMS } from "../data";
import { Calculator, ArrowRight, ShieldCheck, Mail, Phone, Building2, User, Send, FileSpreadsheet } from "lucide-react";

const creditPrices: Record<string, number> = {
  plastic: 12000, // INR per Metric Ton
  ewaste: 25000,
  battery: 35000,
  usedoil: 18000,
  tyre: 15000,
};

export default function CalculatorComponent() {
  const [selectedStreamId, setSelectedStreamId] = useState<string>("plastic");
  const [avgVolumeInput, setAvgVolumeInput] = useState<string>("100");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form states
  const [clientName, setClientName] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientMessage, setClientMessage] = useState("");

  const selectedStream = WASTE_STREAMS.find(w => w.id === selectedStreamId) || WASTE_STREAMS[0];
  const avgVolume = Number(avgVolumeInput) || 0;
  const eprRate = selectedStream.baseEprRate;
  const targetVolume = (avgVolume * eprRate) / 100;
  const pricePerTon = creditPrices[selectedStreamId] || 15000;
  const estCost = targetVolume * pricePerTon;

  const handleStreamChange = (streamId: string) => {
    startTransition(() => {
      setSelectedStreamId(streamId);
    });
  };

  const handleSubmitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientCompany || !clientEmail) {
      alert("Please fill in Name, Company, and Email.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: clientName,
          company: clientCompany,
          email: clientEmail,
          phone: clientPhone,
          wasteType: selectedStream.name,
          avgVolume: avgVolume,
          calculatedTarget: targetVolume,
          message: clientMessage || `Calculated EPR target for ${avgVolume} MT of ${selectedStream.name}. Estimated target: ${targetVolume} MT.`,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        // Clear form
        setClientName("");
        setClientCompany("");
        setClientEmail("");
        setClientPhone("");
        setClientMessage("");
      } else {
        const err = await response.json();
        alert(`Submission failed: ${err.error || "Server error"}`);
      }
    } catch (error) {
      console.error("Inquiry submission error:", error);
      alert("Failed to submit inquiry. Check network connections.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest font-mono">CPCB LIABILITY FORECASTER</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Interactive <span className="text-emerald-600">EPR Target Calculator</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Estimate your annual CPCB recycling target volume obligations and get a credit procurement projection based on official Indian environmental regulations instantly.
          </p>
        </div>

        {/* Calculator Main Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch" id="calculator-inner-grid">
          
          {/* Left Inputs Column */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gray-50 border border-gray-200/80 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2.5 pb-4 border-b border-gray-200">
                <Calculator className="h-5 w-5 text-emerald-600" />
                <h3 className="font-display text-lg font-bold text-gray-900">Configure Sales Volume</h3>
              </div>

              {/* Waste Stream Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 font-mono">
                  1. Waste Category Code
                </label>
                <select
                  value={selectedStreamId}
                  onChange={(e) => handleStreamChange(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-800 transition-all duration-200 focus:border-emerald-500 cursor-pointer"
                >
                  {WASTE_STREAMS.map(stream => (
                    <option key={stream.id} value={stream.id}>
                      {stream.name} (EPR Target: {stream.baseEprRate}%)
                    </option>
                  ))}
                </select>
              </div>

              {/* Volume input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 font-mono flex justify-between">
                  <span>2. Previous Year Sales / Production</span>
                  <span className="text-emerald-600">METRIC TONS (MT)</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g. 150"
                    value={avgVolumeInput}
                    onChange={(e) => setAvgVolumeInput(e.target.value)}
                    className="w-full pl-4 pr-16 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 transition-all duration-200 focus:border-emerald-500"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs font-mono font-bold text-gray-400">
                    MT
                  </div>
                </div>
              </div>

              {/* Explanatory note */}
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start space-x-2.5">
                <ShieldCheck className="h-4.5 w-4.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-emerald-800 leading-relaxed">
                  Calculations use standard Indian CPCB baseline targets. Actual compliance targets may vary depending on import dates and packaging chemistry categories.
                </p>
              </div>
            </div>

            {/* Calculations Dashboard Result Box */}
            <div className="pt-6 border-t border-gray-200 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-medium uppercase font-mono">CPCB Obligation Rate:</span>
                <span className="text-sm font-bold text-emerald-700">{selectedStream.baseEprRate}%</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-xs text-gray-500 font-semibold uppercase font-mono">Calculated Target:</span>
                <span className="text-2xl font-extrabold font-display text-gray-900">
                  {targetVolume.toLocaleString(undefined, { maximumFractionDigits: 1 })} <span className="text-xs font-normal text-gray-500">MT</span>
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-500 font-medium uppercase font-mono">Est. Procurement Costs:</span>
                <span className="font-semibold text-gray-900">
                  ₹{estCost.toLocaleString("en-IN")} <span className="text-[10px] text-gray-400 font-normal">INR</span>
                </span>
              </div>
            </div>

          </div>

          {/* Right Lead Inquiry Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl h-full flex flex-col justify-between space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-emerald-500/10 rounded-full blur-2xl" />

              <div className="space-y-6">
                <div className="flex items-center space-x-2.5 pb-4 border-b border-white/10">
                  <FileSpreadsheet className="h-5 w-5 text-emerald-400" />
                  <h3 className="font-display text-lg font-bold">Procure Verified EPR Credits</h3>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  Submit this target projection directly to our verification desk. We will match your {targetVolume} MT CPCB target with audited recycling plants to secure compliance certificates under pre-negotiated rates.
                </p>

                {/* Form or success banner */}
                <AnimatePresence mode="wait">
                  {!submitSuccess ? (
                    <form onSubmit={handleSubmitInquiry} className="grid sm:grid-cols-2 gap-4" id="inquiry-lead-form">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold font-mono text-emerald-400 uppercase tracking-wider">
                          Full Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="Rajesh Kumar"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-400 transition-colors"
                          />
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-500" />
                        </div>
                      </div>

                      {/* Company */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold font-mono text-emerald-400 uppercase tracking-wider">
                          Company Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="IndoTech Ltd"
                            value={clientCompany}
                            onChange={(e) => setClientCompany(e.target.value)}
                            className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-400 transition-colors"
                          />
                          <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-500" />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold font-mono text-emerald-400 uppercase tracking-wider">
                          Corporate Email
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            placeholder="compliance@indotech.in"
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)}
                            className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-400 transition-colors"
                          />
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-500" />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold font-mono text-emerald-400 uppercase tracking-wider">
                          Phone Number
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={clientPhone}
                            onChange={(e) => setClientPhone(e.target.value)}
                            className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-400 transition-colors"
                          />
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-500" />
                        </div>
                      </div>

                      {/* Notes Message */}
                      <div className="sm:col-span-2 space-y-1">
                        <label className="text-[10px] font-bold font-mono text-emerald-400 uppercase tracking-wider">
                          Additional Compliance Details
                        </label>
                        <textarea
                          rows={2}
                          placeholder="List any state-specific requirements or credit purchase timelines..."
                          value={clientMessage}
                          onChange={(e) => setClientMessage(e.target.value)}
                          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                        />
                      </div>

                      <div className="sm:col-span-2 pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl transition-all duration-200 transform hover:-translate-y-0.5"
                        >
                          {isSubmitting ? (
                            <span>SUBMITTING INQUIRY...</span>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              <span>SUBMIT EPR TARGET PROJECTION</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4"
                      id="lead-success-msg"
                    >
                      <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl">
                        ✓
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-display font-bold text-lg text-emerald-400">Target Projection Submitted!</h4>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          Your calculated target of <strong>{targetVolume} MT ({selectedStream.name})</strong> has been logged in our leads database. An EPR coordinator from the Kar Parivartan desk will reach out within 2 hours.
                        </p>
                      </div>
                      <button
                        onClick={() => setSubmitSuccess(false)}
                        className="px-4 py-2 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-slate-900 border border-emerald-500/30 rounded-xl text-xs font-semibold transition-all duration-200"
                      >
                        Calculate Another Stream
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
