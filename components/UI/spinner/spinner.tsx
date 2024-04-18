import styles from "./spinner.module.scss";

function Spinner() {
  return (
    <div className={styles["spinner-wrapper"]}>
      <div className={styles.spinner__disk} />
      <div className={styles.spinner__text} />
    </div>
  );
}

export default Spinner;
