import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WasteStreams from "./components/WasteStreams";
import Roadmap from "./components/Roadmap";
import CalculatorComponent from "./components/Calculator";
import { Leaf, ShieldCheck, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 antialiased selection:bg-emerald-100 selection:text-emerald-900" id="app-root-wrapper">
      {/* Navbar Component */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero setActiveTab={setActiveTab} />

        {/* Core Services Bento Grid */}
        <Services />

        {/* Multi-Waste Regulated Streams */}
        <WasteStreams />

        {/* Standard Compliance Steps Roadmap */}
        <Roadmap />

        {/* Interactive CPCB Target Calculator with Inquiry Form */}
        <CalculatorComponent />
      </main>

      {/* Corporate Compliance Footer */}
      <footer className="bg-slate-900 text-white border-t border-slate-800" id="main-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Column 1 - Corporate Brand */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-tr from-emerald-600 to-teal-600 rounded-lg text-white">
                  <Leaf className="h-5 w-5" />
                </div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white">
                  Patr<span className="text-emerald-400">ator</span>
                </span>
              </div>
              <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
                India's premier end-to-end EPR compliance consulting firm. We guide producers, importers, and brand owners through secure registration, verified recycler matching, and trouble-free annual filing audits.
              </p>
              <div className="flex items-center text-[10px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                <ShieldCheck className="h-3.5 w-3.5 mr-1.5" />
                <span>CPCB Portal verified Consulting</span>
              </div>
            </div>

            {/* Column 2 - Legal Contacts */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-300 font-mono">
                Corporate Inquiries
              </h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="h-3.5 w-3.5 text-emerald-500" />
                  <span>FPR +91 7428728855 | BIS +91 7428718855</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-3.5 w-3.5 text-emerald-500" />
                  <span>support@patrator.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-3.5 w-3.5 text-emerald-500" />
                  <span>New Delhi, Compliance HQ, India</span>
                </li>
              </ul>
            </div>

            {/* Column 3 - Regulatory Standards Links */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-300 font-mono">
                Regulatory Gazettes
              </h4>
              <ul className="space-y-2 text-xs text-gray-400 font-medium">
                <li>
                  <a href="https://cpcb.nic.in/epr-portal/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center">
                    <Globe className="h-3 w-3 mr-1" /> CPCB EPR Central Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">PWM Rules, 2016 (Plastic)</a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">E-Waste Management Rules, 2022</a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">Battery Waste Management, 2022</a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 font-mono">
            <div>
              &copy; {new Date().getFullYear()} Patrator Compliance Consultants. All Rights Reserved.
            </div>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <span className="hover:text-gray-300 cursor-pointer">CPCB Certified Registration</span>
              <span>&bull;</span>
              <span className="hover:text-gray-300 cursor-pointer">Audit Protection Guarantee</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
