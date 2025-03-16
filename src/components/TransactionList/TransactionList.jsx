"use client"

import { useEffect } from "react";

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
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>FROM</th>
            <th>TO</th>
            <th>SUM (BTC)</th>
          </tr>
        </thead>
        <tbody>
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
              <tr key={tx.hash || index}>
                <td>{fromAddresses}</td>
                <td>{toAddresses}</td>
                <td>{sumBTC.toFixed(8)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TransactionList;
