import Container from '../Container';
import Profile from '../Profile';
import Statistic from '../Statistics';
import FriendList from '../FriendList';
import TransactionHistory from '../TransactionHistory';
import user from '../../data/user.json';
import statisticalData from '../../data/data';
import friends from '../../data/friends';
import transactions from '../../data/transactions';

function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user?.avatar}
        stats={user?.stats}
      />

      <Statistic title="Upload stats" stats={statisticalData} />

      <Statistic stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
