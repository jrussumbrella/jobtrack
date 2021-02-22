import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import Modal from "components/ui/modal/Modal";
import Button from "components/ui/button";
import Input from "components/ui/input/Input";
import Select from "components/ui/select/Select";
import { useJobApplication } from "contexts/job-application/job-application-context";
import { JOB_APPLICATION_STATUSES } from "utils/constants";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import styles from "./JobApplicationManageModal.module.css";

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const actionTypeText = selectedJobApplication ? "update" : "create";

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
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default JobApplicationManageModal;
