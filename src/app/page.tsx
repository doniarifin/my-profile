import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-7xl px-6 mx-auto">
        <Hero />
        <About />
        <div className="py-34"></div>
        <Experience />
        <div className="py-34"></div>
        <Projects />
        <div className="py-34"></div>
        <Contact />
        <div className="py-34"></div>
      </main>
      <Footer />
    </>
  );
}
