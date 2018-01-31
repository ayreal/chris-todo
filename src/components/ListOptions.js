import React, { Component } from "react";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import Card from "material-ui/Card";

class ListOptions extends Component {
  renderLists = () => {
    const { lists, handleSelect, handleDelete } = this.props;
    return lists.map(list => (
      <Grid item key={list.id}>
        <Card onClick={() => handleSelect(list)}>
          {list.name}{" "}
          <Button onClick={() => handleDelete(list.id)}>Delete</Button>
        </Card>
      </Grid>
    ));
  };

  render() {
    return <div>{this.renderLists()}</div>;
  }
}

export default ListOptions;
