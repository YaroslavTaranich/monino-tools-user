import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../UI/button/button";

import styles from "./message.module.scss";

interface MessageProps {
  title?: string;
  text?: string;
  icon: IconDefinition;
  closePopup?: () => void;
  type: "success" | "error";
}

function Message({
  title = "Ошибка!",
  text,
  icon,
  closePopup,
  type,
}: MessageProps) {
  const classNames = [styles.message, styles[type]];

  return (
    <div className={classNames.join(" ")}>
      <h2 className={styles.title}>{title}</h2>
      <FontAwesomeIcon className={styles.icon} icon={icon} />
      {text && <p className={styles.text}>{text}</p>}
      {closePopup && <Button onClick={closePopup}>Закрыть</Button>}
    </div>
  );
}

export default Message;
