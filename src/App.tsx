import { useEffect, useRef, useState } from "react"
import { Cursor, HeroCanvas } from "./components/Effects"
import hospitalImage from "./images/hospital.png"
import marketImage from "./images/market.png"
import nousImage from "./images/nous.png"
import tmsImage from "./images/Tms.png"
import {
  Capability,
  Contact,
  SkillGroup,
  Stat,
  Timeline,
} from "./components/Ui"

type Language = "mn" | "en"

const copy = {
  mn: {
    nav: ["ЭХЛЭЛ", "ТАНИЛЦУУЛГА", "УР ЧАДВАР", "ТӨСЛҮҮД", "ЗАМНАЛ", "ХОЛБОО"],
    role: "Програм хангамжийн инженер",
    hero: ["СУРАЛЦАНА.", "БҮТЭЭНЭ."],
    heroText:
      "Backend, веб болон deployment-ийн чиглэлээр төсөл хөгжүүлж, ажилладаг систем бүтээх замаар туршлагаа ахиулж буй програм хангамжийн инженер.",
    scroll: "ДООШ ГҮЙЛГЭЖ ҮЗНЭ ҮҮ",
    identity: "ТАНИЛЦУУЛГА",
    aboutTitle: "Төсөл дээр суралцаж, бүтээж хөгждөг инженер.",
    about:
      "Би Монгол Улсын Их Сургуулийг Програм хангамжийн инженер мэргэжлээр 2026 онд төгссөн. Сургалтын болон хувийн төслүүдээр backend, frontend, өгөгдлийн сан, container болон deployment-ийн суурь туршлага хуримтлуулсан. Одоо энэ сууриа бодит баг, бүтээгдэхүүний орчинд үргэлжлүүлэн хөгжүүлэхийг зорьж байна.",
    education: "БОЛОВСРОЛ",
    degree: "Програм хангамжийн инженер",
    university: "Монгол Улсын Их Сургууль",
    skills: "УР ЧАДВАР",
    active: "ТӨСӨЛД АШИГЛАСАН",
    exploring: "СУДАЛЖ БАЙГАА",
    work: "ТӨСЛҮҮД",
    concept: "БОДИТ ТӨСӨЛ",
    view: "ДЭЛГЭРЭНГҮЙ",
    journey: "ЗАМНАЛ",
    internship: "DevOps дадлагажигч",
    internshipText:
      "Өөрийн хөгжүүлсэн жижиг Node.js програмыг Docker контейнер болгож, Kubernetes, CI/CD дамжлага болон байршуулалтын урсгалыг туршсан.",
    graduate: "Програм хангамжийн инженерийн бакалавр",
    graduateText:
      "МУИС-д програм хангамжийн инженерчлэлээр суралцаж, backend, веб систем болон deployment чиглэлийн төслүүд дээр ажилласан.",
    contact: "БҮТЭЭЦГЭЭЕ.",
    contactText: "",
    phone: "УТАС",
    location: "БАЙРШИЛ",
    locationValue: "Баянзүрх, Улаанбаатар",
    back: "ТӨСЛҮҮД РҮҮ БУЦАХ",
    problem: "ХЭРЭГЦЭЭ",
    solution: "ХЭРЭГЖҮҮЛЭЛТ",
    stack: "ТЕХНОЛОГИ",
    contribution: "МИНИЙ ОРОЛЦОО",
    proves: "ХУРИМТЛУУЛСАН ТУРШЛАГА",
    status: "ТӨЛӨВ",
    statusValue: "DEMO ХОЛБООС УДАХГҮЙ",
    repository: "ЭХ КОД ҮЗЭХ",
    projectCount: "БОДИТ ТӨСӨЛ",
  },
  en: {
    nav: ["HOME", "ABOUT", "SKILLS", "WORK", "JOURNEY", "CONTACT"],
    role: "Software Engineer",
    hero: ["LEARN.", "BUILD."],
    heroText:
      "A software engineer growing through hands-on backend, web, and deployment projects—and learning by turning ideas into working systems.",
    scroll: "SCROLL TO EXPLORE",
    identity: "IDENTITY",
    aboutTitle: "An engineer who learns by building.",
    about:
      "I graduated from the National University of Mongolia in 2026 with a degree in Software Engineering. Through academic and personal projects, I gained foundational experience across backend and frontend development, databases, containers, and deployment. I am now looking to grow that foundation in a real product team.",
    education: "EDUCATION",
    degree: "Software Engineering",
    university: "National University of Mongolia",
    skills: "CAPABILITIES",
    active: "USED IN PROJECTS",
    exploring: "CURRENTLY EXPLORING",
    work: "SELECTED WORK",
    concept: "REAL PROJECT",
    view: "VIEW DETAILS",
    journey: "JOURNEY",
    internship: "DevOps Intern",
    internshipText:
      "Containerized a small Node.js application I developed and experimented with Kubernetes, CI/CD pipelines, and deployment workflows.",
    graduate: "B.Sc. in Software Engineering",
    graduateText:
      "Studied software engineering at NUM and worked on projects involving backend development, web systems, and deployment.",
    contact: "BUILD.",
    contactText:
      "Available for on-site, hybrid, or remote work from Ulaanbaatar. Open to new projects, job opportunities, and professional conversations.",
    phone: "PHONE",
    location: "LOCATION",
    locationValue: "Bayanzürkh, Ulaanbaatar",
    back: "BACK TO WORK",
    problem: "NEED",
    solution: "IMPLEMENTATION",
    stack: "STACK",
    contribution: "MY CONTRIBUTION",
    proves: "EXPERIENCE GAINED",
    status: "STATUS",
    statusValue: "LIVE LINK COMING SOON",
    repository: "VIEW REPOSITORY",
    projectCount: "REAL PROJECTS",
  },
}

