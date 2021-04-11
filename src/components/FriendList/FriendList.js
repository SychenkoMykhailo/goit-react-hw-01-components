import React from "react";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem"; // FriendListItem
function FriendList({ friends }) {
  return (
    <>
      <ul className={styles.friend_list}>
        {friends.map(({ isOnline, avatar, name, id }) => (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        ))}
      </ul>
    </>
  );
}
// PropTypes
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;
