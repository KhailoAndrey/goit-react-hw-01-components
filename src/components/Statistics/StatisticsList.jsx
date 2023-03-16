import { Statistics } from './Statistics';
import style from './Statistics.module.css';

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const StatisticList = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statList}>
        {stats.map(stat => (
          <li
            className={style.item}
            key={stat.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <Statistics data={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
};
