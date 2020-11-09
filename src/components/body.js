import React from "react";
import ThemeContext from "../context/themecontext";

const Body = ()=>{
    return (
        <div>
        <ThemeContext.Consumer>
        {(value)=>{
            return (
                <p className="intro" 
                style={{
                    backgroundColor : value.background,
                    color : value.foreground
                }}>
                    DL, Physics is Shit
                </p>
            );
        }}
        </ThemeContext.Consumer>
        </div>
    );
}

export default Body;