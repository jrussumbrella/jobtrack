import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { JobApplication } from "interfaces/JobApplication";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import formatDate from "utils/formatDate";

interface Props {
  jobApplications: JobApplication[];
  onDelete(jobApplication: JobApplication): void;
  onEdit(jobApplication: JobApplication): void;
}

const useStyles = makeStyles((theme) => ({
  list: {
    borderBottom: `1px solid ${theme.palette.grey[500]}`,
  },
  listItem: {
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  listInfo: {
    padding: "10px 0",
  },
  value: {
    marginLeft: 5,
  },
  button: {
    marginRight: 10,
  },
}));

const JobApplicationList: React.FC<Props> = ({
  onDelete,
  onEdit,
  jobApplications,
}) => {
  const classes = useStyles();

  return (
    <div>
      {jobApplications.map((jobApplication) => (
        <List dense key={jobApplication.id} className={classes.list}>
          <ListItem className={classes.listItem}>
            <div className={classes.listInfo}>
              <ListItemText>
                Company:
                <strong className={classes.value}>
                  {jobApplication.company}
                </strong>
              </ListItemText>
              <p>
                Job Title:
                <strong className={classes.value}>
                  {jobApplication.job_title}
                </strong>
              </p>
              <p>
                Status: <strong>{jobApplication.status.toUpperCase()}</strong>
              </p>
              <p>
                Date Created:
                <strong className={classes.value}>
                  {jobApplication.updated_at &&
                    formatDate(jobApplication.created_at)}
                </strong>
              </p>
              <p>
                Date Updated:
                <strong className={classes.value}>
                  {jobApplication.updated_at &&
                    formatDate(jobApplication.updated_at)}
                </strong>
              </p>
            </div>
            <div>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
                onClick={() => onEdit(jobApplication)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={() => onDelete(jobApplication)}
              >
                Delete
              </Button>
            </div>
          </ListItem>
        </List>
      ))}
    </div>
  );
};

export default JobApplicationList;
