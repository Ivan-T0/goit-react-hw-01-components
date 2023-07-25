import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import FriendList from './FriendList/FriendList'
import TransactionHistory from './TransactionHistory/TransactionHistory'
import PropTypes from "prop-types";
import user from "./data/user.json"
import data from './data/data.json'
import transactions from './data/transactions.json'
import friends from './data/friends.json'

const App = () => {
    return (
      <div>
        <Profile
  key={user.name}
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
        <Statistics data={data} />
        
        <FriendList friends={friends}
          key={friends.id}
          avatar={friends.avatar}
          name={friends.name}
          isOnline={friends.isOnline}
        />;
        <TransactionHistory items={transactions}
          key={transactions.id}
          type={transactions.type}
          amount={transactions.amount}
          currency={transactions.currency}
        />;
    </div>
    
   
  );
};
export default App
Profile.propTypes = {
  id: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object
  
}
Statistics.propTypes = {
  label: PropTypes.string
}
FriendList.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline:PropTypes.bool
}
TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,

}
FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id:PropTypes.number,
}
