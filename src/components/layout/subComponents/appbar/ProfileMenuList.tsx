import {
  Avatar,
  Box,
  Divider,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import SupportIcon from "@mui/icons-material/Support";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LogoutIcon from "@mui/icons-material/Logout";

interface ProfileMenuListProps {
  handleClose: () => void;
}
const profileSettingItems = [
  { text: "My Profile", icon: <PermIdentityIcon fontSize="inherit" /> },
  { text: "Settings", icon: <SettingsOutlinedIcon fontSize="inherit" /> },
  { text: "Billing", icon: <PaymentOutlinedIcon fontSize="inherit" /> },
];
const faqItems = [
  { text: "Help", icon: <SupportIcon fontSize="inherit" /> },
  { text: "FAQ", icon: <InfoOutlinedIcon fontSize="inherit" /> },
  { text: "Pricing", icon: <AttachMoneyIcon fontSize="inherit" /> },
];

const signOutItems = [
  { text: "Sign Out", icon: <LogoutIcon fontSize="inherit" /> },
];

const ProfileMenuList: React.FC<ProfileMenuListProps> = ({ handleClose }) => {
  const theme = useTheme();
  return (
    <>
      <MenuItem onClick={handleClose}>
        <Avatar />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          John Doe
          <Typography sx={{ fontSize: "0.7em", color: "gray" }}>
            Admin
          </Typography>
        </Box>
      </MenuItem>
      <Divider />

      {profileSettingItems.map((item) => (
        <MenuItem
          key={item.text}
          onClick={handleClose}
          sx={{ gap: 2, alignItems: "center", pb: 0 }}
        >
          <Box sx={{ color: theme.palette.primary.main, fontSize: "1.2em" }}>
            {item.icon}
          </Box>
          <Typography sx={{ fontSize: "0.8em" }}>{item.text}</Typography>
        </MenuItem>
      ))}
      <Divider />

      {faqItems.map((item) => (
        <MenuItem
          key={item.text}
          onClick={handleClose}
          sx={{ gap: 2, alignItems: "center", pb: 0 }}
        >
          <Box sx={{ color: theme.palette.primary.main, fontSize: "1.2em" }}>
            {item.icon}
          </Box>
          <Typography sx={{ fontSize: "0.8em" }}>{item.text}</Typography>
        </MenuItem>
      ))}
      <Divider />

      {signOutItems.map((item) => (
        <MenuItem
          key={item.text}
          onClick={handleClose}
          sx={{ gap: 2, alignItems: "center", pb: 0 }}
        >
          <Box sx={{ color: theme.palette.primary.main, fontSize: "1.2em" }}>
            {item.icon}
          </Box>
          <Typography sx={{ fontSize: "0.8em" }}>{item.text}</Typography>
        </MenuItem>
      ))}
    </>
  );
};

export default ProfileMenuList;
