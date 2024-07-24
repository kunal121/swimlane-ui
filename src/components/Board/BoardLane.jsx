import React, { useContext } from "react";
import { Block } from "../Block";
import { BoardContext } from "../../context/BoardContext";
import "./board.css";

export const BoardLane = ({ boardConfig, onDragOver, onDrop, onCardDrag }) => {
  const { setBoardConfiguration } = useContext(BoardContext);
  const { blockList, id: boardId } = boardConfig;
  return (
    <div
      className="board-lane-container"
      onDragOver={(event) => onDragOver(event)}
      onDrop={(event) => onDrop(event, boardId)}
    >
      <h2 className="board-lane-heading">{boardConfig.label}</h2>
      <div className="board-lane">
        {blockList.map((block) => (
          <Block
            blockDetails={block}
            key={block.id}
            onCardDrag={onCardDrag}
            boardId={boardId}
            setBoardConfiguration={setBoardConfiguration}
          />
        ))}
      </div>
    </div>
  );
};
