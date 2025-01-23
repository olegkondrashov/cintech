import ScrollDownArrow from "../arrrow-down/arrow-down.component";
import Navigation from "../navigation/navigation.component";
import Title from '../title/title.component';

const MainSection = () => {
    return (
        <main className='main scroll-smooth text-slate-300 flex flex-col justify-between h-screen relative md:px-10 lg:px-20 z-0'>
            <div className={`z-5 backdrop-blur-sm absolute top-0 left-0 w-full h-full bg-black opacity-20`}></div>
            <Navigation className="z-10 text-green-800"/>
            <Title/>
            <ScrollDownArrow/>
        </main>
    )
}

export default MainSection;