// import { useState } from 'react';

// const initialGameBoard = Array(9).fill(null);
// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];
export default function GameBoard({ onSelectSquare, board }) {
  // let gameBoard = initialGameBoard;

  // for (const turn of turns) {
  //   const { square, player } = turn;
  //   const { row, col } = square;

  //   if (gameBoard[row][col] !== null) continue;
  //   gameBoard[row][col] = player;
  // }

  // export default function GameBoard({ onSelectSquare, activePlayer }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleCellClick(rowIndex, cellIndex) {
  //   // const newGameBoard = [...gameBoard.map((innerArray) => [...innerArray])];
  //   // if (newGameBoard[rowIndex][cellIndex] !== null) return;
  //   // newGameBoard[rowIndex][cellIndex] = activePlayer;
  //   // setGameBoard(newGameBoard);

  //   setGameBoard((prevGameBoard) => {
  //     const newGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
  //     if (newGameBoard[rowIndex][cellIndex] !== null) return newGameBoard;
  //     newGameBoard[rowIndex][cellIndex] = activePlayer;
  //     return newGameBoard;
  //   })

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {/* {gameBoard.map((PlayerSymbol, index) => (
        <li key={index} className="cell">
          <button onClick={() => handleCellClick(index)}>{PlayerSymbol}</button>
        </li>
      ))} */}
      {board.map((row, rowIndex) =>
        row.map((PlayerSymbol, cellIndex) => (
          <li key={`${rowIndex}-${cellIndex}`} className="cell">
            {/* <button onClick={() => handleCellClick(rowIndex, cellIndex)}> */}
            <button
              onClick={() => onSelectSquare(rowIndex, cellIndex)}
              disabled={PlayerSymbol !== null}
            >
              {PlayerSymbol}
            </button>
          </li>
        ))
      )}
    </ol>
  );
}
