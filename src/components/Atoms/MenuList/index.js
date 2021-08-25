import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link as Scroll } from "react-scroll";

const MenuList = ({ headerOptions, onClick }) => {
  return (
    <List>
      {headerOptions.map(({ label, href }) => {
        return (
          <Scroll
            to={href}
            smooth={true}
            key={label}    >
            <ListItem  button onClick={onClick} style={{ textAlign:"center" }}  >
              <ListItemText primary={label}  />
            </ListItem>
          </Scroll>
        );
      })}
    </List>
  );
};

export default MenuList;
