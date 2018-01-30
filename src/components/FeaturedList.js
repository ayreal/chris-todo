import React, { Component } from "react";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";

class FeaturedList extends Component {
  renderSelectedList = () => {
    const { selectedList } = this.props;
    return (
      <div>
        <h3>{selectedList.name}</h3>
        {selectedList.items.length > 0 ? this.renderItems() : null}
      </div>
    );
  };

  renderItems = () => {
    const { selectedList } = this.props;
    return (
      <ul>
        {selectedList.items.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    );
  };

  render() {
    return (
      <Paper>
        <h2>Selected List</h2>
        {this.props.selectedList.id
          ? this.renderSelectedList()
          : "No list selected"}
      </Paper>
    );
  }
}

export default FeaturedList;