const projects = [
  {
    title: "BO ZAR",
    code: "MARKETPLACE / 01",
    github: "https://github.com/nurlan1234nur/bo-zar",
    live: "http://116.206.83.75:8200/",
    image: marketImage,
    tech: [
      "NestJS",
      "React",
      "React Native",
      "PostgreSQL",
      "TypeORM",
      "Docker",
      "Nginx",
      "TypeScript",
    ],
    mn: {
      sub: "Веб, мобайл, админ бүхий зарын платформ",
      problem:
        "Баян-Өлгий болон Улаанбаатарын хэрэглэгчдэд зар нийтлэх, хайх, удирдах нэг экосистем хэрэгтэй байсан.",
      solution:
        "NestJS REST API, PostgreSQL, нийтийн веб, moderation админ болон Expo мобайл аппыг shared contract-тай monorepo хэлбэрээр хөгжүүлсэн.",
      contribution:
        "Шаардлага, архитектур, өгөгдлийн загвар, API болон client integration дээр ажилласан. Гол workflow-уудыг хэрэгжүүлж, VPS дээр Docker Compose болон Nginx ашиглан байршуулсан.",
      proves:
        "Олон client-тэй full-stack бүтээгдэхүүнийг хэсэгчлэн төлөвлөх, кодын сангуудыг уялдуулах, системийн интеграци болон deployment дээр ажиллаж үзсэн.",
    },
    en: {
      sub: "A classifieds platform across web, mobile, and admin",
      problem:
        "Users in Bayan-Ölgii and Ulaanbaatar needed one place to publish, discover, and manage local listings.",
      solution:
        "Built a monorepo with a NestJS API, PostgreSQL, public web app, moderation panel, Expo mobile app, and shared typed contracts.",
      contribution:
        "Worked across requirements, architecture, data modeling, APIs, and client integration. Implemented the core flows and deployed the system to a VPS with Docker Compose and Nginx.",
      proves:
        "Worked on breaking down a multi-client product, coordinating its codebases, system integration, and deployment.",
    },
  },
  {
    title: "NUM TMS",
    code: "DISTRIBUTED SYSTEM / 02",
    github: "https://github.com/Binderya0623/NUM-TMS-26",
    live: "http://116.206.83.75/",
    image: tmsImage,
    tech: [
      "Spring Boot",
      "React",
      "JSF",
      "PostgreSQL",
      "R2DBC",
      "Microservices",
      "Module Federation",
      "Docker",
    ],
    mn: {
      sub: "Production VPS дээр ажиллаж буй дипломын удирдлагын систем",
      problem:
        "Олон Spring service болон frontend module-ийг найдвартай build хийж, нэг VPS рүү тасралтгүй хүргэх шаардлагатай байсан.",
      solution:
        "GitHub Actions matrix CI, path-based selective build, Docker Hub image registry, Docker Compose, Nginx болон SSH deployment урсгал хэрэгжүүлсэн.",
      contribution:
        "Төслийн CI/CD, Docker containerization, production Compose/Nginx тохиргоо болон багшийн өгсөн VPS deployment дээр голлон ажилласан.",
      proves:
        "Олон service-тэй системийн build/deploy automation, secrets, image versioning болон VPS operations-ийг хариуцах чадвар.",
    },
    en: {
      sub: "A thesis management system running on a production VPS",
      problem:
        "Multiple Spring services and frontend modules needed a repeatable path from source code to one production VPS.",
      solution:
        "Implemented matrix CI, path-based selective builds, Docker Hub images, Docker Compose, Nginx, and SSH-based delivery with GitHub Actions.",
      contribution:
        "Focused on CI/CD, containerization, production Compose/Nginx configuration, and deployment to the instructor-provided VPS.",
      proves:
        "Practical ability to automate builds and deployments for a multi-service system and operate its versioned container runtime.",
    },
  },
  {
    title: "NUM HOSPITAL",
    code: "HEALTHTECH / 03",
    github: "https://github.com/NUM-HOSPITAL-V1",
    live: "http://116.206.83.75/hospital/",
    image: hospitalImage,
    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Java",
      "Spring",
      "ICD-10",
      "Docker",
      "Microservices",
    ],
    mn: {
      sub: "Production VPS дээр ажиллаж буй эмнэлгийн multi-service систем",
      problem:
        "Mock өгөгдөлтэй frontend болон тусдаа hospital, registration, ICD-10 service-үүдийг бодит ажилладаг нэг орчин болгох шаардлагатай байсан.",
      solution:
        "Бодит backend integration хийж, GitHub Actions, Docker Compose, Nginx ашиглан VPS-д хүргэсэн; AWS network/security/compute-ийг Terraform-аар туршсан.",
      contribution:
        "CI/CD, server deployment, frontend-backend холболт, ICD-10 integration болон хөгжүүлэлт дээр ажилласан. AWS/Terraform хэсэг нь production бус туршилт байсан.",
      proves:
        "Polyglot service integration, deployment automation, VPS operations болон infrastructure-as-code-ийн практик ойлголт.",
    },
    en: {
      sub: "A multi-service hospital system running on a production VPS",
      problem:
        "A mock-data frontend and separate hospital, registration, and ICD-10 services had to become one working environment.",
      solution:
        "Connected real backend flows and delivered services through GitHub Actions, Docker Compose, and Nginx; also explored AWS network, security, and compute provisioning with Terraform.",
      contribution:
        "Worked on CI/CD, server deployment, frontend-backend integration, and ICD-10 development. The AWS/Terraform work was an infrastructure experiment, not the current production host.",
      proves:
        "Practical understanding of polyglot integration, deployment automation, VPS operations, and infrastructure as code.",
    },
  },
  {
    title: "NOUS",
    code: "REAL-TIME / 04",
    github: "https://github.com/nurlan1234nur/nous",
    live: "http://116.206.83.75:8300/",
    image: nousImage,
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "React Native",
      "Docker",
    ],
    mn: {
      sub: "Хосуудад зориулсан real-time веб ба мобайл апп",
      problem:
        "Хосуудын харилцаа, хамтын мөч, өдөр тутмын interaction-ыг нэг хувийн орчинд төвлөрүүлэх зорилготой.",
      solution:
        "Socket.IO real-time суваг, JWT нэвтрэлт, MongoDB өгөгдлийн сан, React веб болон native mobile client бүхий full-stack систем хөгжүүлсэн.",
      contribution:
        "Prototype-оос production бүтэц рүү шилжүүлж, client/server зааг, authentication, real-time event болон release workflow дээр ажилласан.",
      proves:
        "Stateful real-time бүтээгдэхүүн, authentication болон олон client-ийн lifecycle-ийг удирдах чадвар.",
    },
    en: {
      sub: "A real-time web and mobile app for couples",
      problem:
        "Couples needed a private shared space for communication, memories, and everyday interaction.",
      solution:
        "Built a full-stack system with Socket.IO events, JWT authentication, MongoDB, a React web client, and a native mobile client.",
      contribution:
        "Evolved the prototype toward production structure across client/server boundaries, auth, real-time events, and release workflows.",
      proves:
        "Ability to build stateful real-time products and manage authentication and multi-client lifecycles.",
    },
  },
]

