import PropTypes from 'prop-types';

import style from './TransactionHistory.module.css';

const TransactionItem = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <td className={style.type}>{type}</td>
      <td className={style.amount}>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

TransactionItem.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionItem;
