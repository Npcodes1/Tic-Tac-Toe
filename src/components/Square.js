import "./Square.css";

const Square = ({value, onSquareClick}) => {
    return (
        <button className="square" name="square" onClick={onSquareClick}>{value}</button>
    );
}

export default Square;




