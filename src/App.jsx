import React, { useState, createContext } from 'react';

import Navigation from "./components/navigation/navigation.component";
import MainBg from './components/main-bg/main-bg.component';
import Title from './components/title/title.component';



export const ThemeContext = createContext();


const App = () => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
      setIsDark(prev => !prev);
    };

    const appStyle = {
      backgroundColor: isDark ? '#000' : '#fff',
      color: isDark ? '#fff' : '#16652A',
      height: '100vh',
    };

    return (
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <main className='relative md:px-10 lg:px-20 z-0' style={appStyle}>
          <MainBg />
          <Navigation isDark={isDark} className="z-10 text-green-800"/>
          <Title/>
          <div className='flex flex-col items-center absolute bottom-5 left-2/4 -translate-x-1/2'>
            <a href="tel:+495323987427">Tel: 05323/987427</a> 
            <a href="mailto:info@cintech.de">E-Mail: info@cintech.de</a> 
            <a href="https://maps.app.goo.gl/KFE247RZnst96SwV6">Gerhard-Rauschenbach-Straße 12 38678 Clausthal-Zellerfeld</a> 
          </div>
        </main>
    </ThemeContext.Provider>
    )
};

export default App;