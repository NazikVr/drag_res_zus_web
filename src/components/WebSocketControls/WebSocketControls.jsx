import Button from "../Button/Button";
import scss from "./WebSocketControls.module.scss"

const WebSocketControls = ({ connectWebSocket, closeWebSocket, resetList }) => {
    return (
        <div className={scss.btnsWrapper}>
            <Button action={connectWebSocket} text={"Start"} color={"green"}/>
            <Button action={resetList} text={"Reset"} color={"yellow"}/>
            <Button action={closeWebSocket} text={"Stop"} color={"red"} />
        </div>
    );
};

export default WebSocketControls;
