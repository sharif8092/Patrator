import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = Number(process.env.PORT || 3000);

// In-memory array for tracking business leads/inquiries
interface Inquiry {
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

const inquiries: Inquiry[] = [
  {
    id: "lead_1",
    name: "Rajesh Kumar",
    company: "IndoTech Electronics Ltd",
    email: "rajesh@indotech.in",
    phone: "+91 98765 43210",
    wasteType: "E-Waste",
    avgVolume: 120,
    calculatedTarget: 72, // 60% standard
    message: "Need EPR compliance support and certificate assistance for IT accessories in Noida.",
    status: "Pending Review",
    date: "2026-07-01",
  },
  {
    id: "lead_2",
    name: "Sunita Sharma",
    company: "EcoPack Polymers Pvt Ltd",
    email: "sunita@ecopack.co.in",
    phone: "+91 99123 45678",
    wasteType: "Plastic Waste",
    avgVolume: 450,
    calculatedTarget: 315, // 70% standard
    message: "Looking for verified recycler tie-ups for multi-layered plastic waste credits.",
    status: "Consulting Scheduled",
    date: "2026-07-02",
  }
];

// Lead-generation API endpoints
app.get("/api/inquiries", (req, res) => {
  res.json(inquiries);
});

app.post("/api/inquiries", (req, res) => {
  try {
    const { name, company, email, phone, wasteType, avgVolume, calculatedTarget, message } = req.body;
    if (!name || !email || !company) {
      return res.status(400).json({ error: "Name, email, and company are required fields." });
    }

    const newInquiry: Inquiry = {
      id: "lead_" + Date.now().toString(),
      name,
      company,
      email,
      phone: phone || "",
      wasteType: wasteType || "General Consulting",
      avgVolume: Number(avgVolume) || 0,
      calculatedTarget: Number(calculatedTarget) || 0,
      message: message || "",
      status: "Pending Review",
      date: new Date().toISOString().split("T")[0],
    };

    inquiries.unshift(newInquiry);
    res.status(201).json(newInquiry);
  } catch (error: any) {
    res.status(500).json({ error: "Failed to save inquiry." });
  }
});

app.patch("/api/inquiries/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const idx = inquiries.findIndex(iq => iq.id === id);
    if (idx === -1) {
      return res.status(404).json({ error: "Inquiry not found." });
    }
    inquiries[idx].status = status;
    res.json(inquiries[idx]);
  } catch (error: any) {
    res.status(500).json({ error: "Failed to update inquiry status." });
  }
});

// Serve frontend assets using Vite middleware or production static folder
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Mounted Vite development middleware");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving compiled production assets from " + distPath);
  }

  const HOST = process.env.HOST || "127.0.0.1";
  app.listen(PORT, HOST, () => {
    console.log(`EPR Server running at http://${HOST}:${PORT} in ${process.env.NODE_ENV || "development"} mode`);
  });
}

startServer();