const activeSkills = [
  "TypeScript",
  "JavaScript",
  "Node.js",
  "NestJS",
  "Express",
  "React",
  "Next.js",
  "React Native",
  "REST API",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Nginx",
  "CI/CD",
  "Git",
]
const exploringSkills = [
  "Core Java",
  "Spring Boot",
  "Socket.IO",
  "Kubernetes",
  "System Design",
  "Automated Testing",
  "Observability",
  "Cloud Infrastructure",
]

export default function App() {
  const [language, setLanguage] = useState<Language>("mn")
  const [selected, setSelected] = useState<number | null>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const listScrollPosition = useRef(0)
  const text = copy[language]
  const ids = ["index", "about", "skills", "work", "journey", "contact"]

  const openProject = (index: number) => {
    listScrollPosition.current = window.scrollY
    setSelected(index)
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }))
  }

  const closeProject = () => {
    setSelected(null)
    requestAnimationFrame(() => {
      requestAnimationFrame(() =>
        window.scrollTo({ top: listScrollPosition.current, behavior: "auto" }),
      )
    })
  }

  useEffect(() => {
    const move = (event: MouseEvent) =>
      setPointer({ x: event.clientX, y: event.clientY })
    window.addEventListener("mousemove", move, { passive: true })
    return () => window.removeEventListener("mousemove", move)
  }, [])

  if (selected !== null) {
    const project = projects[selected]
    const content = project[language]
    return (
      <main className="min-h-screen bg-[#0b0c0c] px-8 py-24 text-[#e8e3d8] md:px-12">
        <Cursor />
        <div className="mx-auto max-w-5xl">
          <button
            onClick={closeProject}
            className="mb-16 font-mono text-xs tracking-widest text-white/40 hover:text-accent"
          >
            ← {text.back}
          </button>
          <p className="mb-4 font-mono text-xs tracking-[.25em] text-accent">
            0{selected + 1} / {text.concept}
          </p>
          <h1 className="font-display text-6xl font-black uppercase md:text-8xl">
            {project.title}
          </h1>
          <p className="mt-4 text-xl text-white/45">{content.sub}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="border border-accent/25 bg-accent/[.05] px-3 py-2 font-mono text-[9px] tracking-widest text-accent">
              {project.code}
            </span>
            <span className="border border-white/10 px-3 py-2 font-mono text-[9px] tracking-widest text-white/35">
              {project.live ? "LIVE" : text.statusValue}
            </span>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="border border-accent bg-accent px-3 py-2 font-mono text-[9px] tracking-widest text-black transition-colors hover:bg-transparent hover:text-accent"
              >
                LIVE DEMO ↗
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="border border-accent/30 px-3 py-2 font-mono text-[9px] tracking-widest text-accent transition-colors hover:bg-accent hover:text-black"
            >
              {text.repository} ↗
            </a>
          </div>
          <div className="mt-20 border-t border-white/10 py-10 md:grid md:grid-cols-[220px_1fr] md:gap-8">
            <p className="font-mono text-xs tracking-widest text-white/30">
              01 — {text.problem}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-white/70 md:mt-0">
              {content.problem}
            </p>
          </div>
          <div className="border-t border-white/10 py-10 md:grid md:grid-cols-[220px_1fr] md:gap-8">
            <p className="font-mono text-xs tracking-widest text-white/30">
              02 — {text.solution}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-white/70 md:mt-0">
              {content.solution}
            </p>
          </div>
          <div className="border-t border-white/10 py-10 md:grid md:grid-cols-[220px_1fr] md:gap-8">
            <p className="font-mono text-xs tracking-widest text-white/30">
              03 — {text.contribution}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-white/70 md:mt-0">
              {content.contribution}
            </p>
          </div>
          <div className="border-t border-white/10 py-10 md:grid md:grid-cols-[220px_1fr] md:gap-8">
            <p className="font-mono text-xs tracking-widest text-white/30">
              04 — {text.proves}
            </p>
            <p className="mt-5 border-l-2 border-accent/50 pl-6 text-lg leading-relaxed text-white/70 md:mt-0">
              {content.proves}
            </p>
          </div>
          <div className="border-y border-white/10 py-10 md:grid md:grid-cols-[220px_1fr] md:gap-8">
            <p className="font-mono text-xs tracking-widest text-white/30">
              05 — {text.stack}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-0">
              {project.tech.map((skill) => (
                <span
                  key={skill}
                  className="border border-white/10 px-3 py-2 font-mono text-xs text-white/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b0c0c] text-[#e8e3d8]">
      <Cursor />
      {hoveredProject !== null && (
        <div
          className="pointer-events-none fixed z-40 hidden md:block"
          style={{ left: pointer.x + 30, top: pointer.y - 80 }}
        >
          <img
            src={projects[hoveredProject].image}
            alt=""
            className="h-36 w-56 border border-white/10 object-cover grayscale"
          />
          <div className="h-px w-full bg-accent/50" />
        </div>
      )}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[.06] bg-[#0b0c0c]/80 px-8 py-5 backdrop-blur-xl md:px-12">
        <div className="flex items-center justify-end gap-6">
          <div className="hidden gap-6 md:flex">
            {text.nav.map((label, index) => (
              <a
                key={label}
                href={`#${ids[index]}`}
                className="font-mono text-[9px] tracking-widest text-white/35 transition-colors hover:text-accent"
              >
                {label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setLanguage(language === "mn" ? "en" : "mn")}
            className="border border-accent/20 px-2.5 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent hover:text-black"
          >
            {language === "mn" ? "EN" : "MN"}
          </button>
        </div>
      </nav>

      <section
        id="index"
        className="relative flex min-h-screen items-end overflow-hidden px-8 pb-20 pt-32 md:px-12 md:pb-24"
      >
        <HeroCanvas />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0b0c0c] to-transparent" />
        <div className="relative z-10 w-full">
          <p className="mb-8 font-mono text-[9px] uppercase tracking-[.25em] text-accent/70">
            Nurlan Tyeljan — {text.role} — 2026
          </p>
          <h1 className="font-display text-[clamp(4rem,11vw,12rem)] font-black uppercase leading-[.87]">
            <span className="block">{text.hero[0]}</span>
            <span className="block text-white/20">{text.hero[1]}</span>
            <span className="block">{text.hero[2]}</span>
          </h1>
          <div className="mt-8 grid gap-8 border-t border-white/10 pt-7 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-lg text-sm leading-relaxed text-white/45">
              {text.heroText}
            </p>
            <Stat value="08" label={text.projectCount} />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-white/[.07] px-8 py-28 md:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[160px_1fr] md:gap-20">
          <div>
            <p className="font-mono text-[8px] text-white/25">01</p>
            <p className="mt-2 font-mono text-[9px] tracking-widest text-accent/60">
              {text.identity}
            </p>
          </div>
          <div>
            <h2 className="max-w-4xl font-display text-4xl font-bold uppercase leading-tight md:text-6xl">
              {text.aboutTitle}
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/55">
              {text.about}
            </p>
            <div className="mt-12 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[9px] tracking-widest text-white/25">
                  {text.education}
                </p>
                <p className="mt-3">{text.degree}</p>
              </div>
              <div>
                <p className="font-mono text-[9px] tracking-widest text-white/25">
                  {text.university}
                </p>
                <p className="mt-3">2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="border-t border-white/[.07] px-8 py-28 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[8px] text-white/25">02</p>
          <h2 className="mt-2 font-display text-5xl font-black uppercase md:text-7xl">
            {text.skills}
          </h2>
          <div className="mt-16 grid border-y border-white/10 md:grid-cols-3">
            <Capability
              number="01"
              title={
                language === "mn" ? "СЕРВЕР БА ӨГӨГДӨЛ" : "BACKEND & DATA"
              }
              body={
                language === "mn"
                  ? "REST API боловсруулах, хэрэглэгчийг таньж баталгаажуулах, хандалтын эрхийг зохицуулах, бизнесийн логик хэрэгжүүлэх, харилцан хамааралтай болон баримтад суурилсан өгөгдлийн загвар гаргах."
                  : "REST APIs, authentication, business logic, and relational and document data models."
              }
            />
            <Capability
              number="02"
              title={
                language === "mn"
                  ? "ХЭРЭГЛЭГЧИЙН ТАЛЫН ХӨГЖҮҮЛЭЛТ"
                  : "PRODUCT FRONTEND"
              }
              body={
                language === "mn"
                  ? "Төрөл бүрийн дэлгэцэд зохицох веб интерфэйс, удирдлагын самбар, мобайл апп болон бодит цагийн харилцан үйлдэл."
                  : "Responsive web, admin dashboards, mobile clients, and real-time interaction."
              }
            />
            <Capability
              number="03"
              title={
                language === "mn"
                  ? "АРХИТЕКТУР БА БАЙРШУУЛАЛТ"
                  : "ARCHITECTURE & DELIVERY"
              }
              body={
                language === "mn"
                  ? "Нэгдсэн кодын сан болон микросервисийн архитектур, контейнерчлэл, урвуу прокси, CI/CD, серверийн автомат байршуулалт."
                  : "Monorepos, microservices, containers, reverse proxies, CI/CD, and deployment workflows."
              }
            />
          </div>
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <SkillGroup label={text.active} skills={activeSkills} accent />
            <SkillGroup label={text.exploring} skills={exploringSkills} />
          </div>
        </div>
      </section>

      <section
        id="work"
        className="border-t border-white/[.07] px-8 py-28 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[8px] text-white/25">03</p>
          <h2 className="mt-2 font-display text-5xl font-black uppercase md:text-7xl">
            {text.work}
          </h2>
          <div className="mt-16 border-b border-white/10">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => openProject(index)}
                data-hover
                className="group grid w-full gap-4 border-t border-white/10 py-10 text-left transition-colors hover:text-accent md:grid-cols-[70px_1fr_190px_auto] md:items-center"
              >
                <span className="font-mono text-[9px] text-white/25">
                  0{index + 1}
                </span>
                <span>
                  <strong className="font-display text-4xl uppercase transition-transform duration-300 group-hover:translate-x-2 md:text-5xl">
                    {project.title}
                  </strong>
                  <small className="mt-2 block text-sm font-normal text-white/40">
                    {project[language].sub}
                  </small>
                </span>
                <span className="font-mono text-[8px] tracking-widest text-white/25">
                  {project.code}
                </span>
                <span className="font-mono text-[9px] tracking-widest text-accent/60">
                  {text.view} →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section
        id="journey"
        className="border-t border-white/[.07] px-8 py-28 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[8px] text-white/25">04</p>
          <h2 className="mt-2 font-display text-5xl font-black uppercase md:text-7xl">
            {text.journey}
          </h2>
          <div className="mt-16 border-l border-white/10">
            <Timeline
              year="2025.12 — 2026.02"
              title={`${text.internship} — CIA Solution`}
              description={text.internshipText}
            />
            <Timeline
              year="2026"
              title={text.graduate}
              description={text.graduateText}
            />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/[.07] px-8 py-28 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[8px] text-white/25">05</p>
          <h2 className="mt-6 whitespace-pre-line font-display text-[clamp(4rem,9vw,9rem)] font-black uppercase leading-[.85]">
            {text.contact}
          </h2>
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div>
              {text.contactText && (
                <p className="max-w-lg text-lg leading-relaxed text-white/45">
                  {text.contactText}
                </p>
              )}
              <a
                href="mailto:nurlant566@gmail.com"
                className={`${
                  text.contactText ? "mt-8" : "mt-0"
                } inline-block border border-accent/30 px-6 py-4 font-mono text-xs tracking-widest text-accent hover:bg-accent hover:text-black`}
              >
                nurlant566@gmail.com →
              </a>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              <Contact
                label="GITHUB"
                value="@nurlan1234nur"
                href="https://github.com/nurlan1234nur"
              />
              <Contact
                label={text.phone}
                value="+976 8543 2523"
                href="tel:+97685432523"
              />
              <Contact label={text.location} value={text.locationValue} />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[.06] px-8 py-8 md:px-12">
        <div className="mx-auto max-w-7xl font-mono text-[8px] tracking-widest text-white/20">
          <span>NURLAN TYELJAN — 2026</span>
        </div>
      </footer>
    </main>
  )
}
