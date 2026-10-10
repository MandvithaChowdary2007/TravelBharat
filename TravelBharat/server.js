require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json({ limit: "2mb" }));
app.use(express.static(path.join(__dirname, "public")));

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  category: { type: String, required: true, enum: ["Heritage", "Nature", "Religious", "Adventure", "Beach", "Culture"] },
  description: { type: String, required: true },
  bestTime: { type: String, default: "October to March" },
  entryFee: { type: String, default: "Check official source before visiting" },
  timings: { type: String, default: "Check official source before visiting" },
  locationUrl: { type: String, default: "" },
  image: { type: String, default: "" },
  nearby: { type: [String], default: [] },
  verified: { type: Boolean, default: false }
}, { timestamps: true });
const Place = mongoose.model("Place", placeSchema);

function auth(req, res, next) {
  const token = (req.headers.authorization || "").replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Admin login required." });
  try {
    req.admin = jwt.verify(token, process.env.JWT_SECRET || "development_secret_change_me");
    next();
  } catch {
    return res.status(401).json({ message: "Session expired. Please log in again." });
  }
}

app.get("/api/health", (req, res) => res.json({ status: "ok", app: "TravelBharat" }));

app.get("/api/places", async (req, res) => {
  try {
    const { q, state, category, city } = req.query;
    const filter = {};
    if (state) filter.state = new RegExp(`^${escapeRegex(state)}$`, "i");
    if (city) filter.city = new RegExp(escapeRegex(city), "i");
    if (category) filter.category = new RegExp(`^${escapeRegex(category)}$`, "i");
    if (q) {
      const re = new RegExp(escapeRegex(q), "i");
      filter.$or = [{ name: re }, { state: re }, { city: re }, { category: re }, { description: re }];
    }
    const places = await Place.find(filter).sort({ state: 1, name: 1 }).lean();
    res.json(places);
  } catch (e) { res.status(500).json({ message: "Unable to load destinations." }); }
});

app.get("/api/places/:id", async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) return res.status(404).json({ message: "Destination not found." });
    res.json(place);
  } catch { res.status(400).json({ message: "Invalid destination ID." }); }
});

app.post("/api/admin/login", async (req, res) => {
  const { email, password } = req.body || {};
  const adminEmail = process.env.ADMIN_EMAIL || "admin@travelbharat.in";
  const adminPassword = process.env.ADMIN_PASSWORD || "ChangeMe123!";
  if (email !== adminEmail || password !== adminPassword) {
    return res.status(401).json({ message: "Invalid email or password." });
  }
  const token = jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET || "development_secret_change_me", { expiresIn: "8h" });
  res.json({ token, email });
});

app.post("/api/places", auth, async (req, res) => {
  try {
    const place = await Place.create(req.body);
    res.status(201).json(place);
  } catch (e) { res.status(400).json({ message: e.message || "Could not create destination." }); }
});
app.put("/api/places/:id", auth, async (req, res) => {
  try {
    const place = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!place) return res.status(404).json({ message: "Destination not found." });
    res.json(place);
  } catch (e) { res.status(400).json({ message: e.message || "Could not update destination." }); }
});
app.delete("/api/places/:id", auth, async (req, res) => {
  try {
    const place = await Place.findByIdAndDelete(req.params.id);
    if (!place) return res.status(404).json({ message: "Destination not found." });
    res.json({ message: "Destination deleted." });
  } catch { res.status(400).json({ message: "Could not delete destination." }); }
});

function escapeRegex(value) { return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

const PORT = process.env.PORT || 5000;
async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/travelbharat");
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`TravelBharat running at http://localhost:${PORT}`));
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    console.error("Check that MongoDB is running and MONGODB_URI in .env is correct.");
    process.exit(1);
  }
}
start();
