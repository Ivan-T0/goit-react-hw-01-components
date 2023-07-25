// import data from "./data/data.json"
import cl from '../StyledComponentsList/CardProfileModule.module.css'
const Statistics = ({ label }) => {
  return (
    <section className="statistics">
      <ul className={cl.statlist}>
        <li className={cl.item}>
          <span className="label">{label}</span>
          <span className={cl.percentage}>4%</span>
        </li>
        <li className={cl.item}>
          <span className="label">{label}</span>
          <span className={cl.percentage}>14%</span>
        </li>
        <li className={cl.item}>
          <span className="label">{label}</span>
          <span className={cl.percentage}>41%</span>
        </li> 
        <li className={cl.item}>
          <span className="label">{label}</span>
          <span className={cl.percentage}>12%</span>
        </li>
      </ul>
    </section>
  );
}

export default Statistics;