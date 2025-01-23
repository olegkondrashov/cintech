
import "./App.css"
import MainSection from './components/main-section/main-section.component';

const App = () => {

    return (
      <>
        <MainSection />
      
        <section id="about" className="h-screen text-center pt-10">
          <h2 className="text-5xl font-black">Über uns</h2>
        </section>
      </>
    )
};

export default App;