import { useEffect, useRef, useState } from "react"

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const target = useRef({ x: -100, y: -100 })
  const trailing = useRef({ x: -100, y: -100 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return

    const move = (event: MouseEvent) => {
      target.current = { x: event.clientX, y: event.clientY }
    }
    const hover = (event: MouseEvent) => {
      setActive(
        Boolean(
          (event.target as HTMLElement).closest("a, button, [data-hover]"),
        ),
      )
    }
    let frame = 0
    const animate = () => {
      trailing.current.x += (target.current.x - trailing.current.x) * 0.12
      trailing.current.y += (target.current.y - trailing.current.y) * 0.12
      if (dot.current) {
        dot.current.style.transform = `translate3d(${target.current.x}px,${target.current.y}px,0) translate(-50%,-50%)`
      }
      if (ring.current) {
        ring.current.style.transform = `translate3d(${trailing.current.x}px,${trailing.current.y}px,0) translate(-50%,-50%)`
      }
      frame = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseover", hover)
    animate()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseover", hover)
    }
  }, [])

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full bg-accent transition-[width,height] duration-150"
        style={{ width: active ? 10 : 5, height: active ? 10 : 5 }}
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[99] rounded-full border transition-[width,height,border-color] duration-200"
        style={{
          width: active ? 48 : 30,
          height: active ? 48 : 30,
          borderColor: active ? "rgba(56,189,248,.55)" : "rgba(56,189,248,.22)",
        }}
      />
    </>
  )
}

export function HeroCanvas() {
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
      nodes = Array.from({ length: 28 }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }))
    }

    const move = (event: MouseEvent) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    const draw = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      context.clearRect(0, 0, width, height)

      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = Math.hypot(
            nodes[i].x - nodes[j].x,
            nodes[i].y - nodes[j].y,
          )
          if (distance < 170) {
            const near =
              Math.min(
                Math.hypot(nodes[i].x - mouse.x, nodes[i].y - mouse.y),
                Math.hypot(nodes[j].x - mouse.x, nodes[j].y - mouse.y),
              ) < 220
            context.strokeStyle = near
              ? `rgba(56,189,248,${(1 - distance / 170) * 0.25})`
              : `rgba(255,255,255,${(1 - distance / 170) * 0.06})`
            context.beginPath()
            context.moveTo(nodes[i].x, nodes[i].y)
            context.lineTo(nodes[j].x, nodes[j].y)
            context.stroke()
          }
        }
      }

      nodes.forEach((node) => {
        context.fillStyle =
          Math.hypot(node.x - mouse.x, node.y - mouse.y) < 150
            ? "#38bdf8"
            : "rgba(255,255,255,.3)"
        context.beginPath()
        context.arc(node.x, node.y, 2, 0, Math.PI * 2)
        context.fill()
      })
      frame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", move)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", move)
    }
  }, [])

  return (
    <canvas ref={ref} className="absolute inset-0 h-full w-full opacity-70" />
  )
}
