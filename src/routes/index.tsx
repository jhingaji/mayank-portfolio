import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Particles } from "@/components/Particles";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { VideoEditing } from "@/components/VideoEditing";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mayank Sharma — AI Builder & Full Stack Developer" },
      {
        name: "description",
        content:
          "Mayank Sharma — AI builder, full stack developer, video editor & motion graphics artist based in Jaipur. Building AI-powered products and modern web experiences.",
      },
      { property: "og:title", content: "Mayank Sharma — AI Builder & Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Building AI-powered products, scalable web applications and engaging digital experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Particles />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <VideoEditing />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
