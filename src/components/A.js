import B from "./B";
import { useState } from "react";

const A = (props) => {
    const valueX = 42;
    
    return (
        <div className="ComponentA" >
            <h1>Component A</h1>
            <p>X = {valueX} </p>
            <B value={valueX}/>
        </div>
    )
}

export default A;