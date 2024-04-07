import React from "react";
import { useSelector } from "react-redux";

const UsersView = () => {
  const { loading, users, error } = useSelector((state) => state.users);

  return <div>Users - {users}</div>;
};

export default UsersView;
