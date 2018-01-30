import React, { Component } from "react";
import { connect } from "react-redux";
import withAuth from "../hocs/withAuth";
import * as actions from "../actions";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";
import ListOptions from "../components/ListOptions";

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

class Lists extends Component {
  state = {
    selectedList: {},
    newListName: "",
    templateListIds: []
  };

  clearNewListForm = () => {
    this.setState({
      selectedList: {},
      newListName: "",
      templateListIds: []
    });
  };

  handleLogout = () => {
    this.props.logoutUser();
  };

  handleSelect = list => {
    this.setState({
      selectedList: list
    });
  };

  handleTemplateChange = event => {
    this.setState({ templateListIds: event.target.value });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleDelete = id => {
    this.props.deleteList(id);
    this.setState({
      selectedList: {}
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewList(
      this.state.newListName,
      this.state.templateListIds,
      this.props.user.id
    );
    this.clearNewListForm();
  };

  handleAddItem = () => {
    debugger;
  };

  renderItems = () => {
    const { selectedList } = this.state;
    return (
      <ul>
        {selectedList.items.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    );
  };

  renderSelectedList = () => {
    const { selectedList } = this.state;
    return (
      <div>
        <h3>{selectedList.name}</h3>
        {selectedList.items.length > 0 ? this.renderItems() : null}
      </div>
    );
  };

  render() {
    console.log("%c >> Inside Lists \n", "color: #bada55");
    // console.log("USER ID: ", this.props.userId);
    // console.log("LOGGED IN: ", this.props.loggedIn);
    console.log("PROPS: ", this.props);
    console.log("STATE: ", this.state);
    console.log("---------------------");

    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Paper>
            <Typography type="display2" gutterBottom>
              This is the lists page
            </Typography>
            <Button onClick={this.handleLogout}>Logout</Button>
          </Paper>
        </Grid>

        <Grid container spacing={8}>
          <Grid item xs={12} sm={3}>
            <ListOptions
              lists={this.props.lists}
              handleSelect={this.handleSelect}
              handleDelete={this.handleDelete}
            />

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
          </Grid>

          <Grid item xs={12} sm={9}>
            <Paper>
              <h2>Selected List</h2>
              {this.state.selectedList.id
                ? this.renderSelectedList()
                : "No list selected"}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};

export default withAuth(connect(mapStateToProps, actions)(Lists));

// export default withAuth(Lists);
// export default connect(null, actions)(Lists);
