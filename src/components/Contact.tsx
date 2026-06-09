import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Mail, Phone, Linkedin, Send, MapPin } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`);
    window.location.href = `mailto:ryu.satoshi12@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Opening your email client…");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  const channels = [
    { icon: Mail, label: "Email", value: "ryu.satoshi12@gmail.com", href: "mailto:ryu.satoshi12@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 94686 32164", href: "tel:+919468632164" },
    { icon: Linkedin, label: "LinkedIn", value: "/in/mayank-12sharma", href: "https://www.linkedin.com/in/mayank-12sharma" },
    { icon: MapPin, label: "Location", value: "Jaipur, Rajasthan, India", href: "#" },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Let's build something memorable."
      subtitle="Freelance projects, collaborations, or just a chat — my inbox is open."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-2">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass glass-hover flex items-center gap-4 rounded-2xl p-5"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </div>
                <div className="truncate text-sm font-medium">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass glow-border rounded-2xl p-7 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Your name" placeholder="Jane Doe" />
            <Field name="email" type="email" label="Email" placeholder="jane@company.com" />
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              maxLength={1000}
              placeholder="Tell me about your project…"
              className="w-full resize-none rounded-xl border border-border bg-card/40 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_oklch(0.78_0.2_235/0.4)] transition-all hover:shadow-[0_0_50px_oklch(0.78_0.2_235/0.7)] disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send message"}
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        maxLength={255}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-card/40 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
