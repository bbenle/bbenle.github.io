import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <div>
      <NavigationBar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
