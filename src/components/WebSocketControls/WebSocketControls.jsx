import React from "react";
import Button from "../Button/Button";

const WebSocketControls = ({ connectWebSocket, closeWebSocket, resetList }) => {
    return (
        <div>
            <Button action={connectWebSocket} text={"Start"}/>
            <Button action={resetList} text={"Reset"} />
            <Button action={closeWebSocket} text={"Stop"} />
        </div>
    );
};

export default WebSocketControls;
