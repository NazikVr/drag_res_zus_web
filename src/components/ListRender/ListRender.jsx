"use client";

import  { useState } from "react";
import useWebSocket from "../../hooks/useWebSocket";
import WebSocketControls from "../WebSocketControls/WebSocketControls";
import TransactionList from "../TransactionList/TransactionList";
import scss from "./ListRender.module.scss"

const ListRender = () => {
    const { transactions, connectWebSocket, closeWebSocket, setTransactions } = useWebSocket();
    const [total, setTotal] = useState(0);
    const resetList = () => {
        setTotal(0)
        setTransactions([]);
    }

    return (
        <>
            <h1 className={scss.title}>Останні Bitcoin-транзакції</h1>
            <WebSocketControls connectWebSocket={connectWebSocket} closeWebSocket={closeWebSocket} resetList={resetList} />
            <TransactionList transactions={transactions} total={total}  setTotal={setTotal}/>
        </>
    );
};

export default ListRender;
