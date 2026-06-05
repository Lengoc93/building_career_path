import { useState } from "react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts";

const DIMENSIONS = [
  { key: "lifestyle", label: "Lifestyle Fit", desc: "Cultural fit, energy, support network, personal comfort" },
  { key: "costEfficiency", label: "Cost Efficiency", desc: "Low relocation, travel, living & healthcare costs (higher = cheaper)" },
  { key: "takeHomePay", label: "Take-Home Pay", desc: "Salary purchasing power after tax & cost of living" },
  { key: "careerUpside", label: "Career Upside", desc: "Growth trajectory, global network, equity, market access" },
  { key: "domainFit", label: "Domain Fit", desc: "How well your AI/fintech/SEA background maps to the role context" },
  { key: "sustainability", label: "Sustainability", desc: "Time zone friction, travel cadence, long-term energy cost" },
];

const SCENARIOS = [
  {
    id: "vn",
    label: "🇻🇳 Vietnam",
    sublabel: "Work + client base",
    group: "home",
    color: "#ef4444",
    scores: { lifestyle: 9, costEfficiency: 9, takeHomePay: 3, careerUpside: 4, domainFit: 8, sustainability: 9 },
    notes: {
      lifestyle: "Home country. Full family/social network. Zero adaptation. Maximum personal comfort.",
      costEfficiency: "No relocation. Extremely low living cost. No travel expense.",
      takeHomePay: "VP/Head of Product salaries in VN: ~$40–80K USD equivalent. Severely limited ceiling.",
      careerUpside: "Strong local network but limited global trajectory. Risk of market insularity.",
      domainFit: "Deep VN fintech/AI context. High relevance for local clients. Limited global signal.",
      sustainability: "Optimal. No timezone stress, full support network, energy preserved.",
    },
  },
  {
    id: "sg_sea",
    label: "🇸🇬 Singapore-based",
    sublabel: "Relocation · SEA/VN clients",
    group: "sg",
    color: "#f97316",
    scores: { lifestyle: 6, costEfficiency: 6, takeHomePay: 7, careerUpside: 8, domainFit: 9, sustainability: 7 },
    notes: {
      lifestyle: "2 years prior experience helps. Familiar but away from family. SG culture manageable.",
      costEfficiency: "Company covers work travel. Remaining cost burden: SG living cost (high) + visa admin (EP annual renewal). One-off relocation is real but manageable.",
      takeHomePay: "SGD 160–220K base. After SG living costs, purchasing power ~60–70% of nominal.",
      careerUpside: "ASEAN hub access. Strong regional network-building. Clear VP-to-CPO ladder.",
      domainFit: "Maximum alignment — VN/SEA fintech expertise directly relevant to client base.",
      sustainability: "No timezone friction. Regional travel manageable. Family distance is recurring cost.",
    },
  },
  {
    id: "sg_global",
    label: "🇸🇬 SG company",
    sublabel: "VN/remote-based · non-SEA clients",
    group: "sg",
    color: "#eab308",
    scores: { lifestyle: 8, costEfficiency: 8, takeHomePay: 9, careerUpside: 8, domainFit: 6, sustainability: 6 },
    notes: {
      lifestyle: "Best-of-both: live in VN, SG-level brand. Family intact. Some travel disruption.",
      costEfficiency: "VN cost base + SG salary = highest purchasing power ratio of all scenarios. Work travel covered eliminates the main recurring cost drag. Remaining: occasional VN family visits (SG→HAN $150–300, low burden).",
      takeHomePay: "SG-range salary (~SGD 160–220K) with VN cost of living. Effective multiplier ~2.5x.",
      careerUpside: "Global client exposure. SG brand credibility. Strong Founder/EIR pipeline positioning.",
      domainFit: "Non-SEA clients means background is a differentiator but not a direct fit. Bridge required.",
      sustainability: "Intercontinental travel to client hubs (US/EU). 1–2 trips/month is sustainable but tiring.",
    },
  },
  {
    id: "dubai_nonsea",
    label: "🇦🇪 Dubai HQ",
    sublabel: "VN/remote-based · non-SEA clients",
    group: "mena",
    color: "#8b5cf6",
    scores: { lifestyle: 4, costEfficiency: 6, takeHomePay: 8, careerUpside: 7, domainFit: 5, sustainability: 4 },
    notes: {
      lifestyle: "Culturally distant. Very thin Vietnamese community — natural social gravity won't work here. Outdoor activity culture limited by heat 8 months/year. Significant adaptation effort with fewer familiar anchors.",
      costEfficiency: "Work travel to Dubai covered by company. Visa sponsored. Remaining cost: occasional VN visits ($500–800 round trip, 1–2x/year) and admin friction on employer-tied visa transitions (~30 day window).",
      takeHomePay: "Tax-free Dubai salary + VN cost base is attractive. Gross ≈ net in UAE.",
      careerUpside: "MENA/global network exposure. Prestigious. Good for Founder positioning if exits exist.",
      domainFit: "Non-SEA clients + MENA context = low direct fit. Learning curve on market norms.",
      sustainability: "DXB–HAN is ~8–9hr flight. Quarterly or monthly cadence is genuinely draining.",
    },
  },
  {
    id: "us_nonsea",
    label: "🇺🇸 US HQ",
    sublabel: "VN/remote-based · non-SEA clients",
    group: "western",
    color: "#3b82f6",
    scores: { lifestyle: 4, costEfficiency: 5, takeHomePay: 9, careerUpside: 9, domainFit: 7, sustainability: 3 },
    notes: {
      lifestyle: "Extreme timezone gap (12–14hrs). Heavy cultural translation needed. No social network.",
      costEfficiency: "Work travel to US covered. Visa sponsored (company absorbs O-1/H-1B cost). Remaining: occasional VN visits ($1,200–2,000, 1–2x/year) + 60-day transition window risk on job switch. Healthcare gap risk if between sponsors.",
      takeHomePay: "Highest ceiling: $180–270K base + equity. US salary with VN cost base is exceptional.",
      careerUpside: "Maximum ceiling. US network is the most valuable globally. Best Founder/VC pipeline.",
      domainFit: "US client experience (Republic Finance, Unity Asset Mgmt) is a direct signal. Good bridge.",
      sustainability: "Brutal. Early-morning or late-night calls daily. Travel is 24hr+ door-to-door. Burnout risk.",
    },
  },
  {
    id: "uk_nonsea",
    label: "🇬🇧 UK HQ",
    sublabel: "VN/remote-based · non-SEA clients",
    group: "western",
    color: "#06b6d4",
    scores: { lifestyle: 5, costEfficiency: 6, takeHomePay: 7, careerUpside: 8, domainFit: 6, sustainability: 5 },
    notes: {
      lifestyle: "Better timezone than US (+6–7hrs vs VN). Moderate cultural fit. No existing network, but UK has established Vietnamese community in London.",
      costEfficiency: "Work travel to UK covered. Global Talent Visa is individual-held — zero transition risk between employers, strongest visa structure of all Western markets. Remaining cost: VN visits (£700–1,200, 1–2x/year).",
      takeHomePay: "£110–160K base. After SG/US comparison, mid-tier. Better with VN cost base.",
      careerUpside: "London fintech ecosystem (Monzo, Revolut heritage) strong. FCA experience bridge works.",
      domainFit: "UK non-SEA clients: FDCPA/TCPA → FCA compliance knowledge is transferable.",
      sustainability: "GMT+7 vs GMT = 6hr gap. Calls doable in evening VN time. Travel covered so no cost friction. UK timezone is the most workable of all Western HQ scenarios — evening sync is sustainable without full schedule inversion.",
    },
  },
  {
    id: "dubai_sea",
    label: "🇦🇪 Dubai HQ",
    sublabel: "VN/remote-based · SEA/VN clients",
    group: "mena",
    color: "#a855f7",
    scores: { lifestyle: 4, costEfficiency: 6, takeHomePay: 8, careerUpside: 7, domainFit: 8, sustainability: 5 },
    notes: {
      lifestyle: "SEA clients means VN-daytime work is core, not edge — that helps. But Dubai HQ visits still land you in a culturally distant place with a thin VN community and limited outdoor activity. Lifestyle nudged down to reflect that.",
      costEfficiency: "Work travel to Dubai HQ covered. SEA client meetings in VN timezone. Remaining: VN visits minimal (already home-based). Visa transition window (~30 days) is the only real friction.",
      takeHomePay: "Tax-free Dubai HQ salary + VN cost base. Strong net take-home.",
      careerUpside: "Unusual positioning: MENA HQ + SEA expertise. Differentiating Founder angle.",
      domainFit: "High — SEA/VN clients are your natural domain. Dubai HQ adds MENA credibility.",
      sustainability: "SEA client timezone = VN time. Dubai HQ travel quarterly. Better than non-SEA version.",
    },
  },
  {
    id: "us_sea",
    label: "🇺🇸 US HQ",
    sublabel: "VN/remote-based · SEA/VN clients",
    group: "western",
    color: "#2563eb",
    scores: { lifestyle: 3, costEfficiency: 5, takeHomePay: 8, careerUpside: 8, domainFit: 7, sustainability: 2 },
    notes: {
      lifestyle: "Worst of all: US timezone + VN-based + SEA clients = around-the-clock availability pressure.",
      costEfficiency: "Work travel to US HQ covered. SEA client meetings in VN timezone — no additional travel. Remaining: VN visits occasional ($1,200–2,000). Visa transition risk is the dominant remaining cost factor.",
      takeHomePay: "US salary + VN cost base still delivers strong purchasing power despite high travel.",
      careerUpside: "US brand + SEA domain expertise = rare combo. High value if you survive it.",
      domainFit: "Domain fit is high — your background is directly relevant to the SEA client base.",
      sustainability: "Near-impossible: US HQ calls at midnight VN time + SEA client calls during VN day.",
    },
  },
  {
    id: "uk_sea",
    label: "🇬🇧 UK HQ",
    sublabel: "VN/remote-based · SEA/VN clients",
    group: "western",
    color: "#0891b2",
    scores: { lifestyle: 5, costEfficiency: 6, takeHomePay: 7, careerUpside: 7, domainFit: 7, sustainability: 5 },
    notes: {
      lifestyle: "UK timezone gap manageable. SEA client work is VN-daytime. UK has Vietnamese community in London — better social anchor than Dubai for occasional HQ visits.",
      costEfficiency: "Work travel to UK HQ covered. SEA client meetings in VN timezone — no additional travel. Global Talent Visa = zero transition friction. Remaining: VN visits minimal (home-based).",
      takeHomePay: "GBP salary + VN cost base = solid. Not peak, but reasonable net take-home.",
      careerUpside: "Interesting bridge: UK fintech credibility + SEA domain depth. Growing segment.",
      domainFit: "High domain fit on client side. UK HQ context is adjacent but not direct.",
      sustainability: "GMT+7 vs GMT+0: evening calls for UK sync + daytime for SEA. Manageable.",
    },
  },

  // ── FULL RELOCATION SCENARIOS ──
  {
    id: "dubai_relocate_nonsea",
    label: "🇦🇪 Dubai (Relocated)",
    sublabel: "Live in Dubai · non-SEA/global clients",
    group: "mena_reloc",
    color: "#f59e0b",
    scores: { lifestyle: 3, costEfficiency: 5, takeHomePay: 7, careerUpside: 7, domainFit: 5, sustainability: 6 },
    notes: {
      lifestyle: "No prior Dubai life experience. Conservative culture. Summers 45°C+ eliminate outdoor activity — kayaking and trekking (your primary social entry point) are non-viable 8 months/year. Extremely thin Vietnamese community = natural social gravity finds no anchor. Expat friendships have high churn. Lifestyle takes the sharpest hit of any scenario here.",
      costEfficiency: "Company sponsors and covers visa + work travel costs. Remaining: Dubai living cost is high (rent, lifestyle inflation). 0% income tax partially offsets. Healthcare employer-covered. One-off physical relocation is the main out-of-pocket cost.",
      takeHomePay: "Tax-free AED salary: VP/Head of Product typically AED 35–55K/month (≈$115–180K USD gross = net). After Dubai cost of living (~$4–6K/month), effective take-home is mid-range vs. VN-remote scenarios but competitive vs. relocated UK.",
      careerUpside: "Dubai is building fast as a global tech/fintech hub (DIFC, FinTech Hive). Good for MENA network. Less compelling for SEA/VN trajectory. Founder/EIR options exist but ecosystem is younger vs. SG/London/NYC.",
      domainFit: "MENA debt collection and fintech markets are distinct from US/SEA. BNPL and Islamic finance norms apply. Your background is a general AI product signal but not a direct domain fit — meaningful learning curve.",
      sustainability: "Once relocated, no timezone drama — Gulf timezone (GMT+4) is manageable for Europe and Asia overlap. Travel to non-SEA clients is regionally close. Main sustainability cost is cultural and family distance, not logistics.",
    },
  },
  {
    id: "us_relocate_global",
    label: "🇺🇸 US (Relocated)",
    sublabel: "Live in US · global clients",
    group: "western_reloc",
    color: "#1d4ed8",
    scores: { lifestyle: 4, costEfficiency: 3, takeHomePay: 6, careerUpside: 10, domainFit: 7, sustainability: 7 },
    notes: {
      lifestyle: "Massive cultural shift. No existing social network in the US. Building from zero. Vietnamese community exists in major cities (San Jose, Houston, NYC) but integration is years of effort. Family in VN is far and expensive to visit (1–2x/year realistic). High stress environment — US work culture is intense.",
      costEfficiency: "Company covers visa (O-1/H-1B legal fees absorbed) and work travel. Remaining costs are still the heaviest of all scenarios: US living cost ($6–8K/month SF/NYC), federal + state income tax (~38–42% effective), healthcare gap risk between employer coverage periods. One-off physical relocation significant. Still the lowest cost efficiency — living cost compression is structural.",
      takeHomePay: "Base $180–270K sounds exceptional, but after federal tax (37% top bracket), state tax (9–13% in CA/NY), and $6–8K/month living cost, effective take-home is surprisingly compressed vs. SG-remote or Dubai scenarios. Equity upside is the real differentiator if you join the right company.",
      careerUpside: "This is a 10/10 for a reason. US is the apex of the global tech career system. Access to the best VC networks, the deepest talent pools, and the highest-value exits. If Founder/EIR is the goal, US residency is the most powerful unlock. No other market comes close on this dimension.",
      domainFit: "Strong — your Republic Finance and Unity Asset Management production experience is a direct, verifiable US market signal. FDCPA/TCPA compliance depth is real and rare for a non-US candidate. This is your strongest external market fit anchor.",
      sustainability: "Once in the US, timezone is solved — no 2am calls. Travel to global clients is manageable from US hubs. The sustainability cost is personal and family: VN trips are 20hr+, expensive, and rare. Long-term, this is the scenario where you most fully re-root your life.",
    },
  },
  {
    id: "uk_relocate_global",
    label: "🇬🇧 UK (Relocated)",
    sublabel: "Live in London · global/UK clients",
    group: "western_reloc",
    color: "#0284c7",
    scores: { lifestyle: 5, costEfficiency: 4, takeHomePay: 5, careerUpside: 8, domainFit: 6, sustainability: 7 },
    notes: {
      lifestyle: "London is one of the world's most diverse cities — cultural adaptation is real but more manageable than Dubai or US Midwest. Vietnamese community in London is established. Weather is famously grim. Distance from VN family is significant but flights are ~11hrs and more affordable than US. Work culture is more balanced than US intensity.",
      costEfficiency: "Company covers work travel. Global Talent Visa individual-held — zero employer-change friction and no legal cost with sponsorship. Remaining: London living cost (£4–5K/month), 40–45% income tax above £50K, IHS healthcare surcharge (~£1,000/yr). GBP volatility is a real savings risk. Better than US but still compressed vs. VN-remote scenarios.",
      takeHomePay: "£110–160K base sounds strong but UK income tax is among the steepest: 40–45% on earnings above £50K. After tax and London cost of living (~£4–5K/month), net take-home is the weakest of the three relocation scenarios. Equity can compensate if joining a pre-IPO fintech (Revolut, Monzo ecosystem).",
      careerUpside: "London fintech ecosystem is world-class and the second most important global fintech hub after NYC/SF. Revolut, Wise, Monzo, Starling heritage creates a rich operator network. FCA-regulated AI product experience is increasingly valuable globally. Solid pathway to CPO and Founder roles in EU/UK.",
      domainFit: "FDCPA/TCPA → FCA compliance translation is credible and defensible. UK debt collection AI market is nascent — you'd be an early mover. B2B SaaS and open banking fintech are strong adjacent domains where your background lands well.",
      sustainability: "London timezone (GMT/BST) overlaps cleanly with both European clients and, in the morning, with early US East Coast. For global clients, overlap windows are reasonable. VN family visits: 1–2x/year manageable. No timezone drama once relocated. Better work-life balance than US culture generally.",
    },
  },
];

