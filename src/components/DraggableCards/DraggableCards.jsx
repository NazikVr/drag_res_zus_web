"use client";

import DraggableCard from "../DraggableCard/DraggableCard";
import DraggableBtns from "../DraggableBtns/DraggableBtns";
import useStore from "../../store/store";

const DraggableCards = () => {
  const {
    cards,
    handleClick,
    deleteCard,
    resetCards,
    newCard,
    resizeCard,
    changeTransPos,
  } = useStore();

  return (
    <>
        {cards?.map(
          ({
            number,
            id,
            zIndex,
            posX,
            posY,
            width,
            height,
            translatePosX,
            translatePosY,
          }) => (
            <DraggableCard
              number={number}
              key={id}
              resizeCard={resizeCard}
              changeTransPos={changeTransPos}
              zIndex={zIndex}
              posX={posX}
              posY={posY}
              cardWidth={width}
              cardHeight={height}
              cardId={id}
              translatePosX={translatePosX}
              translatePosY={translatePosY}
              onClick={() => {
                handleClick(id);
              }}
              deleteCard={() => {
                deleteCard(id);
              }}
            />
          )
        )}

        <DraggableBtns resetCards={resetCards} newCard={newCard} />
    </>
  );
};

export default DraggableCards;
