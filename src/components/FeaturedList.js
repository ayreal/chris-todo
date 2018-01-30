import React, { Component } from "react";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";

class FeaturedList extends Component {
  state = {
    newItem: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = () => {
    this.props.handleAddItem(this.state.newItem);
    this.setState({
      newItem: ""
    });
  };

  renderList = () => {
    const { list } = this.props;
    return (
      <div>
        <h3>{list.name}</h3>
        {list.items.length > 0 ? this.renderItems() : null}
      </div>
    );
  };

  renderItems = () => {
    const { list } = this.props;
    return (
      <div>
        <ul>{list.items.map(item => <li key={item.id}>{item.name}</li>)}</ul>
        <TextField
          id="newItem"
          label="Add Item"
          value={this.state.newItem}
          onChange={this.handleChange("newItem")}
        />
        <Button type="submit" onClick={this.handleSubmit}>
          Add
        </Button>
      </div>
    );
  };

  render() {
    return (
      <Paper>
        <h2>Selected List</h2>
        {this.props.list.id ? this.renderList() : "No list selected"}
      </Paper>
    );
  }
}

export default FeaturedList;
