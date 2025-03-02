import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((prevState) => !prevState);

    if (isEditing) {
      onChangeName(symbol, newName);
    }
  }

  let playerName = <span className="player-name">{newName}</span>;

  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Save'}</button>
    </li>
  );
}
