import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";
function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.stat_list}>
        {stats.map((stat) => (
          <li key={stat.id} className={styles.item}>
            <span className={styles.label}>{stat.label}: </span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
// PropTypes
Statistics.prototypes = {
  stats: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
export default Statistics;
