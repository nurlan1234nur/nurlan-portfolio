import { useEffect, useRef, useState } from "react"

type Language = "mn" | "en"

const copy = {
  mn: {
    nav: ["ЭХЛЭЛ", "ТАНИЛЦУУЛГА", "УР ЧАДВАР", "ТӨСЛҮҮД", "ЗАМНАЛ", "ХОЛБОО"],
    available: "Ажилд нээлттэй",
    role: "Програм хангамжийн инженер",
    hero: ["АСУУДЛЫГ", "КОДООР", "ШИЙДНЭ."],
    heroText: "Програм хангамж, системийн найдвартай ажиллагаа болон хэрэглэгчийн хэрэгцээг холбосон бодит шийдэл бүтээхийг зорьдог програм хангамжийн инженер.",
    scroll: "ДООШ ГҮЙЛГЭЖ ҮЗНЭ ҮҮ",
    identity: "ТАНИЛЦУУЛГА",
    aboutTitle: "Шинэ төгсөгч. Бодит асуудалд төвлөрсөн хөгжүүлэгч.",
    about: "Би Монгол Улсын Их Сургуулийг Програм хангамжийн инженер мэргэжлээр 2026 онд төгссөн. Сурсан мэдлэг, програмчлал болон системийн ашиглалтын ур чадвараа бодит ажилд хэрэгжүүлж, байгууллагын үйл ажиллагаанд хувь нэмэр оруулахын зэрэгцээ мэргэжлийн хувьд хөгжихийг зорьдог.",
    focus: "Сервер талын хөгжүүлэлт, DevOps болон веб системийн бүрэн хөгжүүлэлтийн чиглэлээр бүтэн цагийн ажил сонирхож байна.",
    education: "БОЛОВСРОЛ",
    degree: "Програм хангамжийн инженер",
    university: "Монгол Улсын Их Сургууль",
    skills: "УР ЧАДВАР",
    active: "АШИГЛАЖ ЧАДДАГ",
    exploring: "СУДАЛЖ БАЙГАА",
    work: "ТӨСЛҮҮД",
    workNote: "Бүтээгдэхүүний сэтгэлгээ, full-stack хөгжүүлэлт, системийн архитектур болон deployment чадварыг харуулах бодит ажлууд.",
    concept: "БОДИТ ТӨСӨЛ",
    view: "ДЭЛГЭРЭНГҮЙ",
    journey: "ЗАМНАЛ",
    internship: "DevOps дадлагажигч",
    internshipText: "Өөрийн хөгжүүлсэн жижиг Node.js програмыг Docker контейнер болгож, Kubernetes, CI/CD дамжлага болон байршуулалтын урсгалыг туршсан.",
    graduate: "Програм хангамжийн инженерээр төгссөн",
    graduateText: "Монгол Улсын Их Сургуулийг төгсөж, сервер талын хөгжүүлэлт, DevOps болон веб системийн бүрэн хөгжүүлэлтийн чиглэлээр ажил хайж эхэлсэн.",
    contact: "ХАМТДАА\nБҮТЭЭЦГЭЭЕ.",
    contactText: "Улаанбаатар хотод оффис, хосолсон эсвэл зайнаас ажиллах боломжтой. Шинэ төсөл, ажлын санал эсвэл мэргэжлийн ярианд нээлттэй.",
    phone: "УТАС",
    location: "БАЙРШИЛ",
    locationValue: "Баянзүрх, Улаанбаатар",
    built: "REACT + VITE АШИГЛАН БҮТЭЭВ",
    back: "ТӨСЛҮҮД РҮҮ БУЦАХ",
    problem: "ЗОРИЛГО",
    solution: "ХЭРЭГЖҮҮЛЭЛТ",
    stack: "ТЕХНОЛОГИ",
    contribution: "МИНИЙ ОРОЛЦОО",
    proves: "НОТОЛЖ БУЙ ЧАДВАР",
    status: "ТӨЛӨВ",
    statusValue: "DEMO ХОЛБООС УДАХГҮЙ",
    repository: "ЭХ КОД ҮЗЭХ",
    projectCount: "БОДИТ ТӨСӨЛ",
    domains: "БҮТЭЭГДЭХҮҮНИЙ ЧИГЛЭЛ",
    layers: "FULL-STACK ДАВХАРГА",
  },
  en: {
    nav: ["HOME", "ABOUT", "SKILLS", "WORK", "JOURNEY", "CONTACT"],
    available: "Available for work",
    role: "Software Engineer",
    hero: ["SOLVING", "PROBLEMS", "WITH CODE."],
    heroText: "A software engineer focused on building practical solutions across backend development, DevOps, and full-stack engineering.",
    scroll: "SCROLL TO EXPLORE",
    identity: "IDENTITY",
    aboutTitle: "New graduate. Practical problem solver.",
    about: "I graduated from the National University of Mongolia in 2026 with a degree in Software Engineering. I aim to apply my software development and system operations skills in a professional environment, contribute to meaningful work, and continue growing professionally.",
    focus: "Seeking full-time opportunities across backend development, DevOps, and full-stack engineering.",
    education: "EDUCATION",
    degree: "Software Engineering",
    university: "National University of Mongolia",
    skills: "CAPABILITIES",
    active: "PRACTICAL KNOWLEDGE",
    exploring: "CURRENTLY EXPLORING",
    work: "SELECTED WORK",
    workNote: "Real products demonstrating product thinking, full-stack delivery, system architecture, and deployment skills.",
    concept: "REAL PROJECT",
    view: "VIEW DETAILS",
    journey: "JOURNEY",
    internship: "DevOps Intern",
    internshipText: "Containerized a small Node.js application I developed and experimented with Kubernetes, CI/CD pipelines, and deployment workflows.",
    graduate: "Software Engineering graduate",
    graduateText: "Graduated from the National University of Mongolia and began pursuing backend, DevOps, and full-stack opportunities.",
    contact: "LET'S\nBUILD\nSOMETHING.",
    contactText: "Available for on-site, hybrid, or remote work from Ulaanbaatar. Open to new projects, job opportunities, and professional conversations.",
    phone: "PHONE",
    location: "LOCATION",
    locationValue: "Bayanzürkh, Ulaanbaatar",
    built: "BUILT WITH REACT + VITE",
    back: "BACK TO WORK",
    problem: "GOAL",
    solution: "IMPLEMENTATION",
    stack: "STACK",
    contribution: "MY CONTRIBUTION",
    proves: "CAPABILITY SHOWN",
    status: "STATUS",
    statusValue: "LIVE LINK COMING SOON",
    repository: "VIEW REPOSITORY",
    projectCount: "REAL PROJECTS",
    domains: "PRODUCT DOMAINS",
    layers: "FULL-STACK LAYERS",
  },
}

