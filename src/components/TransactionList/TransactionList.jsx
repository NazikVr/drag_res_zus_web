import {  useEffect } from "react";

const TransactionList = ({ transactions, setTotal, total }) => {

  useEffect(() => {
    if (transactions.length === 0) return;

    const lastTx = transactions[0];
    const sumBTC =
      lastTx.out.reduce((sum, output) => sum + output.value, 0) / 100000000;

    setTotal((prevTotal) => prevTotal + sumBTC);
  }, [transactions]);

  return (
    <>
      <h2>Sum = {total.toFixed(8)} BTC</h2>
      <ul>
        {transactions.map((tx, index) => {
          const fromAddresses = tx.inputs
            .map((input) => input.prev_out?.addr || "Невідомий")
            .join(", ");
          const toAddresses = tx.out
            .map((output) => output.addr || "Невідомий")
            .join(", ");
          const sumBTC =
            tx.out.reduce((sum, output) => sum + output.value, 0) / 100000000;

          return (
            <li key={tx.hash || index}>
              <strong>From:</strong> {fromAddresses} <br />
              <strong>To:</strong> {toAddresses} <br />
              <strong>Sum:</strong> {sumBTC} BTC
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TransactionList;
