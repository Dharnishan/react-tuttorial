import { useState } from "react";

function Favouritecolor(){

    // let color = "Blue";
    useState("Blue");
    const [color, setColor] = useState("Blue");
    return(
        <>
        <h1>My Favouritecolor is {color}</h1>
        <button onClick={() => {setColor('Red')}}>Change Color</button>
        </>
    

    );
}

export default Favouritecolor;