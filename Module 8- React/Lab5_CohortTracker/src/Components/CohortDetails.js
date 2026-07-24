import styles from "../Styles/CohortDetails.module.css";

function CohortDetails({ cohort }) {
  return (
    <div className={styles.box}>
      <h3
        className={
          cohort.status.toLowerCase() === "ongoing"
            ? styles.ongoing
            : styles.completed
        }
      >
        {cohort.name}
      </h3>

      <dl>
        <dt>Status</dt>
        <dd>{cohort.status}</dd>

        <dt>Start Date</dt>
        <dd>{cohort.startDate}</dd>

        <dt>Coach</dt>
        <dd>{cohort.coach}</dd>

        <dt>Trainer</dt>
        <dd>{cohort.trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;