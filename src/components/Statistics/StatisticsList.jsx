import { Statistics } from './Statistics';

export const StatisticList = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {stats.map(stat => (
          <li class="item" key={stat.id}>
            <Statistics data={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
};
