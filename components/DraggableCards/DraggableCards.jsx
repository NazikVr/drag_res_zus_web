"use client";


import scss from "./DraggableCards.module.scss";
import DraggableCard from "../DraggableCard/DraggableCard";
import Button from "../Button/Button"
import DraggableBtns from "../DraggableBtns/DraggableBtns"
import useStore from "../../store/store";

const DraggableCards = () => {
  const {
    cards,
    handleClick,
    deleteCard,
    resetCards,
    newCard,
    resizeCard,
    changeTransPos
  } = useStore();

  
  return (
    <>
      {cards?.map(({ id, zIndex, posX, posY, width, height, translatePosX, translatePosY }) => (
        <DraggableCard
          key={id}
          onClick={() => {
            handleClick(id);
          }}
          deleteCard={() => {
            deleteCard(id);
          }}
          resizeCard={resizeCard}
          changeTransPos={changeTransPos}
          zIndex={zIndex}
          x={posX}
          y={posY}
          cardWidth={width}
          cardHeight={height}
          cardId={id}
          translatePosX={translatePosX}
          translatePosY={translatePosY}
        />
      ))}
            <Button
        action={() => {
          newCard();
        }}
        text={"Add new card!"}
      />
      <Button
        action={() => {
          resetCards();
        }}
        text={"Reset All!"}
      />
    </>
  );
};

export default DraggableCards;
