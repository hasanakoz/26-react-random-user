import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const url = "https://randomuser.me/api/";
  const [user, setUser] = useState("");

  const getData = async () => {
    const { data } = await axios(url);
    console.log(data.results);
    setUser(data.results);
  };
  useEffect(() => {
    getData();
  }, []);
  //   console.log(data.results);
  return (
    <>
      <div>
        <Card user={user} />
      </div>
      <button onClick={() => getData()}> Random User</button>
    </>
  );
};

export default Home;
