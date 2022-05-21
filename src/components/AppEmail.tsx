import {Alert, AlertTitle, Backdrop, Button} from "@mui/material";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {sendEmail} from "../helper/dataChanges";

const AppEmail = () => {
  const {t} = useTranslation();

  const [open, setOpen] = useState<Boolean>(false);

  const handleClick = () => {
    sendEmail();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return open ? (
    <Backdrop
      sx={{color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1}}
      open={true}
      onClick={handleClose}
    >
      <Alert severity="success">
        <AlertTitle>{t("email.successTitle.message")}</AlertTitle>
        {t("email.success.message")}
      </Alert>
    </Backdrop>
  ) : (
    <Button onClick={handleClick}>{t("email.send.message")}</Button>
  );
};

export default AppEmail;
