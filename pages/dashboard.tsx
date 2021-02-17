import React, { useState } from "react";
import Layout from "components/core/layout";
import withAuth from "lib/withAuth";
import JobApplicationList from "components/dashboard/job-application-list";
import JobAppicationHeader from "components/dashboard/job-application-header";
import { useJobApplication } from "contexts/job-application/job-application-context";
import { JobApplication } from "interfaces/JobApplication";
import ConfirmDeleteModal from "components/dashboard/confirm-delete-modal/ConfirmDeleteModal";
import JobApplicationManageModal from "components/dashboard/job-application-manage-modal";
import styles from "styles/Dashboard.module.css";

const Dashboard = () => {
  const {
    jobApplications,
    selectJobApplication,
    clearSelectedJobApplication,
  } = useJobApplication();

  const [selectedModal, setSelectedModal] = useState<string | null>(null);

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
      <div className="container">
        <div className={styles.dashboardContainer}>
          <JobAppicationHeader onClickAdd={handleClickAdd} />
          {jobApplications.length > 0 ? (
            <JobApplicationList
              onDelete={handleClickDelete}
              onEdit={handleClickEdit}
              jobApplications={jobApplications}
            />
          ) : (
            <div className={styles.messageContainer}>
              <p> You don't have a job applications yet. </p>
            </div>
          )}
        </div>
        <ConfirmDeleteModal
          isVisible={selectedModal === "deleteJobApplication"}
          onClose={handleCloseModal}
        />
        <JobApplicationManageModal
          isVisible={selectedModal === "manageJobApplication"}
          onClose={handleCloseModal}
        />
      </div>
    </Layout>
  );
};

export default withAuth(Dashboard);
