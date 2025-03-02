import PropTypes from "prop-types";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import "./Sidebar.scss";
import { Link } from "react-scroll";
import Social from "../Social/Social";

const Sidebar = ({ active, setActive, navegacion }) => {
  return (
    <Drawer open={active} anchor="right" onClose={() => setActive(!active)}>
      <List className="sidebar">
        {navegacion.map((item, key) => (
          <ListItem key={key} disablePadding>
            <ListItemButton sx={{padding: 0}}>
              <Link
              className="sidebar-link"
                to={item.path}
                smooth={true}
                duration={500}
                onClick={() => setActive(!active)}
              >
                <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Social style={"bottom"}/>
    </Drawer>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  navegacion: PropTypes.array.isRequired,
};
