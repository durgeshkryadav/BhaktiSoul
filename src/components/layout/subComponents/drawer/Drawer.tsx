import { Drawer, Typography, Box } from "@mui/material";
import MainMenuItems from "./MainMenuItems";
import OtherMenuItems from "./OtherMenuItems";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const drawerStyles = {
    "& .MuiDrawer-paper": {
      width: { sm: "17em" },
      backgroundColor: "white",
      boxShadow: "rgba(0.05, 0.05, 0.05, 0.05) ",
      overflowX: "auto",
      px: "15px",
      scrollbarWidth: "thin",
    },
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      onClose={onClose}
      ModalProps={{
        BackdropProps: {
          invisible: true, // This will remove the overlay
        },
      }}
      sx={drawerStyles}
    >
      <Box
        sx={{
          my: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <AutoAwesomeIcon sx={{ fontSize: "2rem", color: "green" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", textTransform: "none" }}
          >
            Lo
            <Typography
              component="span"
              variant="h5"
              sx={{ fontWeight: "bold", color: "#607274" }}
            >
              go
            </Typography>
          </Typography>
          <Typography sx={{ fontSize: "0.65rem", color: "#607274" }}>
            moto
          </Typography>
        </Box>
      </Box>

      <MainMenuItems />
      {/* <OtherMenuItems /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          top: "2%",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "0.7rem", fontWeight: "bold" }}>
            the-sanatani
          </Typography>
          <Typography sx={{ fontSize: "0.7rem" }}>
            @2024 All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
