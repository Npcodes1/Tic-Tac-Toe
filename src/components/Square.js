import "./Square.css";

const Square = ({value, onSquareClick}) => {
    return (
        <button class="square" name="square" onClick={onSquareClick}>{value}</button>
    );
}

export default Square;




