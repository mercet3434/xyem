import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";

function Main() {
  return (
    <main>
      <section id="services" data-aos="fade-up">
        <Services />
      </section>

      <section id="about-scroll" data-aos="fade-up" data-aos-delay="120">
        <About />
      </section>

      <section id="contact" data-aos="fade-up" data-aos-delay="240">
        <Contact />
      </section>
    </main>
  );
}

export default Main;
