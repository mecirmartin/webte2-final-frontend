import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {getUsers} from "../helper/usersData";
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

  return (
    <Grid>
      {users.map((user, i) => (
        <User key={i} user={user}></User>
      ))}
    </Grid>
  );
};

export default AppUsers;
