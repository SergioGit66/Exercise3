import { useState } from "react";

const Button = () => {
    const [numberX, setNumberX] = useState(0);

    const countX = () => {
        setNumberX(numberX => numberX + 1);

    };


    return (
        <div className="button">
            <p>X = {numberX}  </p>
            <button onClick={countX}> X++ </button>
        </div>
    )
}

export default Button;
