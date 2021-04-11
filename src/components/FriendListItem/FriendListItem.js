import React from "react";
import styles from "./FriendListItem.module.css";
import PropTypes from "prop-types";
function FriendListItem({ isOnline, avatar, name }) {
  let itemStyle = styles.item;
  if (!isOnline) {
    itemStyle += ` ${styles.status}`;
  }
  return (
    <li className={itemStyle}>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User Avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}
// PropTypes
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
// Default Props
FriendListItem.defaultProps = {
  isOnline: false,
  avatar: "https://www.flaticon.com/svg/static/icons/svg/1077/1077114.svg",
  name: "User not found",
};
export default FriendListItem;
