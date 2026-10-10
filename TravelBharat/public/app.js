const API = "https://travelbharat-1-xxwe.onrender.com/api";
const FALLBACK = [
  { name: "Taj Mahal", state: "Uttar Pradesh", city: "Agra", category: "Heritage", description: "An iconic ivory-white marble mausoleum admired for its architecture, gardens and detailed craftsmanship.", bestTime: "October to March", entryFee: "Verify current fees with the official ASI website.", timings: "Usually sunrise to sunset; closed Fridays for general viewing.", locationUrl: "https://maps.google.com/?q=Taj+Mahal", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80", nearby: ["Agra Fort", "Mehtab Bagh"] },
  { name: "Hawa Mahal", state: "Rajasthan", city: "Jaipur", category: "Heritage", description: "Jaipur's Palace of Winds is known for its honeycomb façade and hundreds of small windows.", bestTime: "October to March", entryFee: "Check the official Rajasthan tourism source.", timings: "Check current timings before visiting.", locationUrl: "https://maps.google.com/?q=Hawa+Mahal", image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1200&q=80", nearby: ["City Palace", "Jantar Mantar"] },
  { name: "Kerala Backwaters", state: "Kerala", city: "Alappuzha", category: "Nature", description: "A network of lagoons, canals and lakes lined with villages, coconut palms and lush landscapes.", bestTime: "November to February", entryFee: "Boat rates vary by operator.", timings: "Depends on the chosen boat service.", locationUrl: "https://maps.google.com/?q=Alappuzha+Backwaters", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80", nearby: ["Alappuzha Beach", "Kumarakom"] },
  { name: "Golden Temple", state: "Punjab", city: "Amritsar", category: "Religious", description: "Sri Harmandir Sahib is a major Sikh place of worship celebrated for its spiritual importance and community kitchen.", bestTime: "October to March", entryFee: "No general entry fee; donations are voluntary.", timings: "Open daily; check official visitor guidance.", locationUrl: "https://maps.google.com/?q=Golden+Temple+Amritsar", image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80", nearby: ["Jallianwala Bagh", "Partition Museum"] },
  { name: "Hampi", state: "Karnataka", city: "Hosapete", category: "Heritage", description: "A UNESCO World Heritage Site with monumental temples, stone chariots and dramatic boulder-strewn scenery.", bestTime: "October to February", entryFee: "Fees may apply at selected monuments.", timings: "Monument timings vary.", locationUrl: "https://maps.google.com/?q=Hampi", image: "https://images.unsplash.com/photo-1600100397608-f010a5c4f4a6?auto=format&fit=crop&w=1200&q=80", nearby: ["Virupaksha Temple", "Vittala Temple"] },
  { name: "Kaziranga National Park", state: "Assam", city: "Kohora", category: "Adventure", description: "A protected landscape known for grasslands, wetlands and the one-horned rhinoceros.", bestTime: "November to April", entryFee: "Safari and permit prices vary by season.", timings: "Seasonal opening and safari slots apply.", locationUrl: "https://maps.google.com/?q=Kaziranga+National+Park", image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80", nearby: ["Orchid and Biodiversity Park"] },
  { name: "Goa Beaches", state: "Goa", city: "North Goa", category: "Beach", description: "A coastline of sandy beaches, coastal villages, heritage and a lively food culture.", bestTime: "November to February", entryFee: "Most beaches are publicly accessible; activities may cost extra.", timings: "Follow local beach safety guidance.", locationUrl: "https://maps.google.com/?q=North+Goa+Beaches", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80", nearby: ["Fort Aguada", "Fontainhas"] },
  { name: "Charminar", state: "Telangana", city: "Hyderabad", category: "Heritage", description: "Hyderabad's signature monument, built in 1591, stands at the historic heart of the old city.", bestTime: "October to February", entryFee: "Check current ASI ticket details.", timings: "Check current official timings.", locationUrl: "https://maps.google.com/?q=Charminar+Hyderabad", image: "https://images.unsplash.com/photo-1621414050944-4f6e9b6b8a15?auto=format&fit=crop&w=1200&q=80", nearby: ["Mecca Masjid", "Laad Bazaar"] },
  { name: "Munnar", state: "Kerala", city: "Idukki", category: "Nature", description: "A hill station known for rolling tea plantations, cool weather and mountain viewpoints.", bestTime: "September to March", entryFee: "Some attractions charge entry fees.", timings: "Depends on each attraction.", locationUrl: "https://maps.google.com/?q=Munnar", image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1200&q=80", nearby: ["Eravikulam National Park", "Mattupetty Dam"] },
  { name: "Konark Sun Temple", state: "Odisha", city: "Konark", category: "Heritage", description: "A UNESCO-listed 13th-century temple designed as a monumental stone chariot dedicated to the Sun God.", bestTime: "October to February", entryFee: "Check current ASI ticket details.", timings: "Check official monument timings.", locationUrl: "https://maps.google.com/?q=Konark+Sun+Temple", image: "https://images.unsplash.com/photo-1623059506278-3f6f3f1f8e7b?auto=format&fit=crop&w=1200&q=80", nearby: ["Chandrabhaga Beach", "Puri"] },
  { name: "Rishikesh", state: "Uttarakhand", city: "Rishikesh", category: "Adventure", description: "A riverside destination in the Himalayan foothills known for yoga, spiritual retreats and regulated rafting.", bestTime: "February to May and September to November", entryFee: "Activities have separate charges.", timings: "Activity availability is seasonal.", locationUrl: "https://maps.google.com/?q=Rishikesh", image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80", nearby: ["Neer Garh Waterfall", "Ganga riverfront"] },
  { name: "Sanchi Stupa", state: "Madhya Pradesh", city: "Sanchi", category: "Religious", description: "An important Buddhist monument complex with a great stupa, gateways and monasteries reflecting Buddhist art and history.", bestTime: "October to March", entryFee: "Check current ASI ticket details.", timings: "Check official site for current hours.", locationUrl: "https://maps.google.com/?q=Sanchi+Stupa", image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1200&q=80", nearby: ["Udayagiri Caves", "Vidisha"] }
];
let places = [], selectedCategory = "", adminToken = "", editingId = null;
const $ = id => document.getElementById(id);
const safe = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fallbackImage = "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80";

async function loadPlaces() {
  try {
    const r = await fetch(`${API}/places`);
    if (!r.ok) throw new Error("API unavailable");
    places = await r.json();
    if (!Array.isArray(places) || !places.length) places = FALLBACK;
  } catch { places = FALLBACK; toast("Showing preview data. Start the server and MongoDB to enable admin changes."); }
  $("placeCount").textContent = `${places.length}+`;
  fillStates(); renderPlaces(); renderStates();
}
function fillStates() {
  const current = $("stateFilter").value;
  const states = [...new Set(places.map(p => p.state).filter(Boolean))].sort();
  $("stateFilter").innerHTML = '<option value="">All states & UTs</option>' + states.map(s => `<option>${safe(s)}</option>`).join("");
  if (states.includes(current)) $("stateFilter").value = current;
}
function filteredPlaces() {
  const q = $("searchInput").value.trim().toLowerCase(), state = $("stateFilter").value, category = selectedCategory || $("categoryFilter").value;
  return places.filter(p => (!state || p.state === state) && (!category || p.category === category) &&
    (!q || [p.name, p.state, p.city, p.category, p.description].some(v => String(v || "").toLowerCase().includes(q))));
}
function renderPlaces() {
  const list = filteredPlaces();
  $("resultsCount").textContent = `${list.length} destination${list.length === 1 ? "" : "s"} found`;
  $("destinationGrid").innerHTML = list.map((p, i) => `<article class="destination-card" data-place="${safe(p._id || p.name)}" tabindex="0" role="button" aria-label="View ${safe(p.name)}">
    <div class="card-image" style="background-image:url('${safe(p.image || fallbackImage)}')"><span class="card-category">${safe(p.category || "Explore")}</span><span class="card-arrow">↗</span></div>
    <div class="card-body"><div class="card-location">⌖ ${safe(p.city)}, ${safe(p.state)}</div><h3>${safe(p.name)}</h3><p>${safe(p.description || "")}</p><div class="card-footer"><span>Best time: ${safe(p.bestTime || "See details")}</span><b>DISCOVER ↗</b></div></div></article>`).join("");
  $("emptyState").classList.toggle("hidden", list.length > 0);
  $("destinationGrid").classList.toggle("hidden", list.length === 0);
}
function renderStates() {
  const stateData = [...new Set(places.map(p => p.state))].sort().map(state => ({ state, count: places.filter(p => p.state === state).length }));
  $("stateList").innerHTML = stateData.map(s => `<button class="state-item" data-state="${safe(s.state)}"><span>${safe(s.state)}<small>${s.count} featured destination${s.count === 1 ? "" : "s"}</small></span><span>↗</span></button>`).join("");
}
function openDetail(p) {
  $("detailContent").innerHTML = `<div class="detail-cover" style="background-image:url('${safe(p.image || fallbackImage)}')"></div><div class="eyebrow">${safe(p.category || "DESTINATION")} · ${safe(p.city)}, ${safe(p.state)}</div><h2>${safe(p.name)}</h2><p class="detail-description">${safe(p.description || "")}</p><div class="detail-meta"><span>⌖ ${safe(p.state)}</span><span>◷ ${safe(p.bestTime || "Check season")}</span></div><div class="detail-columns"><div class="detail-box"><b>✦ Best time to visit</b><p>${safe(p.bestTime || "Check local conditions before travelling.")}</p></div><div class="detail-box"><b>₹ Entry fee & timings</b><p>${safe(p.entryFee || "Check official source.")}<br>${safe(p.timings || "")}</p></div><div class="detail-box"><b>Nearby attractions</b><p>${safe((p.nearby || []).join(" · ") || "Explore nearby local attractions.")}</p></div><div class="detail-box"><b>Travel note</b><p>Confirm fees, opening hours, weather and access with official sources before your visit.</p></div></div><div class="detail-actions">${p.locationUrl ? `<a class="primary-btn" href="${safe(p.locationUrl)}" target="_blank" rel="noopener">Open map ↗</a>` : ""}<button class="outline-btn" data-close="detailModal">Back to exploring</button></div>`;
  $("detailModal").classList.remove("hidden");
}
function toast(message) {
  const el = $("toast"); el.textContent = message; el.classList.add("show");
  clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove("show"), 3200);
}
function setCategory(category) {
  selectedCategory = category; $("categoryFilter").value = category;
  document.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c.dataset.category === category));
  renderPlaces();
}
function clearFilters() {
  $("searchInput").value = ""; $("stateFilter").value = ""; $("categoryFilter").value = ""; setCategory("");
}
document.addEventListener("click", e => {
  const card = e.target.closest("[data-place]");
  if (card) { const p = places.find(x => String(x._id || x.name) === card.dataset.place); if (p) openDetail(p); }
  const chip = e.target.closest("[data-category]");
  if (chip) setCategory(chip.dataset.category);
  const state = e.target.closest("[data-state]");
  if (state) { $("stateFilter").value = state.dataset.state; $("searchInput").value = ""; document.querySelector("#explore").scrollIntoView({ behavior: "smooth" }); renderPlaces(); }
  const close = e.target.closest("[data-close]");
  if (close) $(close.dataset.close).classList.add("hidden");
});
document.addEventListener("keydown", e => {
  if ((e.key === "Enter" || e.key === " ") && e.target.matches(".destination-card")) { e.preventDefault(); e.target.click(); }
  if (e.key === "Escape") document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.add("hidden"));
});
["searchInput", "stateFilter", "categoryFilter"].forEach(id => $(id).addEventListener(id === "searchInput" ? "input" : "change", () => { if (id === "categoryFilter") setCategory($("categoryFilter").value); else renderPlaces(); }));
$("resetFilters").addEventListener("click", clearFilters); $("clearEmpty").addEventListener("click", clearFilters);
$("year").textContent = new Date().getFullYear();

$("adminOpen").addEventListener("click", openAdmin);
function openAdmin() {
  $("adminModal").classList.remove("hidden");
  if (!adminToken) renderLogin(); else renderAdminDashboard();
}
function renderLogin() {
  $("adminContent").innerHTML = `<div class="eyebrow">CONTENT MANAGEMENT</div><h2>Admin dashboard</h2><p>Sign in to add, edit or remove destination information. The API checks admin credentials before allowing changes.</p><form id="loginForm"><div class="field"><label>Email</label><input name="email" type="email" required value="admin@travelbharat.in"></div><div class="field"><label>Password</label><input name="password" type="password" required placeholder="Enter admin password" value="ChangeMe123!"></div><button class="primary-btn" type="submit">Sign in ↗</button></form><p><small>Demo defaults: admin@travelbharat.in / ChangeMe123! — change these in your .env before deployment.</small></p>`;
  $("loginForm").addEventListener("submit", async e => {
    e.preventDefault(); const data = Object.fromEntries(new FormData(e.target));
    try { const r = await fetch(`${API}/admin/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); const out = await r.json(); if (!r.ok) throw new Error(out.message); adminToken = out.token; renderAdminDashboard(); toast("Admin signed in."); }
    catch (err) { toast(err.message || "Login failed. Ensure the backend is running."); }
  });
}
function renderAdminDashboard() {
  $("adminContent").innerHTML = `<div class="eyebrow">CONTENT MANAGEMENT</div><h2>Destinations</h2><p>Manage the destination catalogue. New content is saved in MongoDB.</p><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="primary-btn" id="addPlace">＋ Add destination</button><button class="outline-btn" id="logoutAdmin">Sign out</button></div><div class="admin-list">${places.map(p => `<div class="admin-row"><span><b>${safe(p.name)}</b><small>${safe(p.city)}, ${safe(p.state)} · ${safe(p.category)}</small></span><span class="admin-actions"><button class="mini-btn" data-edit="${safe(p._id || p.name)}">Edit</button><button class="mini-btn delete" data-delete="${safe(p._id || p.name)}">Delete</button></span></div>`).join("")}</div>`;
  $("addPlace").addEventListener("click", () => renderPlaceForm());
  $("logoutAdmin").addEventListener("click", () => { adminToken = ""; renderLogin(); });
  $("adminContent").querySelectorAll("[data-edit]").forEach(b => b.addEventListener("click", () => renderPlaceForm(places.find(p => String(p._id || p.name) === b.dataset.edit))));
  $("adminContent").querySelectorAll("[data-delete]").forEach(b => b.addEventListener("click", () => deletePlace(b.dataset.delete)));
}
function renderPlaceForm(p = {}) {
  editingId = p._id || null;
  const val = k => safe(Array.isArray(p[k]) ? p[k].join(", ") : (p[k] || ""));
  $("adminContent").innerHTML = `<div class="eyebrow">${editingId ? "UPDATE LISTING" : "NEW LISTING"}</div><h2>${editingId ? "Edit destination" : "Add destination"}</h2><form id="placeForm" class="form-grid">
    <div class="field"><label>Place name *</label><input name="name" required value="${val("name")}"></div><div class="field"><label>State / UT *</label><input name="state" required value="${val("state")}"></div>
    <div class="field"><label>City *</label><input name="city" required value="${val("city")}"></div><div class="field"><label>Category *</label><select name="category" required>${["Heritage", "Nature", "Religious", "Adventure", "Beach", "Culture"].map(c => `<option ${p.category === c ? "selected" : ""}>${c}</option>`).join("")}</select></div>
    <div class="field full"><label>Description *</label><textarea name="description" required>${val("description")}</textarea></div>
    <div class="field"><label>Best time to visit</label><input name="bestTime" value="${val("bestTime")}"></div><div class="field"><label>Entry fee guidance</label><input name="entryFee" value="${val("entryFee")}"></div>
    <div class="field"><label>Timings</label><input name="timings" value="${val("timings")}"></div><div class="field"><label>Google Maps URL</label><input name="locationUrl" type="url" value="${val("locationUrl")}"></div>
    <div class="field full"><label>Image URL</label><input name="image" type="url" value="${val("image")}"></div><div class="field full"><label>Nearby attractions (comma separated)</label><input name="nearby" value="${val("nearby")}"></div>
    <div class="field full" style="display:flex;flex-direction:row;gap:10px"><button class="primary-btn" type="submit">Save destination ↗</button><button class="outline-btn" type="button" id="cancelForm">Cancel</button></div>
    </form>`;
  $("cancelForm").addEventListener("click", renderAdminDashboard);
  $("placeForm").addEventListener("submit", async e => {
    e.preventDefault(); const data = Object.fromEntries(new FormData(e.target)); data.nearby = data.nearby.split(",").map(s => s.trim()).filter(Boolean);
    try {
      const r = await fetch(`${API}/places${editingId ? "/" + editingId : ""}`, { method: editingId ? "PUT" : "POST", headers: { "Content-Type": "application/json", "Authorization": `Bearer ${adminToken}` }, body: JSON.stringify(data) });
      const out = await r.json(); if (!r.ok) throw new Error(out.message);
      const idx = places.findIndex(x => String(x._id) === String(out._id)); if (idx >= 0) places[idx] = out; else places.push(out);
      fillStates(); renderPlaces(); renderStates(); renderAdminDashboard(); toast("Destination saved successfully.");
    } catch (err) { toast(err.message || "Could not save destination."); }
  });
}
async function deletePlace(id) {
  const p = places.find(x => String(x._id || x.name) === id); if (!p) return;
  if (!p._id) { toast("Preview-only item cannot be deleted. Start MongoDB and seed the database first."); return; }
  if (!confirm(`Delete ${p.name}? This cannot be undone.`)) return;
  try { const r = await fetch(`${API}/places/${p._id}`, { method: "DELETE", headers: { "Authorization": `Bearer ${adminToken}` } }); const out = await r.json(); if (!r.ok) throw new Error(out.message); places = places.filter(x => String(x._id) !== String(p._id)); fillStates(); renderPlaces(); renderStates(); renderAdminDashboard(); toast("Destination deleted."); }
  catch (err) { toast(err.message || "Could not delete destination."); }
}
loadPlaces();