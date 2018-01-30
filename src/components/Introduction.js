import React from "react";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";

const Introduction = props => {
  return (
    <Paper>
      <Typography type="display2" gutterBottom>
        This is the lists page
      </Typography>
      <Button onClick={props.handleLogout}>Logout</Button>
    </Paper>
  );
};

export default Introduction;
