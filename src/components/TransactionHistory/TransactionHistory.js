import React from "react";
import styles from "./TransactionHistory.module.css";
import PropTypes from "prop-types";
function TransactionHistory({ items }) {
  return (
    <table className={styles.transaction_history}>
      <thead>
        <tr className={styles.transaction_history_header}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td className={styles.transaction_amount}>{amount}</td>
            <td className={styles.transaction_currency}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
// PropTypes
TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
export default TransactionHistory;
