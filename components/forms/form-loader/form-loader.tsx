import styles from './form-loader.module.scss';

function FormLoader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}>
        <div>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}

export default FormLoader;
