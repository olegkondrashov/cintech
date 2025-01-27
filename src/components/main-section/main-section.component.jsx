import ScrollDownArrow from "../arrrow-down/arrow-down.component";
import BgDark from "../bg-dark/bg-dark.component";
import Navigation from "../navigation/navigation.component";
import Title from '../title/title.component';
import bg from './server.jpg'

const MainSection = () => {
    return (
        <main className='main scroll-smooth text-slate-300 flex flex-col justify-between h-screen relative md:px-10 lg:px-20 z-0'
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'}}
        >
            <BgDark/>
            <Navigation/>
            <Title/>
            <ScrollDownArrow link={"#statistics"}/>
        </main>
    )
}

export default MainSection;