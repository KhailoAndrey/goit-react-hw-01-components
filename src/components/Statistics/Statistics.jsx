import style from './Statistics.module.css';

export const Statistics = ({ data: { label, percentage } }) => {
  return (
    <>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </>
  );
};
