import { useState } from "react";

function Scooter(){
    
    const [color, setColor] = useState("Black");
    const [brand, setBrand] = useState("Yamaha");
    const [year, setYear] = useState("Zx-Ray");
    const [price, setPrice] = useState("$1500");
    const [engine, setEngine] = useState("125cc");

    return (
        <div>
            <h1>My Scooter</h1>
            <p>Color : {color}</p>
            <p>Brand : {brand}</p>
            <p>Year : {year}</p>
            <p>Price : {price}</p>
            <p>Engine : {engine}</p>
        </div>
    );
}

export default Scooter; 