const projects = [
  {
    title: "BO ZAR",
    code: "MARKETPLACE / 01",
    github: "https://github.com/nurlan1234nur/bo-zar",
    live: "http://116.206.83.75:8200/",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&h=420&fit=crop&auto=format",
    tech: ["NestJS", "React", "React Native", "PostgreSQL", "TypeORM", "Docker", "Nginx", "TypeScript"],
    mn: { sub: "Веб, мобайл, админ бүхий хөгжүүлж буй зарын платформ", problem: "Баян-Өлгий болон Улаанбаатарын хэрэглэгчдэд зар нийтлэх, хайх, удирдах нэг экосистем хэрэгтэй байсан.", solution: "NestJS REST API, PostgreSQL, нийтийн веб, moderation админ болон Expo мобайл аппыг shared contract-тай monorepo хэлбэрээр хөгжүүлж байна.", contribution: "Шаардлага, архитектур, өгөгдлийн загвар, API болон client integration дээр өөрөө болон AI-assisted байдлаар ажилласан. Гол workflow-ууд хэрэгжсэн ч production deployment, storage болон E2E баталгаажуулалт үргэлжилж байна.", proves: "Олон client-тэй full-stack бүтээгдэхүүнийг хэсэгчлэн задлах, гарсан кодыг ойлгож засах, системийн интеграцийг хариуцах чадвар." },
    en: { sub: "An in-progress classifieds platform across web, mobile, and admin", problem: "Users in Bayan-Ölgii and Ulaanbaatar needed one place to publish, discover, and manage local listings.", solution: "Developing a monorepo with a NestJS API, PostgreSQL, public web app, moderation panel, Expo mobile app, and shared typed contracts.", contribution: "Worked on requirements, architecture, data modeling, APIs, and client integration through hands-on and AI-assisted development. Core flows work, while production deployment, durable storage, and E2E verification remain in progress.", proves: "Ability to decompose a multi-client product, understand and revise generated code, and take responsibility for system integration." },
  },
  {
    title: "NUM TMS",
    code: "DISTRIBUTED SYSTEM / 02",
    github: "https://github.com/Binderya0623/NUM-TMS-26",
    live: "http://116.206.83.75/",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=640&h=420&fit=crop&auto=format",
    tech: ["Spring Boot", "React", "JSF", "PostgreSQL", "R2DBC", "Microservices", "Module Federation", "Docker"],
    mn: { sub: "Production VPS дээр ажиллаж буй дипломын удирдлагын систем", problem: "Олон Spring service болон frontend module-ийг найдвартай build хийж, нэг VPS рүү тасралтгүй хүргэх шаардлагатай байсан.", solution: "GitHub Actions matrix CI, path-based selective build, Docker Hub image registry, Docker Compose, Nginx болон SSH deployment урсгал хэрэгжүүлсэн.", contribution: "Төслийн CI/CD, Docker containerization, production Compose/Nginx тохиргоо болон багшийн өгсөн VPS deployment дээр голлон ажилласан.", proves: "Олон service-тэй системийн build/deploy automation, secrets, image versioning болон VPS operations-ийг хариуцах чадвар." },
    en: { sub: "A thesis management system running on a production VPS", problem: "Multiple Spring services and frontend modules needed a repeatable path from source code to one production VPS.", solution: "Implemented matrix CI, path-based selective builds, Docker Hub images, Docker Compose, Nginx, and SSH-based delivery with GitHub Actions.", contribution: "Focused on CI/CD, containerization, production Compose/Nginx configuration, and deployment to the instructor-provided VPS.", proves: "Practical ability to automate builds and deployments for a multi-service system and operate its versioned container runtime." },
  },
  {
    title: "NUM HOSPITAL",
    code: "HEALTHTECH / 03",
    github: "https://github.com/NUM-HOSPITAL-V1",
    live: "http://116.206.83.75/hospital/",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=640&h=420&fit=crop&auto=format",
    tech: ["Next.js", "Node.js", "MongoDB", "Java", "Spring", "ICD-10", "Docker", "Microservices"],
    mn: { sub: "Production VPS дээр ажиллаж буй эмнэлгийн multi-service систем", problem: "Mock өгөгдөлтэй frontend болон тусдаа hospital, registration, ICD-10 service-үүдийг бодит ажилладаг нэг орчин болгох шаардлагатай байсан.", solution: "Бодит backend integration хийж, GitHub Actions, Docker Compose, Nginx ашиглан VPS-д хүргэсэн; AWS network/security/compute-ийг Terraform-аар туршсан.", contribution: "CI/CD, server deployment, frontend-backend холболт, ICD-10 integration болон хөгжүүлэлт дээр ажилласан. AWS/Terraform хэсэг нь production бус туршилт байсан.", proves: "Polyglot service integration, deployment automation, VPS operations болон infrastructure-as-code-ийн практик ойлголт." },
    en: { sub: "A multi-service hospital system running on a production VPS", problem: "A mock-data frontend and separate hospital, registration, and ICD-10 services had to become one working environment.", solution: "Connected real backend flows and delivered services through GitHub Actions, Docker Compose, and Nginx; also explored AWS network, security, and compute provisioning with Terraform.", contribution: "Worked on CI/CD, server deployment, frontend-backend integration, and ICD-10 development. The AWS/Terraform work was an infrastructure experiment, not the current production host.", proves: "Practical understanding of polyglot integration, deployment automation, VPS operations, and infrastructure as code." },
  },
  {
    title: "NOUS",
    code: "REAL-TIME / 04",
    github: "https://github.com/nurlan1234nur/nous",
    live: undefined,
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=640&h=420&fit=crop&auto=format",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "React Native", "Docker"],
    mn: { sub: "Хосуудад зориулсан real-time веб ба мобайл апп", problem: "Хосуудын харилцаа, хамтын мөч, өдөр тутмын interaction-ыг нэг хувийн орчинд төвлөрүүлэх зорилготой.", solution: "Socket.IO real-time суваг, JWT нэвтрэлт, MongoDB өгөгдлийн сан, React веб болон native mobile client бүхий full-stack систем хөгжүүлсэн.", contribution: "Prototype-оос production бүтэц рүү шилжүүлж, client/server зааг, authentication, real-time event болон release workflow дээр ажилласан.", proves: "Stateful real-time бүтээгдэхүүн, authentication болон олон client-ийн lifecycle-ийг удирдах чадвар." },
    en: { sub: "A real-time web and mobile app for couples", problem: "Couples needed a private shared space for communication, memories, and everyday interaction.", solution: "Built a full-stack system with Socket.IO events, JWT authentication, MongoDB, a React web client, and a native mobile client.", contribution: "Evolved the prototype toward production structure across client/server boundaries, auth, real-time events, and release workflows.", proves: "Ability to build stateful real-time products and manage authentication and multi-client lifecycles." },
  },
  {
    title: "IMPOSTER",
    code: "PWA GAME / 05",
    github: "https://github.com/nurlan1234nur/imposter-game",
    live: "https://imposter-latest.onrender.com/",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=640&h=420&fit=crop&auto=format",
    tech: ["React", "TypeScript", "PWA", "Service Worker", "Docker", "Nginx", "i18n"],
    mn: { sub: "3 хэлтэй, утас дамжуулж тоглодог party game", problem: "Нэг утсаар интернэтгүй үед ч хурдан эхлүүлж болох, хэлний саадгүй бүлгийн тоглоом хэрэгтэй.", solution: "Монгол, Англи, Казах хэл, 340+ үгийн сан, custom profile болон installable offline PWA туршлагыг бүтээж Docker image-ээр хүргэдэг болгосон.", contribution: "Тоглоомын логик, responsive UX, олон хэл, PWA lifecycle, container build болон Nginx deployment-ийг хэрэгжүүлсэн.", proves: "Хэрэглэгч төвтэй interactive UI-г offline capability болон production delivery-тэй хослуулах чадвар." },
    en: { sub: "A trilingual pass-the-phone party game", problem: "Groups needed an instant, language-inclusive game that could work from one phone—even without a reliable connection.", solution: "Created an installable offline PWA with Mongolian, English, and Kazakh support, 340+ prompts, custom profiles, and Docker delivery.", contribution: "Implemented game logic, responsive UX, localization, the PWA lifecycle, container builds, and Nginx deployment.", proves: "Ability to combine playful interaction design with offline capability and production delivery." },
  },
  {
    title: "TOTETYPE",
    code: "EDTECH / 06",
    github: "https://github.com/nurlan1234nur/tote-type",
    live: undefined,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=640&h=420&fit=crop&auto=format",
    tech: ["Next.js", "Node.js", "TypeScript", "REST API", "Keyboard UI", "Analytics"],
    mn: { sub: "Казах Төте жазу бичгийн дасгалын платформ", problem: "Төте жазуг дижитал орчинд системтэй сурах, бичих хурд ба зөв байдлаа хэмжих хүртээмжтэй хэрэгсэл хомс.", solution: "Үг, өгүүлбэрийн дасгал, санамсаргүй текстийн API, WPM/accuracy хэмжилт болон виртуал keyboard visualization бүхий платформ бүтээсэн.", contribution: "Сургалтын interaction, typing metrics, keyboard visualization болон frontend/backend урсгалыг хэрэгжүүлсэн.", proves: "Тусгай бичгийн системийг ойлгомжтой UX, бодит цагийн хэмжилт болон API дизайнтай холбох чадвар." },
    en: { sub: "A Kazakh Tote Jazu typing practice platform", problem: "Learners lacked an accessible way to practice the script systematically and measure speed and accuracy.", solution: "Built word and sentence drills, a randomized-text API, live WPM and accuracy metrics, and a visual Tote keyboard.", contribution: "Implemented the learning interaction, typing metrics, keyboard visualization, and frontend/backend flow.", proves: "Ability to turn a specialized writing system into clear UX backed by real-time measurement and API design." },
  },
  {
    title: "TRIPLE",
    code: "LEARNING PLATFORM / 07",
    github: "https://github.com/TripleGenius",
    live: undefined,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=640&h=420&fit=crop&auto=format",
    tech: ["NestJS", "React", "Material UI", "Prisma", "PostgreSQL", "JWT", "REST API"],
    mn: { sub: "Responsive сургалтын full-stack платформ", problem: "Сургалтын контент, хэрэглэгч болон эрхийн урсгалыг desktop, mobile аль алинд ойлгомжтой хүргэх шаардлагатай.", solution: "React ба Material UI интерфэйсийг NestJS, Prisma, PostgreSQL, JWT authentication бүхий backend-тэй холбосон.", contribution: "Responsive frontend, authentication, API integration болон relational өгөгдлийн давхарга дээр ажилласан.", proves: "Орчин үеийн UI-г secure backend болон relational data model-той цэвэр холбох чадвар." },
    en: { sub: "A responsive full-stack learning platform", problem: "Learning content, users, and access flows needed a clear experience across desktop and mobile.", solution: "Connected a React and Material UI frontend to a NestJS backend with Prisma, PostgreSQL, and JWT authentication.", contribution: "Worked across responsive frontend, authentication, API integration, and the relational data layer.", proves: "Ability to connect modern UI with a secure backend and a clean relational model." },
  },
  {
    title: "BLINKCV",
    code: "PRODUCTIVITY / 08",
    github: "https://github.com/nurlan1234nur/blinkcv",
    live: "https://cvmaker-tawny-seven.vercel.app/",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=640&h=420&fit=crop&auto=format",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Responsive UI"],
    mn: { sub: "Хурдан CV бүтээх responsive веб хэрэгсэл", problem: "Ажил горилогчид техникийн мэдлэггүйгээр цэвэр, мэргэжлийн CV хурдан бэлтгэх хэрэгтэй.", solution: "Form-driven засварлалт, шууд preview болон дэлгэцийн хэмжээнд зохицох интерфэйстэй React апп бүтээсэн.", contribution: "Component architecture, form interaction, preview layout болон responsive styling-ийг хэрэгжүүлсэн.", proves: "Хэрэглэгчийн ажлыг цөөн алхамтай, ойлгомжтой frontend бүтээгдэхүүн болгох чадвар." },
    en: { sub: "A responsive tool for creating polished CVs quickly", problem: "Job seekers needed a simple way to produce a clean CV without design or technical expertise.", solution: "Built a React experience around form-driven editing, immediate preview, and responsive layouts.", contribution: "Implemented component architecture, form interactions, preview layout, and responsive styling.", proves: "Ability to simplify a user task into a focused and approachable frontend product." },
  },
]

