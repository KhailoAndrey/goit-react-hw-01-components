import { FriendListitem } from './FriendListItem';
import style from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(friend => (
        <li id={friend.id} className={style.item}>
          <FriendListitem friends={friend} />
        </li>
      ))}
    </ul>
  );
};
