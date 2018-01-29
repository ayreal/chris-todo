import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import { ListItemText } from "material-ui/List";
import Select from "material-ui/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

class ListSelector extends React.Component {
  state = {
    name: []
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <FormControl>
          <InputLabel htmlFor="name-multiple">Name</InputLabel>
          <Select
            multiple
            value={this.state.name}
            onChange={this.handleNameChange}
            input={<Input id="name-multiple" />}
            MenuProps={MenuProps}
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default ListSelector;
