import {Grid} from "@mui/material";
import React, {useEffect, useState} from "react";
import {getUsers} from "../helper/usersData";
import Graph from "./Graph";
import Animation from "./Animation";
import User from "./User";

interface UserProps {
  id: number;
  name: string;
  r: number;
  inti_values: Array<number>;
  created_at: string;
  updated_at: string;
}

const AppUsers = () => {
  const [users, setUsers] = useState<Array<UserProps>>([]);

  useEffect(() => {
    getUsers().then((fetchData) => setUsers(fetchData));
  }, []);

  useEffect(() => {
    setInterval(() => {
      getUsers().then((fetchData) => setUsers(fetchData));
      console.log("call");
    }, 3000);
  }, []);

  console.log(users);
  // return users[0] && <User user={users[0]}></User>;
  return (
    <Grid>
      {users.map((user) => (
        <User user={user}></User>
      ))}
    </Grid>
  );
};

export default AppUsers;
