import { Suspense } from "react";
import { About } from "./components/About/about";
import { Contact } from "./components/Contact/contact";
import { Header } from "./components/Header/header";
import { Introduction } from "./components/Introduction/introduction";
import { ParticleLight } from "./components/Particles/particleLight";
import { Projects } from "./components/Projects/projects";
import { Skills } from "./components/Skills/skills";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";
import { Skeleton } from "./components/ui/skeleton";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center w-svw h-svh px-4 md:px-12 lg:px-24 xl:px-52 py-12 gap-4">
            <Skeleton className="w-full h-1/4" />
            <Skeleton className="w-full h-3/4" />
          </div>
        }
      >
        <main className="w-screen min-h-screen flex flex-col">
          <Header />
          <Introduction />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <ParticleLight />
          <Toaster />
        </main>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
