import { Form } from "./components/form.component";
import axios from "axios";
import { User } from "./components/user.component";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get("http://localhost:4000");
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const onSubmit = async (name, email) => {
    await axios.post("http://localhost:4000", {
      name: name,
      email: email,
    });
  };
  return (
    <div className="App">
      <Form btnValue="Create" onSubmit={onSubmit} />
      <div className="message"></div>
      {data.map((user, i) => {
        return <User key={user.id} name={user.name} email={user.email} />;
      })}
    </div>
  );
}

export default App;
