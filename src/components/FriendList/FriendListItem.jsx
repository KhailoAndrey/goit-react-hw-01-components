import style from './FriendListItem.module.css';

export const FriendListitem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <>
      <span className={style[`${isOnline}`]}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </>
  );
};
