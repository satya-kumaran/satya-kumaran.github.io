import { About } from './components/About';
import { F1Game } from './components/F1Game';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { IntoTabs } from './components/IntoTabs';
import { Nav } from './components/Nav';
import { Travel } from './components/Travel';

function App() {
  return (
    <>
      <Nav />
      <main id="top" className="relative z-10">
        <Hero />
        <About />
        <IntoTabs />
        <Travel />
        <F1Game />
      </main>
      <Footer />
    </>
  );
}

export default App;
