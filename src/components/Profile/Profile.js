import React from "react";
import styles from "./Profile.module.css";
import PropTypes from "prop-types";

function Profile({ name, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
      </div>
      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers: </span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views: </span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes: </span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

// PropTypes
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
// Default Props
const defaultStats = { followers: 0, views: 0, likes: 0 };
Profile.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/1077/1077114.svg",
  name: "Anonim",
  tag: "anonim",
  location: "No location",
  stats: defaultStats,
};

export default Profile;
