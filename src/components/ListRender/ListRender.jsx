"use client";

import React, { useState } from "react";
import useWebSocket from "../../hooks/";
import WebSocketControls from "../WebSocketControls/WebSocketControls";
import TransactionList from "../TransactionList/TransactionList";

const ListRender = () => {
    const { transactions, connectWebSocket, closeWebSocket, setTransactions } = useWebSocket();
    const [total, setTotal] = useState(0);
    const resetList = () => {
        setTotal(0)
        setTransactions([]);
    }

    return (
        <>
            <h2>Останні Bitcoin-транзакції</h2>
            <WebSocketControls connectWebSocket={connectWebSocket} closeWebSocket={closeWebSocket} resetList={resetList} />
            <TransactionList transactions={transactions} total={total}  setTotal={setTotal}/>
        </>
    );
};

export default ListRender;
