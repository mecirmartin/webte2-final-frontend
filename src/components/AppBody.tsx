import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import AppAnimation from "./AppAnimation";
import AppCalculation from "./AppCalculation";
import AppForm from "./AppForm";
import AppGraph from "./AppGraph";
import AppSwitch from "./AppSwitch";

// interface Visible = "graph" | "anime" | "both"
//   visibleElement: "graph" | "anime" | "both";
// }

const AppBody = () => {
  const [visibleElement, setvisibleElement] = useState<
    "graph" | "anime" | "both" | "none"
  >("both");

  const {t} = useTranslation();

  const [open, setOpen] = React.useState(true);
  const [wheelR, setWheelR] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return open ? (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>{t("dialog.message")}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          type="number"
          fullWidth
          variant="standard"
          value={wheelR}
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
      <Grid width="80%">
        {visibleElement === "graph" && <AppGraph />}
        {visibleElement === "anime" && (
          <AppAnimation wheel_r={wheelR ? wheelR : 1} />
        )}
        {visibleElement === "both" && (
          <Grid>
            <AppGraph />
            <AppAnimation wheel_r={wheelR ? wheelR : 1} />
          </Grid>
        )}
      </Grid>
      <AppSwitch setVisibleElement={setvisibleElement}></AppSwitch>
      {/* <AppForm /> */}
      <AppCalculation />
      <Button onClick={handleClickOpen}>{t("dialog.message.reopen")}</Button>
    </Grid>
  );
};

export default AppBody;
