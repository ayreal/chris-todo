import React, { Component } from "react";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import { FormControl } from "material-ui/Form";
import { MenuItem } from "material-ui/Menu";
import TextField from "material-ui/TextField";
import Input, { InputLabel } from "material-ui/Input";
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

class NewListForm extends Component {
  state = {
    newListName: "",
    templateListIds: []
  };

  handleClearSelected = () => {
    this.setState({
      newListName: "",
      templateListIds: []
    });
    this.props.handleClearSelected();
  };

  handleTemplateChange = event => {
    this.setState({ templateListIds: event.target.value });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewList(
      this.state.newListName,
      this.state.templateListIds,
      this.props.user.id
    );
    this.handleClearSelected();
  };

  render() {
    return (
      <Paper>
        <TextField
          id="newListName"
          label="New List Name"
          value={this.state.newListName}
          onChange={this.handleChange("newListName")}
        />
        <br />
        <p>(optional) Add items from</p>

        <FormControl>
          <InputLabel htmlFor="name-multiple">List</InputLabel>
          <Select
            multiple
            value={this.state.templateListIds}
            onChange={this.handleTemplateChange}
            input={<Input id="name-multiple" />}
            MenuProps={MenuProps}
          >
            {this.props.lists.map(list => (
              <MenuItem key={list.id} value={list.id}>
                {list.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button onClick={this.handleSubmit}>Create List</Button>
      </Paper>
    );
  }
}

export default NewListForm;
