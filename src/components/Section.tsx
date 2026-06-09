import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-2xl"
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur-md">
              <span className="h-1 w-1 rounded-full bg-primary" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient">{title}</span>
          </h2>
          {subtitle && (
            <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
