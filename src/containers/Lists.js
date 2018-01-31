import React, { Component } from "react";
import { connect } from "react-redux";
import withAuth from "../hocs/withAuth";
import * as actions from "../actions";
import Grid from "material-ui/Grid";
import Introduction from "../components/Introduction";
import ListOptions from "../components/ListOptions";
import NewListForm from "../components/NewListForm";
import FeaturedList from "../components/FeaturedList";

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

  handleAddItem = name => {
    // debugger;
    this.props.addItem(name, this.state.selectedList.id);
  };

  render() {
    console.log("%c >> Inside Lists \n", "color: #bada55");
    console.log("SELECTED ID is", this.state.selectedList.id);
    console.log("---------------------");

    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Introduction handleLogout={this.handleLogout} />
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
            <FeaturedList
              list={this.state.selectedList}
              handleAddItem={this.handleAddItem}
            />
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
