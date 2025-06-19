import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function MenuPopupState({
  image,
  handleClickPortfolio,
  handleMenuClick,
}) {
  return (
    <PopupState
      sx={{ backgroundColor: "#1A1A1A" }}
      variant="popover"
      popupId="demo-popup-menu"
    >
      {(popupState) => (
        <React.Fragment>
          <Button {...bindTrigger(popupState)}>
            <img src={image}></img>
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              onClick={() => {
                handleMenuClick(), popupState.close();
              }}
            >
              Menu
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link to="/contacts">Contacts</Link>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClickPortfolio(), popupState.close();
              }}
            >
              Portfolio
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