const activeSkills = ["TypeScript", "JavaScript", "Java", "Node.js", "NestJS", "Express", "Spring Boot", "React", "Next.js", "React Native", "REST API", "Socket.IO", "PostgreSQL", "MongoDB", "Docker", "Nginx", "CI/CD", "Git"]
const exploringSkills = ["Kubernetes", "System Design", "Observability", "Automated Testing", "Performance", "Cloud Infrastructure"]

function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const target = useRef({ x: -100, y: -100 })
  const trailing = useRef({ x: -100, y: -100 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return
    const move = (event: MouseEvent) => { target.current = { x: event.clientX, y: event.clientY } }
    const hover = (event: MouseEvent) => setActive(Boolean((event.target as HTMLElement).closest("a, button, [data-hover]")))
    let frame = 0
    const animate = () => {
      trailing.current.x += (target.current.x - trailing.current.x) * .12
      trailing.current.y += (target.current.y - trailing.current.y) * .12
      if (dot.current) dot.current.style.transform = `translate3d(${target.current.x}px,${target.current.y}px,0) translate(-50%,-50%)`
      if (ring.current) ring.current.style.transform = `translate3d(${trailing.current.x}px,${trailing.current.y}px,0) translate(-50%,-50%)`
      frame = requestAnimationFrame(animate)
    }
    window.addEventListener("mousemove", move)
    window.addEventListener("mouseover", hover)
    animate()
    return () => { cancelAnimationFrame(frame); window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", hover) }
  }, [])

  return <>
    <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full bg-accent transition-[width,height] duration-150" style={{ width: active ? 10 : 5, height: active ? 10 : 5 }} />
    <div ref={ring} className="pointer-events-none fixed left-0 top-0 z-[99] rounded-full border transition-[width,height,border-color] duration-200" style={{ width: active ? 48 : 30, height: active ? 48 : 30, borderColor: active ? "rgba(184,255,26,.55)" : "rgba(184,255,26,.22)" }} />
  </>
}

