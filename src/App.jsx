
import About from "./components/about/about.component";
import Footer from "./components/footer/footer.component";
import MainSection from './components/main-section/main-section.component';
import Services from "./components/services/services.component";
import Statistics from "./components/statistic/statistic.component";
import "./App.css"

const App = () => {

    return (
      <>
        <MainSection />
        <Statistics/>
        <About/>
        <Services/>
        <Footer/>
      </>
    )
};

export default App;