import type { ReactNode } from "react";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-5">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-3 w-3 rounded-sm bg-rose-300" />
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
        <div className="h-2 rounded-full bg-sky-300" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

export default function ResumeDesigned() {
  return (
    <div className="min-h-screen w-full bg-[#FFF7F3] text-slate-800">
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
              Daniel <span className="text-rose-500">Morrissy</span>
            </h1>
            <p className="mt-1 text-slate-700 text-lg">Product Manager — Cloud Platforms, AI & IoT</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-700">
              <div className="flex items-center gap-2"><span>📍</span><span>Sydney, NSW</span></div>
              <div className="flex items-center gap-2"><span>✉️</span><span>email@domain.com</span></div>
              <div className="flex items-center gap-2"><span>🔗</span><span>linkedin.com/in/danielmorrissy</span></div>
              <a href="https://dpmorr.github.io/Daniel-Portfolio/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-rose-500 hover:text-rose-600 font-medium">
                <span>🌐</span><span>Full Portfolio</span>
              </a>
              <button onClick={() => window.print()} className="ml-auto rounded-lg bg-rose-500 px-3 py-1.5 text-white text-xs shadow hover:bg-rose-600 print:hidden">
                Print / Save PDF
              </button>
            </div>
          </div>
          <div className="col-span-4">
            <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-2xl border-4 border-sky-200 shadow-md bg-gradient-to-tr from-rose-100 to-sky-100">
              <img src="/profile.png?v=2" alt="Daniel Morrissy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-sm leading-relaxed">
            Product leader with a hybrid background in engineering and venture building. I turn ambiguous problems into shipped products across IoT, AI/ML, and cloud platforms. I’ve launched zero-to-one platforms, run discovery with enterprise stakeholders, and led cross-functional teams to deliver measurable outcomes. Hands-on with AWS/Azure, APIs, and data pipelines; fluent in PM craft—roadmaps, OKRs, PRDs, RICE, user research, and GTM.
          </p>
          <div className="mt-3">
            <Pill>Discovery & JTBD</Pill><Pill>Roadmaps & OKRs</Pill><Pill>PRDs & Acceptance</Pill>
            <Pill>Stakeholder mgmt</Pill><Pill>Analytics (SQL/GA4)</Pill><Pill>AWS/Azure</Pill><Pill>CI/CD</Pill><Pill>IoT & CV/ML</Pill>
          </div>
        </Section>

        <div className="grid grid-cols-12 gap-6">
          {/* Left column */}
          <div className="col-span-12 lg:col-span-6">
            <Section title="Experience">
              <div className="space-y-4 text-sm">
                <div>
                  <div className="flex justify-between font-semibold"><span>Cierra Labs — Founder & Product Lead</span><span className="text-slate-500">2025–Present · Sydney</span></div>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Owned product strategy & roadmaps across multiple zero-to-one bets (IoT, platform APIs, enterprise SaaS).</li>
                    <li>Defined PRDs, KPI trees, and GTM hypotheses; built analytics/experiment baselines.</li>
                    <li>Standardised delivery (CI/CD, security baselines) to shrink time-to-first-value.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between font-semibold"><span>Compliro — Co-Founder & CTO (Acting PM)</span><span className="text-slate-500">2024–Present · Sydney</span></div>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Led discovery → PRDs → MVP → pilot for an enterprise WasteTech platform (IoT + CV/ML + analytics).</li>
                    <li>Shipped device mgmt, ingestion/labeling, dashboards, notifications; multi-tenant & enterprise security.</li>
                    <li>Pilots at <strong>Marvel Stadium</strong> and <strong>Salesforce Tower</strong>; coordinated SLAs and success metrics.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between font-semibold"><span>Independent Ventures & Platforms — Director / Venture Builder</span><span className="text-slate-500">2023–Present · Syd/Melb</span></div>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Product-led delivery of 10+ platforms (asset tracking, escrow, claims, enterprise reporting).</li>
                    <li>Ran RICE prioritisation, backlogs, and cross-functional shipping with client teams.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between font-semibold"><span>Crossmuller — Mechanical Engineer</span><span className="text-slate-500">2022–2023</span></div>
                  <div className="text-slate-600">Manufacturing & industrial solutions; requirements, validation, and data-driven processes.</div>
                </div>
                <div>
                  <div className="flex justify-between font-semibold"><span>CSIRO — Associate Researcher (Part-time)</span><span className="text-slate-500">2020</span></div>
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
            <Section title="Skills">
              <SkillBar label="Product Discovery & JTBD" level={92} />
              <SkillBar label="Roadmapping & OKRs" level={88} />
              <SkillBar label="Stakeholder Management" level={90} />
              <SkillBar label="Analytics (SQL/GA4/Mixpanel)" level={80} />
              <SkillBar label="AWS/Azure & APIs" level={86} />
              <SkillBar label="CI/CD & DevOps (GitHub Actions)" level={82} />
              <SkillBar label="IoT & CV/ML (SageMaker/Rekognition)" level={78} />
            </Section>

            <Section title="Selected Projects">
              <div className="text-sm space-y-3">
                <div className="mb-3 p-2 bg-sky-50 rounded-lg border border-sky-200">
                  <span className="text-xs text-sky-700">💡 View all projects at: </span>
                  <a href="https://dpmorr.github.io/Daniel-Portfolio/" target="_blank" rel="noopener noreferrer" className="text-xs text-sky-600 hover:text-sky-800 underline font-medium">
                    dpmorr.github.io/Daniel-Portfolio
                  </a>
                </div>
                <div>
                  <div className="font-semibold">Enterprise IoT, Vision & Analytics Platform — Compliro</div>
                  <div>Distributed camera-sensor network with cloud ingestion, ML inference, and analytics for waste tracking & compliance.</div>
                  <div className="mt-1 text-xs text-slate-600">AWS IoT, S3, API Gateway, Lambda, SageMaker · Multi-tenant · Security & observability</div>
                </div>
                <div>
                  <div className="font-semibold">Inventory & Trading SaaS — Marketplace</div>
                  <div>Multi-tenant platform to manage & exchange stock; trade workflows, settlement, audit & reporting.</div>
                  <div className="mt-1 text-xs text-slate-600">PostgreSQL · Next.js · Laravel/PHP · OAuth2 · Payments · CI/CD (GitHub Actions)</div>
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
