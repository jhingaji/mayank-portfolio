import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code2, Database, Server, Sparkles, Wand2 } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Python", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    icon: Sparkles,
    title: "AI Stack",
    skills: [
      "OpenAI API",
      "Gemini API",
      "Claude API",
      "Prompt Engineering",
      "Multi-model AI",
      "AI Agents",
      "LangChain",
    ],
  },
  {
    icon: Wand2,
    title: "Creative",
    skills: [
      "Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "Adobe Audition",
      "Motion Graphics",
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="A modern, AI-first toolkit."
      subtitle="Production-grade skills across the AI, web, and creative stack."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass glass-hover group rounded-2xl p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-violet/30 text-primary">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-border bg-card/40 px-3 py-1.5 text-xs text-foreground/90 transition-all hover:border-primary/60 hover:text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
