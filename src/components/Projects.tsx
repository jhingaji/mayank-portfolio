import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  ArrowUpRight,
  Gamepad2,
  MessagesSquare,
  CalendarCheck,
  Zap,
} from "lucide-react";

const hunterFeatures = [
  "Lucy AI Campus & Growth Advisor",
  "Multi-model AI Integration",
  "XP & Level Progression",
  "Quest-Based Productivity",
  "Deep Focus Chamber",
  "Study Planning",
  "Health & Hydration Tracking",
  "Nutrition Tracking",
  "Finance Management",
  "Skill Development Analytics",
  "Real-Time Progress Analytics",
];

const otherProjects = [
  {
    icon: MessagesSquare,
    title: "AI Interview Assistant",
    desc: "AI-powered mock interviews with resume analysis, personalized feedback and performance tracking across technical and behavioral rounds.",
    tags: ["OpenAI", "React", "Python"],
  },
  {
    icon: Gamepad2,
    title: "AI Game Creator",
    desc: "Generative system for game ideas, storylines, mechanics, and end-to-end development workflow planning.",
    tags: ["Gemini", "LangChain", "Agents"],
  },
  {
    icon: CalendarCheck,
    title: "Booking Platform Prototype",
    desc: "Full stack booking app with a React frontend, Python backend and MongoDB integration with user management.",
    tags: ["React", "Python", "MongoDB"],
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Products engineered with intent."
      subtitle="From flagship AI platforms to focused full stack builds."
    >
      {/* Flagship: HunterOS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="glow-border glass relative overflow-hidden rounded-3xl p-8 md:p-12"
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-violet/30 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
              <Zap className="h-3 w-3" /> Flagship project
            </div>
            <h3 className="mt-5 font-display text-4xl font-bold md:text-6xl">
              <span className="text-neon">HunterOS</span>
            </h3>
            <p className="mt-4 max-w-lg text-base text-muted-foreground md:text-lg">
              An AI-powered personal growth platform inspired by RPG progression
              systems. Built to turn your life into a quest log.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "React.js",
                "Python",
                "MongoDB",
                "REST APIs",
                "OpenAI",
                "Gemini",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-border bg-card/60 px-3 py-1 text-xs text-foreground/90"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="https://hunter-os-v.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_oklch(0.78_0.2_235/0.4)] transition-all hover:shadow-[0_0_50px_oklch(0.78_0.2_235/0.7)]"
              >
                Live demo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-3">
              {[
                "/images/login-page.png",
                "/images/study-zone.png",
                "/images/vitals-health.png",
              ].map((image, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl border border-border overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`HunterOS ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="aspect-[16/9] rounded-xl border border-border overflow-hidden">
              <img
                src="/images/dashboard.png"
                alt="HunterOS Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {hunterFeatures.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 rounded-lg border border-border/50 bg-card/40 px-3 py-2 text-xs text-foreground/90"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Other projects */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {otherProjects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glass-hover group flex flex-col rounded-2xl p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </div>
            <h4 className="font-display text-lg font-semibold">{p.title}</h4>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">
              {p.desc}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-card/40 px-2 py-0.5 font-mono text-[10px] text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
