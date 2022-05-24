import {IconButton, Menu, MenuItem} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import React, {Dispatch, SetStateAction} from "react";
import {useTranslation} from "react-i18next";
import Email from "./Email";
import {useNavigate} from "react-router-dom";
import {deleteUser} from "../helper/dataChanges";

interface AppNavBarProps {
  userId: number;
}

const AppNavBar = ({userId}: AppNavBarProps) => {
  const {t} = useTranslation();
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/");
          }}
        >
          {" "}
          {t("navbar.main.message")}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            if (userId) deleteUser(userId);
            navigate("/about");
          }}
        >
          {t("navbar.about.message")}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            console.log("user ID", userId);
            if (userId) deleteUser(userId);
            navigate("/users");
          }}
        >
          {t("navbar.users.message")}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            if (userId) deleteUser(userId);
            navigate("/documentation");
          }}
        >
          {t("navbar.doc.message")}
        </MenuItem>
        <Email />
      </Menu>
    </>
  );
};

export default AppNavBar;
