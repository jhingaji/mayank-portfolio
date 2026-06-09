import { Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <div className="font-display text-lg font-bold text-gradient">Mayank Sharma</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Building the future with AI, code, and creativity.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/mayank-12sharma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass grid h-10 w-10 place-items-center rounded-xl transition-all hover:text-primary hover:shadow-[0_0_25px_oklch(0.78_0.2_235/0.5)]"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:ryu.satoshi12@gmail.com"
              aria-label="Email"
              className="glass grid h-10 w-10 place-items-center rounded-xl transition-all hover:text-primary hover:shadow-[0_0_25px_oklch(0.78_0.2_235/0.5)]"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="tel:+919468632164"
              aria-label="Phone"
              className="glass grid h-10 w-10 place-items-center rounded-xl transition-all hover:text-primary hover:shadow-[0_0_25px_oklch(0.78_0.2_235/0.5)]"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Mayank Sharma. All rights reserved.</span>
          <span className="font-mono">Designed & built with intent.</span>
        </div>
      </div>
    </footer>
  );
}
