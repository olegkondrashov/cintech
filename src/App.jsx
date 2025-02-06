import { useRef,  useState, useEffect } from "react";


import About from "./components/about/about.component";
import Footer from "./components/footer/footer.component";
import MainSection from './components/main-section/main-section.component';
import Services from "./components/services/services.component";
import Statistics from "./components/statistic/statistic.component";
import "./App.css"
import Contacts from "./components/contacts/contacts.component";
import Partners from "./components/partners/partners";
import MicrosoftSolutions from "./components/microsoft-solutions/microsoft-solutions.component";
import ArrowIcon from "./components/arrow-back/arrow-back.component";

const App = () => {

  const aboutRef = useRef(null);
  const footerRef = useRef(null);

  // This state controls whether the arrow is displayed
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current || !footerRef.current) return;

      // Get the vertical offset of About and Footer
      const aboutTop = aboutRef.current.offsetTop;
      const footerTop = footerRef.current.offsetTop;
      // Current scroll from top of the page
      const currentScroll = window.scrollY + window.innerHeight;

      // Show arrow if we've scrolled beyond the top of About,
      // but have not yet reached the top of Footer.
      if (currentScroll > aboutTop && currentScroll < footerTop) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    // Run once on mount, to set initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
      <main>
        <MainSection />

        <Statistics/>
        {/* We pass the ref to About so we know when it's on screen */}
        <About aboutRef={aboutRef} />
        


        <MicrosoftSolutions/>
        <Partners/>
        <Services />


        <Contacts/>
        <Footer  footerRef={footerRef} />

        {/* Our arrow is rendered exactly ONCE, but only visible if showArrow  === true */}
        {showArrow  && (
          <div className="fixed bottom-5 right-5 cursor-pointer z-[9999]" onClick={() => window.scrollTo(0, 0)}>
            <ArrowIcon rotateDeg={-90} />
          </div>
        )}
      </main>
    )
};

export default App;