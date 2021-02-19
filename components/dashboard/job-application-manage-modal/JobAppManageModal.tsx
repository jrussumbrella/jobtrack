import React, { useEffect } from "react";
import * as Yup from "yup";
import Modal from "components/ui/modal/Modal";
import Button from "components/ui/button";
import Input from "components/ui/input/Input";
import Select from "components/ui/select/Select";
import { useJobApplication } from "contexts/job-application/job-application-context";
import { JOB_APPLICATION_STATUSES } from "utils/constants";
import styles from "./JobApplicationManageModal.module.css";
import { useFormik } from "formik";

interface Props {
  onClose(): void;
  isVisible: boolean;
}

const initialValues = {
  job_title: "",
  company: "",
  status: "",
};

const statuses = [
  { title: "Please Select", value: "" },
  ...JOB_APPLICATION_STATUSES,
];

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

  const formik = useFormik({
    initialValues,
    validationSchema: JobApplicationManageSchema,
    onSubmit: (values) => {
      if (selectedJobApplication) {
        updateJobApplication({
          id: selectedJobApplication?.id as string,
          ...values,
          user_id: "gagagaga",
        });
      } else {
        addJobApplication({
          id: Date.now().toString(),
          ...values,
          user_id: "gagagaga",
        });
      }
      onClose();
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
        <Input
          id="company"
          label="Company"
          name="company"
          onChange={formik.handleChange}
          value={formik.values.company}
          fullWidth
          className={styles.input}
        />
        {formik.errors.company && formik.touched.company ? (
          <div className={styles.error}>{formik.errors.company}</div>
        ) : null}
        <Input
          id="job_title"
          label="Job Title"
          name="job_title"
          onChange={formik.handleChange}
          value={formik.values.job_title}
          fullWidth
          className={styles.input}
        />
        {formik.errors.job_title && formik.touched.job_title ? (
          <div className={styles.error}>{formik.errors.job_title}</div>
        ) : null}
        <Select
          id="status"
          label="Status"
          name="status"
          onChange={formik.handleChange}
          value={formik.values.status}
          fullWidth
          className={styles.input}
          options={statuses}
        />
        {formik.errors.status && formik.touched.status ? (
          <div className={styles.error}>{formik.errors.status}</div>
        ) : null}
        <div className={styles.buttonsContainer}>
          <Button onClick={onClose}> Cancel </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Modal>
  );
};

export default JobApplicationManageModal;
