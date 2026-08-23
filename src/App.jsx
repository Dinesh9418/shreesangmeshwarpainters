import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import ConsultCTA from "./components/ConsultCTA.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Work from "./components/Work.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <ConsultCTA />
        <Blog />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
