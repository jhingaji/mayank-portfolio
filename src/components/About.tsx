import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Brain, Code2, Film, Target } from "lucide-react";
import { Section } from "./Section";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 2, suffix: "+", label: "Years experience" },
  { value: 10, suffix: "+", label: "Projects shipped" },
  { value: 6, suffix: "+", label: "AI integrations" },
  { value: 100, suffix: "+", label: "Videos edited" },
];

const pillars = [
  {
    icon: Brain,
    title: "AI Product Development",
    desc: "Designing multi-model AI systems, agents, and intelligent workflows that solve real problems.",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "Scalable React + Python applications, REST APIs, and modern database architectures.",
  },
  {
    icon: Film,
    title: "Video & Motion",
    desc: "Premium editing, motion graphics and post-production for YouTube, Reels and brands.",
  },
  {
    icon: Target,
    title: "Real-World Focus",
    desc: "Building products that ship and create measurable impact — not just demos.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering the intersection of AI, code & creativity."
      subtitle="I build polished AI-powered products and modern web experiences, with a creative background in video and motion graphics. Driven by craft, shipping speed, and solving real problems."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glass-hover rounded-2xl p-6"
          >
            <div className="font-display text-4xl font-bold text-neon md:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glass-hover group rounded-2xl p-6"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
