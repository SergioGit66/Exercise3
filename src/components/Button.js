import { useState } from "react";

const Button = (props) => {
    const {value} = props;
    const [numberX, setNumberX] = useState(value);

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
