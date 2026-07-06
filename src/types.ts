export interface WasteSubCategory {
  name: string;
  description: string;
}

export interface WasteStream {
  id: string;
  name: string;
  iconName: string;
  tagline: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  description: string;
  subCategories: WasteSubCategory[];
  complianceStandard: string;
  targetFormula: string;
  baseEprRate: number; // percentage of production target (e.g. 60% for year 1)
}

export interface ComplianceStep {
  step: number;
  title: string;
  description: string;
  highlight: string;
}

export interface CalculatorResult {
  wasteType: string;
  avgVolume: number;
  eprRate: number;
  targetVolume: number;
  creditRequired: number;
  complianceCostEstimate: number;
}

export interface ChatMessage {
  role: "user" | "model";
  content: string;
}

export interface Inquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  wasteType: string;
  avgVolume: number;
  calculatedTarget: number;
  message: string;
  status: "Pending Review" | "Consulting Scheduled" | "Completed";
  date: string;
}
