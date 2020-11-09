import React from "react";
import ThemeContext from "../context/themecontext";


const  Button = ()=>{
    return (
        <ThemeContext.Consumer>
            {(value)=>{
              return(
                <button onClick={value.changeTheme} className="theme-toggler">
                    Toggle Theme
                </button>
              )  
            }}
        </ThemeContext.Consumer>
    )
}

export default Button;