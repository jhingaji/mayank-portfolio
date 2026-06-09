import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";

const floatingChips = [
  { label: "React", x: "8%", y: "20%", delay: 0 },
  { label: "Python", x: "85%", y: "18%", delay: 0.4 },
  { label: "MongoDB", x: "12%", y: "70%", delay: 0.8 },
  { label: "OpenAI", x: "82%", y: "68%", delay: 1.2 },
  { label: "Gemini", x: "5%", y: "45%", delay: 1.6 },
  { label: "After Effects", x: "88%", y: "42%", delay: 2 },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Floating tech chips */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {floatingChips.map((c) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: c.delay },
              scale: { duration: 0.8, delay: c.delay },
              y: { duration: 5 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: c.delay },
            }}
            style={{ left: c.x, top: c.y }}
            className="absolute"
          >
            <div className="glass rounded-full px-4 py-2 text-xs font-mono text-primary">
              {c.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for freelance projects
          <Sparkles className="h-3 w-3 text-primary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">MAYANK</span>
          <br />
          <span className="text-neon">SHARMA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl font-mono text-sm uppercase tracking-[0.2em] text-primary md:text-base"
        >
          AI Builder · Full Stack Developer · Video Editor
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          Software Engineering student passionate about building AI products, modern web
          applications, and creative digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_oklch(0.78_0.2_235/0.4)] transition-all hover:shadow-[0_0_50px_oklch(0.78_0.2_235/0.7)]"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="glass glass-hover inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
          <a
  href="/resume/Doc1.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors"
>
  <Download className="h-4 w-4" />
  Resume
</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 inline-flex items-center gap-2 text-xs text-muted-foreground"
        >
          <MapPin className="h-3 w-3" />
          Jaipur, Rajasthan, India
        </motion.div>
      </div>
    </section>
  );
}
