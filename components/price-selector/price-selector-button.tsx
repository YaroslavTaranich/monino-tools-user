import styles from "./price-selector.module.scss";

interface PriceSelectorButtonProps {
  days: number;
  isActive: boolean;
  onClick: () => void;
}

function PriceSelectorButton({
  days,
  isActive,
  onClick,
}: PriceSelectorButtonProps) {
  const buttonClasses = [styles.button];
  if (isActive) buttonClasses.push(styles["button--active"]);

  return (
    <button
      className={buttonClasses.join(" ")}
      type="button"
      onClick={onClick}
      aria-label={`Дней аренды: ${days}`}
    >
      {days}
    </button>
  );
}

export default PriceSelectorButton;
