"use client";

import { useEffect, useState } from "react";
import scss from "./DraggableCards.module.scss";
import DraggableCard from "../DraggableCard/DraggableCard";
import Button from "../Button/Button";

const DraggableCards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      zIndex: 1,
      x: 50,
      y: 50,
      width: 300,
      height: 100,
      translatePosX: 0,
      translatePosY: 0,
    },
    {
      id: 2,
      zIndex: 1,
      x: 200,
      y: 50,
      width: 300,
      height: 100,
      translatePosX: 0,
      translatePosY: 0,
    },
    {
      id: 3,
      zIndex: 1,
      x: 350,
      y: 50,
      width: 300,
      height: 100,
      translatePosX: 0,
      translatePosY: 0,
    },
    {
      id: 4,
      zIndex: 1,
      x: 500,
      y: 50,
      width: 300,
      height: 100,
      translatePosX: 0,
      translatePosY: 0,
    },
    {
      id: 5,
      zIndex: 1,
      x: 650,
      y: 50,
      width: 300,
      height: 100,
      translatePosX: 0,
      translatePosY: 0,
    },
  ]);

  const handleClick = (id) => {
    setCards((prevCards) => {
      const maxZ = Math.max(...prevCards.map((card) => card.zIndex)) + 1;
      return prevCards.map((card) =>
        card.id === id ? { ...card, zIndex: maxZ } : card
      );
    });
  };

  const deleteCard = (id) => {
    setCards(cards.filter((item) => item.id !== id));
  };

  const resetCards = () => {
    setCards([
      {
        id: 1,
        zIndex: 1,
        x: 50,
        y: 50,
        width: 300,
        height: 100,
        translatePosX: 0,
        translatePosY: 0,
      },
      {
        id: 2,
        zIndex: 1,
        x: 200,
        y: 50,
        width: 300,
        height: 100,
        translatePosX: 0,
        translatePosY: 0,
      },
      {
        id: 3,
        zIndex: 1,
        x: 350,
        y: 50,
        width: 300,
        height: 100,
        translatePosX: 0,
        translatePosY: 0,
      },
      {
        id: 4,
        zIndex: 1,
        x: 500,
        y: 50,
        width: 300,
        height: 100,
        translatePosX: 0,
        translatePosY: 0,
      },
      {
        id: 5,
        zIndex: 1,
        x: 650,
        y: 50,
        width: 300,
        height: 100,
        translatePosX: 0,
        translatePosY: 0,
      },
    ]);
  };

  const newCard = () => {
    const newId =
      cards.length > 0 ? Math.max(...cards.map((item) => item.id)) + 1 : 1;
    setCards([
      ...cards,
      { id: newId, zIndex: 1, x: 100, y: 100, width: 300, height: 100, translatePosX: 0, translatePosY: 0, },
    ]);
  };

  const resizeCard = (id, cardWidth, cardHeight) => {
    setCards((prevCards) => {
      return prevCards.map((card) =>
        card.id === id
          ? { ...card, width: cardWidth, height: cardHeight }
          : { ...card }
      );
    });
  };

  const changeTransPos = (id, posX, posY) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? { ...card, translatePosX: posX, translatePosY: posY }
          : card 
      )
    );
  };
  

  return (
    <>
      {cards.map((card) => (
        <DraggableCard
          key={card.id}
          onClick={() => {
            handleClick(card.id);
            console.log(card);
          }}
          deleteCard={() => {
            deleteCard(card.id);
          }}
          resizeCard={resizeCard}
          changeTransPos={changeTransPos}
          zIndex={card.zIndex}
          x={card.x}
          y={card.y}
          cardWidth={card.width}
          cardHeight={card.height}
          cardId={card.id}
          translatePosX={card.translatePosX}
          translatePosY={card.translatePosY}
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