function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const context = canvas.getContext("2d")
    if (!context) return
    const mouse = { x: -999, y: -999 }
    let frame = 0
    let nodes: { x: number; y: number; vx: number; vy: number }[] = []
    const resize = () => {
      const scale = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * scale
      canvas.height = canvas.offsetHeight * scale
      context.setTransform(scale, 0, 0, scale, 0, 0)
      nodes = Array.from({ length: 28 }, () => ({ x: Math.random() * canvas.offsetWidth, y: Math.random() * canvas.offsetHeight, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3 }))
    }
    const move = (event: MouseEvent) => { mouse.x = event.clientX; mouse.y = event.clientY }
    const draw = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      context.clearRect(0, 0, width, height)
      nodes.forEach((node) => {
        node.x += node.vx; node.y += node.vy
        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1
      })
      for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y)
        if (distance < 170) {
          const near = Math.min(Math.hypot(nodes[i].x - mouse.x, nodes[i].y - mouse.y), Math.hypot(nodes[j].x - mouse.x, nodes[j].y - mouse.y)) < 220
          context.strokeStyle = near ? `rgba(184,255,26,${(1 - distance / 170) * .25})` : `rgba(255,255,255,${(1 - distance / 170) * .06})`
          context.beginPath(); context.moveTo(nodes[i].x, nodes[i].y); context.lineTo(nodes[j].x, nodes[j].y); context.stroke()
        }
      }
      nodes.forEach((node) => { context.fillStyle = Math.hypot(node.x - mouse.x, node.y - mouse.y) < 150 ? "#b8ff1a" : "rgba(255,255,255,.3)"; context.beginPath(); context.arc(node.x, node.y, 2, 0, Math.PI * 2); context.fill() })
      frame = requestAnimationFrame(draw)
    }
    resize(); draw()
    window.addEventListener("resize", resize); window.addEventListener("mousemove", move)
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); window.removeEventListener("mousemove", move) }
  }, [])
  return <canvas ref={ref} className="absolute inset-0 h-full w-full opacity-70" />
}

