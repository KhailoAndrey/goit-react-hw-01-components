import PropTypes from 'prop-types';

import TransactionItem from './TransactionItem';
import style from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transactionHistory}>
      <thead className={style.head}>
        <tr>
          <th className={style.cell}>Type</th>
          <th className={style.cell}>Amount</th>
          <th className={style.cell}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id} className={style.row}>
            <TransactionItem item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
