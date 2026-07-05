import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Footer from './Footer.jsx';
import Hero from './Hero.jsx';
import Gallery from './Gallery.jsx'
// TODO: Refactor Hero Section, Footer.
export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.isIntersecting);
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  const elements = document.querySelectorAll(".reveal");
  
  elements.forEach((el) => {
    observer.observe(el);
  });

  return () => {
    elements.forEach((el) => observer.unobserve(el));
    observer.disconnect();
  };

  }, [])
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
}
