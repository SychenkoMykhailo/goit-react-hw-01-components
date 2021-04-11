import React from "react";
import user from "../user.json"; // User data
import Profile from "./Profile"; // Profile component
import statisticalData from "../statistical-data.json"; // Statistics data
import Statistics from "./Statistics"; // Statistics component
import friends from "../friends.json"; // Friends data
import FriendList from "./FriendList"; // FriendList component
import transactions from "../transactions.json"; // TransactionHistory data
import TransactionHistory from "./TransactionHistory"; // TransactionHistory component
import "./App.css"; // Default CSS
function App() {
  return (
    <div className="maincontainer">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
