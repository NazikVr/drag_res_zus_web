"use client";

import "react-resizable/css/styles.css";
import { useRef, useState } from "react";
import { ResizableBox } from "react-resizable";
import Draggable from "react-draggable";
import scss from "./DraggableCard.module.scss";

const DraggableCard = ({ deleteCard, onClick, zIndex, posX, posY, cardId, resizeCard, cardWidth, cardHeight, translatePosX, translatePosY, changeTransPos, number }) => {
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
        style={{ width: cardWidth, height: cardHeight, zIndex: zIndex, top: `${posX}px`, left: `${posY}px`  }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerDown={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <ResizableBox
          width={cardWidth}
          height={cardHeight}
          minConstraints={[300, 100]}
          // maxConstraints={[600, 300]}
          axis="both"
          onResizeStop={(e, data) =>
            resizeCard(cardId, data.size.width, data.size.height)
          }
          className={scss.DraggableCard}
        >
          <div className={scss.DraggableCardContent}>
            <div className={scss.DraggableCardDelete} onClick={() => deleteCard()} onTouchStart={() => deleteCard()}>&times;</div>
            <span><span className={scss.DraggableCardNumber}>{number}</span>  Drag me, resize me, delete me, do what you want!</span>
          </div>
        </ResizableBox>
      </div>
    </Draggable>
  );
};

export default DraggableCard;
