import ScrollReveal from "./ScrollReveal";

const focusAreas = [
  "SuiteScript 1.0/2.x",
  "SuiteTalk SOAP/REST",
  "SFTP and file automation",
  "SuiteAnalytics",
  "APM and SAL diagnostics",
  "Connector support",
];

const profileDetails = [
  { label: "Location", value: "Paranaque, Philippines" },
  { label: "Current", value: "Oracle NetSuite" },
  { label: "Specialty", value: "SuiteCloud Support" },
];

const metrics = [
  { value: "2024", label: "Joined Oracle NetSuite SuiteCloud" },
  { value: "10+", label: "Certifications and trainings" },
  { value: "3", label: "Core lanes: integrations, scripts, performance" },
];

const capabilities = [
  {
    title: "SuiteCloud Support",
    text: "SuiteScript 1.0/2.x, SuiteTalk SOAP/REST, SDF deployments, RESTlets, roles, permissions, and deployment defects.",
  },
  {
    title: "Integration Reliability",
    text: "Schema mapping, idempotency, retry and backoff patterns, pagination, API limits, and third-party connector triage.",
  },
  {
    title: "Performance Diagnostics",
    text: "APM and SAL investigations that separate SQL time, script runtime, workflows, triggers, and scheduling bottlenecks.",
  },
  {
    title: "Secure File Flows",
    text: "SFTP keys, ciphers, directory permissions, atomic moves, post-load checks, and duplicate-load prevention.",
  },
  {
    title: "Analytics Enablement",
    text: "Saved Searches, Workbooks, Datasets, SuiteAnalytics Connect basics, and BI extraction patterns.",
  },
  {
    title: "Incident Coordination",
    text: "Business-down triage with product teams, engineering, vendors, clear RCAs, and durable mitigation plans.",
  },
];

const experience = [
  {
    company: "Oracle NetSuite",
    role: "Technical Support Engineer, SuiteCloud",
    dates: "Jul 2024 - Present",
    location: "Philippines",
    items: [
      "Stabilizes SuiteTalk SOAP/REST and SuiteScript integrations by resolving schema, mapping, permission, and deployment issues.",
      "Improves scripts and workflows across User Event, Map/Reduce, Client, and Scheduled contexts with safeguards, structured logging, and error handling.",
      "Investigates performance with APM and SAL, isolating SQL versus script time and tuning searches, triggers, and schedules.",
      "Supports business-down incidents with product, engineering, and vendors while delivering rapid mitigations and clear root-cause analysis.",
    ],
  },
  {
    company: "Kenvue",
    role: "Systems and Social Media Support Intern",
    dates: "Sep 2023 - Feb 2024",
    location: "Paranaque, Philippines",
    items: [
      "Supported GCC system operations with a focus on Sprinklr and related support processes.",
      "Contributed to ServiceNow ticket resolution, incident triage, reconciliation tasks, and social account credential management.",
      "Reviewed Active Directory groups for secure system access and maintained SOP- and WI-aligned documentation.",
    ],
  },
];

const projects = [
  {
    title: "NetSuite and External Systems",
    text: "Remediated SOAP/REST failures with idempotency keys and automated retry logic to improve integration resilience.",
  },
  {
    title: "SuiteAnalytics for BI",
    text: "Built Saved Searches, Workbooks, and Datasets that provide cleaner API and reporting data for downstream BI consumption.",
  },
  {
    title: "Celigo Integration",
    text: "Resolved transformation issues, tuned batch sizes, and adjusted schedules to respect API limits and prevent timeouts.",
  },
  {
    title: "SFTP Automations",
    text: "Hardened imports with key-based authentication, atomic file operations, and post-load validation checks.",
  },
  {
    title: "Performance Tuning",
    text: "Used APM and SAL timelines to reduce redundant searches and optimize script triggers.",
  },
];

const skills = [
  {
    label: "Integration and APIs",
    values: "SuiteTalk SOAP/REST, REST APIs, RESTlets, webhooks, JSON/XML, SDF",
  },
  {
    label: "NetSuite",
    values: "SuiteScript, SuiteAnalytics, Saved Searches, Workbooks, Datasets, Roles/Permissions, APM, SAL",
  },
  {
    label: "Platforms",
    values: "NetSuite, Celigo integrator.io, ServiceNow exposure, Linux, Docker",
  },
  {
    label: "Security and Infra",
    values: "SFTP keys and permissions, OCI, working knowledge of AWS, Azure, and GCP",
  },
  {
    label: "Languages",
    values: "JavaScript, Python utilities, SQL basics, PowerShell basics, Kotlin",
  },
  {
    label: "Collaboration",
    values: "Agile, Jira, Confluence, Git, runbooks, customer-first communication",
  },
];

