import { Profile } from './Profile/Profile';
import { StatisticList } from './Statistics/StatisticsList';
import user from '../data/user.json';
import data from '../data/data.json'

export const App = () => {
  return (
    <div>
      <Profile profile={user} />
      <StatisticList title="Upload stats" stats={data} />
    </div>
  );
};


