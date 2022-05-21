import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
} from "@mui/material";
import React, {Dispatch, useEffect} from "react";
import {useTranslation} from "react-i18next";

interface AppSwitchProps {
  setVisibleElement: React.Dispatch<
    React.SetStateAction<"graph" | "anime" | "both" | "none">
  >;
}

const AppSwitch = ({setVisibleElement}: AppSwitchProps) => {
  const {t} = useTranslation();

  const [state, setState] = React.useState({
    animation: false,
    graph: false,
  });

  useEffect(() => {
    if (state.animation && state.graph) setVisibleElement("both");
    else if (state.animation) setVisibleElement("anime");
    else if (state.graph) setVisibleElement("graph");
    else setVisibleElement("none");
  }, [state]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <FormGroup>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginTop="1rem"
          marginBottom="1rem"
        >
          <FormControlLabel
            control={
              <Switch
                checked={state.animation}
                onChange={handleChange}
                name="animation"
              />
            }
            label={t("switch.anime.message")}
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.graph}
                onChange={handleChange}
                name="graph"
              />
            }
            label={t("switch.graph.message")}
          />
        </Grid>
      </FormGroup>
    </FormControl>
  );
};

export default AppSwitch;
