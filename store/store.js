import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";

const DEFAULT_CARDS = [
    {
      id: nanoid(),
      zIndex: 1,
      posX: 50,
      posY: 50,
      width: 300,
      height: 100,
      translatePosX: 0,
      translatePosY: 0,
    },
    {
      id: nanoid(),
      zIndex: 1,
      posX: 200,
      posY: 50,
      width: 300,
      height: 100,
      translatePosX: 0,
      translatePosY: 0,
    },
    {
      id: nanoid(),
      zIndex: 1,
      posX: 350,
      posY: 50,
      width: 300,
      height: 100,
      translatePosX: 0,
      translatePosY: 0,
    },
    {
      id: nanoid(),
      zIndex: 1,
      posX: 500,
      posY: 50,
      width: 300,
      height: 100,
      translatePosX: 0,
      translatePosY: 0,
    },
    {
      id: nanoid(),
      zIndex: 1,
      posX: 650,
      posY: 50,
      width: 300,
      height: 100,
      translatePosX: 0,
      translatePosY: 0,
    },
  ]

const useStore = create(
    persist(
        (set, get) => ({
            cards: JSON.parse(localStorage.getItem("cards-storage"))?.state?.cards || [...DEFAULT_CARDS],

            handleClick: (id) => {
                set((state) => {
                    const maxZ = Math.max(...state.cards.map((card) => card.zIndex)) + 1;

                    return {
                        cards: state.cards.map((card) => card.id === id ? { ...card, zIndex: maxZ } : card )
                    }
                })
            },
                
            deleteCard: (id) => {
                set((state) => ({
                  cards: state.cards.filter((card) => card.id !== id),
                }))
            },

            resetCards: () => {
                set({
                    cards: [...DEFAULT_CARDS]
                })
            },

            newCard: () => {
                set((state) => {
                    return {

                    cards: [
                        ...state.cards,
                        { id: nanoid(), zIndex: 1, posX: 100, posY: 100, width: 300, height: 100, translatePosX: 0, translatePosY: 0 }
                    ],
                    }
                })      
            },
            
            resizeCard: (id, width, height) => {
                set((state) => ({
                    cards: state.cards.map((card) =>
                        card.id === id ? { ...card, width, height } : card
                    )
                }))
            },
            
            changeTransPos: (() => {
                let animationFrameId = null;
              
                return (id, posX, posY) => {
                  if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                  }
              
                  animationFrameId = requestAnimationFrame(() => {
                    set((state) => ({
                      cards: state.cards.map((card) =>
                        card.id === id ? { ...card, translatePosX: posX, translatePosY: posY } : card
                      )
                    }));
                  });
                };
              })(),
                      
        }), 
        {
            name: "cards-storage",
            getStorage: () => localStorage,
        }
    )
);

export default useStore;