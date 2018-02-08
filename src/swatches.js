import React from "react";
const changeTheme = (e) =>{
    const root = document.querySelector(':root');
    root.style.setProperty('--theme-color', e.target.style.background);
    root.style.setProperty('--link-color', e.target.style.background);
}
const Swatche = () =>{
    return (
    <div className="swatches">
        <span onClick={(e) => {changeTheme(e)}} style={{background: "#222" }}></span>
        <span onClick={(e) => {changeTheme(e)}} style={{background: "#f76262"}}></span>
        <span onClick={(e) => {changeTheme(e)}} style={{background: "#3e84da"}}></span>
        <span onClick={(e) => {changeTheme(e)}} style={{background: "#ebb332"}}></span>
    </div>
    )
}

export default Swatche;