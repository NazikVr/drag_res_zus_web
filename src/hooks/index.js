import { useState, useEffect } from "react";

const useWebSocket = () => {
    const [transactions, setTransactions] = useState([]);
    const [socket, setSocket] = useState(null);

    // Функція підключення до WebSocket
    const connectWebSocket = () => {
        if (socket) return; // Уникаємо повторного підключення

        const newSocket = new WebSocket("wss://ws.blockchain.info/inv");

        newSocket.onopen = () => {
            console.log("WebSocket з'єднано");
            newSocket.send(JSON.stringify({ op: "unconfirmed_sub" })); // Підписка на транзакції
        };

        newSocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.op === "utx") {
                console.log("Отримано транзакцію:", data.x);
                setTransactions((prev) => [data.x, ...prev.slice(0, 9)]); // Оновлення списку (10 останніх)
            }
        };

        newSocket.onerror = (error) => console.error("WebSocket помилка:", error);
        newSocket.onclose = () => console.log("WebSocket закрито");

        setSocket(newSocket);
    };

    const closeWebSocket = () => {
        if (socket) {
            socket.close();
            console.log("З'єднання розірвано");
        }
        setSocket(null);
    };

    
    useEffect(() => {
        return () => closeWebSocket();
    }, []);

    return { transactions, connectWebSocket, closeWebSocket, setTransactions };
};

export default useWebSocket;
