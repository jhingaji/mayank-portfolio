import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Journey"
      title="Experience, education & wins."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass glass-hover rounded-2xl p-7"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
              <Briefcase className="h-5 w-5" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
              2022 – 2024
            </span>
          </div>
          <h3 className="font-display text-xl font-semibold">Video Editor</h3>
          <p className="text-sm text-muted-foreground">SKBM School, Jaipur</p>
          <ul className="mt-5 space-y-2 text-sm text-foreground/90">
            {[
              "Educational & promotional videos",
              "Motion graphics design",
              "Color grading & audio enhancement",
              "Full post-production workflows",
            ].map((r) => (
              <li key={r} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {r}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass glass-hover rounded-2xl p-7"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet/20 text-violet">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-violet">
              2025 – Present
            </span>
          </div>
          <h3 className="font-display text-xl font-semibold">Software Engineering Program</h3>
          <p className="text-sm text-muted-foreground">
            NxtWave CCBP 4.0 Intensive Full Stack Development
          </p>
          <p className="mt-5 text-sm text-foreground/90">
            Deep dive into modern full stack engineering — building production-grade web
            applications, mastering architecture, APIs and database design.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-4 glass glass-hover rounded-2xl p-7"
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
            <Trophy className="h-5 w-5" />
          </div>
          <h3 className="font-display text-xl font-semibold">Achievements</h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Built multiple AI-powered products end-to-end",
            "Developed scalable full stack applications",
            "Strong problem-solving & system design",
            "Continuous learner across AI & engineering",
          ].map((a) => (
            <div
              key={a}
              className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/40 p-4"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_10px_oklch(0.78_0.2_235/0.8)]" />
              <span className="text-sm text-foreground/90">{a}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