const GROUP_COLORS = {
  home: "#ef4444",
  sg: "#f97316",
  mena: "#8b5cf6",
  western: "#3b82f6",
  mena_reloc: "#f59e0b",
  western_reloc: "#1d4ed8",
};

const GROUP_LABELS = {
  home: "Home Base",
  sg: "Singapore",
  mena: "MENA (remote)",
  western: "West (remote)",
  mena_reloc: "MENA (relocated)",
  western_reloc: "West (relocated)",
};

const RELOCATION_GROUPS = ["mena_reloc", "western_reloc"];

function ScoreBar({ value, color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{ flex: 1, height: "6px", background: "#1e293b", borderRadius: "3px" }}>
        <div style={{ width: `${value * 10}%`, height: "100%", background: color, borderRadius: "3px", transition: "width 0.4s ease" }} />
      </div>
      <span style={{ fontSize: "12px", fontWeight: "700", color, minWidth: "16px", fontFamily: "monospace" }}>{value}</span>
    </div>
  );
}

function RadarTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: "#0f172a", border: "1px solid #334155", borderRadius: "8px", padding: "8px 12px" }}>
      <div style={{ color: "#f8fafc", fontSize: "13px", fontWeight: "600" }}>{payload[0]?.payload?.label}</div>
      <div style={{ color: "#94a3b8", fontSize: "12px" }}>{payload[0]?.value}/10</div>
    </div>
  );
}

