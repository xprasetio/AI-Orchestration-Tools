import React from "react";
import { createRoot } from "react-dom/client";
import { Activity, ArrowUpRight, Bot, Check, ChevronRight, GitBranch, Layers3, Play, ShieldCheck, Workflow } from "lucide-react";
import "./styles.css";

type Node = { name: string; type: string; state: "live" | "queued" | "ready"; x: string; y: string };

const nodes: Node[] = [
  { name: "Product Brief", type: "INPUT", state: "ready", x: "4%", y: "46%" },
  { name: "Lead Agent", type: "ROUTER", state: "live", x: "29%", y: "17%" },
  { name: "Design Agent", type: "DESIGN", state: "live", x: "55%", y: "5%" },
  { name: "Code Agent", type: "BUILD", state: "live", x: "55%", y: "52%" },
  { name: "QA Gate", type: "VERIFY", state: "queued", x: "77%", y: "29%" },
];

function App() {
  return <main>
    <div className="scanlines" aria-hidden="true" />
    <nav className="nav shell"><a className="brand" href="#top"><span>AO</span> AI ORCHESTRATION <i>TOOLS</i></a><div className="nav-links"><a href="#protocol">Protocol</a><a href="#systems">Systems</a><a href="#launch">Launch</a></div><a className="nav-github" href="https://github.com/xprasetio/AI-Orchestration-Tools" target="_blank" rel="noreferrer"><GitBranch size={17}/> Source <ArrowUpRight size={15}/></a></nav>

    <section className="hero shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span className="pulse"/> SYSTEM ONLINE // v0.1</p>
        <h1 data-text="COMMAND THE SWARM">COMMAND<br/>THE <em>SWARM</em></h1>
        <p className="lede">One command surface for autonomous agents, human approvals, and the workflows that turn intent into shipped software.</p>
        <div className="actions"><a className="button primary" href="#launch"><Play size={17} fill="currentColor"/> Initialize protocol</a><a className="button secondary" href="#protocol">Explore the system <ChevronRight size={17}/></a></div>
        <div className="signal"><span>TERMINAL://</span> orchestration layer ready<span className="cursor">_</span></div>
      </div>
      <div className="hero-hud" aria-label="Live orchestration graph">
        <div className="hud-head"><span><Activity size={14}/> LIVE ORCHESTRATION MAP</span><span className="hud-status">05 AGENTS</span></div>
        <div className="graph"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M16 52 L37 27 L62 16 M37 27 L62 62 L83 40 M62 16 L83 40"/></svg>{nodes.map(n=><div key={n.name} className={`node ${n.state}`} style={{left:n.x,top:n.y}}><small>{n.type}</small><strong>{n.name}</strong><span/></div>)}</div>
        <div className="hud-foot"><span>EVENT STREAM: <b>19/s</b></span><span>LATENCY: <b>32ms</b></span></div>
      </div>
    </section>

    <section className="ticker"><div>● AGENT COORDINATION <b>///</b> HUMAN-IN-THE-LOOP <b>///</b> TRACEABLE EXECUTION <b>///</b> DEPLOYMENT SIGNALS <b>///</b> AGENT COORDINATION <b>///</b> HUMAN-IN-THE-LOOP <b>///</b></div></section>

    <section className="protocol shell" id="protocol"><div className="section-label">01 // CONTROL PROTOCOL</div><div className="protocol-grid"><div><h2>NOT ANOTHER<br/><span>AUTOPILOT.</span></h2><p>AI Orchestration Tools is a command layer for teams building with agents. Give each specialist a bounded role. Route work through visible gates. Keep the human decision where it matters.</p></div><div className="terminal-card"><div className="terminal-head"><span/><span/><span/> mission.orchestrate</div><code><i>$</i> objective.deploy("landing-page")<br/><i>→</i> route: <b>lead-agent</b><br/><i>→</i> delegate: design, copy, engineering<br/><i>→</i> gate: human_approval<br/><i>✓</i> workflow compiled <span className="cursor">_</span></code></div></div></section>

    <section className="systems" id="systems"><div className="shell"><div className="section-label">02 // THE STACK</div><div className="systems-head"><h2>ONE SIGNAL.<br/>MANY <span>OPERATORS.</span></h2><p>Replace fragmented chat threads and invisible background jobs with an operational model your whole team can inspect.</p></div><div className="systems-grid">
      <article><div className="icon"><Workflow/></div><small>ROUTE_01</small><h3>Directed workflows</h3><p>Define handoffs, dependencies, and the exact moments an agent needs a human answer.</p></article>
      <article><div className="icon magenta"><Bot/></div><small>ROUTE_02</small><h3>Specialist agents</h3><p>Give design, engineering, QA, and research their own context instead of one overloaded prompt.</p></article>
      <article><div className="icon cyan"><Layers3/></div><small>ROUTE_03</small><h3>Visible state</h3><p>See active work, blocked decisions, and completed output in a single operational timeline.</p></article>
    </div></div></section>

    <section className="sequence shell"><div className="section-label">03 // EXECUTION SEQUENCE</div><div className="sequence-layout"><h2>FROM INTENT<br/>TO <span>IMPACT.</span></h2><ol><li><b>01</b><div><strong>Declare the objective</strong><p>Start from a meaningful outcome, not a pile of disconnected prompts.</p></div></li><li><b>02</b><div><strong>Route specialist work</strong><p>Orchestrate agents with explicit ownership, context, and deliverables.</p></div></li><li><b>03</b><div><strong>Approve critical gates</strong><p>Keep humans in control of decisions that affect product, cost, or production.</p></div></li><li><b>04</b><div><strong>Ship with evidence</strong><p>Every execution leaves a trace: output, tests, review, and deployment signal.</p></div></li></ol></div></section>

    <section className="launch shell" id="launch"><div className="launch-grid"><div><p className="eyebrow"><span className="pulse"/> ACCESS CHANNEL OPEN</p><h2>BUILD THE<br/><span>CONTROL LAYER.</span></h2><p>Start with the source. Shape the operating system your AI team deserves.</p><a className="button primary" href="https://github.com/xprasetio/AI-Orchestration-Tools" target="_blank" rel="noreferrer"><GitBranch size={18}/> View on GitHub <ArrowUpRight size={17}/></a></div><div className="manifest"><p>MANIFEST</p><ul><li><Check/> Agent-first workflows</li><li><Check/> Human approval gates</li><li><Check/> Observable execution</li><li><Check/> Built in public</li></ul><div className="manifest-mark"><GitBranch size={45}/><span>OPEN<br/>SOURCE</span></div></div></div></section>
    <footer className="shell"><span>AI ORCHESTRATION TOOLS © 2026</span><span><ShieldCheck size={14}/> DESIGNED FOR RESPONSIBLE AUTONOMY</span></footer>
  </main>;
}
createRoot(document.getElementById("root")!).render(<React.StrictMode><App/></React.StrictMode>);