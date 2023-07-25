// import data from "./data/data.json"
import cl from '../StyledComponentsList/CardProfileModule.module.css'
const Statistics = ({ data }) => {
  return (
    <section className="statistics">
      <ul className={cl.statlist}>
        {data.map(({ id, label, percentage }) => (
          <li className={cl.item} key={id}>
            <span className={cl.label}>{label} </span>
            <span className={cl.percentage}>{percentage } %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;