export default function CareerRadar() {
  const [selected, setSelected] = useState(["vn", "sg_global", "us_nonsea"]);
  const [hoverDim, setHoverDim] = useState(null);
  const [compareMode, setCompareMode] = useState(false);
  const [activeSingle, setActiveSingle] = useState("sg_global");

  const toggle = (id) => {
    setSelected(prev =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter(x => x !== id) : prev) : [...prev, id]
    );
  };

  const displayScenarios = compareMode
    ? SCENARIOS.filter(s => selected.includes(s.id))
    : [SCENARIOS.find(s => s.id === activeSingle)];

  const radarData = DIMENSIONS.map(dim => {
    const entry = { label: dim.label };
    displayScenarios.forEach(s => { entry[s.id] = s.scores[dim.key]; });
    return entry;
  });

  const overallScore = (s) => {
    const vals = Object.values(s.scores);
    return (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#060f1e",
      color: "#f1f5f9",
      fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1e3a5f",
        padding: "28px 32px 20px",
        background: "linear-gradient(135deg, #060f1e 0%, #0c1e3a 100%)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#3b82f6", fontWeight: "600", marginBottom: "6px", textTransform: "uppercase" }}>
                Career Positioning Analysis · Ngoc Le
              </div>
              <h1 style={{ fontSize: "26px", fontWeight: "800", margin: 0, letterSpacing: "-0.5px", color: "#f8fafc" }}>
                Market × Role Scenario Radar
              </h1>
              <div style={{ fontSize: "13px", color: "#64748b", marginTop: "4px" }}>
                9 scenarios scored across 6 dimensions · AI/Fintech VP Profile
              </div>
            </div>
            <button
              onClick={() => setCompareMode(!compareMode)}
              style={{
                padding: "8px 16px",
                background: compareMode ? "#1d4ed8" : "transparent",
                border: "1px solid " + (compareMode ? "#1d4ed8" : "#334155"),
                borderRadius: "6px",
                color: compareMode ? "#fff" : "#94a3b8",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {compareMode ? "⊗ Compare Mode ON" : "⊕ Compare Mode"}
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px 32px" }}>

        {/* Scenario Selector */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#475569", fontWeight: "600", marginBottom: "10px", textTransform: "uppercase" }}>
            {compareMode ? "Select scenarios to compare (multi-select)" : "Select scenario to explore"}
          </div>
          {/* Group rows */}
          {Object.entries(GROUP_LABELS).map(([groupKey, groupLabel]) => {
            const groupScenarios = SCENARIOS.filter(s => s.group === groupKey);
            if (!groupScenarios.length) return null;
            const isReloc = RELOCATION_GROUPS.includes(groupKey);
            return (
              <div key={groupKey} style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <span style={{ fontSize: "10px", letterSpacing: "1.5px", color: isReloc ? "#f59e0b" : "#334155", fontWeight: "700", textTransform: "uppercase" }}>
                    {isReloc ? "✈ " : ""}{groupLabel}
                  </span>
                  {isReloc && (
                    <span style={{ fontSize: "10px", background: "#f59e0b22", border: "1px solid #f59e0b44", borderRadius: "4px", padding: "1px 6px", color: "#f59e0b" }}>
                      Full relocation
                    </span>
                  )}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {groupScenarios.map(s => {
                    const isActive = compareMode ? selected.includes(s.id) : activeSingle === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => compareMode ? toggle(s.id) : setActiveSingle(s.id)}
                        style={{
                          padding: "7px 13px",
                          background: isActive ? s.color + "22" : "transparent",
                          border: "1px solid " + (isActive ? s.color : (isReloc ? "#3d2a0a" : "#1e3a5f")),
                          borderRadius: "20px",
                          color: isActive ? s.color : (isReloc ? "#6b4c1a" : "#475569"),
                          fontSize: "12px",
                          fontWeight: "600",
                          cursor: "pointer",
                          transition: "all 0.2s",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {s.label}
                        <span style={{ fontSize: "10px", opacity: 0.7, marginLeft: "4px" }}>{s.sublabel}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content: Radar + Scores */}
        <div style={{ display: "grid", gridTemplateColumns: compareMode ? "1fr" : "1fr 380px", gap: "24px", alignItems: "start" }}>

          {/* Radar Chart */}
          <div style={{
            background: "#0c1a2e",
            border: "1px solid #1e3a5f",
            borderRadius: "12px",
            padding: "24px",
          }}>
            <div style={{ height: compareMode ? "420px" : "380px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
                  <PolarGrid stroke="#1e3a5f" />
                  <PolarAngleAxis
                    dataKey="label"
                    tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 600 }}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 10]}
                    tick={{ fill: "#475569", fontSize: 9 }}
                    tickCount={6}
                  />
                  <Tooltip content={<RadarTooltip />} />
                  {displayScenarios.map(s => (
                    <Radar
                      key={s.id}
                      name={s.label}
                      dataKey={s.id}
                      stroke={s.color}
                      fill={s.color}
                      fillOpacity={compareMode ? 0.08 : 0.15}
                      strokeWidth={2}
                    />
                  ))}
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            {compareMode && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "12px", paddingTop: "16px", borderTop: "1px solid #1e3a5f" }}>
                {displayScenarios.map(s => (
                  <div key={s.id} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: "12px", height: "3px", background: s.color, borderRadius: "2px" }} />
                    <span style={{ fontSize: "11px", color: "#94a3b8", fontWeight: "600" }}>{s.label}</span>
                    <span style={{ fontSize: "11px", color: "#475569" }}>({overallScore(s)})</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dimension Breakdown — single mode only */}
          {!compareMode && (() => {
            const s = SCENARIOS.find(x => x.id === activeSingle);
            if (!s) return null;
            return (
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {/* Header card */}
                <div style={{
                  background: s.color + "18",
                  border: "1px solid " + s.color + "44",
                  borderRadius: "12px 12px 0 0",
                  padding: "16px 20px",
                  borderBottom: "none",
                }}>
                  <div style={{ fontSize: "18px", fontWeight: "800", color: "#f8fafc" }}>{s.label}</div>
                  <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "2px" }}>{s.sublabel}</div>
                  <div style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ fontSize: "28px", fontWeight: "900", color: s.color }}>{overallScore(s)}</div>
                    <div style={{ fontSize: "11px", color: "#64748b" }}>/ 10 avg</div>
                  </div>
                </div>

                {/* Dimension scores */}
                <div style={{
                  background: "#0c1a2e",
                  border: "1px solid #1e3a5f",
                  borderRadius: "0 0 12px 12px",
                  overflow: "hidden",
                }}>
                  {DIMENSIONS.map((dim, i) => {
                    const val = s.scores[dim.key];
                    const isHover = hoverDim === dim.key;
                    return (
                      <div
                        key={dim.key}
                        onMouseEnter={() => setHoverDim(dim.key)}
                        onMouseLeave={() => setHoverDim(null)}
                        style={{
                          padding: "12px 20px",
                          borderBottom: i < DIMENSIONS.length - 1 ? "1px solid #0f2a45" : "none",
                          background: isHover ? "#0f2a45" : "transparent",
                          transition: "background 0.15s",
                          cursor: "default",
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                          <span style={{ fontSize: "12px", fontWeight: "700", color: isHover ? "#f8fafc" : "#94a3b8" }}>
                            {dim.label}
                          </span>
                          <span style={{ fontSize: "10px", color: val >= 7 ? "#22c55e" : val >= 5 ? "#f59e0b" : "#ef4444", fontWeight: "700" }}>
                            {val >= 7 ? "●" : val >= 5 ? "◐" : "○"} {val}/10
                          </span>
                        </div>
                        <ScoreBar value={val} color={val >= 7 ? "#22c55e" : val >= 5 ? "#f59e0b" : "#ef4444"} />
                        {isHover && (
                          <div style={{ marginTop: "8px", fontSize: "11px", color: "#64748b", lineHeight: "1.5", fontStyle: "italic" }}>
                            {s.notes[dim.key]}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>

        {/* Comparison Table — always visible */}
        <div style={{ marginTop: "24px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#475569", fontWeight: "600", marginBottom: "12px", textTransform: "uppercase" }}>
            All Scenarios · Ranked Overview
          </div>
          <div style={{
            background: "#0c1a2e",
            border: "1px solid #1e3a5f",
            borderRadius: "12px",
            overflow: "auto",
          }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #1e3a5f" }}>
                  <th style={{ padding: "10px 16px", textAlign: "left", color: "#475569", fontWeight: "600", whiteSpace: "nowrap" }}>Scenario</th>
                  {DIMENSIONS.map(d => (
                    <th key={d.key} style={{ padding: "10px 10px", textAlign: "center", color: "#475569", fontWeight: "600", whiteSpace: "nowrap", fontSize: "10px" }}>
                      {d.label.split(" ").map((w, i) => <span key={i}>{w}<br /></span>)}
                    </th>
                  ))}
                  <th style={{ padding: "10px 16px", textAlign: "center", color: "#475569", fontWeight: "600", whiteSpace: "nowrap" }}>Avg</th>
                </tr>
              </thead>
              <tbody>
                {[...SCENARIOS].sort((a, b) => parseFloat(overallScore(b)) - parseFloat(overallScore(a))).map((s, i) => (
                  <tr
                    key={s.id}
                    onClick={() => { setActiveSingle(s.id); setCompareMode(false); }}
                    style={{
                      borderBottom: "1px solid #0f2a45",
                      cursor: "pointer",
                      background: (!compareMode && activeSingle === s.id) ? s.color + "12" : "transparent",
                      transition: "background 0.15s",
                    }}
                  >
                    <td style={{ padding: "10px 16px", whiteSpace: "nowrap" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <div style={{ width: "3px", height: "28px", background: s.color, borderRadius: "2px", flexShrink: 0 }} />
                        <div>
                          <div style={{ fontWeight: "700", color: "#f1f5f9" }}>{s.label}</div>
                          <div style={{ fontSize: "10px", color: "#475569" }}>{s.sublabel}</div>
                        </div>
                      </div>
                    </td>
                    {DIMENSIONS.map(d => {
                      const v = s.scores[d.key];
                      return (
                        <td key={d.key} style={{ padding: "10px", textAlign: "center" }}>
                          <span style={{
                            display: "inline-block",
                            width: "28px",
                            height: "28px",
                            lineHeight: "28px",
                            borderRadius: "6px",
                            background: v >= 8 ? "#14532d" : v >= 6 ? "#1c1a0a" : v >= 4 ? "#1c0a0a" : "#0f0f0f",
                            color: v >= 8 ? "#4ade80" : v >= 6 ? "#fbbf24" : v >= 4 ? "#f87171" : "#ef4444",
                            fontWeight: "700",
                            fontSize: "12px",
                          }}>
                            {v}
                          </span>
                        </td>
                      );
                    })}
                    <td style={{ padding: "10px 16px", textAlign: "center" }}>
                      <span style={{
                        fontWeight: "800",
                        fontSize: "14px",
                        color: parseFloat(overallScore(s)) >= 7 ? "#4ade80" : parseFloat(overallScore(s)) >= 5.5 ? "#fbbf24" : "#f87171",
                      }}>
                        {overallScore(s)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ fontSize: "10px", color: "#334155", marginTop: "8px", textAlign: "right" }}>
            Click any row to explore · Hover dimension bars for rationale
          </div>
        </div>

        {/* Strategic callouts */}
        <div style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
          {[
            { label: "🏆 Best overall (remote)", scenario: "🇸🇬 SG company, VN/remote, non-SEA", score: "Avg 7.2", note: "SG salary + VN cost base + career upside. Best net value without uprooting your life." },
            { label: "🚀 Best career ceiling (reloc)", scenario: "🇺🇸 US (Relocated)", score: "Career: 10/10", note: "The apex move. US network, equity upside, and your US client proof-points make this the highest-ceiling bet — if you're willing to fully re-root." },
            { label: "🌏 Best relocation value", scenario: "🇬🇧 UK (Relocated)", score: "Balanced 5.7", note: "Most accessible Western relocation via Global Talent Visa. London fintech ecosystem is world-class. Best balance of cultural adaptation and career access among full-relocation options." },
          ].map((c, i) => (
            <div key={i} style={{
              background: "#0c1a2e",
              border: "1px solid #1e3a5f",
              borderRadius: "10px",
              padding: "14px 16px",
            }}>
              <div style={{ fontSize: "10px", color: "#475569", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>{c.label}</div>
              <div style={{ fontSize: "13px", fontWeight: "700", color: "#f8fafc", marginBottom: "4px" }}>{c.scenario}</div>
              <div style={{ fontSize: "11px", color: "#3b82f6", fontWeight: "600", marginBottom: "6px" }}>{c.score}</div>
              <div style={{ fontSize: "11px", color: "#64748b", lineHeight: "1.5" }}>{c.note}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
