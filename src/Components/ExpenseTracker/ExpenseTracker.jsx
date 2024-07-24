/* eslint-disable react/prop-types */
import styles from "./ExpenseTracker.module.css";

export default function ExpenseTracker() {
  return (
    <>
      {/* Main component for tracking expenses */}
      <ExpenseForm />
    </>
  );
}

function ExpenseForm() {
  return (
    <form className={styles.form}>
      <div className={styles.div}>
        <label htmlFor="expenseName" className={styles.label}>
          Expense Name:
        </label>
        <input
          type="text"
          id="expenseName"
          name="expenseName"
          className={styles.input}
        />
      </div>
      <div className={styles.div}>
        <label htmlFor="amount" className={styles.label}>
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.button}>
        Add Expense
      </button>
    </form>
  );
}
