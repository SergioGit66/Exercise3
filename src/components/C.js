import Button from "./Button";

const C = (props) => {
    const { value } = props;
    return (
        <div className="ComponentC" >
            <h1>Component C</h1>
            
            <Button value={value}/>
        </div>
    )
}

export default C;