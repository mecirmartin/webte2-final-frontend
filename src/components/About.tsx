import {Button, Grid} from "@mui/material";
import {useTranslation} from "react-i18next";
import page from "../images/mainPage.png";
import cervena from "../images/cervena.png";
import fialova from "../images/fialova.png";
import modra from "../images/modra.png";
import tyrkisova from "../images/tyrkisova.png";
import zelena from "../images/zelena.png";
import zlta from "../images/zlta.png";

const AppAbout = () => {
  const {t} = useTranslation();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid margin={3}>
        <img src={page} width="50%" />
      </Grid>
      <Grid
        container
        spacing={2}
        width="50%"
        fontWeight="bold"
        fontStyle="italic"
      >
        <Grid item>
          <img src={cervena} width="10%" />
          {t("descrition.num1")}
        </Grid>
        <Grid item>
          <img src={modra} width="10%" />
          {t("descrition.num2")}
        </Grid>
        <Grid item>
          <img src={tyrkisova} width="10%" />
          {t("descrition.num3")}
        </Grid>
        <Grid item>
          <img src={zlta} width="10%" />
          {t("descrition.num4")}
        </Grid>
        <Grid item>
          <img src={zelena} width="10%" />
          {t("descrition.num5")}
        </Grid>
        <Grid item marginBottom={2}>
          <img src={fialova} width="10%" />
          {t("descrition.num6")}
        </Grid>
      </Grid>
      <Grid margin={2}>
        <Button onClick={window.print}>Print pdf</Button>
      </Grid>
    </Grid>
  );
};

export default AppAbout;
