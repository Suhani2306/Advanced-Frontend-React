import React from "react";
import Card from "./Card";
import users from "../users";

function App() {
  return (
    <div className="flex-container">
      {users.map((item) => {
        return (
          <Card
            key={item.id}
            name={item.name}
            email={item.email}
            phone={item.phone}
            // company={item.company.name}
            website={item.website}
            // address={item.address}
          />
        );
      })}
    </div>
  );
}

export default App;
