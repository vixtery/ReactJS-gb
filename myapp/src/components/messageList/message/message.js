import classNames from "classnames";
import styles from "./message.module.css";

export function Message({ message }) {
  const { author, value } = message;

  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: author === "User",
      })}
    >
      <h3>{author}</h3>
      <p>{value}</p>
      <p>08.10</p>
    </div>
  );
}
