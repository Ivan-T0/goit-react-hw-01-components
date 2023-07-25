// import friends from "../data/friends.json"
import cl from '../StyledComponentsList/CardProfileModule.module.css'
const FriendList = ({friends}) => {
    return (
        <ul className={cl.friendlist}>
      {friends.map((friend) => (
        <li className={cl.item} key={friend.id}>
          <span className={`${cl.status} ${friend.isOnline ? cl.green : cl.red}`}>
            {friend.isOnline ? "Online" : "Offline"}
          </span>
          <img className={cl.avatar} src={friend.avatar} alt={friend.name} width="48" />
          <p className={cl.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
    );
};
export default FriendList