
import "./App.css"
import About from "./components/about/about.component";
import MainSection from './components/main-section/main-section.component';
import Statistics from "./components/statistic/statistic.component";

const App = () => {

    return (
      <>
        <MainSection />
        <Statistics/>
        <About/>
      </>
    )
};

export default App;