export default function App() {
  const [language, setLanguage] = useState<Language>("mn")
  const [selected, setSelected] = useState<number | null>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const text = copy[language]
  const ids = ["index", "about", "skills", "work", "journey", "contact"]

  useEffect(() => {
    const move = (event: MouseEvent) => setPointer({ x: event.clientX, y: event.clientY })
    window.addEventListener("mousemove", move, { passive: true })
    return () => window.removeEventListener("mousemove", move)
  }, [])

  if (selected !== null) {
    const project = projects[selected]
    const content = project[language]
    return <main className="min-h-screen bg-[#0b0c0c] px-8 py-24 text-[#e8e3d8] md:px-12"><Cursor />
      <div className="mx-auto max-w-5xl">
        <button onClick={() => setSelected(null)} className="mb-16 font-mono text-xs tracking-widest text-white/40 hover:text-accent">← {text.back}</button>
        <p className="mb-4 font-mono text-xs tracking-[.25em] text-accent">0{selected + 1} / {text.concept}</p>
        <h1 className="font-display text-6xl font-black uppercase md:text-8xl">{project.title}</h1>
        <p className="mt-4 text-xl text-white/45">{content.sub}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3"><span className="border border-accent/25 bg-accent/[.05] px-3 py-2 font-mono text-[9px] tracking-widest text-accent">{project.code}</span><span className="border border-white/10 px-3 py-2 font-mono text-[9px] tracking-widest text-white/35">{project.live ? "LIVE" : text.statusValue}</span>{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="border border-accent bg-accent px-3 py-2 font-mono text-[9px] tracking-widest text-black transition-colors hover:bg-transparent hover:text-accent">LIVE DEMO ↗</a>}<a href={project.github} target="_blank" rel="noreferrer" className="border border-accent/30 px-3 py-2 font-mono text-[9px] tracking-widest text-accent transition-colors hover:bg-accent hover:text-black">{text.repository} ↗</a></div>
        <div className="mt-20 border-t border-white/10 py-10 md:grid md:grid-cols-[220px_1fr] md:gap-8"><p className="font-mono text-xs tracking-widest text-white/30">01 — {text.problem}</p><p className="mt-5 text-lg leading-relaxed text-white/70 md:mt-0">{content.problem}</p></div>
        <div className="border-t border-white/10 py-10 md:grid md:grid-cols-[220px_1fr] md:gap-8"><p className="font-mono text-xs tracking-widest text-white/30">02 — {text.solution}</p><p className="mt-5 text-lg leading-relaxed text-white/70 md:mt-0">{content.solution}</p></div>
        <div className="border-t border-white/10 py-10 md:grid md:grid-cols-[220px_1fr] md:gap-8"><p className="font-mono text-xs tracking-widest text-white/30">03 — {text.contribution}</p><p className="mt-5 text-lg leading-relaxed text-white/70 md:mt-0">{content.contribution}</p></div>
        <div className="border-t border-white/10 py-10 md:grid md:grid-cols-[220px_1fr] md:gap-8"><p className="font-mono text-xs tracking-widest text-white/30">04 — {text.proves}</p><p className="mt-5 border-l-2 border-accent/50 pl-6 text-lg leading-relaxed text-white/70 md:mt-0">{content.proves}</p></div>
        <div className="border-y border-white/10 py-10 md:grid md:grid-cols-[220px_1fr] md:gap-8"><p className="font-mono text-xs tracking-widest text-white/30">05 — {text.stack}</p><div className="mt-5 flex flex-wrap gap-2 md:mt-0">{project.tech.map((skill) => <span key={skill} className="border border-white/10 px-3 py-2 font-mono text-xs text-white/50">{skill}</span>)}</div></div>
      </div>
    </main>
  }

  return <main className="min-h-screen overflow-x-hidden bg-[#0b0c0c] text-[#e8e3d8]">
    <Cursor />
    {hoveredProject !== null && <div className="pointer-events-none fixed z-40 hidden md:block" style={{ left: pointer.x + 30, top: pointer.y - 80 }}><img src={projects[hoveredProject].image} alt="" className="h-36 w-56 border border-white/10 object-cover grayscale"/><div className="h-px w-full bg-accent/50"/></div>}
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[.06] bg-[#0b0c0c]/80 px-8 py-5 backdrop-blur-xl md:px-12">
      <div className="flex items-center justify-between"><span className="font-mono text-[9px] tracking-[.22em] text-white/30">NT_PORTFOLIO</span><div className="hidden gap-6 md:flex">{text.nav.map((label, index) => <a key={label} href={`#${ids[index]}`} className="font-mono text-[9px] tracking-widest text-white/35 transition-colors hover:text-accent">{label}</a>)}</div><div className="flex items-center gap-3"><button onClick={() => setLanguage(language === "mn" ? "en" : "mn")} className="border border-accent/20 px-2.5 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent hover:text-black">{language === "mn" ? "EN" : "MN"}</button><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"/><span className="hidden font-mono text-[9px] uppercase tracking-widest text-white/30 sm:block">{text.available}</span></div></div>
    </nav>

    <section id="index" className="relative flex min-h-screen items-end overflow-hidden px-8 pb-20 pt-32 md:px-12 md:pb-24"><HeroCanvas/><div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0b0c0c] to-transparent"/><div className="relative z-10 w-full"><p className="mb-8 font-mono text-[9px] uppercase tracking-[.25em] text-accent/70">Nurlan Tyeljan — {text.role} — 2026</p><h1 className="font-display text-[clamp(4rem,11vw,12rem)] font-black uppercase leading-[.87]"><span className="block">{text.hero[0]}</span><span className="block text-white/20">{text.hero[1]}</span><span className="block">{text.hero[2]}</span></h1><div className="mt-8 grid gap-8 border-t border-white/10 pt-7 md:grid-cols-[1fr_auto_auto_auto] md:items-end"><p className="max-w-lg text-sm leading-relaxed text-white/45">{text.heroText}</p><Stat value="08" label={text.projectCount}/><Stat value="06" label={text.domains}/><Stat value="03" label={text.layers}/></div></div></section>

    <section id="about" className="border-t border-white/[.07] px-8 py-28 md:px-12"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[160px_1fr] md:gap-20"><div><p className="font-mono text-[8px] text-white/25">01</p><p className="mt-2 font-mono text-[9px] tracking-widest text-accent/60">{text.identity}</p></div><div><h2 className="max-w-4xl font-display text-4xl font-bold uppercase leading-tight md:text-6xl">{text.aboutTitle}</h2><p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/55">{text.about}</p><p className="mt-4 text-white/40">{text.focus}</p><div className="mt-12 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-3"><div><p className="font-mono text-[9px] tracking-widest text-white/25">{text.education}</p><p className="mt-3">{text.degree}</p></div><div><p className="font-mono text-[9px] tracking-widest text-white/25">{text.university}</p><p className="mt-3">2026</p></div><div><div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accent/[.06] font-display text-xl font-bold text-accent">NT</div></div></div></div></div></section>

    <section id="skills" className="border-t border-white/[.07] px-8 py-28 md:px-12"><div className="mx-auto max-w-7xl"><p className="font-mono text-[8px] text-white/25">02</p><h2 className="mt-2 font-display text-5xl font-black uppercase md:text-7xl">{text.skills}</h2><div className="mt-16 grid border-y border-white/10 md:grid-cols-3"><Capability number="01" title="BACKEND & DATA" body={language === "mn" ? "REST API, authentication, business logic, relational болон document өгөгдлийн загвар." : "REST APIs, authentication, business logic, and relational and document data models."}/><Capability number="02" title="PRODUCT FRONTEND" body={language === "mn" ? "Responsive веб, admin dashboard, mobile client болон real-time interaction." : "Responsive web, admin dashboards, mobile clients, and real-time interaction."}/><Capability number="03" title="ARCHITECTURE & DELIVERY" body={language === "mn" ? "Monorepo, microservice, container, reverse proxy, CI/CD болон deployment workflow." : "Monorepos, microservices, containers, reverse proxies, CI/CD, and deployment workflows."}/></div><div className="mt-16 grid gap-12 md:grid-cols-2"><SkillGroup label={text.active} skills={activeSkills} accent/><SkillGroup label={text.exploring} skills={exploringSkills}/></div></div></section>

    <section id="work" className="border-t border-white/[.07] px-8 py-28 md:px-12"><div className="mx-auto max-w-7xl"><p className="font-mono text-[8px] text-white/25">03</p><h2 className="mt-2 font-display text-5xl font-black uppercase md:text-7xl">{text.work}</h2><p className="mt-4 max-w-3xl text-white/35">{text.workNote}</p><div className="mt-16 border-b border-white/10">{projects.map((project, index) => <button key={project.title} onMouseEnter={() => setHoveredProject(index)} onMouseLeave={() => setHoveredProject(null)} onClick={() => setSelected(index)} data-hover className="group grid w-full gap-4 border-t border-white/10 py-10 text-left transition-colors hover:text-accent md:grid-cols-[70px_1fr_190px_auto] md:items-center"><span className="font-mono text-[9px] text-white/25">0{index + 1}</span><span><strong className="font-display text-4xl uppercase transition-transform duration-300 group-hover:translate-x-2 md:text-5xl">{project.title}</strong><small className="mt-2 block text-sm font-normal text-white/40">{project[language].sub}</small></span><span className="font-mono text-[8px] tracking-widest text-white/25">{project.code}</span><span className="font-mono text-[9px] tracking-widest text-accent/60">{text.view} →</span></button>)}</div></div></section>

    <section id="journey" className="border-t border-white/[.07] px-8 py-28 md:px-12"><div className="mx-auto max-w-7xl"><p className="font-mono text-[8px] text-white/25">04</p><h2 className="mt-2 font-display text-5xl font-black uppercase md:text-7xl">{text.journey}</h2><div className="mt-16 border-l border-white/10"><Timeline year="2025.12 — 2026.02" title={`${text.internship} — CIA Solution`} description={text.internshipText}/><Timeline year="2026" title={text.graduate} description={text.graduateText}/></div></div></section>

    <section id="contact" className="border-t border-white/[.07] px-8 py-28 md:px-12"><div className="mx-auto max-w-7xl"><p className="font-mono text-[8px] text-white/25">05</p><h2 className="mt-6 whitespace-pre-line font-display text-[clamp(4rem,9vw,9rem)] font-black uppercase leading-[.85]">{text.contact}</h2><div className="mt-16 grid gap-12 md:grid-cols-2"><div><p className="max-w-lg text-lg leading-relaxed text-white/45">{text.contactText}</p><a href="mailto:nurlant566@gmail.com" className="mt-8 inline-block border border-accent/30 px-6 py-4 font-mono text-xs tracking-widest text-accent hover:bg-accent hover:text-black">nurlant566@gmail.com →</a></div><div className="divide-y divide-white/10 border-y border-white/10"><Contact label="GITHUB" value="@nurlan1234nur" href="https://github.com/nurlan1234nur"/><Contact label={text.phone} value="+976 8543 2523" href="tel:+97685432523"/><Contact label={text.location} value={text.locationValue}/></div></div></div></section>

    <footer className="border-t border-white/[.06] px-8 py-8 md:px-12"><div className="mx-auto flex max-w-7xl justify-between font-mono text-[8px] tracking-widest text-white/20"><span>NURLAN TYELJAN — 2026</span><span>{text.built}</span></div></footer>
  </main>
}

