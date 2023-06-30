import Button from "./Button";

const C = (props) => {
    const { buttonX } = props;
    return (
        <div className="ComponentC" >
            <h1>Component C</h1>

            <Button />
        </div>
    )
}

export default C;