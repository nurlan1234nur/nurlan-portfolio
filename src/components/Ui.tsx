import type { ReactNode } from "react"

export function SkillGroup({
  label,
  skills,
  accent = false,
}: {
  label: string
  skills: string[]
  accent?: boolean
}) {
  return (
    <div>
      <p className="mb-6 font-mono text-[9px] tracking-widest text-white/30">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`border px-3 py-2 font-mono text-[10px] ${
              accent
                ? "border-accent/25 bg-accent/[.04] text-accent/75"
                : "border-white/10 text-white/35"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Stat({ value, label }: { value: string label: string }) {
  return (
    <div className="min-w-28">
      <strong className="font-display text-3xl text-accent">{value}</strong>
      <p className="mt-1 font-mono text-[8px] tracking-widest text-white/30">
        {label}
      </p>
    </div>
  )
}

export function Capability({
  number,
  title,
  body,
}: {
  number: string
  title: string
  body: string
}) {
  return (
    <article className="border-white/10 py-8 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
      <span className="font-mono text-[9px] text-accent/60">{number}</span>
      <h3 className="mt-5 font-display text-2xl font-bold">{title}</h3>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/40">
        {body}
      </p>
    </article>
  )
}

export function Timeline({
  year,
  title,
  description,
}: {
  year: string
  title: string
  description: string
}) {
  return (
    <div className="relative pb-12 pl-8 before:absolute before:-left-1 before:top-1 before:h-2 before:w-2 before:rounded-full before:border before:border-accent before:bg-[#0b0c0c]">
      <div className="grid gap-3 md:grid-cols-[150px_1fr]">
        <span className="font-mono text-[9px] tracking-widest text-accent/60">
          {year}
        </span>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/40">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Contact({
  label,
  value,
  href,
}: {
  label: string
  value: string
  href?: string
}) {
  const content: ReactNode = (
    <>
      <span className="font-mono text-[9px] tracking-widest text-white/25">
        {label}
      </span>
      <span className="font-mono text-[10px] text-white/55">{value}</span>
    </>
  )

  return href ? (
    <a href={href} className="flex justify-between py-5 hover:text-accent">
      {content}
    </a>
  ) : (
    <div className="flex justify-between py-5">{content}</div>
  )
}
