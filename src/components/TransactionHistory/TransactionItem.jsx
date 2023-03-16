import style from './TransactionHistory.module.css';

export const TransactionItem = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <td className={style.type}>{type}</td>
      <td className={style.amount}>{amount}</td>
      <td>{currency}</td>
    </>
  );
};
