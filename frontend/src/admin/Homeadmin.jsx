import { AppBar,  Collapse, Container, List,  ListItem, ListItemButton, ListItemIcon, ListItemText,  Toolbar,  Typography,} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import StyleIcon from "@mui/icons-material/Style";
import PersonIcon from "@mui/icons-material/Person";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import RemoveIcon from "@mui/icons-material/Remove";
import "../css/navbar.css";
import { useEffect, useState } from "react";
import Navtas from "./NavAtas";
import MyChart from "./Homee";
import { useNavigate } from "react-router-dom";
import authHeader from "../services/auth-header";
export default function Homeadmin() {
  const [openuser, setopenuser] = useState(false);
  const navigate = useNavigate();
  const navigateToUserList = () => {
    navigate("/admin/ListUser");
  };
  const navigateToHome = () => {
    navigate("/admin");
  };
  const navigateToTranss = () => {
    navigate("/admin/ListTrans");
  };
  const navigateToOut = () => {
    navigate("/");
  };
  const auth = () => {
    var header = authHeader();
    if (header != null) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user.email !== "admin@innospeherelearn.com") {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    auth();
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navtas />
        <div
          style={{
            width: "100%",
            flexGrow: "1",
            maxHeight: "max-content",
            background: "blueviolet",
            display: "flex",
            alignItems: "",
          }}
        >
          <div style={{ width: "max-content", background: "#343a40" }}>
            <List sx={{ width: "100%", minWidth: 250 }} aria-label="contacts">
              <ListItem disablePadding style={{ background: "#343a40" }} sx={{ margin: 0 }} >
                <ListItemButton onClick={navigateToHome}>
                  <ListItemIcon>
                    <HomeIcon style={{ color: "white" }}></HomeIcon>
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding style={{ background: "#343a40" }} sx={{ margin: 0 }}>
                <ListItemButton onClick={navigateToTranss}>
                  <ListItemIcon>
                    <StyleIcon style={{ color: "white" }}></StyleIcon>
                  </ListItemIcon>
                  <ListItemText primary="Transaction" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding style={{ background: "#343a40" }} sx={{ margin: 0 }} >
                <ListItemButton onClick={navigateToUserList}>
                  <ListItemIcon>
                    <PersonIcon style={{ color: "white" }}></PersonIcon>
                  </ListItemIcon>
                  <ListItemText primary="User" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding style={{ background: "#343a40" }} sx={{ margin: 0 }} >
                <ListItemButton onClick={() => {localStorage.removeItem("user"); navigateToOut }} >
                  <ListItemIcon>
                    <LogoutIcon style={{ color: "white" }}></LogoutIcon>
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </List>
          </div>
          <div style={{ width: "200px", background: "white", flexGrow: "1" }}>
            <div>
              <MyChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
