import React, { useEffect, useState } from "react";
import { Hidden, useMediaQuery, Box, Paper } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import Drawer from "./subComponents/drawer/Drawer";
import Appbar from "./subComponents/appbar/Appbar";
import MobileDrawer from "./subComponents/drawer/MobileDrawer";
import MobileAppbar from "./subComponents/appbar/MobileAppbar";

const Layout: React.FC = () => {
  const isLargeScreen = useMediaQuery("(min-width:600px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setIsDrawerOpen(isLargeScreen);
  }, [isLargeScreen]);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const contentStyles = {
    flexGrow: 1, // Allow main content to grow and shrink
    transition: "margin-left 0.2s ease-in-out",
    ml: isDrawerOpen ? { xs: 0, sm: "17rem" } : 0,
    // maxHeight: "100vh",
  };

  return (
    <>
      <CssBaseline />
      <Box sx={contentStyles}>
        {/* Appbar hides on screen sizes smaller than 600px */}
        <Hidden smDown>
          <Appbar isOpen={isDrawerOpen} onToggleDrawer={handleToggleDrawer} />
        </Hidden>
        {/* MobileAppbar hides on screen sizes larger than 600px */}
        <Hidden smUp>
          <MobileAppbar
            isOpen={isDrawerOpen}
            onToggleDrawer={handleToggleDrawer}
          />
        </Hidden>
        {/* Drawer hides on screen sizes smaller than 600px */}
        <Hidden smDown>
          <Drawer isOpen={isDrawerOpen} onClose={handleToggleDrawer} />
        </Hidden>
        {/* MobileDrawer hides on screen sizes larger than 600px */}
        <Hidden smUp>
          <MobileDrawer isOpen={isDrawerOpen} onClose={handleToggleDrawer} />
        </Hidden>

        <Box
          sx={{
            maxHeight: `calc(100vh - 10vh )`,
            boxSizing: "border-box",
            overflow: "auto",
            maxWidth: "100vw",
          }}
        >
          <Paper elevation={1} sx={{ m: { sm: 3 }, p: 4 }}>
            <Outlet />
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
