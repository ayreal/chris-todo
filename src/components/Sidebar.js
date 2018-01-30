import React, { Component } from "react";
import classNames from "classnames";
import Drawer from "material-ui/Drawer";
import List from "material-ui/List";
import Divider from "material-ui/Divider";
import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
import ChevronRightIcon from "material-ui-icons/ChevronRight";
import IconButton from "material-ui/IconButton";
import {
  mailFolderListItems,
  otherMailFolderListItems
} from "../containers/tileData";

class Sidebar extends Component {
  render() {
    const { classes, theme, open } = this.props;
    return (
      <Drawer
        type="persistent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
        open={open}
      >
        <div className={classes.drawerInner}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.props.handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List className={classes.list}>{mailFolderListItems}</List>
          <Divider />
          <List className={classes.list}>{otherMailFolderListItems}</List>
        </div>
      </Drawer>
    );
  }
}

export default Sidebar;
