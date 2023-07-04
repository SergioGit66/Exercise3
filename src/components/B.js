import C from "./C";
import A from "./A";

const B = ({value}) => {
    
    return (
        <div className="ComponentB" >
            <h1>Componet B</h1>
            <p>X = {value} </p>
            <C value={value}/>
        </div>
    )
}

export default B;