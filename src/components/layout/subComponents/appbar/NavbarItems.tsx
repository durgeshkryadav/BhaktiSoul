import React from "react";
import { Avatar, Box, IconButton, InputBase, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import ProfileMenu from "./ProfileMenu";

interface NavbarItemsProps {
  isOpen: boolean;
}
const NavbarItems: React.FC<NavbarItemsProps> = ({ isOpen }) => {
  const [anchorProfileEl, setAnchorProfileEl] =
    React.useState<HTMLAnchorElement | null>(null);

  //-------------
  const open = Boolean(anchorProfileEl);
  //-------------

  const handleProfileClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setAnchorProfileEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorProfileEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isOpen
          ? { xs: "column", md: "row" }
          : { xs: "column", sm: "row" },
        alignItems: "center",
      }}
    >
      {/* <Box>
        <InputBase
          sx={{
            width: "100%",
            py: 0.5,
            px: 1,
            m: 1,
            flex: 1, // Allow flexible width
            border: "1px solid #E0E0E0",
            borderRadius: 3,
            "& .MuiInputBase-input": {
              fontSize: "0.85rem",
            },
          }}
          placeholder="Search here…"
          endAdornment={<SearchIcon color="action" />}
        />
      </Box> */}
      <Box
        sx={{
          m: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Tooltip title="Notifications">
          <IconButton>
            <NotificationsIcon color="action" />
          </IconButton>
        </Tooltip>

        {/* <Tooltip title="Shortcuts Menu">
          <IconButton sx={{ mr: 1 }}>
            <DashboardCustomizeOutlinedIcon />
          </IconButton>
        </Tooltip> */}

        {/* --------------------------------------- */}
        <Tooltip title="Profile settings">
          <IconButton
            onClick={handleProfileClick}
            size="small"
            href="" // Add an empty href
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>

        <ProfileMenu
          anchorEl={anchorProfileEl}
          handleClose={handleProfileClose}
          open={open}
        />
      </Box>
    </Box>
  );
};

export default NavbarItems;