function SkillGroup({ label, skills, accent = false }: { label: string; skills: string[]; accent?: boolean }) {
  return <div><p className="mb-6 font-mono text-[9px] tracking-widest text-white/30">{label}</p><div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className={`border px-3 py-2 font-mono text-[10px] ${accent ? "border-accent/25 bg-accent/[.04] text-accent/75" : "border-white/10 text-white/35"}`}>{skill}</span>)}</div></div>
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="min-w-28"><strong className="font-display text-3xl text-accent">{value}</strong><p className="mt-1 font-mono text-[8px] tracking-widest text-white/30">{label}</p></div>
}

function Capability({ number, title, body }: { number: string; title: string; body: string }) {
  return <article className="border-white/10 py-8 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"><span className="font-mono text-[9px] text-accent/60">{number}</span><h3 className="mt-5 font-display text-2xl font-bold">{title}</h3><p className="mt-4 max-w-sm text-sm leading-relaxed text-white/40">{body}</p></article>
}

function Timeline({ year, title, description }: { year: string; title: string; description: string }) {
  return <div className="relative pb-12 pl-8 before:absolute before:-left-1 before:top-1 before:h-2 before:w-2 before:rounded-full before:border before:border-accent before:bg-[#0b0c0c]"><div className="grid gap-3 md:grid-cols-[150px_1fr]"><span className="font-mono text-[9px] tracking-widest text-accent/60">{year}</span><div><h3 className="font-medium">{title}</h3><p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/40">{description}</p></div></div></div>
}

function Contact({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = <><span className="font-mono text-[9px] tracking-widest text-white/25">{label}</span><span className="font-mono text-[10px] text-white/55">{value}</span></>
  return href ? <a href={href} className="flex justify-between py-5 hover:text-accent">{content}</a> : <div className="flex justify-between py-5">{content}</div>
}