const certifications = [
  "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
  "Oracle NetSuite Certified SuiteFoundations",
  "Oracle Performance Training",
  "Oracle SFTP Training",
  "Oracle Logs Training",
  "Oracle Cloud Training",
  "Google IT Support Certificate",
  "Generative AI Fundamentals - Google",
  "Networking Basics - Cisco",
  "Operating System Basics - Cisco",
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div
      className="mb-8 grid gap-4 border-t border-[#2a3032] pt-8 lg:grid-cols-[0.52fr_1fr] lg:items-end"
      data-reveal
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9fd8cb]">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#f2f3ec] sm:text-4xl">
          {title}
        </h2>
      </div>
      {text ? (
        <p className="max-w-3xl text-sm leading-7 text-[#aab2ad]">{text}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0d0d] text-[#f2f3ec]">
      <ScrollReveal />

      <header className="sticky top-0 z-30 border-b border-[#222828] bg-[#0b0d0d]/86 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a
            className="text-sm font-semibold tracking-[-0.01em] text-[#f2f3ec] transition hover:text-[#9fd8cb]"
            href="mailto:arnoldlquiros@gmail.com"
          >
            Arnold Quiros
          </a>
          <nav
            aria-label="Portfolio sections"
            className="hidden rounded-lg border border-[#2c3434] bg-[#111615] p-1 text-sm text-[#b7bfba] shadow-[0_14px_38px_rgba(0,0,0,0.18)] md:flex"
          >
            {[
              ["Profile", "#profile"],
              ["Work", "#work"],
              ["Projects", "#projects"],
              ["Skills", "#skills"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                className="rounded-md px-3 py-2 transition duration-300 hover:bg-[#202827] hover:text-[#f2f3ec]"
                href={href}
                key={href}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="profile" className="px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[336px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start" data-reveal>
            <div className="profile-card rounded-lg border border-[#293130] bg-[#111615] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.34)]">
              <div className="flex items-start justify-between gap-4">
                <div className="avatar-mark flex size-20 items-center justify-center rounded-lg bg-[#f2f3ec] text-2xl font-semibold text-[#0b0d0d]">
                  AQ
                </div>
                <span className="status-pill rounded-md border border-[#2f6f62] bg-[#10201d] px-3 py-1 text-xs font-semibold text-[#9fd8cb]">
                  Open to support work
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-[#f2f3ec]">
                Arnold Luigi G. Quiros
              </h1>
              <p className="mt-2 text-sm font-medium leading-6 text-[#b1bbb6]">
                Oracle NetSuite Technical Support Engineer, SuiteCloud
              </p>

              <dl className="mt-6 divide-y divide-[#262e2e] border-y border-[#262e2e]">
                {profileDetails.map((detail) => (
                  <div
                    className="grid grid-cols-[86px_1fr] gap-3 py-3"
                    key={detail.label}
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7f8a86]">
                      {detail.label}
                    </dt>
                    <dd className="text-sm font-medium text-[#e7eae3]">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 grid gap-2">
                <a
                  className="motion-button rounded-md bg-[#f2f3ec] px-4 py-3 text-center text-sm font-semibold text-[#0b0d0d] transition hover:bg-[#dfe7dc]"
                  href="mailto:arnoldlquiros@gmail.com"
                >
                  Email Arnold
                </a>
                <a
                  className="motion-button rounded-md border border-[#333c3b] px-4 py-3 text-center text-sm font-semibold text-[#f2f3ec] transition hover:border-[#59756e] hover:bg-[#18201f]"
                  href="https://linkedin.com/in/luigiquiros/"
                >
                  LinkedIn profile
                </a>
              </div>

              <p className="mt-5 text-sm leading-6 text-[#9fa9a4]">
                +63 977 499 0509
              </p>
            </div>
          </aside>

          <div className="space-y-5">
            <section
              className="hero-panel rounded-lg border border-[#293130] bg-[#111615] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10"
              data-reveal
            >
              <p className="text-sm font-semibold text-[#9fd8cb]">
                SuiteCloud support, integrations, analytics, and performance
              </p>
              <h2 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-[#f2f3ec] sm:text-6xl lg:text-7xl">
                Clear technical support for NetSuite systems that have to keep moving.
              </h2>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#aeb8b3]">
                Arnold diagnoses and resolves NetSuite issues across scripts,
                APIs, SFTP flows, saved searches, connectors, and performance
                traces. His work turns high-pressure incidents into clear
                root-cause analysis, durable fixes, and reusable runbooks.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {focusAreas.map((area, index) => (
                  <span
                    className="animated-chip rounded-md border border-[#303938] bg-[#151c1b] px-3 py-2 text-sm font-medium text-[#dce2dd]"
                    key={area}
                    style={{ animationDelay: `${220 + index * 70}ms` }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </section>

            <section className="grid gap-3 sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <article
                  className="motion-card rounded-lg border border-[#293130] bg-[#111615] p-5"
                  data-reveal
                  key={metric.label}
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-[#f2f3ec]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#a5afaa]">
                    {metric.label}
                  </p>
                </article>
              ))}
            </section>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Focus areas"
            title="Technical strengths"
            text="A support profile built around reliable integrations, better observability, and clean operating patterns."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item, index) => (
              <article
                className="motion-card rounded-lg border border-[#293130] bg-[#111615] p-5"
                data-reveal
                key={item.title}
                style={{ transitionDelay: `${index * 45}ms` }}
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#f2f3ec]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#aab2ad]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Experience"
            title="Support work with engineering judgment"
            text="Customer-facing support across product, engineering, vendors, and operations."
          />
          <div className="grid gap-4">
            {experience.map((job, index) => (
              <article
                className="motion-card rounded-lg border border-[#293130] bg-[#111615] p-5 sm:p-6"
                data-reveal
                key={job.company}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-start">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#f2f3ec]">
                      {job.company}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-[#9fd8cb]">
                      {job.role}
                    </p>
                  </div>
                  <p className="rounded-md bg-[#1a211f] px-3 py-2 text-sm font-medium text-[#aeb8b3] md:text-right">
                    {job.dates}
                    <br />
                    {job.location}
                  </p>
                </div>
                <ul className="mt-6 grid gap-3 text-sm leading-7 text-[#aab2ad] md:grid-cols-2">
                  {job.items.map((item) => (
                    <li className="border-l border-[#2f6f62] pl-4" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Project highlights"
            title="Fixes that improve reliability"
            text="Selected examples from integrations, analytics, file automation, and performance tuning."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                className="motion-card rounded-lg border border-[#293130] bg-[#111615] p-5"
                data-reveal
                key={project.title}
                style={{ transitionDelay: `${index * 55}ms` }}
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#f2f3ec]">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#aab2ad]">
                  {project.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Skills"
            title="Tools and technical range"
            text="Grouped by the systems Arnold supports most often."
          />
          <div className="grid gap-3 lg:grid-cols-2">
            {skills.map((skill, index) => (
              <article
                className="motion-card rounded-lg border border-[#293130] bg-[#111615] p-5"
                data-reveal
                key={skill.label}
                style={{ transitionDelay: `${index * 45}ms` }}
              >
                <h3 className="text-base font-semibold text-[#f2f3ec]">
                  {skill.label}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#aab2ad]">
                  {skill.values}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications and education"
            text="Oracle-trained foundation with broad IT support, networking, operating systems, and cloud fundamentals."
          />
          <div className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr]">
            <article
              className="motion-card rounded-lg border border-[#293130] bg-[#111615] p-5"
              data-reveal
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#808b86]">
                Education
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-[#f2f3ec]">
                De La Salle University
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#aab2ad]">
                Bachelor of Science, Information Technology
                <br />
                Sep 2019 - Jan 2024
                <br />
                Grade: 3.125
              </p>
            </article>
            <div className="grid gap-3 sm:grid-cols-2">
              {certifications.map((certification, index) => (
                <div
                  className="motion-card rounded-lg border border-[#293130] bg-[#111615] px-4 py-3 text-sm font-medium leading-6 text-[#dce2dd]"
                  data-reveal
                  key={certification}
                  style={{ transitionDelay: `${index * 35}ms` }}
                >
                  {certification}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-10 pt-8 sm:px-8 lg:px-10">
        <div
          className="contact-panel mx-auto max-w-7xl rounded-lg border border-[#303938] bg-[#f2f3ec] p-6 text-[#0b0d0d] sm:p-8 lg:p-10"
          data-reveal
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#176556]">
                Contact
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                Available for NetSuite integration support, SuiteCloud issue
                analysis, and systems reliability work.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                className="motion-button rounded-md bg-[#0b0d0d] px-5 py-3 text-sm font-semibold text-[#f2f3ec] transition hover:bg-[#202827]"
                href="mailto:arnoldlquiros@gmail.com"
              >
                Email Arnold
              </a>
              <a
                className="motion-button rounded-md border border-[#c5cac6] px-5 py-3 text-sm font-semibold transition hover:bg-[#e0e6e2]"
                href="tel:+639774990509"
              >
                Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
