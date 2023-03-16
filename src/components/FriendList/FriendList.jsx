import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={style.item}>
          <FriendListItem friends={friend} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
