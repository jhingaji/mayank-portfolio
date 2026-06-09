import { motion } from "framer-motion";
import { Section } from "./Section";
import { Smartphone, Sparkles, Palette, Mic2, Wand2 } from "lucide-react";

const services = [
  { icon: Smartphone, title: "Shorts & Reels" },
  { icon: Sparkles, title: "Motion Graphics" },
  { icon: Palette, title: "Color Grading" },
  { icon: Mic2, title: "Audio Enhancement" },
  { icon: Wand2, title: "Visual Effects" },
];
const videos = [
  "/videos/infinity.mp4",
  "/videos/waguri.mp4",
  "/videos/higuruma.mp4",
  "/videos/panda.mp4",
  "/videos/op.mp4",
];

export function VideoEditing() {
  return (
    <Section
      id="video"
      eyebrow="Video & Motion"
      title="Cinematic edits with motion-design polish."
      subtitle="Years of post-production craft for educational, promotional and social content."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {videos.map((video, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: i * 0.06 }}
    className="group glass relative aspect-video overflow-hidden rounded-2xl"
  >
    <video
      autoPlay
      muted
      loop
      playsInline
      controls
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source src={video} type="video/mp4" />
    </video>
  </motion.div>
))}
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass glass-hover flex items-center gap-4 rounded-2xl p-5"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
              <s.icon className="h-5 w-5" />
            </div>
            <span className="font-medium">{s.title}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
