import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link as Scroll } from "react-scroll";

const MenuList = ({ headerOptions, onClick }) => {
  return (
    <List component="nav">
      {headerOptions.map(({ label, href }) => {
        return (
          <Scroll
            to={href}
            smooth={true}
            key={label}          >
            <ListItem button onClick={() => onClick()}>
              <ListItemText primary={label} />
            </ListItem>
          </Scroll>
        );
      })}
    </List>
  );
};

export default MenuList;
