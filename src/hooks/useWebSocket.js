import { useState, useEffect } from "react";

const useWebSocket = () => {
    const [transactions, setTransactions] = useState([]);
    const [socket, setSocket] = useState(null);

   // Функція відкриття зєднання
    const connectWebSocket = () => {
        if (socket) return; 

        const newSocket = new WebSocket("wss://ws.blockchain.info/inv");

        newSocket.onopen = () => {
            console.log("WebSocket з'єднано");
            newSocket.send(JSON.stringify({ op: "unconfirmed_sub" })); 
        };

        newSocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.op === "utx") {
                console.log("Отримано транзакцію:", data.x);
                setTransactions((prev) => [data.x, ...prev]); 
            }
        };

        newSocket.onerror = (error) => console.error("WebSocket помилка:", error);
        newSocket.onclose = () => console.log("WebSocket закрито");

        setSocket(newSocket);
    };

    // Функція завершення зєднання
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
