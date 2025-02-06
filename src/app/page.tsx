import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="products">
        <Products />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
