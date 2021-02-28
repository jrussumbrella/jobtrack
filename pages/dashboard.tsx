import React, { useState, useEffect } from "react";
import Layout from "components/core/layout";
import withAuth from "lib/withAuth";
import JobApplicationList from "components/dashboard/job-application-list";
import JobAppicationHeader from "components/dashboard/job-application-header";
import { useJobApplication } from "contexts/job-application/job-application-context";
import { JobApplication } from "interfaces/JobApplication";
import ConfirmDeleteModal from "components/dashboard/confirm-delete-modal/ConfirmDeleteModal";
import JobApplicationManageModal from "components/dashboard/job-application-manage-modal";
import JobApplicationSkeleton from "components/dashboard/job-application-skeleton";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dashboardContainer: {
    padding: "10px",
  },
  messageContainer: {
    padding: "20px 0",
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const {
    isLoading,
    jobApplications,
    selectJobApplication,
    clearSelectedJobApplication,
    getJobApplications,
  } = useJobApplication();

  const [selectedModal, setSelectedModal] = useState<string | null>(null);

  useEffect(() => {
    getJobApplications();
  }, []);

  const handleCloseModal = () => {
    clearSelectedJobApplication();
    setSelectedModal(null);
  };

  const handleOpenModal = (modalType: string) => {
    setSelectedModal(modalType);
  };

  const handleClickAdd = () => {
    handleOpenModal("manageJobApplication");
  };

  const handleClickDelete = (jobApplication: JobApplication) => {
    selectJobApplication(jobApplication);
    handleOpenModal("deleteJobApplication");
  };

  const handleClickEdit = (jobApplication: JobApplication) => {
    selectJobApplication(jobApplication);
    handleOpenModal("manageJobApplication");
  };

  return (
    <Layout title="Dashboard">
      <Container>
        {isLoading ? (
          <JobApplicationSkeleton />
        ) : (
          <div className={classes.dashboardContainer}>
            <JobAppicationHeader onClickAdd={handleClickAdd} />
            {jobApplications.length > 0 ? (
              <JobApplicationList
                onDelete={handleClickDelete}
                onEdit={handleClickEdit}
                jobApplications={jobApplications}
              />
            ) : (
              <div className={classes.messageContainer}>
                <Alert severity="info">You have no job applications yet!</Alert>
              </div>
            )}
          </div>
        )}

        <ConfirmDeleteModal
          isVisible={selectedModal === "deleteJobApplication"}
          onClose={handleCloseModal}
        />
        <JobApplicationManageModal
          isVisible={selectedModal === "manageJobApplication"}
          onClose={handleCloseModal}
        />
      </Container>
    </Layout>
  );
};

export default withAuth(Dashboard);
