import styles from "./specification.module.scss";

interface SpecificationProps {
  data: string;
}

const createSpec = (string: string) => {
  return string.split("\n").map((line) => {
    const splitted = line.split(":");
    return {
      name: splitted[0]?.trim(),
      value: splitted[1]?.trim(),
    };
  });
};

function Specification({ data }: SpecificationProps) {
  const spec = createSpec(data);
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Технические характеристики:</h3>
      <dl className={styles.list}>
        {spec.map((elem) => (
          <div key={elem.name} className={styles.list__line}>
            <dt className={styles.list__name}>{elem.name}</dt>
            <dd className={styles.list__value}>{elem.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default Specification;
