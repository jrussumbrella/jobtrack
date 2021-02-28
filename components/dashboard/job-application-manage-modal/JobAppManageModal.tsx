import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import Modal from "components/ui/modal/Modal";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useJobApplication } from "contexts/job-application/job-application-context";
import { JOB_APPLICATION_STATUSES } from "utils/constants";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import styles from "./JobApplicationManageModal.module.css";

interface Props {
  onClose(): void;
  isVisible: boolean;
}

const useStyles = makeStyles((theme) => ({
  input: {
    marginBottom: 20,
  },
  formControl: {
    marginBottom: 20,
  },
}));

const initialValues = {
  job_title: "",
  company: "",
  status: "",
};

const statuses = JOB_APPLICATION_STATUSES;

const JobApplicationManageSchema = Yup.object().shape({
  job_title: Yup.string().required("Job Title is required field"),
  company: Yup.string().required("Company is required field"),
  status: Yup.string().required("Status is required field"),
});

const JobApplicationManageModal: React.FC<Props> = ({ onClose, isVisible }) => {
  const {
    selectedJobApplication,
    updateJobApplication,
    addJobApplication,
  } = useJobApplication();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const actionTypeText = selectedJobApplication ? "update" : "create";

  const classes = useStyles();

  const formik = useFormik({
    initialValues,
    validationSchema: JobApplicationManageSchema,
    onSubmit: async (values, formik) => {
      try {
        setIsSubmitting(true);
        if (selectedJobApplication) {
          await updateJobApplication({
            ...selectedJobApplication,
            ...values,
          });
        } else {
          await addJobApplication(values);
          formik.resetForm();
        }
        setIsSubmitting(false);
        onClose();
        const successMessage = `You've successfully ${actionTypeText}d your job application`;
        toast.success(successMessage);
      } catch {
        setIsSubmitting(false);
        const errorMessage = `Sorry! We were'nt able to ${actionTypeText} your job application. Please try again later.`;
        toast.error(errorMessage);
      }
    },
  });

  const modalTitle = selectedJobApplication
    ? "Edit Job Application"
    : "Add Job Application";

  useEffect(() => {
    if (selectedJobApplication) {
      formik.setValues({
        job_title: selectedJobApplication.job_title,
        company: selectedJobApplication.company,
        status: selectedJobApplication.status.toLowerCase(),
      });
    } else {
      formik.setValues(initialValues);
    }
  }, [selectedJobApplication]);

  return (
    <Modal title={modalTitle} onClose={onClose} isVisible={isVisible}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="standard-basic"
          label="Company"
          autoComplete="true"
          type="text"
          className={classes.input}
          fullWidth
          name="company"
          onChange={formik.handleChange}
          error={formik.touched.company && Boolean(formik.errors.company)}
          helperText={formik.touched.company && formik.errors.company}
          value={formik.values.company}
        />
        <TextField
          id="standard-basic"
          label="Job Title"
          autoComplete="true"
          type="text"
          className={classes.input}
          fullWidth
          name="job_title"
          onChange={formik.handleChange}
          error={formik.touched.job_title && Boolean(formik.errors.job_title)}
          helperText={formik.touched.job_title && formik.errors.job_title}
          value={formik.values.job_title}
        />
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel id="status-select-label">Status</InputLabel>
          <Select
            labelId="status-select-label"
            id="status-select-label"
            value={formik.values.status}
            onChange={formik.handleChange}
            fullWidth
            name="status"
            error={formik.touched.status && Boolean(formik.errors.status)}
          >
            {statuses.map((status) => (
              <MenuItem key={status.value} value={status.value}>
                {status.title}
              </MenuItem>
            ))}
          </Select>
          {formik.touched.status && formik.errors.status && (
            <FormHelperText error>{formik.errors.status}</FormHelperText>
          )}
        </FormControl>
        <div className={styles.buttonsContainer}>
          <Button onClick={onClose} variant="text" color="default">
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="contained"
            color="primary"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default JobApplicationManageModal;
