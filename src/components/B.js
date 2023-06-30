import C from "./C";

const B = (props) => {
const {valueX} = props;
    return (
        <div className="ComponentB" >
            <h1>Componet B</h1>
            <p>X = {valueX} </p>
            <C/>
        </div>
    )
}

export default B;