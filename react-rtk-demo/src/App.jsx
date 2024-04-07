import React from "react";
import CakeView from "../features/cake/CakeView";
import IcecreamView from "../features/icecream/IcecreamView";
import UsersView from "../features/users/UsersView";

const App = () => {
  return (
    <div>
      <CakeView />
      <IcecreamView />
      <UsersView />
    </div>
  );
};

export default App;
