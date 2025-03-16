"use client";

import "react-resizable/css/styles.css";
import { useRef, useState } from "react";
import { ResizableBox } from "react-resizable";
import Draggable from "react-draggable";
import scss from "./DraggableCard.module.scss";

const DraggableCard = ({ deleteCard, onClick, zIndex, x, y, cardId, resizeCard, cardWidth, cardHeight, translatePosX, translatePosY, changeTransPos }) => {
  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      position={{ x: translatePosX, y: translatePosY }}
      onDrag={(e, data) => changeTransPos(cardId, data.x, data.y)}
      handle=".drag-handle"
      cancel=".react-resizable-handle"
    >
      <div
        ref={nodeRef}
        className={`drag-handle ${scss.drag_handle}`}
        style={{ width: cardWidth, height: cardHeight, zIndex: zIndex, top: `${x}px`, left: `${y}px` }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <ResizableBox
          width={cardWidth}
          height={cardHeight}
          minConstraints={[300, 100]}
          maxConstraints={[400, 300]}
          axis="both"
          onResizeStop={(e, data) =>
            resizeCard(cardId, data.size.width, data.size.height)
          }
          className={scss.DraggableCard}
        >
          <div className={scss.DraggableCardContent}>
            <div className={scss.DraggableCardDelete} onClick={() => deleteCard()}>&times;</div>
            <div>Drag me, resize me, delete me, do what you want!</div>
          </div>
        </ResizableBox>
      </div>
    </Draggable>
  );
};

export default DraggableCard;
