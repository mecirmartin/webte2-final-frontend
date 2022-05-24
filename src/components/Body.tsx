import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {createUser} from "../helper/usersData";
import Animation from "./Animation";
import Calculation from "./Calculation";
import Graph from "./Graph";
import Switch from "./Switch";

const AppBody = (setUserId: any) => {
  const [visibleElement, setvisibleElement] = useState<
    "graph" | "anime" | "both" | "none"
  >("both");

  const {t} = useTranslation();

  const [open, setOpen] = React.useState<Boolean>(true);
  const [wheelR, setWheelR] = React.useState<number>(1);
  const [initValues] = React.useState<Array<number>>([0, 0, 0, 0]);
  const [userName, setUserName] = useState<string>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (userName !== "") {
      createUser(userName, wheelR, initValues).then((fetchData) => {
        setUserId(fetchData.id);
        console.log(fetchData);
      });
    }
    setOpen(false);
  };

  const handleChange = (e: any) => {
    if (e?.target?.value > 1) e.target.value = 1;
    if (e?.target?.value < -1) e.target.value = -1;
    setWheelR(e?.target?.value);
  };
  const handleUserNameChange = (e: any) => {
    setUserName(e?.target?.value);
  };

  return open ? (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>{t("dialog.message")}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          label={t("dialog.message.radius")}
          margin="dense"
          type="number"
          fullWidth
          variant="standard"
          value={wheelR}
          onChange={handleChange}
        />
        <TextField
          label={t("dialog.message.name")}
          margin="dense"
          id="name"
          fullWidth
          variant="outlined"
          value={userName}
          onChange={handleUserNameChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t("dialog.message.cancel")}</Button>
        <Button onClick={handleClose}>{t("dialog.message.submit")}</Button>
      </DialogActions>
    </Dialog>
  ) : (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <h2>{userName}</h2>
      <Grid width="80%">
        {visibleElement === "graph" && (
          <Graph wheel_r={wheelR} init={initValues} />
        )}
        {visibleElement === "anime" && (
          <Animation wheel_r={wheelR ? wheelR : 1} init={[0, 0, 0, 0]} />
        )}
        {visibleElement === "both" && (
          <Grid>
            <Graph wheel_r={wheelR} init={initValues} />
            <Animation wheel_r={wheelR ? wheelR : 1} init={[0, 0, 0, 0]} />
          </Grid>
        )}
      </Grid>
      <Switch setVisibleElement={setvisibleElement}></Switch>
      {/* <AppForm /> */}
      <Calculation />

      <Button onClick={handleClickOpen}>{t("dialog.message.reopen")}</Button>
    </Grid>
  );
};

export default AppBody;
