import React, { useState, createContext } from 'react';
import Navigation from "./components/navigation/navigation.component";
import MainBg from './components/main-bg/main-bg.component';

export const ThemeContext = createContext();


const App = () => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
      setIsDark(prev => !prev);
    };

    const appStyle = {
      backgroundColor: isDark ? '#000' : '#fff',
      color: isDark ? '#fff' : '#000',
      minHeight: '100vh',
    };

    return (
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <main className='relative md:px-10 lg:px-20' style={appStyle}>
          <div>
            <MainBg/>
          </div>
          <Navigation isDark={isDark} />
        </main>
    </ThemeContext.Provider>
    )
};

export default App;