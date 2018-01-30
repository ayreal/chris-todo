import React, { Component } from "react";
import { connect } from "react-redux";
import withAuth from "../hocs/withAuth";
import * as actions from "../actions";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import ListOptions from "../components/ListOptions";
import NewListForm from "../components/NewListForm";

class Lists extends Component {
  state = {
    selectedList: {}
  };

  handleClearSelected = () => {
    this.setState({
      selectedList: {}
    });
  };

  handleSelect = list => {
    this.setState({
      selectedList: list
    });
  };

  handleLogout = () => {
    this.props.logoutUser();
  };

  handleDelete = id => {
    this.props.deleteList(id);
    this.handleClearSelected();
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

            <NewListForm
              lists={this.props.lists}
              addNewList={this.props.addNewList}
              handleClearSelected={this.handleClearSelected}
              user={this.props.user}
            />
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
