export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => {
        const { square, player } = turn;
        const { row, col } = square;
        return (
          <li key={`turn-${row}-${col}`}>
            <span>{`Player ${player} placed an ${player} in square ${row}, ${col}`}</span>
          </li>
        );
      })}
    </ol>
  );
}
