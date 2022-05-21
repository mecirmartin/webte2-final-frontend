import {Button, Grid, TextField} from "@mui/material";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {calculationData} from "../helper/dataChanges";

const AppCalculation = () => {
  const {t} = useTranslation();

  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    calculationData(value).then((fetchData) => setOutput(fetchData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginTop="1rem"
        marginBottom="1rem"
      >
        <TextField
          id="filled-basic"
          label={t("calc.input.message")}
          variant="outlined"
          value={value}
          //@ts-ignore
          onInput={(e) => setValue(e.target.value)}
        />
        <Button type="submit">{t("calc.submit.message")}</Button>
        <div>{output}</div>
      </Grid>
    </form>
  );
};

export default AppCalculation;
