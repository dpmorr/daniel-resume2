import type { ReactNode } from "react";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-5">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-3 w-3 rounded-sm bg-emerald-300" />
        <div className="h-3 w-3 rounded-sm bg-sky-300" />
        <div className="h-3 w-3 rounded-sm bg-amber-300" />
        <h2 className="text-lg font-semibold tracking-wide uppercase text-slate-800 ml-2">{title}</h2>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm">{children}</div>
    </section>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700 mr-2 mb-2 bg-slate-50">
      {children}
    </span>
  );
}

function SkillBar({ label, level }: { label: string; level: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs text-slate-600 mb-1"><span>{label}</span><span>{level}%</span></div>
      <div className="h-2 rounded-full bg-slate-100">
        <div className="h-2 rounded-full bg-emerald-300" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

export default function ResumeDesigned() {
  return (
    <div className="min-h-screen w-full bg-[#F6FFF9] text-slate-800">
      {/* Top ribbon shapes */}
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute -top-6 left-6 h-10 w-10 bg-amber-300" />
        <div className="absolute -top-4 right-10 h-8 w-8 bg-sky-200" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-8 print:px-0">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Daniel <span className="text-emerald-600">Morrissy</span>
            </h1>
            <p className="mt-1 text-slate-700 text-lg">Solutions Architect / Solutions Sales Engineer — Cloud, AI & IoT</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-700">
              <div className="flex items-center gap-2"><span>📍</span><span>Sydney, NSW</span></div>
              <div className="flex items-center gap-2"><span>✉️</span><span>email@domain.com</span></div>
              <div className="flex items-center gap-2"><span>🔗</span><span>linkedin.com/in/danielmorrissy</span></div>
              <a href="https://dpmorr.github.io/Daniel-Portfolio/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium">
                <span>🌐</span><span>Full Portfolio</span>
              </a>
              <button onClick={() => window.print()} className="ml-auto rounded-lg bg-emerald-600 px-3 py-1.5 text-white text-xs shadow hover:bg-emerald-700 print:hidden">
                Print / Save PDF
              </button>
            </div>
          </div>
          <div className="col-span-4">
            <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-2xl border-4 border-emerald-200 shadow-md bg-gradient-to-tr from-emerald-50 to-sky-50">
              <img src="/profile.png?v=2" alt="Daniel Morrissy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-sm leading-relaxed">
            Customer‑facing technical leader bridging product, architecture, and sales. I scope problems, design cloud solutions, and prove value through tailored demos, POCs, and clear ROI/TCO. Comfortable with C‑suite and engineering audiences, security & compliance reviews, and hands‑on build when needed. Strong in discovery, objection handling, and translating requirements into secure, scalable architectures on AWS/Azure.
          </p>
          <div className="mt-3">
            <Pill>Discovery / MEDDICC</Pill>
            <Pill>POCs & Demo Engineering</Pill>
            <Pill>Solution Architecture</Pill>
            <Pill>Security & Compliance</Pill>
            <Pill>Value / ROI & TCO</Pill>
            <Pill>RFP/RFI & SOWs</Pill>
            <Pill>AWS & Azure</Pill>
            <Pill>IoT · CV/ML · Data</Pill>
          </div>
        </Section>

        <div className="grid grid-cols-12 gap-6">
          {/* Left column */}
          <div className="col-span-12 lg:col-span-6">
            <Section title="Experience">
              <div className="space-y-4 text-sm">
                <div>
                  <div className="flex justify-between font-semibold"><span>Cierra Labs — Founder & Solutions Architect</span><span className="text-slate-500">2025–Present · Sydney</span></div>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Led technical discovery with enterprise prospects; mapped business outcomes to reference architectures and delivery plans.</li>
                    <li>Built demo environments and hands‑on POCs for cloud‑enabled products (IoT, APIs, analytics) to de‑risk adoption.</li>
                    <li>Produced security briefs, architecture diagrams, and sizing/cost models; contributed to SOWs and implementation plans.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between font-semibold"><span>Independent Ventures & Platforms — Solutions Architect / Consultant</span><span className="text-slate-500">2023–Present · Syd/Melb</span></div>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Designed cloud architectures and integration patterns for 10+ B2B solutions (asset tracking, claims, escrow, enterprise reporting).</li>
                    <li>Ran presales: discovery, tailored demos, and production‑like POCs across IoT + CV/ML + analytics; aligned to ROI/TCO and compliance.</li>
                    <li>Delivered pilots at major sites including <strong>Marvel Stadium</strong> and <strong>Salesforce Tower</strong>; integrated identity, security, and reporting requirements.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between font-semibold"><span>Crossmuller — Mechanical Engineer</span><span className="text-slate-500">2022–2023</span></div>
                  <div className="text-slate-600">Manufacturing & industrial solutions; requirements, validation, and change control.</div>
                </div>
                <div>
                  <div className="flex justify-between font-semibold"><span>Seytim Cabinetry — Manufacturing Manager</span><span className="text-slate-500">2021–2022 · Sydney</span></div>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Implemented a QR‑code work‑order & materials tracking system; automated job status updates and traceability across stations.</li>
                    <li>Built lightweight shop‑floor tools (web dashboards/forms) to surface WIP & scheduling; improved visibility and reduced manual chasing.</li>
                    <li>Partnered with ops & suppliers to standardise processes and data capture, enabling later integrations with inventory & reporting systems.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between font-semibold"><span>CSIRO — Associate Researcher (Part‑time)</span><span className="text-slate-500">2020</span></div>
                </div>
              </div>
            </Section>

            <Section title="Education">
              <ul className="text-sm space-y-2">
                <li><span className="font-semibold">UNSW — Master of Engineering Science (Manufacturing Eng & Mgmt)</span> • Feb 2022 – Oct 2022 • <em>Discontinued</em></li>
                <li><span className="font-semibold">University of Ottawa — BASc Mechanical Engineering (Study Abroad)</span> • 2018 – 2019 • GNTR Team member</li>
                <li><span className="font-semibold">Deakin University — BE (Hons) Mechanical Engineering</span> • 2015 – 2019 • Eng Society; President & Founder, Snow Club; University Games Coordinator</li>
                <li><span className="font-semibold">Deakin University — BCom, Economics</span> • 2014 – 2016</li>
              </ul>
            </Section>
          </div>

          {/* Right column */}
          <div className="col-span-12 lg:col-span-6">
            <Section title="Sales Engineering Toolkit">
              <div className="text-sm">
                <div className="mb-3 font-semibold">Process & Enablement</div>
                <div className="mb-2">
                  <Pill>MEDDICC / SPICED</Pill><Pill>Discovery & Qualification</Pill><Pill>Demo Narratives</Pill><Pill>Objection Handling</Pill>
                </div>
                <div className="mb-3 font-semibold">Architecture & Security</div>
                <div className="mb-2">
                  <Pill>Architecture Decision Records</Pill><Pill>Threat Modeling</Pill><Pill>Zero‑Trust / IAM</Pill><Pill>Data Residency</Pill>
                </div>
                <div className="mb-3 font-semibold">Commercial</div>
                <div>
                  <Pill>ROI/TCO Modeling</Pill><Pill>Licensing & Packaging</Pill><Pill>RFP/RFI</Pill><Pill>SOWs</Pill>
                </div>
              </div>
            </Section>

            <Section title="Technical Skills">
              <SkillBar label="AWS (IoT, Lambda, API GW, S3, ECS/Fargate)" level={88} />
              <SkillBar label="Azure (Functions, APIM, Storage)" level={72} />
              <SkillBar label="Microservices & APIs (REST/GraphQL)" level={85} />
              <SkillBar label="Data & Analytics (PostgreSQL, GA4)" level={78} />
              <SkillBar label="Security / Identity (OAuth2, SSO)" level={80} />
              <SkillBar label="CI/CD & IaC (GitHub Actions)" level={82} />
              <SkillBar label="IoT & CV/ML (SageMaker/Rekognition)" level={76} />
            </Section>

            <Section title="Selected Presales Projects">
              <div className="text-sm space-y-3">
                <div className="mb-3 p-2 bg-emerald-50 rounded-lg border border-emerald-200">
                  <span className="text-xs text-emerald-700">💡 View all projects at: </span>
                  <a href="https://dpmorr.github.io/Daniel-Portfolio/" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-600 hover:text-emerald-800 underline font-medium">
                    dpmorr.github.io/Daniel-Portfolio
                  </a>
                </div>
                <div>
                  <div className="font-semibold">Enterprise Waste & Compliance Pilot — Stadium / Commercial Office</div>
                  <div>Defined success metrics and delivered a production‑like POC across camera sensors, ingestion, ML inference, and dashboards; aligned outputs to compliance and cost‑reduction goals for operations leadership.</div>
                </div>
                <div>
                  <div className="font-semibold">Inventory & Trading SaaS — Reference Architecture</div>
                  <div>Produced integration patterns (catalogue, pricing, auth), data model, and deployment plan; created demo flow and ROI narrative for supply‑chain stakeholders.</div>
                </div>
              </div>
            </Section>

            <Section title="Certifications & Leadership">
              <ul className="text-sm list-disc ml-5 space-y-1">
                <li><strong>AWS Certified Solutions Architect</strong> — Amazon Web Services</li>
                <li><strong>Deep Learning Specialization</strong> — Coursera</li>
                <li><strong>IBM Product Manager Professional Certificate</strong> — Coursera</li>
                <li>Vice President — FND Hope International (Mar 2024–Present)</li>
              </ul>
            </Section>
          </div>
        </div>

        <div className="mt-4 text-[11px] text-slate-500">
          References available on request · Work rights: Australian citizen · Open to hybrid/remote
        </div>
      </div>
    </div>
  );
}