import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Themes, setTheme } from "../redux/slices/themes/theme.slice";
import Box from "@mui/material/Box";
import { IconButton, Tooltip } from "@mui/material";

export const ThemeSwitch = () => {
  const theme = useSelector((state: RootState) => state.themeSlice);
  const dispatch = useDispatch();

  const handeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(
      setTheme({
        name: theme.name === Themes.Default ? Themes.Dark : Themes.Default,
        isDefault: true,
      })
    );
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}>
        <Tooltip title='Switch Theme'>
          <IconButton
            onClick={handeClick}
            disableRipple
            disableFocusRipple
            disableTouchRipple
            size='small'>
            <div className='theme-switch'></div>
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};
