import {Grid} from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";

const Documentation = () => {
  const {t} = useTranslation();
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      fontWeight="bold"
      fontStyle="italic"
    >
      <Grid item width="60%">
        <Grid item marginTop={6}>
          {" "}
          <h2>{t("tech.1.header")}</h2>{" "}
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("tech.1")}</div>
          <a href="https://laravel.com/docs/9.x/sail">Laravel</a>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("tech.2")}</div>
          <a href="https://reactjs.org/">React</a>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("tech.3")}</div>
          <a href="https://formidable.com/open-source/victory/">Victory</a>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("tech.4")}</div>
          <a href="https://konvajs.org/docs/react/Intro.html">Konva.js</a>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("tech.5")}</div>
          <a href="https://reactrouter.com/">React-router</a>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("tech.6")}</div>
          <a href="https://mui.com/">React MUI</a>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("tech.7")}</div>
          <a href="https://github.com/mecirmartin/webte2-final-frontend">
            Frontend
          </a>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("tech.8")}</div>
          <a href="https://github.com/mecirmartin/webte2-final-backend">
            Backend
          </a>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("tech.9")}</div>
          <a href="https://site190.webte.fei.stuba.sk/">ReactApp</a>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("tech.10")}</div>
          <a href="https://site128.webte.fei.stuba.sk/api">Backend</a>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("tech.11")}</div>
        </Grid>
      </Grid>

      <Grid item>
        {" "}
        <h2>{t("task.1.header")}</h2>{" "}
      </Grid>
      <Grid item width="60%">
        <Grid container justifyContent="space-between">
          <div>{t("task.1")}</div>
          <div>Samuel Virág</div>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("task.2")}</div>
          <div>Martin Mečír</div>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("task.3")}</div>
          <div>Matúš Vetrík</div>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("task.4")} </div>
          <div>Matúš Vetrík</div>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("task.5")}</div>
          <div>Richard Búri, Samuel Virág</div>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("task.6")}</div>
          <div>Matúš Vetrík</div>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("task.7")}</div>
          <div>Matúš Vetrík</div>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("task.8")}</div>
          <div>Richard Búri</div>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("task.9")}</div>
          <div>Martin Mečír</div>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("task.10")}</div>
          <div>Martin Mečír</div>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>{t("task.11")}</div>
          <div>Martin Mečír, Matúš Vetrík</div>
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        <h2>{t("split")}</h2>{" "}
      </Grid>
      <Grid item width="60%" marginBottom={5}>
        <Grid container justifyContent="space-between">
          <div>Martin Mečír</div>
          <div>4.5/12</div>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>Matúš Vetrík</div>
          <div>4.5/12</div>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>Richard Búri</div>
          <div>2/12</div>
        </Grid>
        <Grid container justifyContent="space-between">
          <div>Samuel Virág</div>
          <div>1/12</div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Documentation;
