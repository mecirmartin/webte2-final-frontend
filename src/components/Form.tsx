import {FormControl, Input, InputLabel} from "@mui/material";
import {useTranslation} from "react-i18next";

const AppForm = () => {
  const {t} = useTranslation();

  return (
    <FormControl>
      <InputLabel htmlFor="my-input">{t("form.user.message")}</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
  );
};

export default AppForm;
