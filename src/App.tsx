import { useEffect, useRef, useState } from "react"
import { Cursor, HeroCanvas } from "./components/Effects"
import hospitalImage from "./images/hospital.png"
import marketImage from "./images/market.png"
import nousImage from "./images/nous.png"
import profileImage from "./images/profile.jpg"
import tmsImage from "./images/Tms.png"
import {
  Capability,
  Contact,
  SkillGroup,
  Timeline,
} from "./components/Ui"

type Language = "mn" | "en"

const copy = {
  mn: {
    nav: ["ЭХЛЭЛ", "ТАНИЛЦУУЛГА", "УР ЧАДВАР", "ТӨСЛҮҮД", "ТУРШЛАГА", "ХОЛБОО"],
    role: "Програм хангамжийн инженер",
    heroText:
      "Веб системийн хөгжүүлэлт, серверийн байршуулалт болон автоматжуулалтын чиглэлээр төсөл хэрэгжүүлсэн шинэ төгсөгч програм хангамжийн инженер.",
    scroll: "ДООШ ГҮЙЛГЭЖ ҮЗНЭ ҮҮ",
    identity: "ТАНИЛЦУУЛГА",
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
    journey: "ТУРШЛАГА",
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
  },
  en: {
    nav: ["HOME", "ABOUT", "SKILLS", "WORK", "EXPERIENCE", "CONTACT"],
    role: "Software Engineer",
    heroText:
      "A software engineer growing through hands-on backend, web, and deployment projects—and learning by turning ideas into working systems.",
    scroll: "SCROLL TO EXPLORE",
    identity: "IDENTITY",
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
    journey: "EXPERIENCE",
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
  },
}

