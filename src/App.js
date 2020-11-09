import './App.css';
import NavBar from "./components/navbar";
import Body from "./components/body";
import Footer from "./components/footer";
import React,{useState} from "react";
import ThemeContext from "./context/themecontext";

const themes = {
  light: {
    foreground: "#000",
    background: "#fff"
  },
  dark: {
    foreground: "#fff",
    background: "#000"
  }
};


function App() {
  const [currentTheme,setCurrentTheme] = useState(themes.light);
  const changeTheme = ()=>{
    setCurrentTheme((theme)=>{
      if (theme === themes.light ){
        setCurrentTheme(themes.dark);
      }
      else{
        setCurrentTheme(themes.light);
      }
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <ThemeContext.Provider value={{...currentTheme,changeTheme}}>
          <NavBar />
          <Body />
          <Footer />
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;
