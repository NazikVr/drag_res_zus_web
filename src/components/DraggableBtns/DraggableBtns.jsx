import Button from "../Button/Button"
import scss from "./DraggableBtns.module.scss"

const DraggableBtns = ({ newCard, resetCards }) => {


  return (
    <>
    <aside className={scss.btnsWrapper}>
      <Button
        action={() => {
          newCard();
        }}
        text={"Add new card!"}
        color={"green"}
      />
      <Button
        action={() => {
          resetCards();
        }}
        text={"Reset All!"}
        color={"red"}
      />
      </aside>
    </>
  );
};

export default DraggableBtns;
