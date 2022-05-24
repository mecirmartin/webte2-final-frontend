import {Dispatch, SetStateAction, useState} from "react";
import {
  Box,
  AppBar,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import {useTranslation} from "react-i18next";
import NavBar from "./NavBar";

interface Props {
  message: string;
}

const AppHeader = ({message}: Props) => {
  const {t, i18n} = useTranslation();

  const [selectedValue, setselectedValue] = useState("en");

  const theme = createTheme({
    palette: {
      primary: {
        main: "#A6D1C9",
      },
      secondary: {
        main: "#292B29",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{flexGrow: 1}} color="#A6D1C9">
        <AppBar position="static">
          <Toolbar>
            <NavBar></NavBar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              {t(message)}
            </Typography>
            <ToggleButtonGroup
              value={selectedValue}
              aria-label="text formatting"
            >
              <ToggleButton
                value="sk"
                onClick={() => {
                  i18n.changeLanguage("sk");
                  setselectedValue("sk");
                }}
              >
                SK
              </ToggleButton>
              <ToggleButton
                value="en"
                onClick={() => {
                  i18n.changeLanguage("en");
                  setselectedValue("en");
                }}
              >
                EN
              </ToggleButton>
            </ToggleButtonGroup>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default AppHeader;
