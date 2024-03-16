import { Link } from "react-router-dom"; // Import Link component
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const otherMenuItems = [
  {
    text: "Login",
    icon: <PersonOutlineOutlinedIcon />,
    route: "/login",
  },
];

const OtherMenuItems: React.FC = () => {
  return (
    <>
      <Typography variant="body2" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
        Others
      </Typography>
      <List>
        {otherMenuItems.map((item) => (
          <ListItem key={item.text} sx={{ cursor: "pointer" }}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <Link to={item.route} style={{ textDecoration: "none" }}>
              <ListItemText
                primary={<Typography variant="body2">{item.text}</Typography>}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default OtherMenuItems;
