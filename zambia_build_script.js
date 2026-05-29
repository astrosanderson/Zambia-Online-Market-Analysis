const pptxgen = require("pptxgenjs");

// Minimal 2-color palette: dark navy + one teal accent, rest is white/light gray
const C = {
  dark:   "1C2B36",   // near-black navy — titles, bg slides
  teal:   "2A7F6F",   // single accent color
  white:  "FFFFFF",
  offwhite: "F7F9F8",
  muted:  "8A9BA8",   // for captions / secondary text
  light:  "EDF2F0",   // card backgrounds
  text:   "2C3E35",   // body text
};

const FONT = "Poppins";

async function main() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.title = "Zambia Online Retail";

  // ── SLIDE 1: TITLE ──────────────────────────────────────────────────────
  {
    const s = pres.addSlide();
    s.background = { color: C.dark };

    // subtle circle decoration
    s.addShape(pres.shapes.OVAL, { x: 7.8, y: -1, w: 4, h: 4, fill: { color: C.teal, transparency: 88 }, line: { color: C.teal, transparency: 88 } });
    s.addShape(pres.shapes.OVAL, { x: -0.8, y: 3.5, w: 2.5, h: 2.5, fill: { color: C.teal, transparency: 92 }, line: { color: C.teal, transparency: 92 } });

    s.addText("ZAMBIA ONLINE RETAIL", { x: 0.65, y: 1.3, w: 8, h: 0.4, fontFace: FONT, fontSize: 10, color: C.muted, charSpacing: 4, margin: 0 });
    s.addText("Opportunity\nAssessment", { x: 0.65, y: 1.75, w: 8, h: 1.8, fontFace: FONT, fontSize: 44, color: C.white, bold: true, margin: 0 });
    s.addText("Can it work — and what does the data say?", { x: 0.65, y: 3.65, w: 7, h: 0.4, fontFace: FONT, fontSize: 13, color: C.muted, italic: true, margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.65, y: 4.75, w: 9.0, h: 0.015, fill: { color: C.teal, transparency: 40 }, line: { color: C.teal, transparency: 40 } });
    s.addText("Based on UK Retail Trends Analysis  ·  2026", { x: 0.65, y: 4.88, w: 8, h: 0.35, fontFace: FONT, fontSize: 10, color: C.muted, margin: 0 });
  }

  // ── SLIDE 2: AGENDA ──────────────────────────────────────────────────────
  {
    const s = pres.addSlide();
    s.background = { color: C.white };

    s.addText("What We'll Cover", { x: 0.6, y: 0.38, w: 8, h: 0.55, fontFace: FONT, fontSize: 28, color: C.dark, bold: true, margin: 0 });

    const items = [
      { n: "01", title: "What Online Retail Is" },
      { n: "02", title: "Lessons from the UK" },
      { n: "03", title: "Zambia's Digital Landscape" },
      { n: "04", title: "The Market Opportunity" },
      { n: "05", title: "Challenges to Navigate" },
      { n: "06", title: "Verdict & Recommendations" },
    ];

    items.forEach((item, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 0.6 + col * 4.75;
      const y = 1.2 + row * 1.35;

      s.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.4, h: 1.05, fill: { color: C.offwhite }, line: { color: C.light } });
      s.addText(item.n, { x: x + 0.2, y: y + 0.15, w: 0.6, h: 0.38, fontFace: FONT, fontSize: 11, color: C.teal, bold: true, margin: 0 });
      s.addText(item.title, { x: x + 0.2, y: y + 0.52, w: 3.9, h: 0.35, fontFace: FONT, fontSize: 14, color: C.dark, bold: true, margin: 0 });
    });
  }

  // ── SLIDE 3: WHAT IS ONLINE RETAIL ───────────────────────────────────────
  {
    const s = pres.addSlide();
    s.background = { color: C.white };

    s.addText("01  ·  What Is Online Retail?", { x: 0.6, y: 0.38, w: 9, h: 0.5, fontFace: FONT, fontSize: 26, color: C.dark, bold: true, margin: 0 });

    // Definition block
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.1, w: 8.8, h: 0.9, fill: { color: C.teal }, line: { color: C.teal } });
    s.addText("Buying and selling goods online — replacing or supplementing a physical store.", {
      x: 0.8, y: 1.18, w: 8.4, h: 0.72, fontFace: FONT, fontSize: 14, color: C.white, margin: 0, valign: "middle"
    });

    // 4 modes — simple 2x2
    const modes = [
      { title: "Website / App",     desc: "Browse and buy online" },
      { title: "Social Commerce",   desc: "Facebook, Instagram, WhatsApp" },
      { title: "Marketplace",       desc: "Platforms like Jumia" },
      { title: "Mobile Money",      desc: "MTN MoMo, Airtel Money" },
    ];
    modes.forEach((m, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      const x = 0.6 + col * 4.55, y = 2.2 + row * 1.55;
      s.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.3, h: 1.3, fill: { color: C.offwhite }, line: { color: C.light } });
      s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.06, h: 1.3, fill: { color: C.teal }, line: { color: C.teal } });
      s.addText(m.title, { x: x + 0.18, y: y + 0.18, w: 3.9, h: 0.35, fontFace: FONT, fontSize: 13, color: C.dark, bold: true, margin: 0 });
      s.addText(m.desc,  { x: x + 0.18, y: y + 0.58, w: 3.9, h: 0.5, fontFace: FONT, fontSize: 11, color: C.muted, margin: 0 });
    });
  }

  // ── SLIDE 4: LESSONS FROM UK ─────────────────────────────────────────────
  {
    const s = pres.addSlide();
    s.background = { color: C.white };

    s.addText("02  ·  Lessons from the UK", { x: 0.6, y: 0.38, w: 9, h: 0.5, fontFace: FONT, fontSize: 26, color: C.dark, bold: true, margin: 0 });

    // 3 stat cards
    const stats = [
      { val: "10.7%", label: "of UK sales now online" },
      { val: "26.7%", label: "Zambia e-comm growth 2025" },
      { val: "5.4%",  label: "UK year-on-year growth" },
    ];
    stats.forEach((st, i) => {
      const x = 0.6 + i * 3.13;
      s.addShape(pres.shapes.RECTANGLE, { x, y: 1.1, w: 2.9, h: 1.3, fill: { color: i === 1 ? C.teal : C.offwhite }, line: { color: C.light } });
      s.addText(st.val, { x, y: 1.2, w: 2.9, h: 0.7, fontFace: FONT, fontSize: 30, color: i === 1 ? C.white : C.teal, bold: true, align: "center", margin: 0 });
      s.addText(st.label, { x, y: 1.9, w: 2.9, h: 0.35, fontFace: FONT, fontSize: 10, color: i === 1 ? "CCE8E3" : C.muted, align: "center", margin: 0 });
    });

    // 3 lessons
    const lessons = [
      { title: "COVID changed everything",   body: "The 2020 pandemic shifted consumers online permanently — in both the UK and Zambia. That window is still open." },
      { title: "Online starts small, grows fast", body: "The UK's online share started near zero. Today it's 10.7%. Being early in Zambia is an advantage." },
      { title: "Seasonal peaks drive revenue", body: "Nov–Dec spikes are consistent. Businesses that plan for this earn significantly more." },
    ];
    lessons.forEach((l, i) => {
      const x = 0.6 + i * 3.13;
      s.addShape(pres.shapes.RECTANGLE, { x, y: 2.65, w: 2.9, h: 2.65, fill: { color: C.offwhite }, line: { color: C.light } });
      s.addText(`0${i + 1}`, { x: x + 0.2, y: 2.78, w: 0.5, h: 0.38, fontFace: FONT, fontSize: 13, color: C.teal, bold: true, margin: 0 });
      s.addText(l.title, { x: x + 0.2, y: 3.22, w: 2.55, h: 0.45, fontFace: FONT, fontSize: 12, color: C.dark, bold: true, margin: 0 });
      s.addText(l.body,  { x: x + 0.2, y: 3.72, w: 2.55, h: 1.4, fontFace: FONT, fontSize: 10.5, color: C.muted, margin: 0 });
    });
  }

  // ── SLIDE 5: DIGITAL LANDSCAPE ───────────────────────────────────────────
  {
    const s = pres.addSlide();
    s.background = { color: C.white };

    s.addText("03  ·  Zambia's Digital Landscape", { x: 0.6, y: 0.38, w: 9, h: 0.5, fontFace: FONT, fontSize: 26, color: C.dark, bold: true, margin: 0 });

    // 4 KPI cards in a row
    const kpis = [
      { val: "21.6M", label: "Population" },
      { val: "33%",   label: "Internet users" },
      { val: "92%",   label: "Mobile coverage" },
      { val: "95%",   label: "Mobile money users" },
    ];
    kpis.forEach((k, i) => {
      const x = 0.6 + i * 2.35;
      const highlight = i === 3;
      s.addShape(pres.shapes.RECTANGLE, { x, y: 1.1, w: 2.15, h: 1.25, fill: { color: highlight ? C.teal : C.offwhite }, line: { color: C.light } });
      s.addText(k.val, { x, y: 1.2, w: 2.15, h: 0.65, fontFace: FONT, fontSize: 26, color: highlight ? C.white : C.teal, bold: true, align: "center", margin: 0 });
      s.addText(k.label, { x, y: 1.85, w: 2.15, h: 0.35, fontFace: FONT, fontSize: 10, color: highlight ? "CCE8E3" : C.muted, align: "center", margin: 0 });
    });

    // Bar chart visual
    s.addText("Connectivity at a glance", { x: 0.6, y: 2.6, w: 5, h: 0.35, fontFace: FONT, fontSize: 12, color: C.dark, bold: true, margin: 0 });

    const bars = [
      { label: "Mobile money users", pct: 95 },
      { label: "Mobile coverage",    pct: 92 },
      { label: "Internet users",     pct: 33 },
      { label: "Bank account holders", pct: 23 },
    ];
    bars.forEach((b, i) => {
      const y = 3.1 + i * 0.56;
      s.addText(b.label, { x: 0.6, y, w: 2.5, h: 0.28, fontFace: FONT, fontSize: 10, color: C.text, margin: 0 });
      s.addText(`${b.pct}%`, { x: 9.0, y, w: 0.55, h: 0.28, fontFace: FONT, fontSize: 10, color: C.teal, bold: true, align: "right", margin: 0 });
      s.addShape(pres.shapes.RECTANGLE, { x: 3.2, y: y + 0.05, w: 5.85, h: 0.14, fill: { color: C.light }, line: { color: C.light } });
      s.addShape(pres.shapes.RECTANGLE, { x: 3.2, y: y + 0.05, w: 5.85 * (b.pct / 100), h: 0.14, fill: { color: C.teal, transparency: i > 1 ? 40 : 0 }, line: { color: C.teal, transparency: i > 1 ? 40 : 0 } });
    });

    // Key insight box
    s.addShape(pres.shapes.RECTANGLE, { x: 5.85, y: 2.55, w: 3.75, h: 2.7, fill: { color: C.offwhite }, line: { color: C.light } });
    s.addText("Key insight", { x: 6.05, y: 2.7, w: 3.35, h: 0.3, fontFace: FONT, fontSize: 10, color: C.teal, bold: true, margin: 0 });
    s.addText("Only 2% of Zambians use credit cards — but 95% use mobile money. The payment barrier that stopped e-commerce elsewhere doesn't exist here.", {
      x: 6.05, y: 3.05, w: 3.35, h: 1.8, fontFace: FONT, fontSize: 11.5, color: C.text, margin: 0
    });
  }

  // ── SLIDE 6: MARKET OPPORTUNITY ──────────────────────────────────────────
  {
    const s = pres.addSlide();
    s.background = { color: C.white };

    s.addText("04  ·  The Market Opportunity", { x: 0.6, y: 0.38, w: 9, h: 0.5, fontFace: FONT, fontSize: 26, color: C.dark, bold: true, margin: 0 });

    // Chart
    s.addChart(pres.charts.BAR, [{
      name: "E-commerce Revenue (USD m)",
      labels: ["2023", "2024", "2025", "2026e", "2027e", "2028e", "2029e"],
      values: [105, 120, 134, 145, 165, 185, 210]
    }], {
      x: 0.6, y: 1.05, w: 5.8, h: 3.6,
      barDir: "col",
      chartColors: ["D0E4DF", "D0E4DF", "2A7F6F", "A8C8C0", "A8C8C0", "A8C8C0", "A8C8C0"],
      chartArea: { fill: { color: C.white }, roundedCorners: false },
      catAxisLabelColor: "8A9BA8", valAxisLabelColor: "8A9BA8",
      valGridLine: { color: "EDF2F0", size: 0.5 }, catGridLine: { style: "none" },
      showValue: true, dataLabelColor: "1C2B36", dataLabelFontSize: 9,
      showLegend: false,
      showTitle: true, title: "Zambia E-commerce Revenue (USD millions)",
      titleColor: "8A9BA8", titleFontSize: 10,
    });

    // 3 stats on the right
    const stats = [
      { val: "$134M", label: "Market size today" },
      { val: "26.7%", label: "Annual growth rate" },
      { val: "$2.3B", label: "Projected by 2029" },
    ];
    stats.forEach((st, i) => {
      const y = 1.05 + i * 1.2;
      const hi = i === 1;
      s.addShape(pres.shapes.RECTANGLE, { x: 6.75, y, w: 2.85, h: 1.05, fill: { color: hi ? C.teal : C.offwhite }, line: { color: C.light } });
      s.addText(st.val, { x: 6.9, y: y + 0.08, w: 2.55, h: 0.58, fontFace: FONT, fontSize: 26, color: hi ? C.white : C.teal, bold: true, margin: 0 });
      s.addText(st.label, { x: 6.9, y: y + 0.68, w: 2.55, h: 0.28, fontFace: FONT, fontSize: 10, color: hi ? "CCE8E3" : C.muted, margin: 0 });
    });

    s.addText("Largest categories: Electronics 24%  ·  Fashion 20%  ·  Hobby & Leisure 21%", {
      x: 0.6, y: 4.9, w: 9, h: 0.35, fontFace: FONT, fontSize: 10, color: C.muted, margin: 0
    });
  }

  // ── SLIDE 7: CHALLENGES ──────────────────────────────────────────────────
  {
    const s = pres.addSlide();
    s.background = { color: C.white };

    s.addText("05  ·  Challenges to Navigate", { x: 0.6, y: 0.38, w: 9, h: 0.5, fontFace: FONT, fontSize: 26, color: C.dark, bold: true, margin: 0 });
    s.addText("Real — but solvable.", { x: 0.6, y: 0.96, w: 5, h: 0.32, fontFace: FONT, fontSize: 12, color: C.muted, italic: true, margin: 0 });

    const challenges = [
      { title: "Low Internet Penetration", stat: "33% online",          fix: "Use WhatsApp & USSD alongside websites" },
      { title: "Last-Mile Delivery",       stat: "Rural costs are high", fix: "Start in Lusaka, partner with local couriers" },
      { title: "Consumer Trust",           stat: "New to online buying", fix: "Offer cash-on-delivery & clear return policies" },
      { title: "Urban–Rural Divide",       stat: "53% live rurally",     fix: "Phase rollout — cities first" },
    ];

    challenges.forEach((ch, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      const x = 0.6 + col * 4.75, y = 1.45 + row * 2.0;
      s.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.4, h: 1.75, fill: { color: C.offwhite }, line: { color: C.light } });
      s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.06, h: 1.75, fill: { color: C.teal }, line: { color: C.teal } });
      s.addText(ch.title, { x: x + 0.2, y: y + 0.18, w: 4.0, h: 0.32, fontFace: FONT, fontSize: 13, color: C.dark, bold: true, margin: 0 });
      s.addText(ch.stat,  { x: x + 0.2, y: y + 0.52, w: 4.0, h: 0.28, fontFace: FONT, fontSize: 10, color: C.teal, margin: 0 });
      s.addShape(pres.shapes.RECTANGLE, { x: x + 0.2, y: y + 0.88, w: 4.0, h: 0.015, fill: { color: C.light }, line: { color: C.light } });
      s.addText("→  " + ch.fix, { x: x + 0.2, y: y + 1.0, w: 4.0, h: 0.55, fontFace: FONT, fontSize: 10.5, color: C.muted, italic: true, margin: 0 });
    });
  }

  // ── SLIDE 8: VERDICT ─────────────────────────────────────────────────────
  {
    const s = pres.addSlide();
    s.background = { color: C.dark };

    s.addShape(pres.shapes.OVAL, { x: 7.5, y: -0.5, w: 3.5, h: 3.5, fill: { color: C.teal, transparency: 90 }, line: { color: C.teal, transparency: 90 } });

    s.addText("06  ·  Verdict", { x: 0.6, y: 0.38, w: 8, h: 0.45, fontFace: FONT, fontSize: 13, color: C.muted, margin: 0 });
    s.addText("YES — it can work.", { x: 0.6, y: 0.9, w: 9, h: 0.8, fontFace: FONT, fontSize: 38, color: C.white, bold: true, margin: 0 });

    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.85, w: 8.8, h: 0.75, fill: { color: C.teal, transparency: 80 }, line: { color: C.teal, transparency: 80 } });
    s.addText("Zambia's market is growing at 26.7% — mobile money solves the payment gap and consumer behaviour is already shifting.", {
      x: 0.75, y: 1.9, w: 8.5, h: 0.62, fontFace: FONT, fontSize: 12, color: C.white, margin: 0, valign: "middle"
    });

    const recs = [
      { n: "1", t: "Mobile-first",            b: "Build for WhatsApp & mobile money before a website" },
      { n: "2", t: "Start in Lusaka",         b: "Prove the model in cities, then expand" },
      { n: "3", t: "Cash-on-delivery",        b: "Removes trust barrier, boosts conversions" },
      { n: "4", t: "Electronics & Fashion",   b: "Largest categories — start where demand exists" },
      { n: "5", t: "December peaks",          b: "Festive demand is your biggest revenue window" },
      { n: "6", t: "Partner on delivery",     b: "Use local couriers from day one" },
    ];
    recs.forEach((r, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const x = 0.6 + col * 3.1;
      const y = 2.85 + row * 1.35;
      s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.85, h: 1.15, fill: { color: "172530" }, line: { color: "172530" } });
      s.addText(r.n, { x: x + 0.15, y: y + 0.1, w: 0.35, h: 0.32, fontFace: FONT, fontSize: 11, color: C.teal, bold: true, margin: 0 });
      s.addText(r.t, { x: x + 0.15, y: y + 0.43, w: 2.55, h: 0.3, fontFace: FONT, fontSize: 12, color: C.white, bold: true, margin: 0 });
      s.addText(r.b, { x: x + 0.15, y: y + 0.76, w: 2.55, h: 0.3, fontFace: FONT, fontSize: 9.5, color: C.muted, margin: 0 });
    });
  }

  // ── SLIDE 9: CLOSE ───────────────────────────────────────────────────────
  {
    const s = pres.addSlide();
    s.background = { color: C.dark };

    s.addShape(pres.shapes.OVAL, { x: 7.5, y: 2.5, w: 3.5, h: 3.5, fill: { color: C.teal, transparency: 90 }, line: { color: C.teal, transparency: 90 } });

    s.addText("The opportunity is real.", { x: 0.65, y: 1.4, w: 8, h: 0.75, fontFace: FONT, fontSize: 38, color: C.white, bold: true, margin: 0 });
    s.addText("Zambia is growing faster than the UK did at this stage.\nThe payment layer is solved. Behaviour is shifting.\nThe question is whether we move now — or watch others do it first.", {
      x: 0.65, y: 2.35, w: 7.5, h: 1.5, fontFace: FONT, fontSize: 14, color: C.muted, margin: 0
    });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.65, y: 4.55, w: 8.7, h: 0.015, fill: { color: C.teal, transparency: 50 }, line: { color: C.teal, transparency: 50 } });
    s.addText("Thank you  ·  Questions welcome", { x: 0.65, y: 4.75, w: 6, h: 0.38, fontFace: FONT, fontSize: 11, color: C.muted, margin: 0 });
  }

  await pres.writeFile({ fileName: "/home/claude/zambia_v2.pptx" });
  console.log("Done!");
}

main().catch(console.error);
