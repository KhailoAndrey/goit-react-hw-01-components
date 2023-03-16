import PropTypes from 'prop-types';

import style from './FriendListItem.module.css';

const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <>
      <span className={style[`${isOnline}`]}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
