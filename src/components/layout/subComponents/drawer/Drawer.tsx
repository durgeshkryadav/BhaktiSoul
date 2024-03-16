import { Drawer, Typography, Box } from "@mui/material";
import MainMenuItems from "./MainMenuItems";
import svgicon from "../../../../assets/icons/app_logo.svg";

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
      variant='persistent'
      anchor='left'
      open={isOpen}
      onClose={onClose}
      ModalProps={{
        BackdropProps: {
          invisible: true,
        },
      }}
      sx={drawerStyles}>
      <div className="logo-container">
        <img src={svgicon} alt='Logo' className='sanatani-logo' />
      </div>

      <MainMenuItems />
      {/* <OtherMenuItems /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          top: "2%",
        }}>
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
