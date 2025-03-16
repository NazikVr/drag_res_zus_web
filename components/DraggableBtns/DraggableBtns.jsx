import Button from "../Button/Button"

const DraggableBtns = ({ newCard, resetCards }) => {


  return (
    <>
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

export default DraggableBtns;