const projects = [
  {
    title: "BO ZAR",
    github: "https://github.com/nurlan1234nur/bo-zar",
    live: "http://116.206.83.75:8200/",
    image: marketImage,
    tech: [
      "NestJS",
      "React",
      "PostgreSQL",
      "TypeORM",
      "Docker",
      "Nginx",
      "TypeScript",
    ],
    mn: {
      sub: "Веб болон админ хэсэгтэй зарын платформ",
      problem:
        "Хэрэглэгчид зараа хялбар нийтэлж, хэрэгтэй зүйлээ хайж, өөрийн заруудаа нэг дор удирдах боломж хэрэгтэй байсан.",
      solution:
        "NestJS, PostgreSQL ашиглан серверийн хэсгийг хийж, хэрэглэгчийн веб болон зар хянах админ хэсэгтэй холбосон.",
      contribution:
        "Өгөгдлийн бүтэц, API, веб ба админ хэсгийн холболт болон зарын үндсэн үйлдлүүд дээр ажилласан. Системийг Docker Compose, Nginx ашиглан VPS серверт байршуулсан.",
      proves:
        "Нэг бүтээгдэхүүний сервер, хэрэглэгчийн хэсэг, админ хэсэг болон байршуулалтыг хооронд нь уялдуулж ажилласан туршлага.",
    },
    en: {
      sub: "A classifieds platform across web and admin",
      problem:
        "Users in Bayan-Ölgii and Ulaanbaatar needed one place to publish, discover, and manage local listings.",
      solution:
        "Built a NestJS and PostgreSQL backend connected to a public web app and a moderation panel.",
      contribution:
        "Worked across requirements, architecture, data modeling, APIs, and client integration. Implemented the core flows and deployed the system to a VPS with Docker Compose and Nginx.",
      proves:
        "Worked on breaking down a multi-client product, coordinating its codebases, system integration, and deployment.",
    },
  },
  {
    title: "NUM TMS",
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
      sub: "VPS серверт ажиллаж буй дипломын ажлын удирдлагын систем",
      problem:
        "Олон серверийн үйлчилгээ, веб модулийг нэг систем болгон найдвартай ажиллуулах, шинэчлэл бүрийг серверт алдаагүй хүргэх шаардлагатай байсан.",
      solution:
        "GitHub Actions-аар зөвхөн өөрчлөгдсөн үйлчилгээг build хийж, Docker image болгон серверт автоматаар шинэчилдэг урсгал хийсэн.",
      contribution:
        "CI/CD, Docker, Compose, Nginx-ийн тохиргоо болон VPS серверийн байршуулалтыг голлон хариуцсан.",
      proves:
        "Олон үйлчилгээтэй системийг автоматаар build хийж, хувилбарлан, серверт шинэчилж ажилласан туршлага.",
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
      sub: "VPS серверт ажиллаж буй эмнэлгийн нэгдсэн систем",
      problem:
        "Тусдаа хөгжүүлсэн эмнэлэг, бүртгэл, ICD-10 үйлчилгээ болон веб хэсгийг бодит өгөгдөлтэй нэг систем болгох шаардлагатай байсан.",
      solution:
        "Веб хэсгийг серверийн үйлчилгээнүүдтэй холбож, GitHub Actions, Docker Compose, Nginx ашиглан VPS серверт байршуулсан.",
      contribution:
        "Автомат байршуулалт, веб ба серверийн холболт, ICD-10 кодын үйлчилгээ болон серверийн тохиргоон дээр ажилласан.",
      proves:
        "Өөр өөр технологитой үйлчилгээнүүдийг холбож, нэг серверт тогтвортой ажиллуулсан туршлага.",
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
      "PWA",
      "Docker",
    ],
    mn: {
      sub: "Хосуудад зориулсан бодит цагийн PWA веб апп",
      problem:
        "Хосуудын зурвас, дурсамж болон өдөр тутмын харилцааг зөвхөн өөрсдөд нь зориулсан нэг орчинд төвлөрүүлэх зорилготой.",
      solution:
        "React, Socket.IO, JWT болон MongoDB ашиглан шууд зурвас солилцдог, төхөөрөмждөө суулгаж ашиглах боломжтой PWA веб апп хийсэн.",
      contribution:
        "Нэвтрэлт, хэрэглэгчдийн холбоос, бодит цагийн зурвас, өгөгдөл хадгалалт болон серверт байршуулалтыг хийсэн.",
      proves:
        "Бодит цагийн харилцаатай веб аппыг өгөгдлийн сан, нэвтрэлт болон байршуулалттай нь бүтээсэн туршлага.",
    },
    en: {
      sub: "A real-time PWA for couples",
      problem:
        "Couples needed a private shared space for communication, memories, and everyday interaction.",
      solution:
        "Built an installable React PWA with Socket.IO events, JWT authentication, and MongoDB.",
      contribution:
        "Implemented authentication, couple linking, real-time messaging, persistence, and the production deployment workflow.",
      proves:
        "Experience building and deploying a stateful real-time PWA with authentication and persistent data.",
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
  "REST API",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Nginx",
  "CI/CD",
  "Git",
]
const exploringSkills = [
  "Spring Boot",
  "Socket.IO",
  "Kubernetes",
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
      <main className="min-h-screen bg-[#020403] px-8 py-24 text-[#d8d5cf] md:px-12">
        <Cursor />
        <div className="mx-auto max-w-5xl">
          <button
            onClick={closeProject}
            className="mb-16 font-mono text-xs tracking-widest text-slate-500 hover:text-accent"
          >
            ← {text.back}
          </button>
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-14">
            <div>
              <p className="mb-4 font-mono text-xs tracking-[.25em] text-accent">
                0{selected + 1} / {text.concept}
              </p>
              <h1 className="font-display text-6xl font-black uppercase md:text-8xl">
                {project.title}
              </h1>
              <p className="mt-4 text-xl text-slate-600">{content.sub}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="border border-slate-200 px-3 py-2 font-mono text-[9px] tracking-widest text-slate-500">
                  {project.live ? "LIVE" : text.statusValue}
                </span>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-accent bg-accent px-3 py-2 font-mono text-[9px] tracking-widest text-[#020403] transition-colors hover:bg-transparent hover:text-accent"
                  >
                    LIVE DEMO ↗
                  </a>
                )}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="border border-accent/30 px-3 py-2 font-mono text-[9px] tracking-widest text-accent transition-colors hover:bg-accent hover:text-[#020403]"
              >
                {text.repository} ↗
              </a>
              </div>
            </div>
            <figure className="aspect-square w-full max-w-72 justify-self-center overflow-hidden border border-slate-200 bg-[#141413] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.38)] md:justify-self-end md:p-3">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="h-full w-full object-cover object-top"
              />
            </figure>
          </div>
          <div className="mt-16 border-t border-slate-200 py-10 md:grid md:grid-cols-[220px_1fr] md:gap-8">
            <p className="font-mono text-xs tracking-widest text-slate-500">
              01 — {text.problem}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-700 md:mt-0">
              {content.problem}
            </p>
          </div>
          <div className="border-t border-slate-200 py-10 md:grid md:grid-cols-[220px_1fr] md:gap-8">
            <p className="font-mono text-xs tracking-widest text-slate-500">
              02 — {text.solution}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-700 md:mt-0">
              {content.solution}
            </p>
          </div>
          <div className="border-t border-slate-200 py-10 md:grid md:grid-cols-[220px_1fr] md:gap-8">
            <p className="font-mono text-xs tracking-widest text-slate-500">
              03 — {text.contribution}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-700 md:mt-0">
              {content.contribution}
            </p>
          </div>
          <div className="border-t border-slate-200 py-10 md:grid md:grid-cols-[220px_1fr] md:gap-8">
            <p className="font-mono text-xs tracking-widest text-slate-500">
              04 — {text.proves}
            </p>
            <p className="mt-5 border-l-2 border-accent/50 pl-6 text-lg leading-relaxed text-slate-700 md:mt-0">
              {content.proves}
            </p>
          </div>
          <div className="border-y border-slate-200 py-10 md:grid md:grid-cols-[220px_1fr] md:gap-8">
            <p className="font-mono text-xs tracking-widest text-slate-500">
              05 — {text.stack}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-0">
              {project.tech.map((skill) => (
                <span
                  key={skill}
                  className="border border-slate-200 px-3 py-2 font-mono text-xs text-slate-600"
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
    <main className="min-h-screen overflow-x-hidden bg-[#020403] text-[#d8d5cf]">
      <Cursor />
      {hoveredProject !== null && (
        <div
          className="pointer-events-none fixed z-40 hidden md:block"
          style={{ left: pointer.x + 30, top: pointer.y - 80 }}
        >
          <img
            src={projects[hoveredProject].image}
            alt=""
            className="h-36 w-56 border border-slate-200 object-cover grayscale"
          />
          <div className="h-px w-full bg-accent/50" />
        </div>
      )}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#1a2324] bg-[#141413]/90 px-8 py-5 backdrop-blur-xl md:px-12">
        <div className="flex items-center justify-end gap-6">
          <div className="hidden gap-6 md:flex">
            {text.nav.map((label, index) => (
              <a
                key={label}
                href={`#${ids[index]}`}
                className="font-mono text-[9px] tracking-widest text-slate-500 transition-colors hover:text-accent"
              >
                {label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setLanguage(language === "mn" ? "en" : "mn")}
            className="border border-accent/25 px-2.5 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent hover:text-[#020403]"
          >
            {language === "mn" ? "EN" : "MN"}
          </button>
        </div>
      </nav>

      <section
        id="index"
        className="relative flex min-h-screen items-center overflow-hidden px-8 pb-20 pt-32 md:px-12 md:py-28"
      >
        <HeroCanvas />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#020403] to-transparent" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="mb-7 font-mono text-[9px] uppercase tracking-[.25em] text-accent/75">
              {text.role} — Ulaanbaatar
            </p>
            <h1 className="font-display text-[clamp(3.6rem,8vw,8.5rem)] font-black uppercase leading-[.88] tracking-[-.055em]">
              <span className="block">Nurlan</span>
              <span className="block text-accent">Tyeljan</span>
            </h1>
            <div className="mt-9 border-t border-slate-200 pt-7">
              <p className="max-w-xl text-sm leading-relaxed text-slate-600">
                {text.heroText}
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:mr-5">
            <div className="absolute -inset-3 translate-x-5 translate-y-5 border border-[#1a2324]" />
            <div className="absolute -right-7 -top-7 h-24 w-24 border-r border-t border-accent/55" />
            <figure className="group relative aspect-[4/5] overflow-hidden bg-[#141413]">
              <img
                src={profileImage}
                alt="Nurlan Tyeljan"
                className="h-full w-full object-cover object-[center_38%] transition duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020403]/70 via-transparent to-[#5f2e1b]/10" />
              <div className="absolute bottom-0 left-0 border-r border-t border-[#1a2324] bg-[#141413]/90 px-5 py-4 backdrop-blur-md">
                <p className="font-mono text-[8px] tracking-[.22em] text-accent">2026 / PORTFOLIO</p>
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-slate-200 px-8 py-28 md:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[160px_1fr] md:gap-20">
          <div>
            <p className="font-mono text-[8px] text-slate-400">01</p>
            <p className="mt-2 font-mono text-[9px] tracking-widest text-accent/60">
              {text.identity}
            </p>
          </div>
          <div>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
              {text.about}
            </p>
            <div className="mt-12 grid gap-5 border-t border-slate-200 pt-8 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[9px] tracking-widest text-slate-400">
                  {text.education}
                </p>
                <p className="mt-3">{text.degree}</p>
              </div>
              <div>
                <p className="font-mono text-[9px] tracking-widest text-slate-400">
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
        className="border-t border-slate-200 px-8 py-28 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[8px] text-slate-400">02</p>
          <h2 className="mt-2 font-display text-5xl font-black uppercase md:text-7xl">
            {text.skills}
          </h2>
          <div className="mt-16 grid border-y border-slate-200 md:grid-cols-3">
            <Capability
              number="01"
              title={
                language === "mn" ? "СЕРВЕР БА ӨГӨГДӨЛ" : "BACKEND & DATA"
              }
              body={
                language === "mn"
                  ? "REST API боловсруулах, хэрэглэгчийг таньж баталгаажуулах, хандалтын эрхийг зохицуулах болон бизнесийн логик хэрэгжүүлэх."
                  : "REST APIs, authentication, access control, and business logic."
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
                  ? "Төрөл бүрийн дэлгэцэд зохицох веб интерфэйс, удирдлагын самбар болон бодит цагийн харилцан үйлдэл."
                  : "Responsive web interfaces, admin dashboards, and real-time interaction."
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
                  ? "Нэгдсэн кодын сан болон микросервисийн архитектур, контейнерчлэл, CI/CD, серверийн автомат байршуулалт."
                  : "Monorepos, microservices, containers, CI/CD, and deployment workflows."
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
        className="border-t border-slate-200 px-8 py-28 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[8px] text-slate-400">03</p>
          <h2 className="mt-2 font-display text-5xl font-black uppercase md:text-7xl">
            {text.work}
          </h2>
          <div className="mt-16 border-b border-slate-200">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => openProject(index)}
                data-hover
                className="group grid w-full gap-4 border-t border-slate-200 py-10 text-left transition-colors hover:text-accent md:grid-cols-[70px_1fr_auto] md:items-center"
              >
                <span className="font-mono text-[9px] text-slate-400">
                  0{index + 1}
                </span>
                <span>
                  <strong className="font-display text-4xl uppercase transition-transform duration-300 group-hover:translate-x-2 md:text-5xl">
                    {project.title}
                  </strong>
                  <small className="mt-2 block text-sm font-normal text-slate-500">
                    {project[language].sub}
                  </small>
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
        className="border-t border-slate-200 px-8 py-28 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[8px] text-slate-400">04</p>
          <h2 className="mt-2 font-display text-5xl font-black uppercase md:text-7xl">
            {text.journey}
          </h2>
          <div className="mt-16 border-l border-slate-200">
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
        className="border-t border-slate-200 px-8 py-28 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[8px] text-slate-400">05</p>
          <h2 className="mt-6 whitespace-pre-line font-display text-[clamp(4rem,9vw,9rem)] font-black uppercase leading-[.85]">
            {text.contact}
          </h2>
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div>
              {text.contactText && (
                <p className="max-w-lg text-lg leading-relaxed text-slate-600">
                  {text.contactText}
                </p>
              )}
              <a
                href="mailto:nurlant566@gmail.com"
                className={`${
                  text.contactText ? "mt-8" : "mt-0"
                } inline-block border border-accent/30 px-6 py-4 font-mono text-xs tracking-widest text-accent hover:bg-accent hover:text-[#020403]`}
              >
                nurlant566@gmail.com →
              </a>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
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

      <footer className="border-t border-slate-200 px-8 py-8 md:px-12">
        <div className="mx-auto max-w-7xl font-mono text-[8px] tracking-widest text-slate-400">
          <span>NURLAN TYELJAN — 2026</span>
        </div>
      </footer>
    </main>
  )
}
