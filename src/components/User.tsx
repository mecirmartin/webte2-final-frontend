import {Grid} from "@mui/material";
import React from "react";
import Graph from "./Graph";
import Animation from "./Animation";

interface Props {
  user: UserProps;
}

interface UserProps {
  id: number;
  name: string;
  r: number;
  inti_values: Array<number>;
  created_at: string;
  updated_at: string;
}

const User = ({user}: Props) => {
  return (
    <Grid
      spacing={0}
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <h2>{user.name}</h2>
      <Grid item width="70%">
        <Graph wheel_r={user.r} init={[0, 0, 0, 0]} />
        <Animation wheel_r={user.r} init={[0, 0, 0, 0]} />
      </Grid>
    </Grid>
  );
};

export default User;
