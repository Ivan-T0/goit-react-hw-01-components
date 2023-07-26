import cl from '../StyledComponentsList/CardProfileModule.module.css'
 const Profile = ({ username, tag, location, avatar, stats } ) => {
    
    return (
       
  <div className={cl.description}>
    <img
      src={avatar}
      alt={username}
      className={cl.avatar}
      width="150"
    />
    <p className={cl.name}>{username}</p>
    <p className={cl.tag}>{tag}</p>
          <p className={cl.location}>{location}</p>
          <ul className={cl.stats}>
    <li>
      <span className={cl.label}>Followers </span>
      <span className={cl.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={cl.label}>Views </span>
      <span className={cl.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={cl.label}>Likes </span>
      <span className={cl.quantity}>{stats.likes}</span>
    </li>
  </ul>
  </div>
    )
};
export default Profile
