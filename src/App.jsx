
import About from "./components/about/about.component";
import Footer from "./components/footer/footer.component";
import MainSection from './components/main-section/main-section.component';
import Services from "./components/services/services.component";
import Statistics from "./components/statistic/statistic.component";
import "./App.css"
import Contacts from "./components/contacts/contacts.component";
import Partners from "./components/partners/partners";
import MicrosoftSolutions from "./components/microsoft-solutions/microsoft-solutions.component";

const App = () => {

    return (
      <>
        <MainSection />

        <Statistics/>
        <About/>


        <MicrosoftSolutions/>
        <Partners/>
        <Services/>


        <Contacts/>
        <Footer/>
      </>
    )
};

export default App;