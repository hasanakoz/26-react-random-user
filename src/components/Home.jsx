import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const url = "https://randomuser.me/api/";
  const [user, setUser] = useState("");

  const getData = async () => {
    const { data } = await axios(url);
    setUser(data.results);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        <Card user={user} />
      </div>
      <div className="button">
        <button onClick={() => getData()}> Random User</button>
      </div>
    </>
  );
};

export default Home;
