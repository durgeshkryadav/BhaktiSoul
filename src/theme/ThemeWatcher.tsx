import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import React, { useEffect } from "react";

export const ThemeWatcher = () => {
  const [currentTheme, setCurrentTheme] = React.useState<string>("default");

  const theme = useSelector((state: RootState) => state.themeSlice);

  useEffect(() => {
    const newTheme =
      theme !== undefined && theme !== null ? theme.name : "default";
    if (newTheme !== currentTheme) {
      setCurrentTheme(newTheme);
      document.body.classList.value = "body theme--" + newTheme;
    }
  }, [theme]);
  return <React.Fragment />;
};
