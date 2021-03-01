import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";
import { useTheme } from "contexts/theme/ThemeContext";

const useStyles = makeStyles(() => ({
  card: {
    marginBottom: 20,
  },
}));

const Settings = () => {
  const classes = useStyles();
  const { theme, toggle } = useTheme();

  console.log(theme);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5"> Settings </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Switch to dark mode" />
          </ListItem>
          <ListItemSecondaryAction>
            <Switch checked={theme === "dark"} onChange={toggle} />
          </ListItemSecondaryAction>
        </List>
      </CardContent>
    </Card>
  );
};

export default Settings;
