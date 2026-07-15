import Navbar from "./Navbar.jsx";
import Footer from './Footer.jsx';
import Hero from './Hero.jsx';
import Gallery from './Gallery.jsx';

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
}

